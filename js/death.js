$('.button-wrapper .button').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        let id = this.id;
        console.log(id);
        mp.trigger('deathScreen',id);
    }
});