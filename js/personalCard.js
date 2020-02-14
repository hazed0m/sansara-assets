let personalCard = [];
function pushPersonalCard(elem)
{
    personalCard = JSON.parse(elem);
    $(personalCard).each(function(index,item){
        $('.container .title-wrapper').text(item.title);
        let viewArr = item.view.split('@');
        // for (let i = viewArr.length-1; i >= 0;i--)
        // {
        //     $('.container .view-wrapper').append(`
        //         <div class="view-item">${viewArr[i]}</div>
        //     `);
        // }
        $(viewArr).each(function(viewIndex,viewItem){
            $('.container .view-wrapper').append(`
                <div class="view-item">${viewItem}</div>
            `);
        });
    });
    let element = document.querySelector('.container .view-wrapper');
    element.scrollTop = element.scrollHeight;
}
$('.container .wrapper .button').on('click',function(){
    let id = this.id;
    console.log(id);
    if(id == 'diagnosis')
    {
        $('.container .popup-wrapper').fadeIn();
    }
    else if(id == 'sendDiagnosis')
    {
        let text = $(this).prev().val();
        if(text.length != 0)
        {
            $(this).parent().fadeOut();
            $(this).prev().val('');
            
            console.log(id,text);
            mp.trigger(id,text);
        }
    }
    else if(id == 'print')
    {
        console.log(personalCard.title);
        mp.trigger(id,personalCard.title);
    }
    else
    {
        mp.trigger(id);
    }
});
$('textarea').keyup(function() {
	this.value = this.value.replace(/[^a-zA-Zа-яА-Я0-9,.!?_ ]/g, '');
});
$('.container .popup-wrapper .close-but').on('click',function(){
    $('.container .popup-wrapper').fadeOut();
});
