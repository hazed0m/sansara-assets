$('.cash, .card').on('click',function(){
    $('#buy').removeClass('disabled');
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
    if(!$(this).hasClass('disabled'))
    {
        let makeupPrice = $('.buy-buttons .price span')[0].textContent;
        let cashService = $('.radio-block .active')[0].classList[0];
        $(this).addClass('disabled');
        makeupRefresh();
        mp.trigger("makeupBuyButton", cashService, makeupPrice);
    }
});
$('#cancel, #pass').on('click',function(){
	$(this).parents().find('.information').fadeOut();
});
$('.btn.exit').on('click',function(){
	// $('.container').fadeOut();
    mp.trigger("makeupExit");
});


var currentRange = 0,
opacitys = [100, 100, 100, 100, 100],
sex = '';
const manHairlist = [
// male
 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,

 21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,72,73 
];
// female
const girlHairlist =
[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,

 21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,76,77];
const makeupList = [
// борода
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
// makeup
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,
    29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
    55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74],
// blush
    [0,1,2,3,4,5,6],
// lipstick
    [0,1,2,3,4,5,6,7,8,9]
];
const colorList = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
                    18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,
                    34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,
                    50,51,52,53,54,55,56,57,58,59,60,61,62,63];
function makeupRefresh()
{
    $('.container .main-block .wrapper').empty().append(makeupTemplate);
    initializeMakeup(sex);
    $('.right-wrap .price span').text('0');
}
function initializeMakeup(input)
{
    sex = input;
    $(function() {
        $('input[type="range"]').on('input change', function(e) {
            let id = e.target.id,
                val = e.target.value;
            $(e).val(val).change();
            var currentItem = $(this).parent().find('.title span').text();
            switch (id) {
                case 'haircut':
                    currentRange = 0;
                    opacitys[currentRange] = val;
                    break;
                case 'makeup':
                    currentRange = 1;
                    opacitys[currentRange] = val;
                    break;
                case 'blush':
                    currentRange = 2;
                    opacitys[currentRange] = val;
                    break;
                case 'lipstick':
                    currentRange = 3;
                    opacitys[currentRange] = val;
                    break;
                case 'beard':
                    currentRange = 4;
                    opacitys[currentRange] = val;
                    break;
            } 
            mp.trigger("makeupRange", id, val, currentItem);
        });
    
        $('input[type=range]').rangeslider({
        polyfill: false,
        change: function(e) {
            console.log(e)
        }
        });
    });
    $('.toogle .fa-chevron-left, .toogle .fa-chevron-right').on('click',function(){
        $('#buy').removeClass('disabled');
        var clicker = $(this);
        var length = colorList.length-1;          
        var element = $(this).parent().find('.color');  
        var parent = $(element).parent().parent().parent()[0].id;  
        var currentAttr = element[0].attributes[1].value;
        if($(clicker).hasClass('fa-chevron-left') && element[0].attributes[1].value != 0)
        {
            currentAttr--;
            $(element).attr('data-color',currentAttr);
            $(element).text(colorList[currentAttr]);
            mp.trigger("selectColor", parent, colorList[currentAttr]);
        }
        if($(clicker).hasClass('fa-chevron-right') && element[0].attributes[1].value != length )
        {
            currentAttr++;
            $(element).attr('data-color',currentAttr);
            $(element).text(colorList[currentAttr]);
            mp.trigger("selectColor", parent, colorList[currentAttr]);
        }
    });
    $('.title-wrap .fa-chevron-left, .title-wrap .fa-chevron-right').on('click',function(){
        $('#buy').removeClass('disabled');
        var clicker = $(this);
        var beardLength = makeupList[0].length-1;
        var makeupLength = makeupList[1].length-1;     
        var blushLength = makeupList[2].length-1;
        var lipstickLength = makeupList[3].length-1;
        var manHaircutLength = manHairlist.length-1;
        var girlHaircutLength = girlHairlist.length-1;
        var currentItem = { title:'', length: '', list: [], opacity: 0};
        var element = $(this).parent().find('.title');
        var currentAttr = element[0].attributes[1].value;
        switch ($(this).parent().parent()[0].id) {
          case 'beard':
            currentItem.title = 'beard';
            currentItem.length = beardLength;
            currentItem.list = makeupList[0];
            currentItem.opacity = opacitys[4];
            break;
          case 'makeup':
            currentItem.title = 'makeup';
            currentItem.length = makeupLength;   
            currentItem.list = makeupList[1];
            currentItem.opacity = opacitys[1];
            break;
          case 'blush':
            currentItem.title = 'blush';
            currentItem.length = blushLength;
            currentItem.list = makeupList[2];
            currentItem.opacity = opacitys[2];
            break;
          case 'lipstick':
            currentItem.title = 'lipstick';
            currentItem.length = lipstickLength;
            currentItem.list = makeupList[3];
            currentItem.opacity = opacitys[3];
            break;
          case 'haircut':
            switch (sex) {
                case 'man':
                    currentItem.length = manHaircutLength;
                    currentItem.list = manHairlist;
                    break;
                case 'girl':
                    currentItem.length = girlHaircutLength;
                    currentItem.list = girlHairlist;
                    break;
            }
            currentItem.opacity = opacitys[0];
            currentItem.title = 'haircut';
            break;
        }
        if($(clicker).hasClass('fa-chevron-left') && currentAttr > 0 && sex != '')
        {
            currentAttr--;
            $(element).attr('data-item',currentAttr);
            $(element).find('span').text(currentItem.list[currentAttr]);  
            mp.trigger("makeupRange", currentItem.title, currentItem.opacity , currentItem.list[currentAttr]);
        }
        if($(clicker).hasClass('fa-chevron-right') && currentAttr != currentItem.length && sex != '')
        {
            currentAttr++;
            $(element).attr('data-item',currentAttr);
            $(element).find('span').text(currentItem.list[currentAttr]);
            if(currentAttr == 0)
            {
                countPrice(currentItem.title);
            }            
            mp.trigger("makeupRange", currentItem.title, currentItem.opacity , currentItem.list[currentAttr]);
        }    
    });
}
function countPrice(currentIterator)
{
    const haircut  = 100,
          makeup   = 60,
          blush    = 60,
          lipstick = 60,
          beard    = 50;
    let cost = 0;
    switch(currentIterator)
    {
        case 'haircut':
        cost = haircut;
            break; 
        case 'makeup':
        cost = makeup;
            break; 
        case 'blush':
        cost = blush;
            break; 
        case 'lipstick':
        cost = lipstick;
            break; 
        case 'beard':
        cost = beard;
            break; 
    }
    let currentPrice = $('.right-wrap .price span').text();
    $('.right-wrap .price span').text(parseInt(currentPrice)+cost);
}
let currentRangeRotate = 0;
$(function() {
    $('.rotate input[type="range"]').on('input change', function(e) {
        let id = e.target.id,
            val = e.target.value;
        $(e).val(val).change();
        switch (id) {
            case 'cameraHeight':
                currentRangeRotate = 0;
                break;
            case 'cameraRotate':
                currentRangeRotate = 1;
                break;
        }
        mp.trigger("cameraMakeup", id, val);
    });
    
    $('input[type=range]').rangeslider({
      polyfill: false,
      change: function(e) {
          console.log(e)
      }
    });
});
$('#resetCamera').on('click',function(){
    let fillWidth = $('.rotate .rangeslider--horizontal').css('width');
    $('.rotate .rangeslider__fill').css('width', `${parseInt(fillWidth)/2}px`);
    $('.rotate .rangeslider__handle').css('left', `${(parseInt(fillWidth)/2)-6}px`);
    mp.trigger("resetCamera");
});

