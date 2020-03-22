var sex = '',
	currentWeightLug = 0,
	currentWeightInv = 0,
	maxWeightInventory = 50,
	maxWeightLuggage = 50,
	inventoryList = [],
	weaponsList = [],
	luggageList = [],
	newList = [],
	luggageAvailable = false,
    typeName = 
    [
        'Eat',                                              
        'Drink', 
        'Alcohol', 
        'Instrument', 
        'Clothes_Legal', 
        'Clothes_Duty', 
        'Clothes_Illegal', 
        'Weapon_Cold', 
        'Weapon_FireGun_Legal', 
        'Weapon_FireGun_Police',
        'Weapon_FireGun_Illegal',
        'Medical_Preparation',
        'Illegal_Object',
        'LegalObject',
        'Resourses',
        'Recycled_Resources',
        'Craft_Resources',
        'Documents',
        'Ammo'
    ],
    className = 
    [
	   "Маска",   
	   "Шляпа",
	   "Очки",
	   "Аксессуар",
	   "Верх",
	   "Серьги",
	   "Браслет",
	   "Низ",
	   "Часы",
	   "Бронежилет",
	   "Обувь",
	   "Сумка"
	],
	weaponClassArray = 
	[
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false
	],
	weaponsListFull = [
		{name:'flashlight',type:'Weapon_Cold',legal:'police',class:1},
		{name:'brass-knuckles',type:'Weapon_Cold',legal:'illegal',class:1},
		{name:'knife',type:'Weapon_Cold',legal:'legal',class:1},
		{name:'machete',type:'Weapon_Cold',legal:'illegal',class:1},
		{name:'f-knife',type:'Weapon_Cold',legal:'legal',class:1},
		{name:'nightstick',type:'Weapon_Cold',legal:'police',class:1},
		{name:'pistol',type:'Weapon_FireGun_Legal',legal:'legal',class:2},
		{name:'pistol-mk2',type:'Weapon_FireGun_Legal',legal:'legal',class:2},
		{name:'combat-pistol',type:'Weapon_FireGun_Police',legal:'police',class:2},
		{name:'ad-pistol',type:'Weapon_FireGun_Illegal',legal:'illegal',class:2},
		{name:'stun-gun',type:'Weapon_FireGun_Legal',legal:'legal',class:2},
		{name:'pistol-50',type:'Weapon_FireGun_Police',legal:'police',class:2},
		{name:'heavy-pistol',type:'Weapon_FireGun_Police',legal:'police',class:2},
		{name:'micro-smg',type:'Weapon_FireGun_Illegal',legal:'illegal',class:3},
		{name:'smg',type:'Weapon_FireGun_Police',legal:'police',class:3},
		{name:'smg-mk2',type:'Weapon_FireGun_Illegal',legal:'illegal',class:3},
		{name:'assault-smg',type:'Weapon_FireGun_Police',legal:'police',class:3},
		{name:'combat-pdw',type:'Weapon_FireGun_Police',legal:'police',class:3},
		{name:'shotgun',type:'Weapon_FireGun_Police',legal:'police',class:4},
		{name:'sawed-off-shotgun',type:'Weapon_FireGun_Illegal',legal:'illegal',class:4},
		{name:'assault-rifle',type:'Weapon_FireGun_Illegal',legal:'illegal',class:5},
		{name:'carbine-rifle',type:'Weapon_FireGun_Police',legal:'police',class:5},
		{name:'bullpup-rifle-mk2',type:'Weapon_FireGun_Police',legal:'police',class:5},
		{name:'sniper-rifle',type:'Weapon_FireGun_Police',legal:'police',class:6}
	],
	weaponsListTranslated = [
		'фонарик',
		'кастет',
		'охотничий нож',
		'мачете',
		'выкидной нож',
		'дубинка',
		'пистолет 9 п',
		'пистолет mk ii',
		'боевой пистолет',
		'ар пистолет',
		'электрошокер',
		'пистолет .50',
		'тяжелый пистолет',
		'микро smg',
		'smg',
		'smg mk ii',
		'штурмовое smg',
		'боевая pdw',
		'помповый дробовик mk ii',
		'обрез',
		'штурмовая винтовка',
		'карабин винтовка',
		'самозарядная винтовка mk ii',
		'снайперская винтовка'
	],
	classNameTranslated = 
    [
	   "Mask",   
	   "Hat",
	   "Glasses",
	   "Accessories",
	   "Top",
	   "Earrings",
	   "Bracelet",
	   "Bottom",
	   "Clock",
	   "Armor",
	   "Shoes",
	   "Bag"
	];
