var businessName = '',
	businessPrice = 0,
	businessHolder = '';
$('#buy').on('click',function(){
	mp.trigger("takeBusinessButton", businessName, businessPrice, businessHolder);
});
$('.close-but').on('click',function(){
	mp.trigger("takeBusinessExit");
});
function pushTakeBusiness(busName,busPrice,busHolder)
{
	businessName = busName;
	businessPrice = busPrice;
	businessHolder = busHolder;
	$('.wrapper .title').text(busName);
	$('.bottom-wrap .holder').text(busHolder);
	$('.price-wrap .sell-price').text(busPrice);
};