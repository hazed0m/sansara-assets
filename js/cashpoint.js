var cardVal = 0,
	cashVal = 0,
	putbackInput = '',
	withdrawalInput = '',
	topupInput = '',
	maxWithdrawal = 9999999999;
$('#withdrawal, #putback, #topup, #payments, #payfine').on('click',function(){
	$('#main-wrapper').fadeOut().css('display','none');
	let currentEl = '#'+$(this)[0].id+'-wrapper';
	$(currentEl).fadeIn().css('display','flex');
	checkBackButton();
});
$('.back-button').on('click',function(){
	clearInput();
	$('.container div[id*="-wrapper"]').fadeOut();
	$('#main-wrapper').fadeIn().css('display','flex');
	checkBackButton();
});
function clearInput()
{	
	if($('#putback-wrapper').is(':visible'))
	{
		$('#putback-wrapper input').replaceWith(putbackInput);		
	}
	if($('#withdrawal-wrapper').is(':visible'))
	{
		$('#withdrawal-wrapper input').replaceWith(withdrawalInput);		
	}
	if($('#topup-wrapper').is(':visible'))
	{
		$('#topup-wrapper input').replaceWith(topupInput);		
	}
	$('#putback-wrapper input').attr('max',cashVal);	
	if(cardVal < maxWithdrawal)
	{
		$('#withdrawal-wrapper input').attr('max',cardVal);
	}
	else
	{
		$('#withdrawal-wrapper input').attr('max',maxWithdrawal);
	}
	if(cardVal < 1000)
	{
		$('#topup-wrapper input').attr('max',cardVal);
	}
	else
	{
		$('#topup-wrapper input').attr('max',1000);
	}
	
	var inputQuantity = [];
    $(function() {
      $("#putback-wrapper input, #withdrawal-wrapper input, #topup-wrapper input").each(function(i) {
        inputQuantity[i]=this.defaultValue;
         $(this).data("idx",i); // save this field's index to access later
      });
      $("#putback-wrapper input, #withdrawal-wrapper input, #topup-wrapper input").on("keyup", function (e) {
        var $field = $(this),
            val=this.value,
            $thisIndex=parseInt($field.data("idx"),10); // retrieve the index
			//window.console && console.log($field.is(":invalid"));
          	//$field.is(":invalid") is for Safari, it must be the last to not error in IE8
        if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") || this.value == '0') {
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
};
function checkBackButton()
{
	if($('#main-wrapper').is(':visible'))
	{
		$('.back-button').css('display','none');
	}
	else
	{
		$('.back-button').css('display','flex');
	}
}
$('.exit-button').on('click',function(){
	mp.trigger("cashpoint.exit");
});
// 1)Открыл инвентарь - (наличка,счет банка)
//   1)Проверка счета банка
//   2)Триггер сколько он снимает
// 2)Положить
// Проверка на наличие налички
//   Триггер -  сколько он пополняет
function cashpointInit(card,cash,terminal,maxwithdrawal,phoneNumber)
{
	maxWithdrawal = maxwithdrawal;
	cardVal = parseInt(card);
	cashVal = parseInt(cash);
	let numberStr = phoneNumber.toString();
	numberStr = numberStr.slice(0, 3) + '-' + numberStr.slice(-3);
	$('#topup-wrapper .number').text(numberStr);
	$('.bankaccount .cardVal').text(card);
	$('.terminal-numb').text(terminal);
	$('#putback-wrapper input').attr('max',cashVal);
	putbackInput = $('#putback-wrapper input')[0].outerHTML;
	$('#withdrawal-wrapper input').attr('max',cardVal);
	withdrawalInput = $('#withdrawal-wrapper input')[0].outerHTML;
	$('#topup-wrapper input').attr('max',cardVal);
	topupInput = $('#topup-wrapper input')[0].outerHTML;
	clearInput();
}
function refreshCashpoint()
{
	$('.bankaccount .cardVal').text(cardVal);
}
//Снятие наличных
$('#withdrawal-wrapper .button').on('click',function(){
	let currentVal = $(this).parent().find('input').val();
	if(currentVal != '' && currentVal > 0)
	{
		cardVal = parseInt(cardVal) - parseInt(currentVal);
		cashVal = parseInt(cashVal) + parseInt(currentVal);
		refreshCashpoint();
		$('#withdrawal-wrapper').fadeOut();
		clearInput();
		$('#main-wrapper').fadeIn();
		checkBackButton();
		mp.trigger("cashpoint.withdrawal",currentVal);
	}
});
//Пополнение карты
$('#putback-wrapper .button').on('click',function(){
	let currentVal = $(this).parent().find('input').val();
	if(currentVal != '' && currentVal > 0)
	{
		cardVal = parseInt(cardVal) + parseInt(currentVal);
		cashVal = parseInt(cashVal) - parseInt(currentVal);
		$('#putback-wrapper').fadeOut();
		clearInput();	
		refreshCashpoint();
		$('#main-wrapper').fadeIn();
		checkBackButton();
		mp.trigger("cashpoint.putback",currentVal);
	}
});
//Пополнение телефона
$('#topup-wrapper .button').on('click',function(){
	let currentVal = $(this).parent().find('input').val();
	if(currentVal != '' && currentVal > 0)
	{
		cardVal = parseInt(cardVal) - parseInt(currentVal);
		$('#topup-wrapper').fadeOut();
		clearInput();	
		refreshCashpoint();
		$('#main-wrapper').fadeIn();
		checkBackButton();
		mp.trigger("cashpoint.topup",currentVal);
	}
});