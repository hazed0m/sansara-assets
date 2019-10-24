var shopList = [],
	basketList = [],
	currentShopType = '',
	typeName = 
    [
        'Eat',                                              
        'Drink', 
        'Alcohol', 
        'Instrument', 
        'Clothes_Legal', 
        'Clothes_Duty', 
        'Clothes_Illegal', 
        'Weapon_Cold', 
        'Weapon_FireGun_Legal', 
        'Weapon_FireGun_Police',
        'Weapon_FireGun_Illegal',
        'Medical_Preparation',
        'Illegal_Object',
        'LegalObject',
        'Resourses',
        'Recycled_Resources',
        'Craft_Resources',
        'Documents',
        'Ammo'
    ],
	typeNameTranslated = 
    [
        'Еда',                                              
        'Напитки', 
        'Алкоголь', 
        'Инструменты', 
        'Одежда легал.', 
        'Одежда форм.', 
        'Одежда нелегал.', 
        'Оружие холодн.', 
        'Огнестрел. легал.', 
        'Огнестрел. полиц.',
        'Огнестрел. нелегал.',
        'Мед. препараты',
        'Нелегал. предметы',
        'Легал. предметы',
        'Ресурсы',
        'Перераб. ресурсы',
        'Крафт ресурсы',
        'Документы',
        'Патроны'
    ],
	weaponsList = [
		{name:'flashlight',type:'Weapon_Cold',legal:'legal'},
		{name:'brass-knuckles',type:'Weapon_Cold',legal:'illegal'},
		{name:'knife',type:'Weapon_Cold',legal:'legal'},
		{name:'machete',type:'Weapon_Cold',legal:'illegal'},
		{name:'f-knife',type:'Weapon_Cold',legal:'legal'},
		{name:'nightstick',type:'Weapon_Cold',legal:'police'},
		{name:'pistol',type:'Weapon_FireGun_Legal',legal:'legal'},
		{name:'pistol-mk2',type:'Weapon_FireGun_Legal',legal:'legal'},
		{name:'combat-pistol',type:'Weapon_FireGun_Police',legal:'police'},
		{name:'ad-pistol',type:'Weapon_FireGun_Illegal',legal:'illegal'},
		{name:'stun-gun',type:'Weapon_Cold',legal:'legal'},
		{name:'pistol-50',type:'Weapon_FireGun_Police',legal:'police'},
		{name:'heavy-pistol',type:'Weapon_FireGun_Police',legal:'police'},
		{name:'micro-smg',type:'Weapon_FireGun_Illegal',legal:'illegal'},
		{name:'smg',type:'Weapon_FireGun_Police',legal:'police'},
		{name:'smg-mk2',type:'Weapon_FireGun_Illegal',legal:'illegal'},
		{name:'assault-smg',type:'Weapon_FireGun_Police',legal:'police'},
		{name:'combat-pdw',type:'Weapon_FireGun_Police',legal:'police'},
		{name:'shotgun',type:'Weapon_FireGun_Police',legal:'police'},
		{name:'sawed-off-shotgun',type:'Weapon_FireGun_Illegal',legal:'illegal'},
		{name:'assault-rifle',type:'Weapon_FireGun_Illegal',legal:'illegal'},
		{name:'carbine-rifle',type:'Weapon_FireGun_Police',legal:'police'},
		{name:'bullpup-rifle-mk2',type:'Weapon_FireGun_Police',legal:'police'},
		{name:'sniper-rifle',type:'Weapon_FireGun_Police',legal:'police'}
	],
	weaponsListTranslated = [
		'фонарик',
		'кастет',
		'охотничий нож',
		'мачете',
		'выкидной нож',
		'дубинка',
		'пистолет 9 п',
		'пистолет mk ii',
		'боевой пистолет',
		'ар пистолет',
		'электрошокер',
		'пистолет .50',
		'тяжелый пистолет',
		'микро smg',
		'smg',
		'smg mk ii',
		'штурмовое smg',
		'боевая pdw',
		'помповый дробовик mk ii',
		'обрез',
		'штурмовая винтовка',
		'карабин винтовка',
		'самозарядная винтовка mk ii',
		'снайперская винтовка'
	];
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
    let clothesPrice = $('.bottom-wrap .price span')[0].textContent;
    let cashService = $('.radio-block .active')[0].classList[0];
    if(basketList.length > 0)
    {
		let output = JSON.stringify(basketList);
		$('.basket-item').fadeOut();
		basketList = [];
		setTimeout(function(){
			shopListRefresh();
		},300);		
    	mp.trigger("shopBuyButton", cashService, clothesPrice, output);
    }    
});
$('.exit-but').on('click',function(){
	mp.trigger("shopExit");
});
function pushShopList(element, shopType)
{
	shopList = [];
	currentShopType = shopType;
	let currentElem = JSON.parse(element);
	$(currentElem).each(function(index,item){
		let obj = {
			name: item.name,
			price: item.price,
			type: item.type
		};
		shopList.push(obj);
	});
	$('.basket-wrap .basket-list').css("background-image",`url(img/shop/${currentShopType}.png)`);
	shopListRefresh();
	clearBasket();
};
function shopListRefresh()
{
	let container = $('.shop-inner');
	container.empty();
	$(shopList).each(function(index,item){
		var path = 'inventory',
			currentImg = item.type,
			legalAttr = ``,
			legalId = ``;
		if(item.type == 'Weapon_Cold' || item.type == 'Weapon_FireGun_Legal' || item.type == 'Weapon_FireGun_Police' || item.type == 'Weapon_FireGun_Illegal')
		{
			path = 'weapons';
			if(item.name.toLowerCase().includes('пистолет 9 п') ||  item.name.toLowerCase().includes('пистолет mk ii'))
			{
				console.log('pistolet');	
				$(weaponsListTranslated).each(function(weaponIndex,weaponItem){
					if(weaponItem.includes('пистолет 9 п') ||  weaponItem.includes('пистолет mk ii'))
					{
						currentElement = weaponIndex;
					}
				});
			}
			else
			{
				currentElement = $.inArray(item.name.toLowerCase(), weaponsListTranslated);
			}	
			if(currentElement != -1)
			{				
				currentImg = weaponsList[currentElement].name;
				legalAttr = `data-legal="${weaponsList[currentElement].legal}"`;
				legalId = `id="${weaponsList[currentElement].legal}"`;
			}
		}
		else
		{
			legalId = ``;
			legalAttr = ``;
			path = 'inventory';
			currentImg = item.type;
		}
		let template = `
			<div class="shop-item" ${legalId}>
				<div class="inner-item" ${legalAttr} data-index="${index}" style="background-image:url(images/${path}/${currentImg}.png);">
					<div class="title">
						<span class="title-text">${item.name}</span>
					</div>
					<div class="price"><span>${item.price}</span>$</div>
				</div>
			</div>
		`;
		$(container).append(template);
	});
	let emptyTemplate = `<div class="shop-item"></div>`;
		currentLength = shopList.length < 20 ? '20' : '40';

	if(currentLength > 20 || currentLength > 40 || currentLength > 80)
	{
		currentLength += currentLength;
	}
	for (var i = shopList.length; i != currentLength; i++) {
		$(container).append(emptyTemplate); 
	}
	shopListInitialize();
	basketListRefresh();
};
function shopListInitialize()
{
	$('.shop-inner .inner-item').on('click',function(){
		let currentIndex = $(this).attr('data-index'),
		    currentElem = shopList[currentIndex],
		    checker = -1;
		$(basketList).each(function(index,item){
			if(item.name == currentElem.name)
			{
				checker = index;
			}
		});
		if(checker != -1)
		{
			if(currentElem.type == 'Ammo')
			{
				basketList[checker].count += 10;
			}
			else
			{
				basketList[checker].count++;
			}				
		}
		else
		{
			if(currentElem.type == 'Ammo')
			{
				currentElem.count = 10;
			}
			else
			{
				currentElem.count = 1;
			}			
			basketList.push(currentElem);
		}		
		basketListRefresh();
	});
};
function basketListRefresh()
{
	let container = $('.basket-list'),
		currentSum = 0;
	clearBasket();
	$(basketList).each(function(index,item){
		var path = 'inventory',
			currentImg = item.type,
			legalAttr = ``,
			legalId = ``;
		if(item.type == 'Weapon_Cold' || item.type == 'Weapon_FireGun_Legal' || item.type == 'Weapon_FireGun_Police' || item.type == 'Weapon_FireGun_Illegal')
		{
			path = 'weapons';
			let currentElement = $.inArray(item.name.toLowerCase(), weaponsListTranslated);
			if(currentElement != -1)
			{				
				currentImg = weaponsList[currentElement].name;
				legalAttr = `data-legal="${weaponsList[currentElement].legal}"`;
				legalId = `id="${weaponsList[currentElement].legal}"`;
			}
		}
		else
		{
			legalId = ``;
			legalAttr = ``;
			path = 'inventory';
			currentImg = item.type;
		}
		let template = `
			<div class="basket-item" data-index="${index}">
				<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
				<div class="icon" ${legalId}><img src="images/${path}/${currentImg}.png" alt=""></div>
				<div class="title-wrap">
					<div class="title-item">${item.name}</div>
					<div class="class-item">${translateType(item.type)}</div>
				</div>
				<div class="col-wrap">
					<div class="minus">-</div>
					<div class="col-box">${item.count}</div>		
					<div class="plus">+</div>
				</div>
			</div>	
		`;
		$(container).append(template);
		if(item.count > 1)
		{
			currentSum += item.price*item.count;
		}
		else
		{
			currentSum += item.price;
		}
		
	});
	$('.right-wrap .price span').text(currentSum);
	basketListInitialize();
};
function translateType(type)
{
	let currentType = $.inArray(type, typeName);
	return typeNameTranslated[currentType];
}
function basketListInitialize()
{	
	$('.basket-list .basket-item .close').on('click',function(){
		$(this).parent().fadeOut(300);
		setTimeout(function(){
			let currentIndex = $(this).parent().attr('data-index');
			basketList.splice(currentIndex, 1);
			basketListRefresh();
		}, 500);				
	});
	$('.basket-list .basket-item .plus').on('click',function(){
		let currentIndex = $(this).parent().parent().attr('data-index');
		if(basketList[currentIndex].type == 'Ammo')
		{
			basketList[currentIndex].count += 10;
		}
		else
		{
			basketList[currentIndex].count++;
		}			
		basketListRefresh();
	});
	$('.basket-list .basket-item .minus').on('click',function(){
		let currentIndex = $(this).parent().parent().attr('data-index');
		if(basketList[currentIndex].count>1)
		{
			if(basketList[currentIndex].type == 'Ammo')
		{
			basketList[currentIndex].count -= 10;
		}
		else
		{
			basketList[currentIndex].count--;
		}
		}		
		basketListRefresh();
	});
	$('.empty-but').on('click',function(){		
		if(basketList.length>0)
		{
			$('.basket-list .basket-item').fadeOut(300);
			setTimeout(function(){				
				basketList = [];
				clearBasket();
				basketListRefresh();
			}, 500);
		}	
	});
}
function clearBasket()
{
	let container = $('.basket-list');
	$(container).empty().append('<div class="empty-but">Очистить корзину</div>');
};