$('.cash, .card').on('click',function(){
    let clothesPrice = $('.buy-buttons .price span')[0].textContent;
    if(clothesPrice != 0)
    {
        $('#buy').removeClass('disabled');
    }
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
        let mechanicalPrice = $('.buy-buttons .price span')[0].textContent;
        let cashService = $('.radio-block .active')[0].classList[0];
        let output = JSON.stringify(generateJsonOutput());
        $(this).addClass('disabled');
        modsRefresh();   
        if(mechanicalPrice != 0)
        {
            console.log("mechanicalBuyButton", cashService, mechanicalPrice, output);
            mp.trigger("mechanicalBuyButton", cashService, mechanicalPrice, output);
        }
    }
});
$('#cancel, #pass').on('click',function(){
	$(this).parents().find('.information').fadeOut();
});
$('.btn.exit').on('click',function(){
	// $('.container').fadeOut();
    mp.trigger("mechanicalExit");
});
const modsList = [      
    { name: 'spoilers',translatedName: '',id:'0'},
    { name: 'frontBumper',translatedName: '',id:'1'},
    { name: 'rearBumper',translatedName: '',id:'2'},
    { name: 'sideSkirt',translatedName: '',id:'3'},
    { name: 'exhaust',translatedName: '',id:'4'},
    { name: 'frame',translatedName: '',id:'5'},
    { name: 'grille',translatedName: '',id:'6'},
    { name: 'hood',translatedName: '',id:'7'},
    { name: 'fender',translatedName: '',id:'8'},
    { name: 'rightFender',translatedName: '',id:'9'},
    { name: 'roof',translatedName: '',id:'10'},
    { name: 'engine',translatedName: '',id:'11'},
    { name: 'brakes',translatedName: '',id:'12'},
    { name: 'transmission',translatedName: '',id:'13'},
    { name: 'horns',translatedName: '',id:'14'},
    { name: 'suspension',translatedName: '',id:'15'},
    { name: 'armor',translatedName: '',id:'16'},
    { name: 'turbo',translatedName: '',id:'18'},
    { name: 'xenon',translatedName: '',id:'22'},
    { name: 'frontWheels',translatedName: '',id:'23'},
    { name: 'backWheels',translatedName: '',id:'24'},
    { name: 'plateholders',translatedName: '',id:'25'},
    { name: 'trimDesign',translatedName: '',id:'27'},
    { name: 'ornaments',translatedName: '',id:'28'},
    { name: 'dialDesign',translatedName: '',id:'30'},
    { name: 'steeringWheel',translatedName: '',id:'33'},
    { name: 'shiftLever',translatedName: '',id:'34'},
    { name: 'plaques',translatedName: '',id:'35'},
    { name: 'hydraulics',translatedName: '',id:'38'},
    { name: 'livery',translatedName: '',id:'48'},
    { name: 'plate',translatedName: '',id:'62'},
    { name: 'colour1',translatedName: '',id:'66'},
    { name: 'colour2',translatedName: '',id:'67'},
    { name: 'windowTint',translatedName: '',id:'69'},
    { name: 'dashboardColor',translatedName: '',id:'74'},
    { name: 'trimColor',translatedName: '',id:'75'}    
];
let modsArr = [];
$(modsList).each(function(index,item){
    modsArr[item.name] = [];
});
function pushMechanicalShop(json)
{
    var itemList = JSON.parse(json);
    $(itemList).each(function(index,item){      
        let obj = 
        {
            id: item.id,
            price: item.price,
            count: parseInt(item.count)
        }
        var colorCount = JSON.parse(JSON.stringify(obj.count));
        if(colorCount != 0)
        {
            obj.count = [];
            for (i=1;i<=colorCount;i++)
            {
                obj.count.push(i);
            }   
        }
        $(modsList).each(function(index,classEl){
            if(obj.id == classEl.id)
            {
                obj.name = classEl.name;
                modsArr.push(obj);
            }
        });        
    }); 
    modsInit();
    modsInitialize();
};
function modsInit()
{
    $('.main-block .wrapper').empty();
    $(modsArr).each(function(index,item){
        var template = `
                <div class="mod-item" id="${item.name}">
                    <div class="remove-but">Снять</div>
                    <div class="title-wrap">
                        <i class="fas fa-chevron-left"></i>
                    <div class="title" data-index="${index}" data-item="0" data-price="0">${item.name}</div>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>`;
        $('.main-block .wrapper').append(template);
    });
}
function modsRefresh()
{
    modsInit();
    modsInitialize();
    countPrice();
};
function modsInitialize()
{
    $('.title-wrap .fa-chevron-left, .title-wrap .fa-chevron-right').on('click',function(){
        $('#buy').removeClass('disabled');
        var clicker = $(this);  
        var element = $(this).parent().find('.title');
        var currentAttr = $(element).attr('data-item');
        var currentIndex = $(element).attr('data-index');
        var parent = $(element).parent().parent()[0].id;
        if($(clicker).hasClass('fa-chevron-left'))
        {
            if(currentAttr > 0)
            {
                currentAttr--;
            }
            else
            {
                let length = modsArr[currentIndex].count.length - 1;
                currentAttr = length;
            }
            $(element).attr('data-item',currentAttr);
            $(element).attr('data-price',modsArr[currentIndex].price[currentAttr]);
            $(element).attr('data-counted', false);
            $(element).text(modsArr[currentIndex].name+`(${currentAttr})`);
            countPrice();
            console.log(modsArr[currentIndex].id, currentAttr);
            mp.trigger("putMechanical",modsArr[currentIndex].id, currentAttr);
        }
        if($(clicker).hasClass('fa-chevron-right'))
        {
            if(currentAttr < modsArr[currentIndex].count.length - 1)
            {
                currentAttr++;
            }
            else
            {
                currentAttr = 0;
            }
            $(element).attr('data-item',currentAttr);
            $(element).attr('data-price',modsArr[currentIndex].price[currentAttr]);
            $(element).attr('data-counted', false);
            $(element).text(modsArr[currentIndex].name+`(${currentAttr})`);
            countPrice();
            mp.trigger("putMechanical",modsArr[currentIndex].id, currentAttr);
        }    
    });
    $('.mod-item .remove-but').on('click',function(){
        let currentIndex = modsArr[parseInt($(this).parent().find('.title').attr('data-index'))], 
            currentId = currentIndex.id;
        console.log(currentId);
        $(this).parent().find('.title').attr({'data-item':0,'data-price':0});
        countPrice();
        $(this).parent().find('.title').text(currentIndex.name+`(0)`);
        mp.trigger('removeMechanical',currentId);
    });
};
function countPrice()
{
    var fullPrice = 0;
    $('.mod-item').each(function(index,item){
        if(!$(item).find('.title').attr('data-counted'));
        {
            $(item).find('.title').attr('data-counted', true);
            let currentPrice = parseInt($(item).find('.title').attr('data-price'));
            fullPrice += currentPrice;
        }
    });
    $('.right-wrap .price span').text(fullPrice);
};
function generateJsonOutput()
{
    var arr = [];
    $('.mod-item').each(function(index,item){     
        let currentIndex = $(item).find('.title').attr('data-index');
        let currentAttr = $(item).find('.title').attr('data-item'); 
        if(currentAttr != 0)
        {
            arr.push({ 
                id:parseInt(modsArr[parseInt(currentIndex)].id), 
                item:parseInt(currentAttr) 
            });
            let length = arr.length-1;
        }      
    });
    console.log('after',arr);
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
        mp.trigger("cameraMechanical", id, val);
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
