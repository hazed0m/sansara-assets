var customsName = '',
	customsPrice = 0;
$('.cash, .card').on('click',function(){
	$(this).each(function(index, item){
		if($(item).hasClass('active'))
		{
			$(item).removeClass('active');			
			$(item).find('i').removeClass('fas').addClass('far');
		}
		else
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
$('#buy').on('click',function(){
	let cashService = $('.radio-block .active')[0].classList[0];
	customsName = $('input.stoName').val();
	if(customsName.length != 0)
	{
		$('input.stoName').val('');
		console.log(cashService, customsName, customsPrice);
		mp.trigger("buyTransportCompanyButton", cashService, customsName, customsPrice);
	}
});
$('.close-but').on('click',function(){
	mp.trigger("buyTransportCompanyExit");
});
function pushBuyTransportCompany(customsprice)
{
	customsPrice = customsprice;
	$('.price-block .sell-price').text(customsPrice);
};