function checkAction(action, index, id, currentCount)
{
    mp.trigger(action, index, id, currentCount);          
};
function doneAction(action, index, id, currentCount)
{	
	newList = [];
    switch(action)
    {
    	case ('remove'):
			let tempWeight = parseFloat(currentCount*eval(id+'List')[index].weight);
			tempWeight += parseFloat(currentWeightInv);
			console.log(tempWeight);
			if(tempWeight < maxWeightInventory)
			{
				pushSearchElement(luggageList[index].name);		
			}
			else
			{
				notificationShow('Ваш сейф полон');
			}
			refreshInventory('luggage');	
			refreshInventory('inventory');
			listIndexCheck(id);
			inventoryInitialize();  
			break;
			
        case ('put'):
			if(inventoryList[index].type == 'Documents')
			{
				let itemImg = `<img src="images/inventory/${inventoryList[index].type}.png" class="itemImg dropdown-toggle">`,
					template = `
					<div class="itemInv" id="${action}">
						<div class="button-dropdown">
							<div class="infoItem dropdown-toggle">
								<div class="nameItem">${inventoryList[index].name}</div>
							</div>
							${itemImg}
						</div>
					</div>`;
				$('.show-wrapper .find-icon').empty();
				$('.left-inventory .show-wrapper').slideDown().css('display','flex');
				$('.show-wrapper .find-icon').append(template);
				$('.left-inventory .show-wrapper .button-wrapper .button#putDocument').on('click',function(){
					if(!$(this).hasClass('disabled'))
					{
						$(this).addClass('disabled')
						setTimeout(() => {
							$(this).removeClass('disabled')
						},500);
						let currentName = $('.show-wrapper .find-icon .nameItem').text();
						console.log(currentName);
						$('.left-inventory .show-wrapper').slideUp();
						$('.show-wrapper .find-icon').empty();
						mp.trigger('putDocument', currentName);
					}
				});
				refreshInventory('luggage');
				refreshInventory('inventory');	
				inventoryInitialize(); 
			}
			break;
	}	
};
$('#searchConfirm').on('click',function(){
	let data = $(this).prev().val();
	if(data.length != 0)
	{
		data = `документ ${data}`;
		console.log(data);
		mp.trigger('searchDocument',data);
	}
});
function pushSearchElement(name)
{
	if(arguments.length == 0)
	{
		notificationShow('Документ не найден');
	}
	else
	{
		let obj = name;
		console.log(1,obj);	
		$('.search-wrapper .find-item .find-icon').empty();
		let template = `
			<div class="itemInv">
				<div class="button-dropdown">
					<div class="infoItem dropdown-toggle">
						<div class="nameItem">${obj}</div>
					</div>
					<img src="images/inventory/Documents.png" class="itemImg dropdown-toggle">
				</div>
			</div>`;
		$('.left-inventory .search-wrapper .find-item').slideDown().css('display','flex');
		$('.search-wrapper .find-item .find-icon').append(template);
		$('#previewDocument').on('click',function(){
			let currentName = $('.find-icon .nameItem').text();
			console.log(currentName);
			mp.trigger('previewDocument',currentName);
		});
		$('#takeDocument').on('click',function(){
			if(!$(this).hasClass('disabled'))
			{
				$(this).addClass('disabled')
				setTimeout(() => {
					$(this).removeClass('disabled')
				},500);
				let currentName = $('.find-icon .nameItem').text();
				console.log(currentName);
				$('.left-inventory .search-wrapper .find-item').slideUp();
				$('.search-wrapper .find-item .find-icon').empty();
				mp.trigger('takeDocument',currentName);
			}
		});
	}
}
$('.left-inventory .search-wrapper .find-item .button#cancel').on('click',function(){
	$('.left-inventory .search-wrapper .find-item').slideUp();
	$('.search-wrapper .find-item .find-icon').empty();
});
$('.left-inventory .show-wrapper .button#cancel').on('click',function(){
	$('.left-inventory .show-wrapper').slideUp();
	$('.show-wrapper .find-icon').empty();
});
function listIndexCheck(id)
{
	$(eval(id+'List')).each(function(index,item){
		if(item.inventoryIndex < inventoryList.length)
		{
			if(item.name != inventoryList[item.inventoryIndex].name && item.inventoryIndex != 0)
			{
				item.inventoryIndex--;
			}
		}
	});   
}
function useElement(element, index, currentCount)
{
	let count = 1,
	    currentElement = -1;
	if(currentCount != undefined)
	{
		count = currentCount;
	}	
	let tempWeight = parseFloat(count*element.weight);
		tempWeight += parseFloat(currentWeightLug);
	if(tempWeight < maxWeightLuggage)
	{
		element.inventoryIndex = -1;
		currentElement = containsName(element.name,'luggage');
		if(currentElement != -1)
		{
			luggageList[currentElement].count += parseInt(count);
		}
		else
		{
			element.inventoryIndex = index;
			element.count = parseInt(count);
			luggageList.push(element); 		
		}
		let length = luggageList.length-1;
		inventoryList[index].wearedId = length;
		inventoryList[index].count -= parseInt(count);	
		if(inventoryList[index].count == 0 && inventoryList[index].enabled == false)
		{
			if(inventoryList[index].type == 'Ammo')
			{
				console.log(inventoryList[index]);
				$(ammoList).each(function(ammoIndex,ammoitem){
					if(ammoitem.name == inventoryList[index].name)
					{
						ammoitem.count = ammoitem.temp;
					}
				}); 
			}
			inventoryList.splice(index, 1);
		}		
		mp.trigger("action.currentAppInv", 'put', JSON.stringify(luggageList), JSON.stringify(inventoryList));
	}
	else
	{		
		notificationShow('Ваш сейф полон');
	}
};
function notificationShow(notification)
{
	$('.info-wrapper .title').text(notification);
	$('.info-wrapper').fadeIn();
	setTimeout(() => {$('.info-wrapper').fadeOut()},2000);
};
function pushInventory(inventory)
{
	// luggageAvailable = curAvailable;
	// maxWeightInventory = maxWeightInv;
	// maxWeightLuggage = maxWeightLug;
    inventoryList = [];
    let invList = JSON.parse(inventory);
    $(invList).each(function(index,item){ 
		if(index <= 39)
		{
			if(item.type == 'Documents')   	
			{
				let obj = 
				{
					name: item.name,
					type: item.type,
					weight: parseFloat(item.weight),
					count: item.count,
					itemElem: item.itemElem, 
					enabled: item.enabled,
					visible: true 
				}		
				if(obj.type == 'Ammo')
				{
					obj.enabled = false;
				}
				if(obj.enabled)
				{	
					if(obj.count >= 1)
					{
						obj.count--;
					}	
					obj.used = true;			
					let currentElement = $.inArray(obj.name.toLowerCase(), weaponsListTranslated);
					if(currentElement != -1)
					{
						obj.class = getWeaponClass(currentElement);
					}
					inventoryList.push(obj);
				}
				if(!obj.enabled)
				{		        
					inventoryList.push(obj);
				}    	
			}
		}
	}); 
	luggageList = [];
	// let lugList = JSON.parse(luggage);
	// $(lugList).each(function(index,item){
	// 	if(item.type == 'Documents')   	
	// 	{
	// 		let obj = 
	// 		{
	// 			name: item.name,
	// 			type: item.type,
	// 			weight: parseFloat(item.weight),
	// 			count: item.count,
	// 			itemElem: item.itemElem, 
	// 			enabled: false,
	// 			visible: true 
	// 		}		
	// 		let currentElement = containsName(obj.name,'inventory');
	// 		if(currentElement != -1)
	// 		{
	// 			obj.inventoryIndex = currentElement;			
	// 		}
	// 		luggageList.push(obj);		
	// 		if(currentElement != -1)
	// 		{
	// 			let length = luggageList.length - 1;
	// 			inventoryList[length].wearedId = length;
	// 		}
	// 	}
	// });
	// $(ammoList).each(function(index,item){
	// 	item.temp = item.count;
	// });	
	// refreshInventory('luggage');
	refreshInventory('inventory');	
    inventoryInitialize();  
};

