var businessName = '',
	businessPrice = 0;
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
	mp.trigger("buyBusinessButton", cashService, businessName, businessPrice);
});
$('.close-but').on('click',function(){
	mp.trigger("buyBusinessExit");
});
function pushBuyBusiness(element,busName,busPrice)
{
	businessName = busName;
	businessPrice = busPrice;
	$('.bus-list').empty();
	let currentElem = JSON.parse(element);
	$(currentElem).each(function(index,item){
		let template = `<li>${item.name}</li>`;
		$('.bus-list').append(template);
	});
	$('.wrapper .title').text(busName);
	$('.price-block .sell-price').text(busPrice);
};