$('ul li').on('click',function(){
    let currentAction = $(this).find('.slot').attr('data-action');
    if(currentAction != 'empty')
    {
        mp.trigger(currentAction);
    }
});