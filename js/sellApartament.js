var number = 0,
	price = 0;
$('#close').on('click',function(){
	mp.trigger('closeSellApartament');
});

$('#quit').on('click',function(){
	mp.trigger('quitApartament');
});

$('#sell').on('click',function(){
	mp.trigger('sellApartament',number,price)
});
function pushSellApartament(status, numberOf, priceOf)
{
	number = numberOf;
	price = priceOf;
	if(status == 'visitor')
	{
		$('.sell-block, #changeLock, #close, #giveKey, #openStorage').css('display','none');
	}
	$('.title-numb').text(numberOf);
	$('.sell-info .price').text(priceOf);
};