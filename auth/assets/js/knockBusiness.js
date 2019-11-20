var businessName = '',
	businessPrice = 0,
	businessHolder = '';
$('#buy').on('click',function(){
	let currentCount = $('.quantity').val();
	mp.trigger("KnockBusinessButton", businessName, currentCount, businessHolder);
});
$('.close-but').on('click',function(){
	mp.trigger("KnockBusinessExit");
});
function pushKnockBusiness(busName,busPrice,busHolder)
{
	businessName = busName;
	businessPrice = busPrice;
	businessHolder = busHolder;
	$('.wrapper .title').text(busName);
	$('.bottom-wrap .holder').text(busHolder);
	$('.quantity').attr('max',busPrice);
	$('.max-numb').text(busPrice);
};
$('.input-wrapper .min').on('click',function(){
	currentMin = $(this).parent().find('.quantity').attr('min');
	$(this).parent().find('.quantity').val(currentMin);
});     
$('.input-wrapper .max').on('click',function(){
	currentMax = $(this).parent().find('.quantity').attr('max');
	$(this).parent().find('.quantity').val(currentMax);
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
	});      
});