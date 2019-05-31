$('.cash, .card').on('click',function(){
    $(this).each(function(index, item){
        if(!$(item).hasClass('active'))
        {
            $('.cash, .card').each(function(index, item){
                if($(item).hasClass('active'))
                {
                    $(item).removeClass('active');          
                    $(item).find('i').removeClass('fas').addClass('far');
                }
            });
            $(item).addClass('active');
            $(item).find('i').removeClass('far').addClass('fas');
        }       
    });
});
$('#close').on('click',function(){
    mp.trigger('apartamentExit');
});
$('#buy').on('click',function(){
    let cashService = $('.radio-block .active')[0].classList[0];
    let currentPrice = $('.price-block .price').text();
    mp.trigger("apartamentBuy", cashService, currentPrice);
});
$('#look').on('click',function(){
    mp.trigger('lookInterier');
});
function pushApartamentBuy(numberOf,price)
{
    $('.title-block title-numb').text(numberOf);
    $('.price-block .price').text(price);
};