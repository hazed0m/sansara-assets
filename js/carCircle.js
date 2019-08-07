var messageAudio = new Audio('audio/car.ogg');
$('ul li.active').on('click',function(){
    let currentAction = $(this).find('.slot').attr('data-action');
    if(currentAction == 'carAction')
    {
        messageAudio.play();
    }
    mp.trigger(currentAction);   
});
$('#animCircle').setCursorPosition(1);