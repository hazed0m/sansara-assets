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
        let clothesPrice = $('.buy-buttons .price span')[0].textContent;
        let cashService = $('.radio-block .active')[0].classList[0];
        let output = JSON.stringify(generateJsonOutput());
        $(this).addClass('disabled');
        clothesRefresh();   
        mp.trigger("clothesBuyButton", cashService, clothesPrice, output);
    }
});
$('#cancel, #pass').on('click',function(){
	$(this).parents().find('.information').fadeOut();
});
$('.btn.exit').on('click',function(){
	// $('.container').fadeOut();
    mp.trigger("clothesExit");
});
var className = 
    [
       "Маска",   
       "Шляпа",
       "Очки",
       "Аксессуар",
       "Торс",
       "Рубашка",
       "Куртка",
       "Серьги",
       "Браслет",
       "Низ",
       "Часы",
       "Бронежилет",
       "Обувь",
       "Сумка"
    ],
    clothesArr = [];    
clothesArr["Маска"] = [];   
clothesArr["Шляпа"] = [];
clothesArr["Очки"] = [];
clothesArr["Аксессуар"] = [];
clothesArr["Торс"] = [];
clothesArr["Рубашка"] = [];
clothesArr["Куртка"] = [];
clothesArr["Серьги"] = [];
clothesArr["Браслет"] = [];
clothesArr["Низ"] = [];
clothesArr["Часы"] = [];
clothesArr["Бронежилет"] = [];
clothesArr["Обувь"] = [];
clothesArr["Сумка"] = [];
function pushClothesShop(json)
{
    var itemList = JSON.parse(json);
    $(itemList).each(function(index,item){      
        let obj = 
        {
            name: item.name,
            price: item.price
        }
        $(className).each(function(index,classEl){
            if(obj.name.includes(classEl))
            {
                clothesArr[classEl].push(obj);
            }
        });        
    }); 
    checkClothesArr();
    clothesInitialize();
};
function checkClothesArr()
{
    $(className).each(function(index,item){
        if(clothesArr[item].length == 0)
        {
            $('.clothes-item#'+ item).css('display','none');
        }
    });    
}

