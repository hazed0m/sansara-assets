var businessList = [],
    businessPrice = 0,
    businessName = '';
function pushBusiness(element,busName,busPrice)
{
  businessPrice = busPrice;
  businessName = busName;
  let currentList = JSON.parse(element);
  $(currentList).each(function(index,item){
     let obj = {
        name: item.name,
        count: item.count,
        price: item.price
     };
     businessList.push(obj);
  });
  businessRefresh();
};
function businessRefresh()
{
  $('.col-wrapper .input-wrapper, .col-wrapper .button-wrapper').remove();
  $('.sell-price').text(businessPrice);
  $('.col-wrapper .title').text(businessName);
  $(businessList).each(function(index,item){
      let template = 
       `<div class="input-wrapper" data-price="${item.price}">
          <div class="item-wrap">             
              <div class="item-name">${item.name}</div>
              <div class="item-price">${item.price}<span>$/ед.</span></div>
          </div>
          <div class="count-wrap">
            <div class="ico-wrap" style="background-image:url(img/business/${item.name}.png);"></div>
            <div class="min">
              <div class="min-title">MIN</div>
              <div class="min-numb">0</div>
            </div>
            <input class="quantity" type="number" min="0" max="${item.count}" placeholder="0">
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
          <div class="ok-button">Продать</div>
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
  });     
  $('.col-wrapper .max').on('click',function(){
    currentMax = $(this).parent().find('.quantity').attr('max');
    $(this).parent().find('.quantity').val(currentMax);
    $('.current-total-price').text(generateSum());
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
          let currentPrice = $(item).attr('data-price');
          let currentCount = $(item).find('.quantity').val();
          genSum += currentPrice * currentCount;
          $(businessList)[index].count -= currentCount;
      });
      businessRefresh();
      mp.trigger('sellItems',genSum,JSON.stringify(businessList));
    }
  }); 
  var listSum = 0;
  $(businessList).each(function(index,item){    
    listSum += item.count;
  }); 
  if(listSum == 0)
  {
    $('.col-wrapper .ok-button').addClass('deactivated');
  }  
  $('.bottom-wrapper .ok-button').on('click',function(){
    mp.trigger('sellBusiness');
  });
  $('.button-wrapper .cancel-button').on('click',function(){
    mp.trigger('closeBusiness');
  });
};
function generateSum()
{
  let genSum = 0;
  $('.input-wrapper').each(function(index,item){
      let currentPrice = $(item).attr('data-price');
      let currentCount = $(item).find('.quantity').val();
      genSum += currentPrice * currentCount;
  });
  return genSum;
};