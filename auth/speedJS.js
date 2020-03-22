let speedoWindow = null,
	Station = null,
	player = mp.players.local,
	currentFuel = 0,
	engineHealth = 0,
	bodyHealth = 0,
	spendingFuel = 0,
	maxFuel = 0,
	carNumber = '',
	checker = false,
	response = false,
	fuelPercentage = 100,
	tickCount = 0,
	spendingFuelPerTick = 0,
	maxSpeed = 0;	

// mp.events.add('playerEnterVehicle', playerEnterVehicleHandler);
// mp.events.add('playerLeaveVehicle', destroyWindow);
// function playerEnterVehicleHandler(vehicleStatus, seatStatus)
// {
// 	seat = seatStatus;
// 	mp.gui.chat.push(`seat = ${seat}`);
// }
mp.events.add('getVehicleData', (maxfuel,currentfuel,enginehealth,bodyhealth,spending,number) =>
{	
	tickCount = 250000;	
	maxFuel = maxfuel;
	if(currentfuel <= 0)
	{
		currentFuel = 0;
	}
	else
	{
		currentFuel = currentfuel;
	}
	if(enginehealth == null)
	{
		enginehealth = 1000;
	}
	if(bodyhealth == null)
	{
		bodyhealth = 1000;
	}
	engineHealth = enginehealth;
	bodyHealth = bodyhealth;
	spendingFuel = spending;
	carNumber = number;	
	spendingFuelPerTick = spendingFuel/tickCount;
	fuelPercentage = (currentFuel / maxFuel) * 100;
	player.vehicle.setEngineHealth(parseFloat(enginehealth));
	player.vehicle.setBodyHealth(parseFloat(bodyhealth));
	player.vehicle.setInvincible(false);	
	maxSpeed = mp.game.vehicle.getVehicleModelMaxSpeed(player.vehicle.model) * 3.6;
	if(speedoWindow != null)
	{
		speedoWindow.destroy();
		speedoWindow = null;
	}
	speedoWindow = mp.browsers.new("package://auth/assets/speedmeter.html");
	speedoWindow.execute(`setSpeedScale(${maxSpeed});`);
	checker = true;
	// let max_speed = mp.game.vehicle.getVehicleModelMaxSpeed(vehicle.model) * 3.6;
	// speedoWindow.execute(`setMaxSpeed(${max_speed});`);
	
});
mp.events.add('OpenGasStation', (arr) =>
{
	let fuelDiff = maxFuel - currentFuel;
	Station = mp.browsers.new("package://auth/assets/azs.html");
    Station.execute(`pushAzs(${JSON.stringify(arr)},1,${fuelDiff});`);
    mp.gui.cursor.show(true, true);
});
mp.events.add('azsBuy', (service,count,type,price) =>
{
	mp.gui.chat.push(`service = ${service},count = ${count},type = ${type},price = ${price}`);
    switch (service)
    {
        case "card": //карточкой            
	        mp.events.callRemote("BuyFuelCard", count, type, price);
	        break;           
        case "cash": //наличкой
	        mp.events.callRemote("BuyFuelCash", count, type, price);
	        break;            
    }
    if(Station != null)
	{
		Station.destroy();
		Station = null;
		mp.gui.cursor.show(false, false);
	}
});
mp.events.add('exitAzs', () => 
{
	if(Station != null)
	{
		Station.destroy();
		Station = null;
		mp.gui.cursor.show(false, false);
	}
});
mp.events.add('FuelUp', (count) =>
{
	currentFuel += parseInt(count);
});
let counter = 0;
mp.events.add('render', (nametags) =>
{	
	mp.events.callLocal("LocalTick", nametags);
	if(counter < 7)
	{
		
		counter++;
	}
	else
	{
		if(player.vehicle != null)
		{
			if(player.vehicle.getPedInSeat(-1) === player.handle)
			{
				if(checker)
				{
					if(speedoWindow != null)
					{
						let speed = player.vehicle.getSpeed() * 3.6;					
						bodyHealth = player.vehicle.getBodyHealth();		
						engineHealth = player.vehicle.getEngineHealth();			
						speedoWindow.execute(`engineError(${engineHealth/10});`);			
						speedoWindow.execute(`carbodyError(${bodyHealth/10});`);		
						if(engineHealth < 200)
						{					
							player.vehicle.setEngineHealth(parseFloat(199));
							player.vehicle.setEngineOn(false);
						}
						if(currentFuel <= 0)
						{					
							player.vehicle.setEngineOn(false);
						}
						if(bodyHealth < 400)
						{						
							player.vehicle.setBodyHealth(parseFloat(199));
						}
						if(currentFuel > 0)
						{
							fuelCounter(speed);
						}
						// speedoWindow.execute(`pushCurrentGear(${player.vehicle.gear});`);					
						speedoWindow.execute(`pushCurrentSpeedCount(${speed},70,120);`);				
					}				
				}
				else
				{				
					if(!response)
					{
						mp.events.callRemote('enterVehicle',player.vehicle.getNumberPlateText());
						response = true;
					}				
				}
			}
		}
		else
		{
			destroyWindow();
		}
		counter = 0;	
	}	
});
function fuelCounter(speed)
{
	let diff = speed*spendingFuelPerTick;
	currentFuel -= diff;	
	if(currentFuel > 0)
	{					
		fuelPercentage = (currentFuel / maxFuel) * 100;
		if(fuelPercentage >= 0)
		{
			speedoWindow.execute(`gasLines(${fuelPercentage.toFixed()});`);
		}
	}	
	if(currentFuel <= 0)
	{
		currentFuel = 0;
		speedoWindow.execute(`gasLines(0);`);
	}
}
function arrowGain(speed)
{
	let currentIndex = (speed / maxSpeed) * 100;	
	speedoWindow.execute(`pushCurrentArrow(${currentIndex},400);`);	
}
function destroyWindow()
{
	if(checker)
	{
		if(speedoWindow != null)
		{
			speedoWindow.destroy();
			speedoWindow = null;
		}	
		checker = false;
		response = false;
		mp.events.callRemote('ExitCurentVehicle',carNumber,currentFuel,engineHealth,bodyHealth);		
	}
}