let counterInterval = setInterval(function(){
    let counterNumber = getCounterNumber();
        if(counterNumber != 0)
        {
            $('.counter-wrapper .number').text(counterNumber -= 1);
        }
        else
        {                  
            if($('.counter-wrapper .number').attr('counter') == 'button')
            {
                $('.coma-wrapper, .counter-wrapper').fadeOut();
                $('.button-wrapper .button').removeClass('disabled');
                setTimeout(function(){
                    $('.counter-wrapper .number').text(700);
                    $('.text-wrapper, .counter-wrapper').fadeIn();
                    $('.counter-wrapper .number').attr('counter','wait');
                },500);                
            } 
            if($('.counter-wrapper .number').attr('counter') == 'wait')
            {
                runTimer('waitAmbulance');
                mp.trigger('comaOutOfTime');
            }
        }
    },1000);
function runTimer(id)
{
    if(id == 'waitAmbulance')
    {
        $('.text-wrapper, .counter-wrapper').fadeOut();
        setTimeout(function(){
            $('.counter-wrapper .number').text(10);
            $('.coma-wrapper, .counter-wrapper').fadeIn();
        },500);
        $('.counter-wrapper .number').attr('counter','button');
    }
    if(id == 'toHospital')
    {
        clearInterval(counterInterval);
        $('.button-wrapper .button').addClass('disabled');
    }
}
function pushSyndrome(text)
{
    $('.text-wrapper .text span').text(text);
}
function getCounterNumber()
{
    return parseInt($('.counter-wrapper .number').text());
}
function comaFadeIn()
{
    clearInterval(counterInterval);
    $('.coma-wrapper, .counter-wrapper').fadeOut();
    setTimeout(function(){
        $('.container').css({'background-color':'rgba(0,0,0,0.95)'});
        $('.death-wrapper').fadeIn();
    },500);
}
function comaFadeOut(){
	$('.container').fadeOut(1000);
	mp.trigger('comaScreenOff');
};
$('.button-wrapper .button').on('click',function(){
    let id = this.id;
    console.log(id);
    if(!$(this).hasClass('disabled'))
    {
        mp.trigger(id);
    }
});