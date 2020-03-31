let status = 'wave';
$('.button#prev, .button#next').on('click',function(){
    let id = this.id;
    if(status == 'wave')
    {
        if(id == 'prev')
        {
            if($('#ci4').hasClass('active'))
            {
                $('#ci4').removeClass('active');
                $('#ci3').addClass('active');
            }
        }
        if(id == 'next')
        {
            if($('#ci3').hasClass('active'))
            {
                $('#ci3').removeClass('active');
                $('#ci4').addClass('active');
            }
        }
    }
    if(status == 'pin')
    {
        if(id == 'prev')
        {
            if(!$('#pi1').hasClass('active'))
            {
                $('.pin-block .pin-item.active').removeClass('active').prev().addClass('active');
            }
        }
        if(id == 'next')
        {
            if(!$('#pi4').hasClass('active'))
            {
                $('.pin-block .pin-item.active').removeClass('active').next().addClass('active');
            }
        }
    }
});
$('.number-block .button').on('click',function(){
    if(status == 'wave')
    {
        $('.channel-block .channel-item.active').text($(this).text());
        if($('#ci3').hasClass('active'))
        {
            $('#ci3').removeClass('active');
            $('#ci4').addClass('active');
        }
    }
    if(status == 'pin')
    {
        $('.pin-block .pin-item.active').text($(this).text());
        if($('.pin-block .pin-item.active')[0].id != 'pi4')
        {
            $('.pin-block .pin-item.active').removeClass('active').next().addClass('active');
        }        
    }
});
$('.button#edit').on('click',function(){
    status = 'wave';
    showError('Wave editing mode');
    if(parseInt($('#ci3').text()) != 0)
    {
        $('#ci3').addClass('active');
    }
    else
    {
        $('#ci4').addClass('active');
    }
});
$('.button#key').on('click',function(){
    showError('Pin editing mode');
    $('.pin-block .pin-item.active').removeClass('active');
    $('.pin-block .pin-item#pi1').addClass('active');
    status = 'pin';
});
$('.button#confirm').on('click',function(){
    if(status == 'wave')
    {
        if($('#ci3').hasClass('active') || $('#ci4').hasClass('active'))
        {
            if(parseInt($('#ci3').text()) != 0 || parseInt($('#ci4').text()) != 0)
            {
                showError('Connected to the wave');
                $('.channel-block .channel-item.active').removeClass('active');
                if($('.pin-block').hasClass('empty'))
                {
                    setTimeout(function(){                
                        showError('Enter PIN');
                    },1000);
                }
                else
                {
                    setTimeout(function(){                
                        showError('ReEnter PIN');
                    },1000);
                }
                let currentWave = $('#ci3').text() + $('#ci4').text();
                console.log(parseInt(currentWave));
                mp.trigger('waveNumber',parseInt(currentWave));
            }
            else
            {
                showError('Unavailable wave');
            }
        }
        $('.container .screen .network-status').addClass('active');
    }
    if(status == 'pin')
    {
        console.log('pin1');
        let currentPin = '';
        $('.pin-block .pin-item').map(function(index,item){
            currentPin += $(item).text();
        });
        if(currentPin.indexOf('-') != -1)
        {
            showError('Pin incorrect');
            $('.pin-block .pin-item.active').removeClass('active');
            $(`.pin-block .pin-item:eq(${currentPin.indexOf('-')})`).addClass('active');
            $('.pin-block').addClass('empty');
            $('.container .screen .network-status').removeClass('active');
        }
        else
        {
            showError('Checking pin');
            $('.pin-block .pin-item.active').removeClass('active');
            let currentWave = $('#ci3').text() + $('#ci4').text();
            console.log(parseInt(currentWave),currentPin);
            $('.pin-block').removeClass('empty');
            mp.trigger('checkPin',parseInt(currentWave),currentPin);            
        }
    }
});
function pinStatus(status)
{
    if(status)
    {
        setTimeout(function(){                
            showError('PIN confirmed');
            $('.pin-block .pin-item.active').removeClass('active');
        },500);
        setTimeout(function(){    
            $('.pin-block .pin-item').text('*');
            $('.container .screen .network-status').removeClass('active');
            showError('You are online');
        },1400);
    }
    else
    {
        showError('Pin incorrect');
        $(`.pin-block .pin-item#pi1`).addClass('active');
        $('.container .screen .network-status').addClass('active');
    }
}
function showError(str)
{
    $('.container .inform-block').attr('prev-text',$('.container .inform-block').text()).fadeOut(200);
    setTimeout(function(){
        $('.container .inform-block').text(str).fadeIn();
    },400);
}
$('.button#micro').on('click',function(){
    if(!$(this).hasClass('active'))
    {
        $(this).addClass('active');
        $('.microphone-status').addClass('active');
    }
    else
    {
        $(this).removeClass('active');
        $('.microphone-status').removeClass('active');
    }
});
function fadeOut()
{
	$('.container').fadeOut();
}
function fadeIn()
{	
	$('.container').fadeIn();
}