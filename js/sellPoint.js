var sellPointList = [],
    businessName = '';
function pushSellPoint(element,busName)
{
  console.log(busName);
  businessName = busName;
  let currentList = JSON.parse(element);
  $(currentList).each(function(index,item){
     let obj = {
        name: item.name,
        count: item.count,
        price: item.price,
        type: item.type
     };
     sellPointList.push(obj);
  });
  businessRefresh();
};
function businessRefresh()
{
  $('.col-wrapper .input-wrapper, .col-wrapper .button-wrapper').remove();
  $('.col-wrapper .title').text(businessName);
  $(sellPointList).each(function(index,item){
      let template = 
       `<div class="input-wrapper" data-price="${item.price}">
          <div class="item-wrap">             
              <div class="item-name">${item.name}</div>
              <div class="item-price">${item.price}<span>$/ед.</span></div>
          </div>
          <div class="count-wrap">
            <div class="ico-wrap" style="background-image:url(images/inventory/${item.type}.png);"></div>
            <div class="min">
              <div class="min-title">MIN</div>
              <div class="min-numb">0</div>
            </div>
            <input class="quantity" type="number" min="0" max="${item.count > 0 ? item.count : 0}" placeholder="0">
            <div class="max">
              <div class="max-title">MAX</div>
              <div class="max-numb">${item.count}</div>
            </div>
          </div>  
        </div>`;
        $('.col-wrapper').append(template);
  });
  let buttons = `
      <div class="button-wrapper">
        <div class="total-price">
          <div class="title-price">Общая стоимость:</div>
          <div class="price-wrap">
            <span class="current-total-price">0</span>
            <span>$</span>
          </div>          
        </div>
        <div class="button-wrap">
          <div class="cancel-button">Закрыть</div>
          <div class="ok-button deactivated">Продать</div>
        </div>
      </div>`;
  $('.col-wrapper').append(buttons);  
  businessInitialize();  
};
function businessInitialize()
{
  $('.col-wrapper .min').on('click',function(){
    currentMin = $(this).parent().find('.quantity').attr('min');
    $(this).parent().find('.quantity').val(currentMin);
    $('.current-total-price').text(generateSum());
    buttonRefresh(); 
  });     
  $('.col-wrapper .max').on('click',function(){
    currentMax = $(this).parent().find('.quantity').attr('max');
    $(this).parent().find('.quantity').val(currentMax);
    $('.current-total-price').text(generateSum());
    buttonRefresh(); 
  });     
  var inputQuantity = [];
  $(function() {
    $(".quantity").each(function(i) {
      inputQuantity[i]=this.defaultValue;
       $(this).data("idx",i); // save this field's index to access later
    });
    $(".quantity").on("keyup", function (e) {
      var $field = $(this),
          val=this.value,
          $thisIndex=parseInt($field.data("idx"),10); // retrieve the index
      //window.console && console.log($field.is(":invalid"));
          //$field.is(":invalid") is for Safari, it must be the last to not error in IE8
      if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
          this.value = inputQuantity[$thisIndex];
          return;
      } 
      if (val.length > Number($field.attr("maxlength"))) {
        val=val.slice(0, 5);
        $field.val(val);
      }
      buttonRefresh(); 
      inputQuantity[$thisIndex]=val;
      $('.current-total-price').text(generateSum());
    });      
  });
  var genSum = 0;      
  $('.col-wrapper .ok-button').on('click',function(){ 
    if(!$(this).hasClass('deactivated'))
    {
      iterator = true;  
      $('.input-wrapper').each(function(index,item){
          let currentPrice = $(item).attr('data-price'),
              currentCount = parseInt($(item).find('.quantity').val()),
              currentMax = $(item).find('.quantity').attr('max');
          console.log(currentMax,currentCount);
          if(currentCount <= currentMax)
          {
            console.log(currentMax,currentCount,currentCount > currentMax);
              genSum += currentPrice * currentCount;
              $(sellPointList)[index].count -= currentCount;
          }
      });
      businessRefresh();
      console.log('sellPointItems',genSum,JSON.stringify(sellPointList));

      mp.trigger('sellPointItems',genSum,JSON.stringify(sellPointList));
    }    
  }); 
  $('.button-wrapper .cancel-button').on('click',function(){
    mp.trigger('closeSellPoint');
  });
};
function checkInputs()
{
  let checker = false;
  $('input.quantity').each(function(index,item){
      if(parseInt($(item).val()) > 0 && parseInt($(item).val()) <= parseInt($(item).attr('max')))
      {
        checker = true;
      }
  });
  return checker;
}
function buttonRefresh()
{
  let listSum = 0;
  $(sellPointList).each(function(index,item){    
    listSum += item.count;
  }); 
  if(listSum == 0 || !checkInputs())
  {
    $('.col-wrapper .ok-button').addClass('deactivated');
  } 
  else if(!checkInputs() || listSum > 0)
  {
    $('.col-wrapper .ok-button').removeClass('deactivated');
  } 
}
function generateSum()
{
  let genSum = 0;
  $('.input-wrapper').each(function(index,item){
      let currentPrice = $(item).attr('data-price');
      let currentCount = $(item).find('.quantity').val();
      genSum += currentPrice * currentCount;
  });
  return Math.floor(genSum);
};