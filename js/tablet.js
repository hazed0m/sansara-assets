const wallpaperList = [ 0,1,2];
var mixer = null;

$(wallpaperList).each(function(index,item){
	var active = '';
	if(index == 0)
	{
		active = 'active';
	}
	const wallpaperSettingsTemplate = 
 	'<div class="background'+ ' ' + active +'"data-wallpaper="'+ index +'" style="background-image:url(img/tablet/wallpaper/wallpaper'+ index +'.png)"></div>';
	$('.settings-wrapper').append(wallpaperSettingsTemplate);
});
$('.settings-wrapper i').on('click',function(){
	var clicker = $(this);
	var length = wallpaperList.length-1;
	var elementList = $('.settings-wrapper .background');
	var currentItem = $('.settings-wrapper .active').attr('data-wallpaper');
	if($(clicker).hasClass('fa-chevron-left') && currentItem != 0)
	{
		currentItem--;
		$('.settings-wrapper .active').removeClass('active');		
		$(elementList).each(function(index,item){
			if($(item).attr('data-wallpaper') == currentItem)
			{
				$(item).addClass('active');
			}
		});
	} 
	if($(clicker).hasClass('fa-chevron-right') && currentItem != length)
	{
		currentItem++;
		$('.settings-wrapper .active').removeClass('active');		
		$(elementList).each(function(index,item){
			if($(item).attr('data-wallpaper') == currentItem)
			{
				$(item).addClass('active');
			}
		});
	}
});
$('.settings-wrapper .apply-but').on('click',function(){
	var currentItem = $('.settings-wrapper .active').attr('data-wallpaper');
	const background = 'url(img/tablet/wallpaper/wallpaper' + currentItem + '.png)';
	$('.main-wrapper').css('background-image', background);
	$('.settings-wrapper').removeClass('active').fadeOut();
    $('.main-wrapper').addClass('active').fadeIn();
    backButtonCheck();
	mp.trigger('tabletWallpaper',currentItem);
});
function settingsInitialize(wallIndex)
{
	if(wallIndex <= 13 && wallIndex  >= 0)
	{
		const background = 'url(img/tablet/wallpaper/wallpaper' + wallIndex + '.png)';
		$('.main-wrapper').css('background-image', background);
	}		
}
function backButtonCheck()
{
    if(!$('.container > .active').hasClass('main-wrapper'))
    {
        if($('.container > .active').hasClass('news-wrapper'))
        {
            $('.back-but').css({'color':'#00aeef','border-color':'#00aeef','background-color':$('.container > .active').css('background-color')});
		}
		else if($('.container > .active').hasClass('cars-wrapper'))
        {
            $('.back-but').css({'color':'#fff','border-color':'rgba(251,229,2,0.8)','background-color':'transparent'});
		}
		else if($('.container > .active').hasClass('goverment-wrapper'))
        {
            $('.back-but').css({'color':'#fff','border-color':'#ed1c24','background-color':'transparent'});
        }
        else
        {
            $('.back-but').css({'color':'#fff','border-color':'#fff','background-color':'transparent'});
        }
        $('.back-but').fadeIn();
    }
    else
    {
        $('.back-but').css('display','none');
    }
}
$('.back-but').on('click',function(){
    $('.container > .active').removeClass('active').fadeOut();
    $('.main-wrapper').addClass('active').fadeIn();    
    backButtonCheck();
});
function forwardExit()
{	
	$('.cars-wrapper .current-car-wrapper, .cars-wrapper .forward').fadeOut();
	$('.cars-wrapper .inner-wrapper, .cars-wrapper .sort-block, .cars-wrapper .filter-block').fadeIn();
};
$('.cars-wrapper .forward').on('click',function(){
	forwardExit();
	backButtonCheck();
	$('.cars-wrapper .current-car-wrapper').scrollTop(0);
	$('.current-car-wrapper .speed-wrap .line-inner').css('width','0');
});
$('.ads-wrapper #openAdd').on('click',function(){
	$(this).parent().find('.add-popap').removeClass('fadeOutRight').addClass('fadeInRight active');
});
$('.ads-wrapper .add-popap #closeAdd, .ads-wrapper .add-popap #acceptAdd').on('click',function(){
	$(this).parent().parent().removeClass('fadeInRight').addClass('fadeOutRight');
	setTimeout(function(){$(this).parent().parent().removeClass('active');},300);
	if(this.id == 'acceptAdd')
	{
		let currentIter = $('.ads-wrapper').attr('data-type');
		let currentText = $(this).parent().parent().find('#add-ads-text').val();
		mp.trigger('sendAds',currentIter,currentText)
	}
});
$('.main-wrapper .news, .main-wrapper .goverment, .main-wrapper .cars, .main-wrapper .settings, .main-wrapper .adssell, .main-wrapper .adsbuy, .main-wrapper .adsgetworkers, .main-wrapper .adssearchwork').on('click',function(){
	let currentClass = this.classList[0];
	$('.main-wrapper').removeClass('active').fadeOut();
	if(currentClass == 'cars')
	{
		forwardExit();
		pushAutoshop();
		if(mixer != null)
		{
			mixer.destroy();
			mixer.forceRender();
		}
		refreshAutoshop();
	}
	if(currentClass == 'adssell' || currentClass == 'adsbuy' || currentClass == 'adsgetworkers' || currentClass == 'adssearchwork')
	{
		$('.ads-wrapper .ads-type').text($(this).attr('data-name'));
		$('.ads-wrapper .add-popap').removeClass('fadeInRight active');
		$(`.ads-wrapper`).attr('data-type',currentClass).addClass('active').fadeIn();
	}
	else
	{
		$(`.${currentClass}-wrapper`).addClass('active').fadeIn();
	}
    backButtonCheck();
});
$('.news-item .video-block').each(function(index,item){
	let curLink = $(this).attr('data-id');
	if(curLink)
	{
		$(this).empty();
		$(this).append(`<img style="width:100%;height:100%" src="https://img.youtube.com/vi/${curLink}/0.jpg"><i class="fas fa-play"></i>`);
	}
});  
$(document).ready(function() {
	$('.newswrap').bind('mousewheel', function(event) {
		if (event.originalEvent.wheelDelta >= 0) {
			let currentElem = $('.newswrap .section.active');		
			if($(currentElem).prev().length != 0 && !$(currentElem).prev().hasClass('mask'))
			{
				$(currentElem).removeClass('active');
				$(currentElem).find('.news-item').addClass('fadeOutDownBig slow');
				$(currentElem).prev().find('.news-item').addClass('fadeInDownBig');
				setTimeout(function(){
					$(currentElem).find('.news-item').removeClass('fadeOutDownBig slow');
					$(currentElem).addClass('inactive');
					$(currentElem).prev().removeClass('inactive').addClass('active');
				},400);
				setTimeout(function(){
					$(currentElem).prev().find('.news-item').removeClass('fadeInDownBig');
				},900);				
			}
		}
		else {
			let currentElem = $('.newswrap .section.active');		
			if($(currentElem).next().length != 0)
			{
				$(currentElem).removeClass('active');
				$(currentElem).find('.news-item').addClass('fadeOutUpBig slow');
				$(currentElem).next().find('.news-item').addClass('fadeInUpBig');
				setTimeout(function(){
					$(currentElem).find('.news-item').removeClass('fadeOutUpBig slow');
					$(currentElem).addClass('inactive');
					$(currentElem).next().removeClass('inactive').addClass('active');
				},400);
				setTimeout(function(){
					$(currentElem).next().find('.news-item').removeClass('fadeInUpBig');
				},900);
			}
		}
	});
	$("[data-fancybox]").fancybox({
        parentEl: ".container"
    });
    $('[data-fancybox]').on('click',function(){
    	let currentPlayer = `<div id="player" data-plyr-provider="youtube" 
				    			data-plyr-embed-id="${$(this).attr('data-id')}">
				    		</div>`;
    	$('.fancybox-content iframe').replaceWith(currentPlayer);
    	const player = new Plyr('#player', {
    		controls: [ 'play-large', 
			    		'play', 
			    		'progress', 
			    		'current-time', 
			    		'mute', 
			    		'volume'
			    	  ],
	    	autoplay: true  		
    	});
		window.player = player;
    });
});
$('.news-item #more').click(function(e) {
	let h = $('.news-item').innerHeight();
	$(this).fadeOut();
    e.stopPropagation();
    $(this).parent().find('.news-text').animate({
		'height': h
	}).css('oveflow-y','scroll');
	$(this).parent().find('.video-block').fadeOut('fast');
});
$(document).click(function() {
    $('.news-item .news-text').animate({
		'height': '112px'
	}).css('oveflow-y','visible');
	$('.news-item #more').fadeIn();
	$('.news-item .video-block').delay(400).fadeIn('fast');
});
$('.law-wrap .button').on('click',function(){
	$('.law-wrap .text-block.active').removeClass('active');
	$(`#${this.id}-text`).addClass('active');
});
$('.cars-wrapper #cars-sort, .cars-wrapper #cars-class').on('click',function(){
	if(!$(this).next().is(':visible'))
	{
		$(this).next().slideDown().css('display','flex');
	}
	else
	{
		$(this).next().slideUp();
	}
});
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
	if(!$(this).hasClass('disabled'))
	{
		let color = $('.current-car-wrapper .color-block .color-wrap .active').attr('data-color'),
			index = $('.cars-wrapper .current-car-wrapper .title-name').attr('data-index'),
			price = $('.cars-wrapper .left-wrap .buy-button span.price').text(),
			currentWrapper = $('.cars-wrapper .current-car-wrapper .title-name').attr('data-type'),
			currentList = eval(currentWrapper+'List'),
			hash = currentList[index].hash,
			spawn = '';		
		switch(currentWrapper)
		{
			case 'autos':
				spawn = '1';
				break;
			case 'motos':
				spawn = '2';
			break;
			case 'trucks':
				spawn = '3';
			break;
			case 'boats':
				spawn = '4';
			break;
		}
		$(this).addClass('disabled');
		console.log(hash, color, price, '', spawn);
		mp.trigger("carBuyButton", hash, color, price, '', spawn);
	}	
});
$('.color-wrap .color-item').on('click',function(){
	$('.color-wrap .color-item.active').removeClass('active');
	$('#buy').removeClass('disabled');
	$(this).addClass('active');
});
$('.goverment-wrapper .menu .link').on('click',function(){
	currentBut = this.id;
	$('.goverment-wrapper .menu .link.active, .goverment-wrapper .inner-wrapper > .active').removeClass('active');
	$(`.goverment-wrapper #${currentBut}, .goverment-wrapper .inner-wrapper .${currentBut}-wrap`).addClass('active');
});
$('.goverment-wrapper .order-wrap .add-point').on('click',function(){
	if(!$('.goverment-wrapper .order-wrap .newpoint-block').hasClass('opened'))
	{
		$('.goverment-wrapper .order-wrap .newpoint-block input, .goverment-wrapper .order-wrap .newpoint-block textarea').val('');
		$('.goverment-wrapper .order-wrap .newpoint-block').slideDown().css('display','flex').addClass('opened');
		$('.goverment-wrapper .order-wrap').animate({ scrollTop: 9999 }, 'slow');
	}
});
$('.goverment-wrapper .order-wrap .current-wrap .close-but').on('click',function(){
	if($('.goverment-wrapper .order-wrap .newpoint-block').hasClass('opened'))
	{
		$('.goverment-wrapper .order-wrap .newpoint-block').slideUp().removeClass('opened');
	}
});
$('.goverment-wrapper .order-wrap .clients-block #change').on('click',function(){
	let currentBlock = $(this).parent().parent().find('.inform-block');
	$('.goverment-wrapper .order-wrap .newpoint-block .time-inputs input#days').val(currentBlock.find('.timer-counter .days').text());
	$('.goverment-wrapper .order-wrap .newpoint-block .time-inputs input#hours').val(currentBlock.find('.timer-counter .hours').text());
	$('.goverment-wrapper .order-wrap .newpoint-block .time-inputs input#minutes').val(currentBlock.find('.timer-counter .minutes').text());
	$('.goverment-wrapper .order-wrap .newpoint-block #point-textarea').val(currentBlock.find('.title-block').text());
	$('.goverment-wrapper .order-wrap .newpoint-block #pay-count').val(currentBlock.find('.pay-count').text());
	if(!$('.goverment-wrapper .order-wrap .newpoint-block').hasClass('opened'))
	{
		$('.goverment-wrapper .order-wrap .newpoint-block').slideDown().css('display','flex').addClass('opened');
		$('.goverment-wrapper .order-wrap').animate({ scrollTop: 9999 }, 'slow');
	}
});
$('.goverment-wrapper .order-wrap .clients-block #clients').on('click',function(){
	if(!$(this).prev().is(':visible'))
	{
		$(this).prev().fadeIn();
	}
	else
	{
		$(this).prev().fadeOut();
	}
});
$('.goverment-wrapper .ads-wrap .add-ads').on('click',function(){
	$(this).parent().find('.list-wrap').css('width','69%');
	$(this).parent().find('.ads-add-block').removeClass('zoomOutRight').addClass('zoomInRight').css('display','flex');
});
$('.goverment-wrapper .ads-wrap .ads-add-block .close-but').on('click',function(){
	$(this).parent().parent().find('.list-wrap').css('width','100%');
	$(this).parent().parent().find('.ads-add-block').removeClass('zoomInRight').addClass('zoomOutRight');
	setTimeout(() => {$(this).parent().parent().find('.ads-add-block').css('display','none');},700)
});
$('.goverment-wrapper .ads-wrap .ads-item .delete-but').on('click',function(){
	$(this).next().fadeIn();
});
$('.goverment-wrapper .ads-wrap .ads-item .delete-wrapper .delete-accept').on('click',function(){
	if(this.id == 'yes')
	{
		console.log('yeap');
	}
	if(this.id == 'no')
	{
		console.log('nope');
	}
	$(this).parent().parent().fadeOut();
});
$('.cars-wrapper .menu .link').on('click',function(){
	if($('.cars-wrapper .current-car-wrapper').is(':visible'))
	{
		forwardExit();
		backButtonCheck();
	}	
	$(this).parent().find('.active').removeClass('active');
	$(this).addClass('active');	
	pushAutoshop();
	if(mixer != null)
	{
		mixer.destroy();
		mixer.forceRender();
	}
	refreshAutoshop();
});
function speedPercentage(curSpeed)
{
	const max = 300;
	let percentage = (curSpeed/max)*100;
	return percentage;
}
function pushAutoshop()
{
	$('[data-ref="container"]').empty();	
	const currentWrapper = $('.cars-wrapper .menu .active')[0].id;
	let currentList = eval(currentWrapper+'List');
	appendCarFilter(currentWrapper);	
	$(currentList).each(function(index,item){
		let currentItem = `
		<div class="car-block" data-list='${currentWrapper}' data-index='${index}' data-price='${item.price}' data-name="${item.name}" data-luggage='${item.luggage}' data-type='${item.type}'>
			<div class="car-image">
				<img src="img/tablet/cars/${item.name}.jpg" alt="">
			</div>
			<div class="title-block">
				<div class="car-name">${item.name}</div>
				<div class="car-price">${item.price}$</div>
			</div>
			<div class="car-info">
				<div class="speed-block">
					<div class="speed-title">Скорость</div>
					<div class="speed-wrap">
						<div class="line-inner" style="width:${speedPercentage(item.speed)}%;"></div>
					</div>
				</div>
				<div class="car-weight">
					Грузоподъемность:
					<span class="weight">${item.luggage}кг</span>   
				</div>
			</div>
		</div>`
		$('[data-ref="container"]').append(currentItem);
	});	
};
function refreshAutoshop()
{		
	$('.car-block .car-image').on('click',function(){
		let currentWrapper = $(this).parent().attr('data-list'),
			currentIndex = $(this).parent().attr('data-index'),
			currentList = eval(currentWrapper+'List');			
		$('.cars-wrapper .current-car-wrapper').find('.buy-button.disabled').removeClass('disabled');
		$('.cars-wrapper .current-car-wrapper').fadeIn();
		$('.cars-wrapper .inner-wrapper').fadeOut();
		$('.cars-wrapper .forward').fadeIn();
		$('.cars-wrapper .sort-block').fadeOut();
		$('.cars-wrapper .filter-block').fadeOut();		
		$('.cars-wrapper .current-car-wrapper .title-name').attr('data-type',currentWrapper);
		$('.cars-wrapper .current-car-wrapper .title-name').attr('data-index',currentIndex);
		$('.cars-wrapper .current-car-wrapper .title-name').text(currentList[currentIndex].name);
		$('.cars-wrapper .current-car-wrapper .title-text').text(currentList[currentIndex].info);
		$('.cars-wrapper .right-wrap .sit-places .sit-item').text(currentList[currentIndex].places);
		$('.cars-wrapper .right-wrap .luggage-places .luggage-item span').text(currentList[currentIndex].luggage);
		$('.cars-wrapper .right-wrap .class-places .class-item').text(currentList[currentIndex].type);
		$('.cars-wrapper .left-wrap .buy-button span.price').text(currentList[currentIndex].price);
		$('.cars-wrapper .current-car-wrapper .right-wrap .img-block img').attr('src',$(this).find('img').attr('src'));
		var position = $('.cars-wrapper .current-car-wrapper').scrollTop(); 
		$('.cars-wrapper .current-car-wrapper').scroll(function() {
			var scroll = $(this).scrollTop();
			if(scroll > position) {
				$('.speed-wrap .line-inner').css('width',`${speedPercentage(currentList[currentIndex].speed)}%`);
			}
			position = scroll;
		});
	});
	let container = document.querySelector('[data-ref="container"]'),
		config = {
			animation: {
				duration: 350
			},
			selectors: {
				target: '.car-block'
			},
			callbacks: {
				onMixClick: function(state, originalEvent) {
					if($(this).hasClass('mixitup-control-active'))
					{
						originalEvent.stopPropagation();
						originalEvent.preventDefault();
					}
					else
					{
						$(`.cars-wrapper #${$(this).parent().prev()[0].id}`).next().slideUp();
					}
				}
			}
		};
	mixer = mixitup(container, config);
};
function appendCarFilter(id)
{
	$('.filter-block .sort-window').empty();
	$('.filter-block .sort-window').append(`<div data-filter="all">Показать все</div> `);	
	$(uniqueFilter(eval(id+'List'))).each(function(index,item){
		let template = `<div class="car-filter" data-filter="[data-type='${item}']">${item}</div>`;
		$('.filter-block .sort-window').append(template);
	});	
};
function uniqueFilter(array)
{
	let uniq = [];
	$(array).each(function(index,item){
		uniq.push(item.type);
	});
	uniq = unique(uniq);
	return uniq;
};
function unique(array) {
    return $.grep(array, function(el, index) {
        return index === $.inArray(el, array);
    });
}
$('.ads-wrapper .currentads-inner, .ads-wrapper .socialads-inner').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 40);
    e.preventDefault();
});
$(function(){
    var popup = null;
    var sendObject = {
      title: 'Тестовое сообщение',
      value: 5000
    };
 
    $('.btn-iframe').click(function(){
      var iframe = $('#ads-frame');
      iframe[0].contentWindow.postMessage(sendObject,'*');
    });
  });