$('.left-inventory .close').on('click',function(){
	mp.trigger('closeDocInventory');
});
function containsName(nameObj,iterator)
{
	let currentElement = -1;
	$(eval(iterator+'List')).each(function(index,item){
		if(nameObj === item.name)
		{
			currentElement = index;
		}
	});
	return currentElement;
}
function inventoryInitialize()
{	
	$(ammoList).each(function(index,item){
		item.count = item.temp;
		$(inventoryList).each(function(countIndex,countItem){
			if(countItem.type == 'Ammo')
			{
				if(item.name == countItem.name)
				{
					item.count -= countItem.count;
					if(item.count < 0)
					{
						item.count = 0;
					}
				}
			}
		});
		$(luggageList).each(function(countIndex,countItem){
			if(item.name == countItem.name)
			{
				countItem.max = item.count;
			}
		});
	});
	$('#inventory .itemInv').on('click', function()
	{   
        if($(this).parent().find('.dropdown-menu').is(':visible'))
        {
         	$(this).parent().find('.dropdown-menu').slideDown().css('display','none');
        }
        else
        {
            $(this).parents().find('.dropdown-menu').each(function(index,item){$(item).css('display','none')});
            $(this).parent().find('.dropdown-menu').css('display','block');
        }
	});	
	$('#inventory #put, #luggage #remove').on('click',function(){
		if(!$(this).hasClass('form'))
		{
			var action = $(this)[0].id,		
				id = $(this).parent().parent()[0].id,
				index = $(this).parent().attr(id+'-id'),
				col = 0,
				input = '<input class="quantity" type="number" min="1" max="150" value="1">',
				currentMin = 0,
				currentMax = 0;
			if(eval(id+'List')[index].max == 0)
			{
				notificationShow('Вы исчерпали лимит патронов');
			}
			else
			{				
				doneAction(action,index,id,1);
			}
		}
		else
		{
			notificationShow('Вы не можете положить полицейские предметы');
		}
	});
};
$('.tabs-inventory .tabMenu').on('click',function(){
	$('.tabs-inventory .tabMenu').each(function(index,item){
		if($(item).hasClass('active'))
		{
			$(item).removeClass('active')
		}
	});
	$(this).addClass('active');
	toogleTab($(this).attr('filter'));
});
function toogleTab(currentTab)
{
	switch(currentTab)
	{
		case 'all':
			$(inventoryList).each(function(index,item){
				item.visible = true;
			});
			break;
		case 'weapons':
			$(inventoryList).each(function(index,item){
				if(item.type == 'Weapon_Cold' || item.type == 'Weapon_FireGun_Legal' || item.type == 'Weapon_FireGun_Police' || item.type == 'Weapon_FireGun_Illegal' || item.type == 'Ammo')
				{
					item.visible = true;
				}
				else
				{
					item.visible = false;
				}
			});
			break;
		case 'clothes':
			$(inventoryList).each(function(index,item){	
				if(item.type == 'Clothes_Legal' || item.type == 'Clothes_Illegal' || item.type == 'Clothes_Duty' )
				{
					item.visible = true;
				}
				else
				{
					item.visible = false;
				}
			});
			break;
		case 'resources':
			$(inventoryList).each(function(index,item){
				if(item.type == 'Resourses' || item.type == 'Recycled_Resources' || item.type == 'Craft_Resources' || item.type == 'Documents')
				{
					item.visible = true;
				}
				else
				{
					item.visible = false;
				}
			});
			break;
		case 'items':
			$(inventoryList).each(function(index,item){
				if(item.type == 'Instrument' || item.type == 'Medical_Preparation' || item.type == 'Illegal_Object' || item.type == 'LegalObject' || item.type == 'Eat' || item.type == 'Drink' || item.type == 'Alcohol')
				{
					item.visible = true;
				}
				else
				{
					item.visible = false;
				}
			});
			break;
	}
	// refreshInventory('luggage');
	refreshInventory('inventory');	
    inventoryInitialize(); 
}
function countWeight()
{
		currentWeightLug = 0,
		currentWeightInv = 0;
	$(luggageList).each(function(index,item){
		currentWeightLug += item.weight * item.count;		
	});
	currentWeightLug = currentWeightLug.toFixed(2);
	$('.left-inventory .weight .current').text(currentWeightLug);
	$('.left-inventory .max').text(maxWeightLuggage);
	$(inventoryList).each(function(index,item){
		currentWeightInv += item.weight * item.count;		
	});		
	currentWeightInv = currentWeightInv.toFixed(2);
	// $('.right-inventory .weight .current').text(currentWeightInv);
	// $('.right-inventory .weight .max').text(maxWeightInventory);
};
function refreshImages(currentClass)
{
	let newElement = '';
	$(className).each(function(index,item){
		if(item === currentClass)
		{			
			newElement = classNameTranslated[index];
		}
	});
	return newElement;	
};
function getWeaponClass(currentElement)
{
	return weaponsListFull[currentElement].class;
}
function refreshInventory(currentIterator)
{
	currentWeightLug = 0,
	currentWeightInv = 0;
	$('#'+currentIterator).empty();
	var itemTemplate = '',
		usedCounter = 0,
		shadowClass = 'legal',
		currentLength = inventoryList.length < 48 ? '54' : '108',
		luggageLength = luggageList.length < 15 ? '15' : '30',
		action = '';

	if(currentLength > 54 || currentLength > 108 || currentLength > 216)
	{
		currentLength += currentLength;
	}
	if(luggageLength > 30 || luggageLength > 60 || luggageLength > 120)
	{
		luggageLength += luggageLength;
	}
    $(eval(currentIterator + 'List')).each(function(index,item)
    {      		
		let currentImg = item.type,
			currentIter = 'inventory',
			itemImg = `<img src="images/inventory/${currentImg}.png" class="itemImg dropdown-toggle">`;
		if(item.type == 'Weapon_Cold' || item.type == 'Instrument' || item.type == 'Documents' || item.type == 'Weapon_FireGun_Legal' || item.type == 'Clothes_Legal' 
									  || item.type == 'LegalObject' || item.type == 'Resourses' || item.type == 'Recycled_Resources' || item.type == 'Craft_Resources' 
									  || item.type == 'Eat' || item.type == 'Drink' || item.type == 'Alcohol' || item.type == 'Ammo' || item.type == 'Medical_Preparation')
		{
			shadowClass = 'legal';
		}
		if(item.type == 'Clothes_Illegal' || item.type == 'Illegal_Object' || item.type == 'Weapon_FireGun_Illegal')
		{
			shadowClass = 'illegal';
		}				
		if(item.type == 'Clothes_Duty' || item.type == 'Weapon_FireGun_Police')
		{
			shadowClass = 'form';
		}
		if(item.name.toLowerCase().includes('пистолет 9 п') ||  item.name.toLowerCase().includes('пистолет mk ii'))
		{
			console.log('pistolet');	
			$(weaponsListTranslated).each(function(weaponIndex,weaponItem){
				if(weaponItem.includes('пистолет 9 п') && item.name.toLowerCase().includes('пистолет 9 п'))
				{
					console.log('9p',weaponIndex);
					currentElement = weaponIndex;
				}
				if(weaponItem.includes('пистолет mk ii') && item.name.toLowerCase().includes('пистолет mk ii'))
				{
					console.log('mkii',weaponIndex);

					currentElement = weaponIndex;
				}
			});
		}
		else
		{
			currentElement = $.inArray(item.name.toLowerCase(), weaponsListTranslated);
		}
		if(item.type == 'Clothes_Legal' || item.type == 'Clothes_Duty' || item.type == 'Clothes_Illegal')
		{
	    	$(className).each(function(index,classEl){
				if(item.name.includes(classEl))
				{
					item.class = classEl;
				}
			});
			itemImg = `<img src="images/person/${refreshImages(item.class)}.png" class="itemImg dropdown-toggle">`;				
		}
		if(item.type == 'Eat' || item.type == 'Drink' || item.type == 'Alcohol')
		{
			itemImg = `<img src="images/inventory/items/${item.name.toLowerCase().replace(/\s+/g,'')}.png" class="itemImg dropdown-toggle">`;
		}
		if(currentIterator == 'luggage')
		{
			action = 'remove';
		}	
		if(currentIterator == 'inventory')
		{
			action = 'put';
		}		
		if(item.type == 'Weapon_Cold' || item.type == 'Weapon_FireGun_Legal' || item.type == 'Weapon_FireGun_Police' || item.type == 'Weapon_FireGun_Illegal')
		{			   
			if(currentElement != -1)
			{			
				console.log('weapon');	
				currentImg = weaponsListFull[currentElement].name;
				itemImg = `<img src="images/weapons/${currentImg}.png" class="itemImg dropdown-toggle">`;
				console.log(itemImg);	
			}
		}			
		itemTemplate = 
		`<li ${currentIterator}-id="${index}">
			<div class="itemInv ${shadowClass}" id="${action}">
				<div class="button-dropdown">
					<div class="quantity">${item.count}</div>
					<div class="infoItem dropdown-toggle">
						<div class="nameItem">${item.name}</div>
					</div>
					${itemImg}
				</div>
			</div>
		</li>`;		   		
		switch (currentIterator)
		{
			case 'luggage':				
				
				// $('.left-inventory ul#luggage').append(itemTemplate);
								
				break;
			case 'inventory':
				switch(item.enabled)
				{
					case (true):
						if(item.visible && item.count >=1)
						{
							$('.right-inventory ul#inventory').append(itemTemplate);
						}
						else
						{
							usedCounter++;
						}
						break;
					case (false):
						if(item.visible && item.count >=1)
						{
							$('.right-inventory ul#inventory').append(itemTemplate);
						}													
					break;
				}										
				break;
		}		   	
    }); 
	switch (currentIterator)
	{	
		case 'inventory':
			for (var i = inventoryList.length-usedCounter; i != 40; i++) {
				$('.right-inventory ul#inventory').append('<li></li>'); 
			}
			break;
		// case 'luggage':
		// 	for (var i = luggageList.length; i != 40; i++) {
		// 		$('.left-inventory ul#luggage').append(`<li luggage-id="${i}"></li>`); 
		// 	}	
		// 	break;			
		}    
	countWeight();    
	$('#getBlank').on('click',function(){
		if(!$(this).hasClass('disabled'))
		{
			$(this).addClass('disabled')
			setTimeout(() => {
				$(this).removeClass('disabled')
			},500);
			mp.trigger('getBlank');
		}
	});  
};
function fadeOut()
{
	$('.inventory').fadeOut();
}
function fadeIn()
{	
	$('.inventory').fadeIn().css('display','flex');
}