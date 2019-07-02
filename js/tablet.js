const wallpaperList = [ 0,1,2];
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
$('.main-wrapper .settings').on('click',function(){
    $('.main-wrapper').removeClass('active').fadeOut();
	$('.settings-wrapper').addClass('active').fadeIn();
    backButtonCheck();
});
function backButtonCheck()
{
    if(!$('.container > .active').hasClass('main-wrapper'))
    {
        if($('.container > .active').hasClass('news-wrapper'))
        {
            $('.back-but').css({'color':'#00aeef','border-color':'#00aeef','background-color':$('.container > .active').css('background-color')});
        }
        else
        {
            $('.back-but').css({'color':'#fff','border-color':'#fff','background-color':'transparent'});
        }
        $('.back-but').fadeIn();
    }
    else
    {
        $('.back-but').fadeOut();
    }
}
$('.back-but').on('click',function(){
    $('.container > .active').removeClass('active').fadeOut();
    $('.main-wrapper').addClass('active').fadeIn();    
    backButtonCheck();
});
$('.main-wrapper .news').on('click',function(){
    $('.main-wrapper').removeClass('active').fadeOut();
	$('.news-wrapper').addClass('active').fadeIn();
    backButtonCheck();
});
$('.main-wrapper .goverment').on('click',function(){
    $('.main-wrapper').removeClass('active').fadeOut();
	$('.goverment-wrapper').addClass('active').fadeIn();
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
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		loopBottom: true,
		navigation: true
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
	let currentNav = $('#fp-nav').css('right','0px');
	$('#fp-nav').remove();
	$('.news-wrapper').append(currentNav);
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

