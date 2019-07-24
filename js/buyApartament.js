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
$('#buy').on('click',function(){
    let cashService = $('.radio-block .active')[0].classList[0];
    let currentPrice = $('.price-block .price').text();
    let numberOf = $('.title-block title-numb').text();
    mp.trigger("apartamentBuy", numberOf, cashService, currentPrice);
});
$('#look').on('click',function(){
    mp.trigger('lookInterier');
});
$('#close-m, #close-i, #close-b').on('click',function(){
    mp.trigger('apartamentExit');
});
$('#come').on('click',function(){
    let currentFlat = $('.input-wrapper input').val();
    if(!$(this).hasClass('disabled'))
    {
        $(this).addClass('disabled');
        mp.trigger('comeAppartament',currentFlat);
    }
});
$('#buy-m').on('click',function(){
    $('.main-wrapper, .main-title').css('display','none');
    $('.buy-wrapper').fadeIn();
});
$('#come-m').on('click',function(){
    $('.main-wrapper').css('display','none');
    $('.main-title').text('Введите номер квартиры')
    $('.input-wrapper').fadeIn().css('display','flex');
});
function pushApartamentBuy(numberOf,price,carPlace, deedbox)
{
    if(parseInt(numberOf) == 0)
    {
        $('.buy-wrapper').addClass('empty');
    }
    $('.title-block .title-numb').text(numberOf);
    $('.price-block .price').text(price);
    $('.car-block .car-numb').text(carPlace);
    $('.deedbox-block .deedbox-numb span').text(deedbox);
};
$('input[type="text"]').keyup(function() {
    if($(this).val().length > 0)
    {
        $('#come').removeClass('disabled');
    }
    else
    {
        $('#come').addClass('disabled');
    }
    if (this.value.length == 1) {
        this.value = this.value.replace(0,''); 
    }
    this.value = this.value.replace(/[^0-9]/g, '');
});