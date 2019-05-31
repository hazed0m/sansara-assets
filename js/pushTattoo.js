function pushTattooList(json)
{
	var newTattoo = JSON.parse(json);
	$(newTattoo).each(function(index,item){
		const tattooItem = "\
			<div class=\"tattoo-item\">\
				<div class=\"name\">" + item.Name + "</div>\
				<div class=\"price\">"+ item.cash +"</div>\
				<i class=\"far fa-circle\"></i>\
			</div>" 
		$('.main-block .wrapper').append(tattooItem);
	});
	tattooListRefresh();	
};
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
	$('#buy').removeClass('disabled');
});
$('#buy').on('click',function(){
	if($('.tattoo-item.active').length > 0  && !$(this).hasClass('disabled'))
	{
		let bodyPart = $('.body-list .name.active')[0].childNodes[0].textContent;
		let tattooName = $('.tattoo-item.active')[0].childNodes[1].textContent;
		let tattooPrice = $('.tattoo-item.active')[0].childNodes[3].textContent;
		let cashService = $('.radio-block .active')[0].classList[0];
		$(this).addClass('disabled');
		mp.trigger("tattooBuyButton", bodyPart, tattooName, tattooPrice, cashService);
	}	
});
$('#cancel, #pass').on('click',function(){
	$(this).parents().find('.information').fadeOut();
	if($(this)[0].id === "pass")
	{
		$('.container').fadeOut();
	}
});
function tattooListRefresh()
{
	$('.tattoo-item').on('click',function(){
		$('#buy').removeClass('disabled');
		$(this).each(function(index, item){
			if($(item).hasClass('active'))
			{
				$(item).removeClass('active');			
				$(item).find('i').fadeOut(200);
				$(item).find('.price').delay(500).fadeIn(200);
				let bodyPart = $('.body-list .name.active')[0].childNodes[0].textContent;
			}
			else
			{
				$('.tattoo-item').each(function(index, item){
					if($(item).hasClass('active'))
					{
						$(item).removeClass('active');
						$(item).find('i').fadeOut(150);
						$(item).find('.price').delay(500).fadeIn(100);
					}
				});
				$(item).addClass('active');
				$(item).find('.price').fadeOut(150);
				$(item).find('i').delay(500).fadeIn(100);
				let tattooName = item.childNodes[1].textContent;
				let tattooPrice = item.childNodes[3].textContent;
				mp.trigger("selectTattoo", tattooName, tattooPrice);
			}		
		});
	});
	$('.btn.delete').on('click',function(){
		$('.tattoo-item.active').removeClass('active');
		$('.tattoo-item').find('i').fadeOut(150);
		$('.tattoo-item').find('.price').delay(500).fadeIn(100);
		let bodyPart = $('.body-list .name.active')[0].childNodes[0].textContent;
		mp.trigger("deleteTattoo", bodyPart);
	});
};
var bodyPartsArr = ['Торс', 'Голова', 'Левая рука', 'Правая рука', 'Левая нога', 'Правая нога']
function bodyListInitialize()
{	
	$(bodyPartsArr).each(function(index,item){
		var active = '';
		if(index == 0)
		{
			active = 'active';
		}
		const bodyPart = '<div class="name '+ active +'">'+ bodyPartsArr[index] + '</div>';
		$('.body-list').append(bodyPart);
	});	
};
bodyListInitialize();
$('.toogle .fa-chevron-left, .toogle .fa-chevron-right').on('click',function(){
	var clicker = $(this);
	var trigger = ''; 
	var element = $('.body-list .active');
	if($(clicker).hasClass('fa-chevron-left') && !$(element).is(':first-child'))
	{
		trigger = $.inArray($(element).prev()[0].textContent, bodyPartsArr);
		$(element).removeClass('active');
		$(element).prev().addClass('active');	
		$('.main-block .wrapper').empty();
		mp.trigger("selectBodyPart", trigger);	
	}
	if($(clicker).hasClass('fa-chevron-right') && !$(element).is(':last-child'))
	{
		trigger = $.inArray($(element).next()[0].textContent, bodyPartsArr);
		$(element).removeClass('active');
		$(element).next().addClass('active');
		$('.main-block .wrapper').empty();
		mp.trigger("selectBodyPart", trigger);	
	}
});
$('.btn.exit').on('click',function(){
	mp.trigger("tattooExit");
});
let currentRange = 0;
$(function() {
    $('input[type="range"]').on('input change', function(e) {
        let id = e.target.id,
            val = e.target.value;
        $(e).val(val).change();
        switch (id) {
            case 'cameraHeight':
                currentRange = 0;
                break;
            case 'cameraRotate':
                currentRange = 1;
                break;
        }
        console.log(id+''+val);
        mp.trigger("cameraTattoo", id, val);
    });
    
    $('input[type=range]').rangeslider({
      polyfill: false,
      change: function(e) {
          console.log(e)
      }
    });
});
$('#resetCamera').on('click',function(){
	$('.rangeslider__fill').each(function(index,item){
		$(item).css('width', '95.5px');
	});
	$('.rangeslider__handle').each(function(index,item){
		$(item).css('left', '88px');
	});
	mp.trigger("resetCamera");
});