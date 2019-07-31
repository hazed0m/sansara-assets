var number = 0,
	price = 0;
$('.button').on('click',function(){
	if(this.id == 'sell')
	{
		mp.trigger(`${this.id}Appartament`,number,price)
	}
	else
	{
		mp.trigger(`${this.id}Appartament`);
	}
});
function toogleAction(trigger,id)
{
	let toogler = parseInt(trigger) == 0 ? 'Открыть' : 'Закрыть';
	if(id.indexOf('closeSell') != -1)
	{
		$('#closeSell').find('.trigger').text(toogler);
	}
	if(id.indexOf('openStorage') != -1)
	{
		$('#openStorage').find('.trigger').text(toogler);
	}
}
$('#sell').on('click',function(){
	mp.trigger('sellApartament',number,price)
});
function pushSellApartament(status, numberOf, priceOf = 0)
{
	number = numberOf;
	price = priceOf;
	if(status == 'visitor')
	{
		$('.sell-block, #changeLock, #closeSell, #giveKey, #openStorage').css('display','none');
	}
	$('.title-numb').text(numberOf);
	$('.sell-info .price').text(priceOf);
};