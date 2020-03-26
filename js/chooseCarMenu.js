let evidenceList = [];
function pushCarChoose(arr)
{
    evidenceList = arr; 
    $('.container .garage-wrapper').empty();
    $(evidenceList).each(function(index,item){
        let currentElement = item.split('@'),
            template = `
                <div class="garage-item" data-id="${currentElement[1]}">
                    <div class="img-block">
                        <img src="img/tablet/cars/${currentElement[0]}.jpg" alt="">
                        <div class="characters">
                            <div class="char-wrapper">${currentElement[2]}</div>                            
                        </div>
                    </div>
                    <div class="garage-name" style="text-align:center;text-transform:capitalize;">${currentElement[0]} - [${currentElement[1]}]</div>
                </div>`;
        $('.container .garage-wrapper').append(template);
    });
    initGarage();
}
function initGarage()
{
    $('.garage-item').on('click',function(){
        if(!$(this).hasClass('closed'))
        {
            if($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                $('.button#use').addClass('disabled');
            }
            else
            {
                $('.button#use').removeClass('disabled');
                $('.garage-item.active').removeClass('active');
                $(this).addClass('active');
            }
        }
    });
    $('.button#use').on('click',function(){
        if($('.garage-item.active').length != 0)
        {
            let active = parseInt($('.garage-item.active').attr('data-id'));
            console.log(active);
            $('.button#use').addClass('disabled');
            $('.garage-wrapper .active').removeClass('active');
            mp.trigger('ChooseCar',active);
        }
    });
    $('.button#close').on('click',function(){
        mp.trigger('closeChooseCarMenu');
    });
}
function fadeOut()
{
	$('.container').fadeOut();
}
function fadeIn()
{	
	$('.container').fadeIn();
}