var nameAutobuy = '',
    autobuyList = [];
function pushAutobuy(element,nameOf)
{
  nameAutobuy = nameOf;
  let currentElement = JSON.parse(element);
  $(currentElement).each(function(index,item){
      let obj = {
         name: item.name,
         price: item.price
      };
      autobuyList.push(obj);
  });
  refreshAutobuy();
  autobuyInitialize();
};
function refreshAutobuy()
{
  $('.title-block .auto-title').text(nameAutobuy);
  $(autobuyList).each(function(index,item){
    let active = '';
    if(index == 0)
    {
      active = 'active';
    }
    let template = 
        `<div class="car-item ${active}" data-index="${index+1}">
          <div class="car-name">${item.name}</div>
          <div class="price-block">
            <span class="price">${item.price}</span>
            <div>$</div>
          </div>
        </div>`;
    $('.car-wrap').append(template);
  });
  $('.page-block .max').text(autobuyList.length);
};
function autobuyInitialize()
{
  $('.car-item, .color-item').on('click',function(){
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    if($(this).hasClass('car-item'))
    {
      $('.page-block .current').text($(this).attr('data-index'));
    }
  });
  $('.car-wrap').on('mousewheel',function(){ return false; });
};
$(function() {
    $('input[type="range"]').on('input change', function(e) {
        let id = e.target.id,
            val = e.target.value;
        $(e).val(val).change();
        mp.trigger('AutobuyRotate',val);
    });
    
    $('input[type=range]').rangeslider({
      polyfill: false,
      change: function(e) {
          console.log(e)
      }
    });
});
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
var scrolled=0;
$('#buy').on('click',function(){
    let cashService = $('.radio-block .active')[0].classList[0];    
    let fullPrice = $('.car-wrap .active .price').text();
    let nameCar = $('.car-wrap .active .car-name').text();
    let currentColor = $('.color-wrapper .active')[0].classList[1];
    console.log(nameCar + ' ' + currentColor)
    mp.trigger("AutoBuyButton", cashService, currentColor, nameCar, fullPrice);
});
$('.rotate-wrapper .but').on('click',function(){
  $('.rangeslider__fill').css('width','110px');
  $('.rangeslider__handle').css('left','102.5px');
  mp.trigger('AutobuyRotateReset');
});
$('.up-but').on('click',function(){
  $('.car-wrap').stop();
  let currentElement = $('.car-item.active');   
  if(!$(currentElement).is(':first-child'))
  {
    $(currentElement).removeClass('active');
    $(currentElement).prev().addClass('active');
    scrolled=scrolled-37; 
    let currentNumb = parseInt($('.page-block .current').text())-1;
    console.log(currentNumb);
    $('.page-block .current').text(currentNumb);
  } 
  checkFirst();
  console.log(scrolled);
  $(".car-wrap").animate({
      scrollTop:  scrolled
  },500);
});
$('.bottom-but').on('click',function(){  
  $('.car-wrap').stop();
  let currentElement = $('.car-item.active');
  if(!$(currentElement).is(':last-child'))
  {
    $(currentElement).removeClass('active');
    $(currentElement).next().addClass('active'); 
    scrolled=scrolled+37;
    let currentNumb = parseInt($('.page-block .current').text())+1;
    $('.page-block .current').text(currentNumb);
  }
  checkLast();
  console.log(scrolled);
  $(".car-wrap").animate({
      scrollTop:  scrolled
  },500); 
});
function checkFirst()
{
  if($('.car-item.active').is(':first-child'))
  {
     scrolled = 0;
  }
}
function checkLast()
{
  var currentCount = 0;
  $('.car-wrap .car-item').each(function(index,item){
      
      if(index != 0)
      {
        currentCount += 37;
      }
  });
  if($('.car-item.active').is(':last-child') && scrolled >= currentCount)
  {
     scrolled=scrolled-259;
  }
};