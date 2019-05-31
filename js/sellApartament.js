var number = 0,
	price = 0;
$('#close').on('click',function(){
	mp.trigger('closeSellApartament');
});

$('#come').on('click',function(){
	mp.trigger('comeApartament');
});

$('#sell').on('click',function(){
	mp.trigger('sellApartament',number,price)
});
function pushSellApartament(numberOf, priceOf)
{
	number = numberOf;
	price = priceOf;
	$('.title-numb').text(numberOf);
	$('.sell-info .price').text(priceOf);
};