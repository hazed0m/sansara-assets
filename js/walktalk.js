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
    let currentPin = '';
    $('.pin-block .pin-item').map(function(index,item){
        currentPin += $(item).text();
    });
    if(status == 'wave')
    {
        if($('#ci3').hasClass('active') || $('#ci4').hasClass('active'))
        {
            if(parseInt($('#ci3').text()) != 0 || parseInt($('#ci4').text()) != 0)
            {
                showError('Connected to the wave');
                $('.channel-block .channel-item.active').removeClass('active');
                $('.container .screen .network-status').addClass('active');
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
                console.log(parseInt(currentWave),currentPin);
                mp.trigger('checkPin',parseInt(currentWave),currentPin);
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
            // $('.pin-block .pin-item').text('*');
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
function showNotification()
{
    $(".notification").fadeIn();
}
$('.button#close').on('click',function(){
    $(this).parent().fadeOut();
    mp.trigger('closeNotif');
});
function fadeOut()
{
	$('.container').fadeOut();
}
function fadeIn()
{	
	$('.container').fadeIn();
}
let load_peer = 0,
    voice_id = 0, 
    voice_other = 0,
    myusername = "",
    voice_get_other = 0,
    voice_get_test = 0,
    peer,
    callme,
    playersArr = [];
function voice_loader(id, username) {
    // $('#media').fadeIn(1000);
    $('#hidden_id').html(id);
    $('#hidden_name').html(username);
    console.log(id, username);
    // currentButton = button;
    $('#microphone_status').html('<label>Voice Chat Enabled</label>');
    voice_id = id;
    myusername = username;		
    
    peer = new Peer(voice_id, { host: "sansara.website", port: 8443, path: '/voicechat', debug: 1 }); //, debug: 3
    
    peer.on('open', function() {
        // alert('connected');
    });

    peer.on('call', function(call) {
        call.answer();
        call.on('stream', function(stream) {
            $('#voicer_' + voice_get_test).prop('src', URL.createObjectURL(stream)); //stream.srcObject
        });
    });

    peer.on('close', function() {
        //audio.pause();
    });

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    navigator.getUserMedia({audio: true}, function(stream) {			
        window.localStream = stream;	
        let context    = new (window.AudioContext || window.webkitAudioContext)({sampleRate:16000}),
            bufSize    = 2048, //def : 4096
            analyser   = context.createAnalyser(),
            microphone = context.createMediaStreamSource(stream),
            processor  = context.createScriptProcessor(bufSize, 1, 1), 
            res        = new Resampler(context.sampleRate, 8000, 1, bufSize), //3 arg 16000
            bufferArray= [];
        analyser.smoothingTimeConstant = 0.2;
        analyser.fftSize = 2048 ;
        processor.onaudioprocess = (event) => {
            // const right = event.inputBuffer.getChannelData(1);
            const outBuf = res.resample(event.inputBuffer.getChannelData(0));
            bufferArray.push.apply(bufferArray, outBuf);
        }							
        bufferArray = [];
        microphone.connect(analyser);
        analyser.connect(processor)
        processor.connect(context.destination);		
        
        $('#microphone_status').html('<p>Microphone <font color="green">ON</font></p>');						
    }, function() {
        $('#microphone_status').html('<p>Microphone <font color="orange">not found</font></p>');
    });
}
function startCall(get_voicer) {

    callme = peer.call(get_voicer, window.localStream);
      voice_get_other = get_voicer;

    callme.on('stream', function(remoteStream) {
        
    });

    callme.on('close', function () {
        //reconnectCall();
    });
}
function voice_set1(id, username) {
    console.log(playersArr.indexOf(id));
    if(playersArr.indexOf(id) == -1)
    {
        playersArr.push(parseInt(id));
    }
    // sendPlayers();
    voice_get_test = id;
    $('#list_voicers').fadeIn(1000);
    $(`#voicelist_${id}`).remove();
      let get_other_html = $('#list_voicers').html() + `<div id="voicelist_${id}" style="height: 40px;"><span class="shadow"><i class="fa fa-volume-up"></i> ${username}</span><audio id="voicer_${id}" autoplay="" controls="" volume="100" style="display: none;"></audio><br><br><br></div>`;
    $('#list_voicers').html(get_other_html);
}

function voice_set2(playerid, username) {
        startCall(playerid);
}

function voice_cancel(id) {
    $(`#voicelist_${id}`).remove();
    let index = playersArr.indexOf(id);
    if(index != -1)
    {
        playersArr.splice(index,1);
    }
}
function voice_noise(id, volume) {
    $('#voicer_' + id).prop('volume', parseFloat(volume));
    if(parseFloat(volume) == 0) {
        $(`#voicelist_${id}`).attr('style', 'display:none;');
    } else {
        $(`#voicelist_${id}`).attr('style', 'display:block;');
    }
}
let interval = null;
function checkPlayers(arg)
{
    let arr = arg;
    let hasInArr = false;
    $(playersArr).each(function(index,item){
        hasInArr = false;
        $(arr).each(function(indexNext,itemNext){
            let length = arr.length-1;
            if(item === itemNext)
            {
                console.log(item,itemNext,hasInArr,'delete');
                playersArr.splice(playersArr.indexOf(item),1);
                $(`#voicelist_${item}`).remove();
                hasInArr = true;
            }
        });
    });
}
function closeTalk()
{
    let get_username = $('#hidden_name').html();
    mp.trigger('cefData', 'voiceClose', voice_id);
    $('#microphone_status').html('<p>Microphone <font color="red">OFF</font></p>');
    microphone_active = 0;
    if(callme) {
        callme.close();
    }
}