let personalCard = [];
function pushPersonalCard(elem)
{
    personalCard = JSON.parse(elem);
    $(personalCard).each(function(index,item){
        $('.container .title-wrapper').text(item.title);
        let viewArr = item.view.split('@');
        $(viewArr).each(function(viewIndex,viewItem){
            $('.container .view-wrapper').append(`
                <div class="view-item">${viewItem}</div>
            `);
        });
    });
}
$('.container .wrapper .inner-wrapper .button').on('click',function(){
    let id = this.id;
    console.log(id);
    mp.trigger(id);
});