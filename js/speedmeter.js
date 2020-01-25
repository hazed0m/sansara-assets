let angleArrow = [],
    maxSpeed = 0;
const angleIndex = 0.69,
      fuelIndex = 1.81;

for (i = -180; i <= 0;i++)
{
    angleArrow.push(i);
}
function speedFadeIn()
{
    $('#speed').fadeIn();
};
function speedFadeOut()
{
    $('#speed').fadeOut();
};
function pushSpeed(vehicleSpeed,maxspeed,gear,gas)
{
    // pushCurrentGear(gear);
    // setSpeedScale(maxspeed);
    pushCurrentSpeedCount(vehicleSpeed);
    gasLines(gas);
};
function setSpeedScale(maxspeed)
{
    if(maxspeed < 100)
    {
        maxSpeed = 100;
    }
    else
    {
        maxSpeed = maxspeed;
    }
    let item = JSON.parse(JSON.stringify(maxSpeed)),
        speedArray = [0];
            
    let counter = item / 9;
    item = 0;
    for(let i=1; i < 10; i++)
    {         
        if(i == 9)
        {
            speedArray.push(maxSpeed);  
        }
        else
        {
            let elem = '' + Math.round(item += counter);
            if(elem[elem.length-1] != 0)
            {
                elem -= parseInt(elem[elem.length-1]);
                // elem = parseInt(elem);
                speedArray.push(elem);  
            }
            else
            {
                speedArray.push(Math.round(item+=counter));  
            }  
        }
    }
    // pushSpeedAngle(speedArray);
}
function pushCurrentGear(gear)
{
    $('.info-wrapper .gear').text(gear);
}
const currentBottom = parseInt($('.inner-wrapper .speed-scale').css('bottom')),
    currentRight = parseInt($('.inner-wrapper .speed-scale').css('right'));
function pushCurrentArrow(vehicleArrowSpeed, durationCount)
{    
    let currentIndex = vehicleArrowSpeed*angleIndex,
        currentAngle = angleArrow[currentIndex.toFixed()]; 
        $('.inner-wrapper .speed-scale').attr('data-angle',currentAngle).css({'transform':`rotate(${currentAngle}deg`,'bottom':currentBottom});
    // $('.inner-wrapper .speed-scale').each(function () {
    //     $(this).prop('Counter', $('.inner-wrapper .speed-scale').attr('data-angle')).animate({
    //         Counter: currentAngle
    //     }, {
    //         duration: durationCount,
    //         easing: 'linear',
    //         step: function (now) {
    //             console.log($(this).css('bottom'));
    //             $(this).attr('data-angle',now).css({'transform':`rotate(${now}deg`,'bottom':currentBottom});
    //         }
    //     });
    // });
}
function pushCurrentSpeed(vehicleSpeed,durationCount)
{
    let currentSpeed =  $('.speed-wrapper .speed').text();
    if(currentSpeed == '')
    {
        $('.speed-wrapper .speed').text(0);
    } 
    $('.speed-wrapper .speed').text(Math.ceil(vehicleSpeed));
    // $('.speed-wrapper .speed').each(function () {
    //     $(this).prop('Counter',currentSpeed).animate({
    //         Counter: vehicleSpeed
    //     }, {
    //         duration: durationCount,
    //         easing: 'linear',
    //         step: function (now) {
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // });
       
}
function pushCurrentSpeedCount(speed,speedDuration = 50,angleDuration)
{
    pushCurrentArrow(speed, angleDuration);
    pushCurrentSpeed(speed, speedDuration);
}
function engineError(status)
{
    if(status >= 0 && status < 25)
    {
        $('.engine img').attr('src',`img/speedmeter/engine100.png`);
    }
    if(status >= 25 && status < 50)
    {
        $('.engine img').attr('src',`img/speedmeter/engine75.png`);
    }
    if(status >= 50 && status < 75)
    {
        $('.engine img').attr('src',`img/speedmeter/engine50.png`);
    }
    if(status >= 75 && status < 96)
    {
        $('.engine img').attr('src',`img/speedmeter/engine25.png`);
    }
    if(status >= 96 && status <= 100)
    {
        $('.engine img').attr('src',`img/speedmeter/engine0.png`);
    }
}
function carbodyError(status)
{
    if(status >= 0 && status < 25)
    {
        $('.body img').attr('src',`img/speedmeter/body100.png`);
    }
    if(status >= 25 && status < 50)
    {
        $('.body img').attr('src',`img/speedmeter/body75.png`);
    }
    if(status >= 50 && status < 75)
    {
        $('.body img').attr('src',`img/speedmeter/body50.png`);
    }
    if(status >= 75 && status < 96)
    {
        $('.body img').attr('src',`img/speedmeter/body25.png`);
    }
    if(status >= 96 && status <= 100)
    {
        $('.body img').attr('src',`img/speedmeter/body0.png`);
    }
}
const currentGasBottom = parseInt($('.inner-wrapper .fuel-scale').css('bottom')),
    currentGasRight = parseInt($('.inner-wrapper .fuel-scale').css('right'));
function gasLines(gas, durationCount)
{
    let currentIndex = gas*fuelIndex,
        currentAngle = angleArrow[currentIndex.toFixed()]; 
    $('.inner-wrapper .fuel-scale').attr('data-angle',currentAngle).css({'transform':`rotate(${currentAngle}deg`,'bottom':currentGasBottom,'right':currentGasRight});
    // $('.inner-wrapper .fuel-scale').each(function () {
    //     $(this).prop('Counter', $('.inner-wrapper .fuel-scale').attr('data-angle')).animate({
    //         Counter: currentAngle
    //     }, {
    //         duration: durationCount,
    //         easing: 'linear',
    //         step: function (now) {
    //             console.log($(this).css('bottom'));
    //             let translate = ``;
    //             if(now <= -60)
    //             {
    //                 translate = 1;
    //             }
    //             else
    //             {
    //                 translate = 0;
    //             }
    //             $(this).attr('data-angle',now).css({'transform':`rotate(${now}deg`,'bottom':currentGasBottom+translate,'right':currentGasRight-translate});
    //         }
    //     });
    // });
};