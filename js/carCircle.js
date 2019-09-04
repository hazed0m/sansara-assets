var messageAudio = new Audio('audio/signal.ogg'),
    signalAudio = new Audio('audio/signal1.ogg');
$('ul li.active').on('click',function(){
    let currentAction = $(this).find('.slot').attr('data-action');
    if(currentAction == 'carAction')
    {
        messageAudio.play();
    }
    if(currentAction == 'parking')
    {
        signalAudio.play();
    }
    mp.trigger(currentAction);   
});