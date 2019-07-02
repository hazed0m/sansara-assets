function speedFadeIn()
{
    $('#speed').fadeIn();
};
function speedFadeOut()
{
    $('#speed').fadeOut();
};
function pushSpeed(vehicleArrowSpeed,vehicleSpeed,gear,gas)
{
    pushCurrentGear(gear);
    pushCurrentArrow(vehicleArrowSpeed);
    pushCurrentSpeed(vehicleSpeed);
    gasLines(gas);
};
function pushCurrentGear(gear)
{
    $('.info-wrapper .gear').text(gear);
}
function pushCurrentArrow(vehicleArrowSpeed)
{
    $('.radius .arrow').css('transform',`rotateZ(${vehicleArrowSpeed}deg`);
}
function pushCurrentSpeed(vehicleSpeed)
{
    $('.info-wrapper .speed').text(vehicleSpeed);
}
function engineError(status)
{
    if(status == 'true')
    {
        $('.status-cont .engine').addClass('alert');
    }
    else
    {
        $('.status-cont .engine').removeClass('alert');
    }
}
function carbodyError(status)
{
    if(status == 'true')
    {
        $('.status-cont .carbody').addClass('alert');
    }
    else
    {
        $('.status-cont .carbody').removeClass('alert');
    }
}
function gasLines(gas)
{
    if(gas <= 10)
    {
        $('.energy-block').removeClass('active');
    }
    if(gas > 10 && gas <= 20)
    {
        $('.energy-block').removeClass('active');
        $('.eb1').addClass('active');
    }
    if(gas > 20 && gas <= 35)
    {
        $('.energy-block').removeClass('active');
        $('.eb1, .eb2').addClass('active');
    }
    if(gas > 35 && gas <= 45)
    {
        $('.energy-block').removeClass('active');
        $('.eb1, .eb2, .eb3').addClass('active');
    }
    if(gas > 45 && gas <= 55)
    {
        $('.energy-block').removeClass('active');
        $('.eb1, .eb2, .eb3, .eb4').addClass('active');
    }
    if(gas > 55 && gas <= 70)
    {
        $('.energy-block').removeClass('active');
        $('.eb1, .eb2, .eb3, .eb4, .eb5').addClass('active');
    }
    if(gas > 70 && gas <= 85)
    {
        $('.energy-block').removeClass('active');
        $('.eb1, .eb2, .eb3, .eb4, .eb5, .eb6').addClass('active');
    }
    if(gas > 85 && gas <= 100)
    {
        $('.energy-block').removeClass('active');
        $('.eb1, .eb2, .eb3, .eb4, .eb5, .eb6, .eb7').addClass('active');
    }    
    $('.power-cont .energy-percent span').text(gas);
};
