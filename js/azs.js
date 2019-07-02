var azsList = [];
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
$('.close-but').on('click',function(){
    mp.trigger('exitAzs');
});
$('#buy').on('click',function(){
    let cashService = $('.radio-block .active')[0].classList[0];
    let currentRange = $('.slick').val();
    let currentGasoline = $('.selector-block .active').parent().parent().parent().find('.selector-name').text();
    let fullPrice = $('.price-block .price').text();
    console.log(currentGasoline);
    mp.trigger("azsBuy", cashService, currentRange, currentGasoline, fullPrice);
});
function azsCounter(currentRange)
{
   let currentGasoline = $('.selector-block .active').parent().parent().parent().find('.price').text();
   $('.price-block .price').text(currentGasoline*currentRange); 
};
function pushAzs(element,numberOf,maxRange)
{
    let currentElement = JSON.parse(element);
    $(currentElement).each(function(index,item){
        let obj = {
            name: item.name,
            price: item.price
        };
        azsList.push(obj);
    });
    $('.title-numb').text(numberOf);
    $('.slick').attr('max',maxRange);
    azsRefresh();
    azsInitialize();
};
function azsRefresh()
{
    $(azsList).each(function(index,item){
        let active = '';
        if(index == 0)
        {
            active = 'active';
        }
        else
        {
            active = '';
        }
        let template = 
            `<div class="selector-block">
                <div class="left-wrap">
                    <div class="toogle"><div class="inner ${active}"></div></div>
                    <div class="selector-name">${item.name}</div>
                </div>
                <div class="right-wrap">
                    <div class="price-wrap">
                        <span class="point">1л</span>
                        <span> - </span>
                        <span class="price">${item.price}</span><span>$</span>
                    </div>
                </div>
            </div>`;
        $('.selector-wrap').append(template);
    });
};
function azsInitialize()
{
    $(function() {
        $('input[type="range"]').on('input change', function(e) {
            let id = e.target.id,
                val = e.target.value;
            $(e).val(val).change();
            $('.currentGas .gas').text(val);
            azsCounter(val);
        });
        
        $('input[type=range]').rangeslider({
          polyfill: false,
          change: function(e) {
              console.log(e)
          }
        });
    });
    $('.selector-block').on('click',function(){
        if(!$(this).find('.inner').hasClass('active'))
        {
            $('.selector-block .active').removeClass('active');
            $(this).find('.inner').addClass('active');
            azsCounter($('.slick').val());
        }        
    });
};