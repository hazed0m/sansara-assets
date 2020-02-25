$(document).ready(function(){
	$(".mask").delay(500).fadeOut('slow');
});
$('.main-wrapper').fadeIn();
const wallpaperList = [0,1,2];
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
	console.log('backButtonCheck');
	if(!$('.container > .active').hasClass('main-wrapper'))
	{
		if($('.container > .active').hasClass('news-wrapper'))
		{
			$('.back-but').css({'color':'#00aeef','border-color':'#00aeef','background-color':$('.container > .active').css('background-color')});
		}
		else if($('.container > .active').hasClass('ads-wrapper'))
		{
			$('.back-but').css({'color':'#484c52','border-color':'#484c52','background-color':$('.container > .active').css('background-color')});
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
$('.ads-wrapper .add-popap #acceptAdd').on('click',function(){
	console.log(11);
	$(this).parent().parent().removeClass('fadeInRight').addClass('fadeOutRight');
	setTimeout(function(){$(this).parent().parent().removeClass('active');},300);
	if(this.id == 'acceptAdd')
	{
		let currentIter = $('.ads-wrapper').attr('data-type');
		let currentText = $(this).parent().parent().find('#add-ads-text').val();
		mp.trigger('sendAds',currentIter,currentText)
	}
});
$('.ads-wrapper #closeAdd').on('click',function(){
	console.log(11);
});
let transportAcc = JSON.stringify({
		Name: 'Sansara INC.',
		Owner: 'Человек ин Дастриал',		
		DistanceFare: 25,
		MaxMargin:265262,
		CallsFare:211,
		Gain: 2352525253,
		TrucksCount:2,
		WorkersList:[
			{
				FullName:'Александр Булкин',
				Date: '23.12.2019',
				Online:true
			},
			{
				FullName:'Въячеслав Ломакин',
				Date: '15.12.2019',
				Online:false
			}
		]
	});
let transportInfo = [];
function initCustoms(transportObj)
{	
	transportInfo = JSON.parse(transportObj);
	$('.main-wrapper .customs').css('display','block');
}
function initTransportCompany(transportObj)
{	
	transportInfo = JSON.parse(transportObj);
	$('.main-wrapper .transportCompany').css('display','block');
}
function initBusiness(transportObj)
{	
	transportInfo = JSON.parse(transportObj);
	$('.main-wrapper .business').css('display','block');
}
$('.main-wrapper .news, .main-wrapper .goverment, .main-wrapper .cars, .main-wrapper .settings, .main-wrapper .adssell, .main-wrapper .adsbuy, .main-wrapper .adsgetworkers, .main-wrapper .adssearchwork, .main-wrapper .customs, .main-wrapper .business, .main-wrapper .transportCompany').on('click',function(){
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
	if(currentClass == 'customs')
	{
		forwardExit();		
		pushCustoms(transportInfo);
		if(mixer != null)
		{
			mixer.destroy();
			mixer.forceRender();
		}
		refreshCustoms();
	}
	if(currentClass == 'goverment')
	{
		$('.law-wrap .right-wrap').css('display','block');
	}
	if(currentClass == 'transportCompany')
	{
		forwardExit();		
		pushTransportCompany(transportInfo);
		if(mixer != null)
		{
			mixer.destroy();
			mixer.forceRender();
		}
		refreshTransportCompany();
	}
	if(currentClass == 'business')
	{
		forwardExit();		
		pushBusiness(transportInfo);
		refreshBusiness();
	}
	if(currentClass == 'adssell' || currentClass == 'adsbuy' || currentClass == 'adsgetworkers' || currentClass == 'adssearchwork')
	{
		$('iframe#ads-frame').attr('src',`http://server.sansararp.com/ads/${currentClass}`);
		$('.ads-wrapper .ads-type').text($(this).attr('data-name'));
		$('.ads-wrapper .add-popap').removeClass('fadeInRight active');
		$(`.ads-wrapper`).attr('data-type',currentClass).addClass('active').fadeIn();		
		mp.trigger('sellContactAuthData');
	}
	else
	{
		$(`.${currentClass}-wrapper`).addClass('active').fadeIn();
	}
	backButtonCheck();
});
$('.main-wrapper .locker').on('click',function(){
	mp.trigger('lockTablet');
});
// urlExists($('#ads-frame').attr('src'));
// function urlExists(url){
// 	$.ajax({
// 	  type: 'HEAD',
// 	  url: url,
// 	  success: function(){
		
// 	  },
// 	  error: function() {
// 		$('.ads-wrapper').append('<div class="mask frameerror" style="color:#fff">Сайт в данный момент недоступен!</div>');
// 	  }
// 	});
// };

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
$('.cars-wrapper #cars-sort, .cars-wrapper #cars-class, .customs-wrapper #transport-sort, .transportCompany-wrapper #transport-sort').on('click',function(){
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
			price = $('.cars-wrapper .left-wrap .price-block span.price').text(),
			currentWrapper = $('.cars-wrapper .current-car-wrapper .title-name').attr('data-type'),
			currentList = eval(currentWrapper+'List'),
			hash = currentList[index].name,
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
			case 'trailers':
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
$('.goverment-wrapper .ads-wrap .add-ads, .goverment-wrapper .auction-wrap .add-ads').on('click',function(){
	$(this).parent().find('.list-wrap').css('width','69%');
	$(this).parent().find('.ads-add-block').removeClass('zoomOutRight').addClass('zoomInRight').css('display','flex');
});
$('.goverment-wrapper .ads-wrap .ads-add-block .close-but, .goverment-wrapper .auction-wrap .ads-add-block .close-but').on('click',function(){
	$(this).parent().parent().find('.list-wrap').css('width','100%');
	$(this).parent().parent().find('.ads-add-block').removeClass('zoomInRight').addClass('zoomOutRight');
	setTimeout(() => {$(this).parent().parent().find('.ads-add-block').css('display','none');},700)
});
$('.goverment-wrapper .ads-wrap .ads-item .delete-but, .goverment-wrapper .auction-wrap .ads-item .accept-but').on('click',function(){
	$(this).next().fadeIn();
});
$('.goverment-wrapper .ads-wrap .ads-item .delete-wrapper .delete-accept, .goverment-wrapper .auction-wrap .ads-item .delete-wrapper .delete-accept').on('click',function(){
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
function speedPercentage(curSpeed,currentWrapper)
{
	const max = typeof getMaxSpeed(currentWrapper) != 'undefined' ? getMaxSpeed(currentWrapper) : 300;
	let percentage = 0;
	if(max > 0)
	{
		percentage = (curSpeed/max)*100;
	}
	return percentage;
}
function updateCustoms(transportObj)
{
	transportInfo = JSON.parse(transportObj);
	pushCustoms(transportInfo);
}
function pushCustoms(transportObj)
{
	$('.customs-wrapper .service-wrapper .current-input .next-title').text(transportInfo.Name);
	$('.customs-wrapper .service-wrapper .changable-input input').val(transportInfo.Name);
	$('.customs-wrapper .service-wrapper .owner-wrapper .next-title').text(transportInfo.Owner);
	$('.customs-wrapper .service-wrapper .gain-wrapper .next-title span').text(transportInfo.Gain);
	$('.customs-wrapper .employers-wrapper .already-wrapper .next-title span').text(transportInfo.TrucksCount);
	$('.customs-wrapper .employers-wrapper .employers-list').empty();
	$(transportInfo.WorkersList).each(function(index,item){
		let template = `
			<div class="employee-item hired" data-count="${index+1}">
				<div class="info-wrapper">
					<div class="info-item">
						<div class="info-name">Вызовов:</div>
						<div class="info-data"> ${item.Calls}</div>
					</div>
					<div class="info-item">
						<div class="info-name">Ремонтов:</div>
						<div class="info-data"> ${item.Repairs}</div>
					</div>
					<div class="info-item">
						<div class="info-name">Капиталок:</div>
						<div class="info-data"> ${item.Capitals}</div>
					</div>
				</div>
				<div class="name">
					${item.FullName}
				</div>
				<div class="date">
					${item.Date}
				</div>
				<div class="button" id="dissmisal">Уволить</div>
				${item.Online ? '<div class="online"></div>' : '<div class="offline"></div>'}				
			</div>`;
		$('.customs-wrapper .employers-wrapper .employers-list').append(template);
	});
	let addTemplate = `
		<div class="employee-item add" data-count="+">
			<input type="text" placeholder="Введите Имя">
			<div class="button" id="hire">Принять</div>
		</div>`;
	$('.customs-wrapper .employers-wrapper .employers-list').append(addTemplate);
	$('.customs-wrapper [data-ref="transport-container"]').empty();	
	$('.customs-wrapper .shop-page .title-wrap .title span').text(towTruckList.length);
	$(towTruckList).each(function(index,item){
		let currentItem = `
		<div class="transport-block" data-list='${'mechanical'}' data-index='${index}' data-price='${item.price}' data-name="${item.name}" data-luggage='${item.luggage}' data-type='${item.type}'>
			<div class="mask">Куплено</div>
			<div class="car-image">
				<img src="img/tablet/cars/${item.hash}.jpg" alt="">
			</div>
			<div class="car-info">			
				<div class="title-block">
					<div class="car-name">${item.name}</div>
				</div>
				<div class="speed-block">
					<div class="speed-wrap">
						<div class="line-inner" style="width:${speedPercentage(item.speed,'towTruck')}%;"></div>						
					</div>
					<div class="speed-title">Мощность</div>
				</div>
				<div class="title-block">
					<div class="car-price"><span>${item.price}</span>$</div>
					<div class="button" id="buyTransport">Купить</div>
				</div>	
			</div>					
		</div>`
		$('.customs-wrapper [data-ref="transport-container"]').append(currentItem);
	});	
	refreshCustoms();
}
function refreshCustoms()
{
	$('.customs-wrapper .employers-wrapper .employers-list .employee-item .button').on('click',function(){
		if(!$(this).hasClass('disabled'))
		{
			let id = this.id;
			console.log(id);	
			$(this).addClass('disabled');
			if(id == 'dissmisal')	
			{
				let name = $(this).prev().prev().text().trim();
				console.log(name);
				mp.trigger('dissmisalMechanical',name);
			}
			if(id == 'hire')	
			{
				let name = $(this).prev().val();
				console.log(name);
				$(this).prev().val('');
				mp.trigger('hireMechanical',name);
			}
		}
	});
	$('.customs-wrapper .transport-block .title-block .button').on('click',function(){
		if(!$(this).hasClass('disabled'))
		{
			let parent = $(this).parent().parent().parent(),
				price = parseInt($(parent).attr('data-price')),
				name = $(parent).attr('data-name');
			parent.find('.mask').fadeIn().css('display','flex');
			$(this).addClass('disabled');
			setTimeout(() => {
				parent.find('.mask').fadeOut();
				$(this).removeClass('disabled');
			},1000);
			mp.trigger('buyTransportMechanics',name,price);
		}
	});
	$('.customs-wrapper .service-wrapper .changable-input .button#changeName').on('click',function(){
		$(this).parent().css('display','none');
		let name = $('.customs-wrapper .service-wrapper .changable-input input').val();
		// $('.customs-wrapper .service-wrapper .current-input .next-title').text(name);
		$('.customs-wrapper .service-wrapper .current-input').css('display','flex');
		mp.trigger('changeNameMechanical',name);
	});
	$('.customs-wrapper .service-wrapper .edit-icon').on('click',function(){
		$(this).parent().css('display','none');
		$('.customs-wrapper .service-wrapper  .changable-input').css('display','flex');
	});
	$('.customs-wrapper .menu-wrapper .menu-item').on('click',function(){
		let id = this.id;
		console.log(id);
		if(!$(`.customs-wrapper .${id}-page`).hasClass('active'))
		{
			console.log(1);
			$('.customs-wrapper').find('.active').css('display','none').removeClass('active');
			$(`.customs-wrapper .${id}-page`).css('display','block').addClass('active');
		}
	});
	let container = document.querySelector('.customs-wrapper [data-ref="transport-container"]'),
		config = {
			animation: {
				duration: 350
			},
			selectors: {
				target: '.transport-block'
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
						$(`.customs-wrapper #${$(this).parent().prev()[0].id}`).next().slideUp();
					}
				}
			}
		};
	mixer = mixitup(container, config);
}
function updateTransportCompany(transportObj)
{
	transportInfo = JSON.parse(transportObj);
	pushTransportCompany(transportInfo);
}
function pushTransportCompany(transportObj)
{
	$('.transportCompany-wrapper .service-wrapper .current-input .next-title').text(transportInfo.Name);
	$('.transportCompany-wrapper .service-wrapper .name-wrapper .changable-input input').val(transportInfo.Name);
	$('.transportCompany-wrapper .service-wrapper .fare-wrapper #distanceFare span').text(transportInfo.DistanceFare);
	$('.transportCompany-wrapper .service-wrapper .fare-wrapper #callsFare span').text(transportInfo.CallsFare);
	$('.transportCompany-wrapper .service-wrapper .fare-wrapper .changable-input #distanceFareInput input').val(transportInfo.DistanceFare);
	$('.transportCompany-wrapper .service-wrapper .fare-wrapper .changable-input #callsFareInput input').val(transportInfo.CallsFare);
	$('.transportCompany-wrapper .service-wrapper .owner-wrapper .next-title').text(transportInfo.Owner);
	$('.transportCompany-wrapper .service-wrapper .gain-wrapper .next-title span').text(transportInfo.Gain);
	$('.transportCompany-wrapper .employers-wrapper .already-wrapper .next-title span').text(transportInfo.TrucksCount);
	$('.transportCompany-wrapper .employers-wrapper .employers-list').empty();
	$(transportInfo.WorkersList).each(function(index,item){
		
		// <div class="info-item">
		// 	<div class="info-name">Пробег:</div>
		// 	<div class="info-data"> ${item.Milage}</div>
		// </div>
		let template = `
			<div class="employee-item hired" data-count="${index+1}">
				<div class="info-wrapper">
					<div class="info-item">
						<div class="info-name">Вызовов:</div>
						<div class="info-data"> ${item.Calls}</div>
					</div>
				</div>
				<div class="name">
					${item.FullName}
				</div>
				<div class="date">
					${item.Date}
				</div>
				<div class="button" id="dissmisal">Уволить</div>
				${item.Online ? '<div class="online"></div>' : '<div class="offline"></div>'}				
			</div>`;
		$('.transportCompany-wrapper .employers-wrapper .employers-list').append(template);
	});
	let addTemplate = `
		<div class="employee-item add" data-count="+">
			<input type="text" placeholder="Введите Имя">
			<div class="button" id="hire">Принять</div>
		</div>`;
	$('.transportCompany-wrapper .employers-wrapper .employers-list').append(addTemplate);
	$('.transportCompany-wrapper [data-ref="transport-company-container"]').empty();	
	$('.transportCompany-wrapper .shop-page .title-wrap .title span').text(transportCompanyCarsList.length);
	$(transportCompanyCarsList).each(function(index,item){
		let currentItem = `
		<div class="transport-block" data-list='${'mechanical'}' data-index='${index}' data-price='${item.price}' data-name="${item.name}" data-luggage='${item.luggage}' data-type='${item.type}'>
			<div class="mask">Куплено</div>
			<div class="car-image">
				<img src="img/tablet/cars/${item.hash}.jpg" alt="">
			</div>
			<div class="car-info">			
				<div class="title-block">
					<div class="car-name">${item.name}</div>
				</div>
				<div class="speed-block">
					<div class="speed-wrap">
						<div class="line-inner" style="width:${speedPercentage(item.speed,'transportCompanyCars')}%;"></div>						
					</div>
					<div class="speed-title">Мощность</div>
				</div>
				<div class="title-block">
					<div class="car-price"><span>${item.price}</span>$</div>
					<div class="button" id="buyTransport">Купить</div>
				</div>	
			</div>					
		</div>`
		$('.transportCompany-wrapper [data-ref="transport-company-container"]').append(currentItem);
	});	
	refreshTransportCompany();
}
function refreshTransportCompany()
{
	$('.transportCompany-wrapper .employers-wrapper .employers-list .employee-item .button').on('click',function(){
		if(!$(this).hasClass('disabled'))
		{
			let id = this.id;
			console.log(id);	
			$(this).addClass('disabled');
			if(id == 'dissmisal')	
			{
				let name = $(this).prev().prev().text().trim();
				console.log(name);
				mp.trigger('dissmisalTransportCompany',name);
			}
			if(id == 'hire')	
			{
				let name = $(this).prev().val();
				console.log(name);
				$(this).prev().val('');
				mp.trigger('hireTransportCompany',name);
			}
		}
	});
	$('.transportCompany-wrapper .transport-block .title-block .button').on('click',function(){
		if(!$(this).hasClass('disabled'))
		{
			let parent = $(this).parent().parent().parent(),
				price = parseInt($(parent).attr('data-price')),
				name = $(parent).attr('data-name');
			parent.find('.mask').fadeIn().css('display','flex');
			$(this).addClass('disabled');
			setTimeout(() => {
				parent.find('.mask').fadeOut();
				$(this).removeClass('disabled');
			},1000);
			mp.trigger('buyAutoTransportCompany',name,price);
		}
	});
	$('.transportCompany-wrapper .service-wrapper .changable-input .button#changeName').on('click',function(){
		let name = $('.transportCompany-wrapper .service-wrapper .changable-input input').val();
		// $('.transportCompany-wrapper .service-wrapper .current-input .next-title').text(name);
		if(name.length != 0)
		{
			$(this).parent().css('display','none');
			$('.transportCompany-wrapper .service-wrapper .name-wrapper .current-input').css('display','flex');
			mp.trigger('changeNameTransportCompany',name);
		}
	});
	$('.transportCompany-wrapper .service-wrapper .changable-input .button#changeFare').on('click',function(){
		let callsFare = $('.transportCompany-wrapper .service-wrapper .changable-input #callsFareInput input').val(),
			distanceFare = $('.transportCompany-wrapper .service-wrapper .changable-input #distanceFareInput input').val();
		if(callsFare.length != 0 && distanceFare.length != 0)
		{
			$(this).parent().css('display','none');
			console.log(callsFare,distanceFare);
			$('.transportCompany-wrapper .service-wrapper .fare-wrapper .next-title').css('display','flex');
			mp.trigger('changeFareTransportCompany',callsFare,distanceFare);
		}
	});
	$('.transportCompany-wrapper .service-wrapper .name-wrapper .edit-icon').on('click',function(){
		$(this).parent().css('display','none');
		$('.transportCompany-wrapper .service-wrapper .name-wrapper .changable-input').css('display','flex');
	});
	$('.transportCompany-wrapper .service-wrapper .fare-wrapper .edit-icon').on('click',function(){
		$(this).parent().css('display','none');
		$('.transportCompany-wrapper .service-wrapper .fare-wrapper .changable-input').css('display','flex');
	});
	$('.transportCompany-wrapper .menu-wrapper .menu-item').on('click',function(){
		let id = this.id;
		console.log(id);
		if(!$(`.transportCompany-wrapper .${id}-page`).hasClass('active'))
		{
			$('.transportCompany-wrapper').find('.active').css('display','none').removeClass('active');
			$(`.transportCompany-wrapper .${id}-page`).css('display','block').addClass('active');
		}
	});
	let container = document.querySelector('.transportCompany-wrapper [data-ref="transport-company-container"]'),
		config = {
			animation: {
				duration: 350
			},
			selectors: {
				target: '.transport-block'
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
						$(`.customs-wrapper #${$(this).parent().prev()[0].id}`).next().slideUp();
					}
				}
			}
		};
	mixer = mixitup(container, config);
}
function updateBusiness(transportObj)
{
	transportInfo = JSON.parse(transportObj);
	pushBusiness(transportInfo);
}
function pushBusiness(transportObj)
{
	$('.business-wrapper .service-wrapper .current-input .next-title').text(transportInfo.Name);
	$('.business-wrapper .service-wrapper .name-wrapper .changable-input input').val(transportInfo.Name);
	$('.business-wrapper .getMargin-wrapper input').attr({max:transportObj.MaxMargin,value:transportObj.MaxMargin});
	$('.business-wrapper .getMargin-wrapper .max').text(transportObj.MaxMargin);
	// $('.business-wrapper .service-wrapper .fare-wrapper #distanceFare span').text(transportInfo.DistanceFare);
	// $('.business-wrapper .service-wrapper .fare-wrapper #callsFare span').text(transportInfo.CallsFare);
	// $('.business-wrapper .service-wrapper .fare-wrapper .changable-input #distanceFareInput input').val(transportInfo.DistanceFare);
	// $('.business-wrapper .service-wrapper .fare-wrapper .changable-input #callsFareInput input').val(transportInfo.CallsFare);
	$('.business-wrapper .service-wrapper .owner-wrapper .next-title').text(transportInfo.Owner);
	$('.business-wrapper .service-wrapper .gain-wrapper .next-title span').text(transportInfo.Gain);
	// $('.business-wrapper .employers-wrapper .already-wrapper .next-title span').text(transportInfo.TrucksCount);
	$('.business-wrapper .employers-wrapper .employers-list').empty();
	$(transportInfo.WorkersList).each(function(index,item){
		
		// <div class="info-item">
		// 	<div class="info-name">Пробег:</div>
		// 	<div class="info-data"> ${item.Milage}</div>
		// </div>
		let template = `
			<div class="employee-item hired" data-count="${index+1}">
				<div class="name">
					${item.FullName}
				</div>
				<div class="date">
					${item.Date}
				</div>
				<div class="button" id="dissmisal">Уволить</div>
				${item.Online ? '<div class="online"></div>' : '<div class="offline"></div>'}				
			</div>`;
		$('.business-wrapper .employers-wrapper .employers-list').append(template);
	});
	let addTemplate = `
		<div class="employee-item add" data-count="+">
			<input type="text" placeholder="Введите Имя">
			<div class="button" id="hire">Принять</div>
		</div>`;
	$('.business-wrapper .employers-wrapper .employers-list').append(addTemplate);
	$('.business-wrapper [data-ref="transport-company-container"]').empty();	
	refreshBusiness();
}
function refreshBusiness()
{
	$('.business-wrapper .employers-wrapper .employers-list .employee-item .button').on('click',function(){
		if(!$(this).hasClass('disabled'))
		{
			let id = this.id;
			console.log(id);	
			$(this).addClass('disabled');
			if(id == 'dissmisal')	
			{
				let name = $(this).prev().prev().text().trim();
				console.log(name);
				mp.trigger('dissmisalBusiness',name);
			}
			if(id == 'hire')	
			{
				let name = $(this).prev().val();
				console.log(name);
				$(this).prev().val('');
				mp.trigger('hireBusiness',name);
			}
		}
	});
	$('.business-wrapper .button#getMargin').on('click',function(){
		$('.business-wrapper .getMargin-wrapper, .business-wrapper .mask').fadeIn();
	});
	$('.business-wrapper .getMargin-wrapper input').keyup(function(){
		let currentCount = parseInt($(this).val()),
			max = parseInt($(this).attr('max'));
		if(currentCount <= max)
		{
			$('.business-wrapper .getMargin-wrapper .button#confirmMargin').removeClass('disabled');
		}
		else
		{
			$('.business-wrapper .getMargin-wrapper .button#confirmMargin').addClass('disabled');
		}
	});
	$('.business-wrapper .button#confirmMargin').on('click',function(){
		let currentCount = parseInt($('.business-wrapper .getMargin-wrapper input').val()),
			max = parseInt($('.business-wrapper .getMargin-wrapper input').attr('max'));
		if(currentCount <= max)
		{
			console.log(currentCount,' ',max,currentCount <= max);
			$('.business-wrapper .getMargin-wrapper, .business-wrapper .mask').fadeOut();
			mp.trigger('getMargin',currentCount);
		}
	});
	$('.business-wrapper .button#cancelMargin').on('click',function(){
		$('.business-wrapper .getMargin-wrapper, .business-wrapper .mask').fadeOut();
	});
	$('.business-wrapper .service-wrapper .changable-input .button#changeName').on('click',function(){
		let name = $('.business-wrapper .service-wrapper .changable-input input').val();
		// $('.transportCompany-wrapper .service-wrapper .current-input .next-title').text(name);
		if(name.length != 0)
		{
			$(this).parent().css('display','none');
			$('.business-wrapper .service-wrapper .name-wrapper .current-input').css('display','flex');
			mp.trigger('changeNameBusiness',name);
		}
	});
	// $('.transportCompany-wrapper .service-wrapper .changable-input .button#changeFare').on('click',function(){
	// 	let callsFare = $('.transportCompany-wrapper .service-wrapper .changable-input #callsFareInput input').val(),
	// 		distanceFare = $('.transportCompany-wrapper .service-wrapper .changable-input #distanceFareInput input').val();
	// 	if(callsFare.length != 0 && distanceFare.length != 0)
	// 	{
	// 		$(this).parent().css('display','none');
	// 		console.log(callsFare,distanceFare);
	// 		$('.transportCompany-wrapper .service-wrapper .fare-wrapper .next-title').css('display','flex');
	// 		mp.trigger('changeFareTransportCompany',callsFare,distanceFare);
	// 	}
	// });
	$('.business-wrapper .service-wrapper .name-wrapper .edit-icon').on('click',function(){
		$(this).parent().css('display','none');
		$('.business-wrapper .service-wrapper .name-wrapper .changable-input').css('display','flex');
	});
	$('.business-wrapper .service-wrapper .fare-wrapper .edit-icon').on('click',function(){
		$(this).parent().css('display','none');
		$('.business-wrapper .service-wrapper .fare-wrapper .changable-input').css('display','flex');
	});
	$('.business-wrapper .menu-wrapper .menu-item').on('click',function(){
		let id = this.id;
		console.log(id);
		if(!$(`.business-wrapper .${id}-page`).hasClass('active'))
		{
			$('.business-wrapper').find('.active').css('display','none').removeClass('active');
			$(`.business-wrapper .${id}-page`).css('display','block').addClass('active');
		}
	});
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
						<div class="line-inner" style="width:${speedPercentage(item.speed,currentWrapper)}%;"></div>
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
}
function refreshAutoshop()
{		
	$('.car-block .car-image').on('click',function(){
		let currentWrapper = $(this).parent().attr('data-list'),
			currentIndex = $(this).parent().attr('data-index'),
			currentList = eval(currentWrapper+'List');			
		$('.cars-wrapper .current-car-wrapper').find('.buy-button.disabled').removeClass('disabled');
		$('.cars-wrapper .current-car-wrapper, .cars-wrapper .forward').fadeIn();
		$('.cars-wrapper .sort-block, .cars-wrapper .filter-block, .cars-wrapper .inner-wrapper, .back-but').fadeOut();
		$('.cars-wrapper .current-car-wrapper .title-name').attr('data-type',currentWrapper);
		$('.cars-wrapper .current-car-wrapper .title-name').attr('data-index',currentIndex);
		$('.cars-wrapper .current-car-wrapper .title-name').text(currentList[currentIndex].name);
		$('.cars-wrapper .current-car-wrapper .title-text').text(currentList[currentIndex].info);
		$('.cars-wrapper .right-wrap .sit-places .sit-item').text(currentList[currentIndex].places);
		$('.cars-wrapper .right-wrap .luggage-places .luggage-item span').text(currentList[currentIndex].luggage);
		$('.cars-wrapper .right-wrap .class-places .class-item').text(currentList[currentIndex].type);
		$('.cars-wrapper .left-wrap .price-block span.price').text(currentList[currentIndex].price);
		$('.cars-wrapper .current-car-wrapper .right-wrap .img-block img').attr('src',$(this).find('img').attr('src'));
		if(currentWrapper == 'trailers')
		{
			$('.cars-wrapper .current-car-wrapper .color-block').css('display','none');
		}
		else
		{
			$('.cars-wrapper .current-car-wrapper .color-block').css('display','block');
		}
		var position = $('.cars-wrapper .current-car-wrapper').scrollTop(); 
		$('.cars-wrapper .current-car-wrapper').scroll(function() {
			var scroll = $(this).scrollTop();
			if(scroll > position) {
				$('.speed-wrap .line-inner').css('width',`${speedPercentage(currentList[currentIndex].speed,currentWrapper)}%`);
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
}
function appendCarFilter(id)
{
	$('.filter-block .sort-window').empty();
	$('.filter-block .sort-window').append(`<div data-filter="all">Показать все</div> `);	
	$(uniqueFilter(eval(id+'List'))).each(function(index,item){
		let template = `<div class="car-filter" data-filter="[data-type='${item}']">${item}</div>`;
		$('.filter-block .sort-window').append(template);
	});	
}
function uniqueFilter(array)
{
	let uniq = [];
	$(array).each(function(index,item){
		uniq.push(item.type);
	});
	uniq = unique(uniq);
	return uniq;
}
function unique(array) {
	return $.grep(array, function(el, index) {
		return index === $.inArray(el, array);
	});
}
$('.ads-wrapper .currentads-inner, .ads-wrapper .socialads-inner').mousewheel(function(e, delta) {
	this.scrollLeft -= (delta * 40);
	e.preventDefault();
});
function adsSendData(data){
	let currentObj = JSON.parse(data),
		sendObj = {};
	$(currentObj).each(function(index,item){
		sendObj = {
			name: item.name,
			date: item.date,
			number: item.number,
			admin: item.admin
		};
	});
	// console.log(sendObj);
	$('#ads-frame')[0].contentWindow.postMessage({'Ads': sendObj},'*');
	$('.ads-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
	// $('.decree-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
	$('.order-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
	window.addEventListener('message', function(event) {       
		if (event.data['getAds']) {
			console.log('getAds');
			$('#ads-frame')[0].contentWindow.postMessage({'Ads': sendObj}, "*");
		} 
		if (event.data['RefreshAds']) {
			console.log('RefreshAds');
			$('.ads-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
		}
		if (event.data['RefreshOrders']) {
			console.log('RefreshOrders');
			$('.order-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
		}		
		if (event.data['showDocument']) {
			let currentDocument = parseInt(event.data['showDocument']);
			console.log('showDocument',currentDocument);
			mp.trigger('showDocument',currentDocument);
		}
    });
};
let auctionList = [
	{
		Id: 0,
		Time: 'до 22.22',
		Text:'asdasdadadas',
		Price:25252525,
		Seller: 'Государство'
	}
]
function pushGoverment(auctionList,playerInfo,admin,date)
{
	$(auctionList).each(function(index,item){
			let template = `
				<div class="point-item-wrap">
					<div class="clients-block">
						<div class="clients-list">
							<div class="client-item">Александр Нонеймп</div>
						</div>
						<div class="button" id="clients" style="display:none;">Участники</div>
						<div class="button" id="startAuction" data-index="${index}">Участвовать</div>
						<div class="button" id="change" style="display:none;">Редактировать</div>
					</div>
					<div class="inform-block">
						<div class="ident">#${item.ID}</div>
						<div class="timer-wrap">
							<div class="timer-text">Конец аукциона в</div>
							<div class="timer-counter">
								<span class="hours">${item.Time}</span>
							</div>
						</div>
						<div class="pay-block" id="seller">
							<div class="pay-text">Продающий</div>
							<div class="pay-price">${item.Seller}</div>
						</div> 						
						<div class="title-block">${item.Text}</div>
						<div class="pay-block">
							<div class="pay-price"><span class="pay-count">${item.Price}</span>$</div>
							<div class="pay-text">Сумма</div>
						</div>    
					</div>
				</div>`;
			$('.auction-wrap .point-items-wrapper').append(template);
	});
	$('.auction-wrap #startAuction').on('click',function(){
		let currentIndex = $(this).attr('data-index');
		console.log(playerInfo.FullName,auctionList[currentIndex]);
		$('.auction-wrap .auction-window input').attr({'data-id':auctionList[currentIndex].ID,'min':auctionList[currentIndex].Price,'value':auctionList[currentIndex].Price});
		$('.auction-wrap .auction-window #acceptAuction').removeClass('disabled');
		$('.auction-wrap .auction-window').fadeIn().css('display','flex');
	});
	$('.auction-wrap .auction-window input').on('keyup',function(){
		let price = parseInt($(this).val());
		console.log(price);
		if(price < $('.auction-wrap .auction-window input').attr('min'))
		{
			console.log(price,'in');
			$('.goverment-wrapper .auction-wrap .button-wrapper .button#acceptAuction').addClass('disabled');
			// $('.auction-window span').append('<span class="red">!</span>');
			$(this).addClass('error');
		}
		else
		{
			$(this).removeClass('error');
			$('.auction-window span span.red').remove();
			$('.goverment-wrapper .auction-wrap .button-wrapper .button#acceptAuction').removeClass('disabled');
		}
	});
	$('.auction-wrap #acceptAuction').on('click',function(){
		if(!$(this).hasClass('disabled'))
		{
			let id = parseInt($('.auction-wrap .auction-window input').attr('data-id')),
				price = parseInt($('.auction-wrap .auction-window input').val());
			console.log('attendAuction',playerInfo.FullName,id,price);
			$(this).parent().parent().fadeOut();
			$(this).addClass('disabled');
			mp.trigger('attendAuction',playerInfo.FullName,id,price);
		}
	});
	// $('.auction-wrap .auction-window input').on('keyup',function(){
	// 	$(this).removeClass('error');
	// 	$('.auction-window span span.red').remove();
	// });
	$('.auction-wrap #closeAuction').on('click',function(){
		$(this).parent().parent().fadeOut();
	});	
	// $('.goverment-wrapper #main-law-text iframe').attr('src','http://server.sansararp.com/goverment/mainlaw');
	// $('.goverment-wrapper #other-law-text iframe').attr('src','http://server.sansararp.com/goverment/otherlaw');
	adminInit(admin);
	let sendObj = {
		name: playerInfo.FullName,
		rank: playerInfo.Rank,
		date: date
	};
	$('.ads-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
	$('.decree-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
	$('.order-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
	window.addEventListener('message', function(event) {       
		if (event.data['RefreshAds']) {
			console.log('RefreshAds');
			$('.ads-wrap iframe')[0].contentWindow.postMessage({'Admin': admin},'*');
			$('.ads-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
		}
		if (event.data['RefreshDecrees']) {
			console.log('RefreshDecrees');
			$('.decree-wrap iframe')[0].contentWindow.postMessage({'Admin': admin},'*');
			$('.decree-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
		}
		if (event.data['RefreshOrders']) {
			console.log('RefreshOrders');
			$('.order-wrap iframe')[0].contentWindow.postMessage({'Admin': admin},'*');
			$('.order-wrap iframe')[0].contentWindow.postMessage({'playerInfo': sendObj},'*');
		}
	});
}	
function adminInit(admin)
{
	$('.ads-wrap iframe')[0].contentWindow.postMessage({'Admin': admin},'*');
	$('.order-wrap iframe')[0].contentWindow.postMessage({'Admin': admin},'*');
	$('.decree-wrap iframe')[0].contentWindow.postMessage({'Admin': admin},'*');
	$('.law-wrap #main-law-text iframe')[0].contentWindow.postMessage({'Admin': admin},'*');
	$('.law-wrap #other-law-text iframe')[0].contentWindow.postMessage({'Admin': admin},'*');
}