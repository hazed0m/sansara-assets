$('.container').fadeIn(1000).css('display','flex');
function comaFadeOut(){
	$('.container').fadeOut(1000);
	mp.trigger('comaScreenOff');
};