var makeupTemplate = `<div class="makeup-item" id="haircut">
                        <div class="title-wrap">
                            <i class="fas fa-chevron-left"></i>
                            <div class="title" data-item="-1">Прическа (<span>Тек.</span>)</div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="toogle">
                            <i class="fas fa-chevron-left"></i>
                            <div class="color-list">
                                <div class="color" data-color="-1">Цвет</div>
                            </div>			
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        </div>
                        <div class="makeup-item" id="makeup">
                        <div class="title-wrap">
                            <i class="fas fa-chevron-left"></i>
                            <div class="title" data-item="-1">Макияж (<span>Тек.</span>)</div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <input type="range" class="slick appearanceOpacity" value="100" min="0" max="100" step="1" id="makeup">
                        </div>
                        <div class="makeup-item" id="blush">
                        <div class="title-wrap">
                            <i class="fas fa-chevron-left"></i>
                            <div class="title" data-item="-1">Румяна (<span>Тек.</span>)</div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="toogle">
                            <i class="fas fa-chevron-left"></i>
                            <div class="color-list">
                                <div class="color" data-color="-1">Цвет</div>
                            </div>			
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <input type="range" class="slick appearanceOpacity" value="100" min="0" max="100" step="1" id="blush">
                        </div>
                        <div class="makeup-item" id="lipstick">
                        <div class="title-wrap">
                            <i class="fas fa-chevron-left"></i>
                        <div class="title" data-item="-1">Помада (<span>Тек.</span>)</div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="toogle">
                            <i class="fas fa-chevron-left"></i>
                            <div class="color-list">
                                <div class="color" data-color="-1">Цвет</div>
                            </div>			
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <input type="range" class="slick appearanceOpacity" value="100" min="0" max="100" step="1" id="lipstick">
                        </div>
                        <div class="makeup-item" id="beard">
                        <div class="title-wrap">
                            <i class="fas fa-chevron-left"></i>
                        <div class="title" data-item="-1">Борода (<span>Тек.</span>)</div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="toogle">
                            <i class="fas fa-chevron-left"></i>
                            <div class="color-list">
                                <div class="color" data-color="-1">Цвет</div>
                            </div>			
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <input type="range" class="slick appearanceOpacity" value="100" min="0" max="100" step="1" id="beard">
                        </div>`;