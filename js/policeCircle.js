$('ul li.active').on('click',function(){
    let currentAction = $(this).find('.slot').attr('data-action');
    mp.trigger(currentAction);   
});