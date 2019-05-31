var micro;
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
function initTime()
{
    let update = setTimeout(function updateTime() {  
        let date = mp.game.time.getLocalTime(year, month, day, hour, minute, second);
        hours = `${date.hour}:${date.minute}`;
        $('.hud-time').text(hours);
        setTimeout(updateTime, 60000);
    }); 
};