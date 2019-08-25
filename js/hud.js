var micro = null,
    sleepTime = 1000;

function microphoneStatus(bool)
{
    if(bool)
    {
        $('.hud-voice').addClass('voice-active');
        micro = setTimeout(function() {
            $(function(){
                (function pulse(){
                   $('.hud-voice').delay(300).fadeOut(800).delay(50).fadeIn(800,pulse);
                })();
            });
        });
    }
    else
    {
        clearTimeout(micro);
        $('.hud-voice').removeClass('voice-active').stop(true).fadeIn();
    }
};
function closeMoney()
{
    if($('.hud-footer .hud-footer__wrap').is(':visible'))
    {
        $('.hud-footer .hud-footer__wrap').slideUp();
    }
    else
    {
        $('.hud-footer .hud-footer__wrap').slideDown();
    }
}
function hudInit(water,eat,cash,card,microStatus)
{
    initTime();
    microphoneStatus(microStatus);
    waterStatus(water);
    eatStatus(eat);
    cardStatus(card);
    cashStatus(cash);
};
function waterStatus(water)
{
    if(water > 75)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/100.png)');
    }
    if(water <= 75 && water > 50)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/75.png)');
    }
    if(water <=50 && water >25)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/50.png)');
    }
    if(water <= 25 && water > 10)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/25.png)');
    }
    if(water <= 10)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/0.png)');
    }
};
function eatStatus(eat)
{
    if(eat > 75)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/100.png)');
    }
    if(eat <= 75 && eat > 50)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/75.png)');
    }
    if(eat <=50 && eat >25)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/50.png)');
    }
    if(eat <= 25 && eat > 10)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/25.png)');
    }
    if(eat <= 10)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/0.png)');
    }
};
function cardStatus(card)
{
    $('#card').text(card);
};
function cashStatus(cash)
{
    $('#cash').text(cash);
};
function initTime(hour,minute)
{
    let currentHours = hour,
        currentMinutes = minute,
        timer = 60000,
        time = `${currentHours <=9 ? '0' + currentHours : currentHours}:${currentMinutes <=9 ? '0' + currentMinutes : currentMinutes}`;
    $('.hud-time').text(time);
   
    setInterval(()=>{
        if(currentMinutes < 59)
        {
            currentMinutes++;
        }   
        else
        {
            if(currentHours < 23)
            {
                currentHours++;
            }
            else
            {
                currentHours = 0;
            }
            currentMinutes = 0;
        }
    }, timer);  
    
    setInterval(() => {  
        console.log('update');
        time = `${currentHours <=9 ? '0' + currentHours : currentHours}:${currentMinutes <=9 ? '0' + currentMinutes : currentMinutes}`;
        $('.hud-time').text(time);
    },timer); 
};
function keypressUp(e){  
    switch(e.keyCode){         
        case 73:  // I инвентарь
            mp.trigger('KeyIpress');
        break;
        case 79:  // O инвентарь авто
            mp.trigger('KeyOpress');
        break;
        case 78:  // O инвентарь авто
            mp.trigger('KeyNpress');
        break;
        case 77:  // O инвентарь авто
            mp.trigger('KeyMpress');
        break;
        case 113:  // O инвентарь авто
            mp.trigger('KeyF2press');
        break;
        case 116:  // O инвентарь авто
            mp.trigger('KeyF5press');
        break;
        case 118:  // O инвентарь авто
            mp.trigger('KeyF7press');
        break;
        case 76:  // L аним
            mp.trigger('KeyLpress');
        break;
        case 75:  // K авто
            mp.trigger('KeyKpress');
        break;
        case 74:  // j перс
            mp.trigger('KeyJpress');
        break;
        case 69:  // E взаимодействие
            mp.trigger('KeyEpress');
        break;
        case 85:  // E взаимодействие
            mp.trigger('KeyPress');
        break;       
        case 88:  // X взаимодействие
            mp.trigger('KeyXpress');
        break;  
    }
}
function keypressDown(e){   
    switch(e.keyCode){        
        case 88:  // X взаимодействие
            mp.trigger('KeyXpressDown');
        break;  
    }
}
$(window).on("keyup", keypressUp);
$(window).on("keydown", keypressDown);