function clothesRefresh()
{
    $('.container .main-block .wrapper').empty().append(clothesTemplate);
    clothesInitialize();
    countPrice();
};
function clothesInitialize()
{
    $('.toogle .fa-chevron-left, .toogle .fa-chevron-right').on('click',function(){
        $('#buy').removeClass('disabled');
        var clicker = $(this);        
        var element = $(this).parent().find('.color');  
        var parent = $(element).parent().parent().parent()[0].id;
        var itemAttr = $(element).parent().parent().parent().find('.title').attr('data-item');
        var itemIndex = $(element).parent().parent().parent().find('.title').attr('data-index');
        if(itemAttr != -1)
        {
            var item = clothesArr[className[itemIndex]][itemAttr].name;
        }
        else
        {
            var item = 'current';
        }
        if($(clicker).hasClass('fa-chevron-left'))
        {
            mp.trigger("clothesSelectColor", item, 'prev');
        }
        if($(clicker).hasClass('fa-chevron-right'))
        {
            mp.trigger("clothesSelectColor", item, 'next');
        }
    });
    $('.title-wrap .fa-chevron-left, .title-wrap .fa-chevron-right').on('click',function(){
        $('#buy').removeClass('disabled');
        var clicker = $(this);  
        var element = $(this).parent().find('.title');
        var currentAttr = $(element).attr('data-item');
        var currentIndex = $(element).attr('data-index');
        var parent = $(element).parent().parent()[0].id;
        if($(clicker).hasClass('fa-chevron-left') && currentAttr > 0)
        {
            currentAttr--;
            $(element).attr('data-item',currentAttr);
            $(element).attr('data-price',clothesArr[className[currentIndex]][currentAttr].price);
            $(element).attr('data-counted', false);
            $(element).text(clothesArr[className[currentIndex]][currentAttr].name);
            countPrice();
            mp.trigger("wearClothes",clothesArr[className[currentIndex]][currentAttr].name);
        }
        if($(clicker).hasClass('fa-chevron-right') && currentAttr < clothesArr[className[currentIndex]].length - 1)
        {
            currentAttr++;
            $(element).attr('data-item',currentAttr);
            $(element).attr('data-price',clothesArr[className[currentIndex]][currentAttr].price);
            $(element).attr('data-counted', false);
            $(element).text(clothesArr[className[currentIndex]][currentAttr].name);
            countPrice();
            mp.trigger("wearClothes",clothesArr[className[currentIndex]][currentAttr].name);
        }    
    });
};
function countPrice()
{
    var fullPrice = 0;
    $('.clothes-item').each(function(index,item){
        if(!$(item).find('.title').attr('data-counted'));
        {
            $(item).find('.title').attr('data-counted', true);
            let currentPrice = parseInt($(item).find('.title').attr('data-price'));
            console.log(currentPrice);
            fullPrice += currentPrice;
        }
    });
    $('.right-wrap .price span').text(fullPrice);
};
function generateJsonOutput()
{
    var arr = [],
        temp = [],
        upperAttr = 0;
    $('.clothes-item').each(function(index,item){     
        let currentIndex = $(item).find('.title').attr('data-index');
        let currentAttr = $(item).find('.title').attr('data-item');   
        if(currentIndex == 4 || currentIndex == 5 || currentIndex == 6)
        {
            if(clothesArr[className[currentIndex]][currentAttr] != undefined)
            {
                temp.push(clothesArr[className[currentIndex]][currentAttr]);
                upperAttr = 1;
            }   
            else 
            {
                temp.push({'name':`${className[currentIndex]} Текущ.`,'price':0});
            }          
            if(currentIndex == 6)
            {
                if(upperAttr != 0)
                {
                   $.merge(arr,temp);
                }
            }           
        }
        else
        {
            if(currentAttr != -1)
            {
                arr.push(clothesArr[className[currentIndex]][currentAttr]);
            }            
        }      
    });
    return arr;
};
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
var clothesTemplate = `
                <div class="clothes-item" id="Маска">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                    <div class="title" data-index="0" data-item="-1" data-price="0" data-price="0">Маска (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="clothes-item" id="Шляпа">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                    <div class="title" data-index="1" data-item="-1" data-price="0">Шляпа (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="clothes-item" id="Очки">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                    <div class="title" data-index="2" data-item="-1" data-price="0">Очки (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="clothes-item" id="Аксессуар">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                <div class="title" data-index="3" data-item="-1" data-price="0">Аксессуар (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="upper-wrapper">
                <div class="category">Верх</div>
                <div class="clothes-item" id="Торс">
                    <div class="title-wrap">
                        <i class="fas fa-chevron-left"></i>
                    <div class="title" data-index="4" data-item="-1" data-price="0">Торс (<span>Тек.</span>)</div>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <div class="toogle">
                        <i class="fas fa-chevron-left"></i>
                        <div class="color-list">
                            <div class="color">Цвет</div>
                        </div>			
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
                <div class="clothes-item" id="Рубашка">
                    <div class="title-wrap">
                        <i class="fas fa-chevron-left"></i>
                    <div class="title" data-index="5" data-item="-1" data-price="0">Рубашка (<span>Тек.</span>)</div>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <div class="toogle">
                        <i class="fas fa-chevron-left"></i>
                        <div class="color-list">
                            <div class="color">Цвет</div>
                        </div>			
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
                <div class="clothes-item" id="Куртка">
                    <div class="title-wrap">
                        <i class="fas fa-chevron-left"></i>
                    <div class="title" data-index="6" data-item="-1" data-price="0">Куртка (<span>Тек.</span>)</div>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <div class="toogle">
                        <i class="fas fa-chevron-left"></i>
                        <div class="color-list">
                            <div class="color">Цвет</div>
                        </div>			
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
                <div class="category">Верх</div>
            </div>	
            <div class="clothes-item" id="Серьги">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                <div class="title" data-index="7" data-item="-1" data-price="0">Серьги (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="clothes-item" id="Браслет">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                <div class="title" data-index="8" data-item="-1" data-price="0">Браслет (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="clothes-item" id="Низ">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                <div class="title" data-index="9" data-item="-1" data-price="0">Низ (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="clothes-item" id="Часы">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                <div class="title" data-index="10" data-item="-1" data-price="0">Часы (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="clothes-item" id="Бронежилет">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                <div class="title" data-index="11" data-item="-1" data-price="0">Бронежилет (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="clothes-item" id="Обувь">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                <div class="title" data-index="12" data-item="-1" data-price="0">Обувь (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="clothes-item" id="Сумка">
                <div class="title-wrap">
                    <i class="fas fa-chevron-left"></i>
                <div class="title" data-index="13" data-item="-1" data-price="0">Сумка (<span>Тек.</span>)</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="toogle">
                    <i class="fas fa-chevron-left"></i>
                    <div class="color-list">
                        <div class="color">Цвет</div>
                    </div>			
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>`;