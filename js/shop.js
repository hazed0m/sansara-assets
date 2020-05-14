var shopList = [],
	basketList = [],
	currentShopType = '',
	shopType = '',
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
	],
	ammoCount = [];
$('.cash, .card').on('click',function(){
	$(this).each(function(index, item){
		if(!$(item).hasClass('active'))		
		{
			$('.bottom-wrap .left-wrap .radio-block .active svg').attr('data-prefix','far');		
			$('.bottom-wrap .left-wrap .radio-block .active').removeClass('active');			
			$(item).addClass('active');
			$(item).find('svg').attr('data-prefix','fas');		
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
		if(shopType.toLowerCase() == 'ammo')
		{
			$(ammoList).each(function(index,item){
				$(basketList).each(function(countIndex,countItem){
					if(item.name == countItem.name)
					{
						item.count -= countItem.count;
					}
				});
				$(shopList).each(function(countIndex,countItem){
					if(item.name == countItem.name)
					{
						countItem.max = item.count;
					}
				});
			});
		}
		basketList = [];
		setTimeout(function(){
			shopListRefresh();
		},300);		
		console.log("shopBuyButton", cashService, clothesPrice, output);
    	mp.trigger("shopBuyButton", cashService, clothesPrice, output);
    }    
});
$('.exit-but').on('click',function(){
	mp.trigger("shopExit");
});
function pushShopList(element, shoptype, ammocount, artefactCount)
{
	shopType = shoptype;
	if(shopType.toLowerCase() == 'illegal')
	{		
		console.log('illegal');
		$('.illegal-wrap').fadeIn();		
		$('.container').css('border-top-right-radius','0px')
		pushIllegalShop(ammocount,artefactCount)
	}
	if(shopType.toLowerCase() == 'ammo')
	{
		ammoCount = JSON.parse(ammocount);
		$(ammoList).each(function(index,item){
			$(ammoCount).each(function(countIndex,countItem){
				if(item.name == countItem.name)
				{
					item.count -= countItem.count;
					let str = '' + item.count;
					if(str[str.length-1] != 0)
					{
						str -= parseInt(str[str.length-1]);
						item.count = str;
					}
					if(item.count < 0)
					{
						item.count = 0;
					}
				}
			});
		});	
	}
	shopList = [];
	currentShopType = shopType.toLowerCase();
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
	$(ammoList).each(function(index,item){
		$(shopList).each(function(countIndex,countItem){
			if(item.name == countItem.name)
			{
				countItem.max = item.count;
			}
		});
	});
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
		let template = ``;
		if(currentShopType == 'products')
		{
			let imgName = item.name.toLowerCase().replace(/\s+/g,'');
			template = `
				<div class="shop-item" ${legalId}>
					<div class="inner-item" ${legalAttr} data-index="${index}" style="background-image:url(images/inventory/items/${productTranslate(imgName)}.png);">
						<div class="title">
							<span class="title-text">${item.name}</span>
						</div>
						<div class="price"><span>${item.price}</span>$</div>
					</div>
				</div>
			`;
		}
		else if(currentShopType == 'drugs')
		{
			console.log('drugs');
			let imgName = item.name.toLowerCase().replace(/\s+/g,''),
				currentImg = drugsTranslate(imgName);
			template = `
				<div class="shop-item" ${legalId}>
					<div class="inner-item" ${legalAttr} data-index="${index}" style="background-image:url(images/inventory/objects/${currentImg != -1 ? currentImg : 'medical'}.png);">
						<div class="title">
							<span class="title-text">${item.name}</span>
						</div>
						<div class="price"><span>${item.price}</span>$</div>
					</div>
				</div>
			`;
		}
		else if(currentShopType == 'instruments')
		{
			let imgName = item.name.toLowerCase().replace(/\s+/g,'');
			template = `
				<div class="shop-item" ${legalId}>
					<div class="inner-item" ${legalAttr} data-index="${index}" style="background-image:url(images/inventory/instruments/${instrumentTranslate(imgName)}.png);">
						<div class="title">
							<span class="title-text">${item.name}</span>
						</div>
						<div class="price"><span>${item.price}</span>$</div>
					</div>
				</div>
			`;
		}
		else
		{
			let style = '';
			if(item.max < 10)
			{
				style = 'disabled';
			}			
			if(item.name.toLowerCase() == 'радиостанция')
			{
				currentImg = 'walktalk';
				path = 'inventory';
			}
			template = `
				<div class="shop-item" ${legalId}>
					<div class="inner-item ${style}" ${legalAttr} data-index="${index}" style="background-image:url(images/${path}/${currentImg}.png);">
						<div class="title">
							<span class="title-text">${item.name}</span>
						</div>
						<div class="price"><span>${item.price}</span>$</div>
					</div>
				</div>
			`;
		}
		$(container).append(template);
	});
	let emptyTemplate = `<div class="shop-item"></div>`;
		currentLength = shopList.length < 20 ? 20 : 40;

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
		if(currentElem.max != 0)
		{
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
					if(currentElem.max != currentElem.count)
					{
						currentElem.count += 10;
					}
					if(currentElem.max == 0)
					{
						currentElem.count = 0;
					}
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
					currentElem.count = 0;
					if(currentElem.max != currentElem.count)
					{
						currentElem.count += 10;
					}
					if(currentElem.max == 0)
					{
						currentElem.count = 0;
					}
				}
				else
				{
					currentElem.count = 1;
				}			
			}					
			if(checker == -1)
			{
				basketList.push(currentElem);
			}
			basketListRefresh();		
		}
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
			if(item.name.toLowerCase() == 'радиостанция')
			{
				console.log(item.name);
				currentImg = 'walktalk';
				path = 'inventory';
			}
		}
		let template = ``;
		if(currentShopType == 'products')
		{
			let imgName = item.name.toLowerCase().replace(/\s+/g,'');
			template = `
				<div class="basket-item" data-index="${index}">
					<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
					<div class="icon" ${legalId}><img src="images/inventory/items/${productTranslate(imgName)}.png" alt=""></div>
					<div class="title-wrap">
						<div class="title-item">${item.name}</div>
					</div>
					<div class="col-wrap">
						<div class="minus">-</div>
						<div class="col-box">${item.count}</div>		
						<div class="plus">+</div>
					</div>
				</div>	
			`;
		}
		else if(currentShopType == 'drugs')
		{
			let imgName = item.name.toLowerCase().replace(/\s+/g,''),
				currentImg = drugsTranslate(imgName);
			template = `
				<div class="basket-item" data-index="${index}">
					<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
					<div class="icon" ${legalId}><img src="images/inventory/objects/${currentImg != -1 ? currentImg : 'medical'}.png" alt=""></div>
					<div class="title-wrap">
						<div class="title-item">${item.name}</div>
					</div>
					<div class="col-wrap">
						<div class="minus">-</div>
						<div class="col-box">${item.count}</div>		
						<div class="plus">+</div>
					</div>
				</div>	
			`;
		}
		else if(currentShopType == 'instruments')
		{
			let imgName = item.name.toLowerCase().replace(/\s+/g,'');
			template = `
				<div class="basket-item" data-index="${index}">
					<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
					<div class="icon" ${legalId}><img src="images/inventory/instruments/${instrumentTranslate(imgName)}.png" alt=""></div>
					<div class="title-wrap">
						<div class="title-item">${item.name}</div>
					</div>
					<div class="col-wrap">
						<div class="minus">-</div>
						<div class="col-box">${item.count}</div>		
						<div class="plus">+</div>
					</div>
				</div>	
			`;
		}
		else
		{
			template = `
				<div class="basket-item" data-index="${index}">
					<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
					<div class="icon" ${legalId}><img src="images/${path}/${currentImg}.png" alt=""></div>
					<div class="title-wrap">
						<div class="title-item">${item.name}</div>
					</div>
					<div class="col-wrap">
						<div class="minus">-</div>
						<div class="col-box">${item.count}</div>		
						<div class="plus">+</div>
					</div>
				</div>	
			`;
		}
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
			if(basketList[currentIndex].max != basketList[currentIndex].count && basketList[currentIndex].max != 0)
			{
				basketList[currentIndex].count += 10;
			}
			if(basketList[currentIndex].max == 0)
			{
				basketList[currentIndex].count = 0;
			}
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
function fadeOut()
{
	$('.container').fadeOut();
}
function fadeIn()
{	
	$('.container').fadeIn();
}
function pushIllegalShop(wavelist,artefactCount)
{
	console.log('waveList:',wavelist,artefactCount);
	let waveList = wavelist.split('@');
	if(waveList != undefined)
	{
		$('.info-item-wrap .dropdown-list').empty();
		$('.info-item-wrap .dropdown-button span').text(`Волна №${waveList[0]}`);
		$('.info-item-wrap .dropdown-button').attr('data-index',waveList[0]);
		$(waveList).each(function(index,item){
			let template = `<div class="dropdown-item" id="wave" data-index="${item}">Волна №${item}</div>`;
			$('.info-item-wrap .dropdown-list').append(template);
		});
		$('input#pincode').keyup(function() {
			if (this.value.length > 4) {
				this.value = this.value.slice(0,4); 
			}
			else if(this.value.length == 4)
			{				
				$('#rentRadio').removeClass('disabled');
			}
			else
			{
				$('#rentRadio').addClass('disabled');
			}
		});
		$('.button#rentRadio').on('click',function(){
			let pin = $(this).prev().val(),
				wave = parseInt($(this).parent().find('.info-item-wrap .dropdown-button').attr('data-index'));
			console.log(pin,wave);
			if(pin.length == 4)
			{
				$(this).prev().val('');
				$(this).addClass('disabled');
				mp.trigger('initWave',wave,pin);
			}
		});
		$('.info-item-wrap .dropdown-button').on('click',function(){
			if(!$(this).hasClass('opened'))
			{
				$(this).next().slideDown();
				$(this).find('svg').css({
					'transform':'rotate(180deg)'
				});
				$(this).addClass('opened');
				$(this).css('border-bottom-left-radius','0');
				$(this).css('border-bottom-right-radius','0');
			}
			else
			{
				$(this).next().slideUp();
				$(this).find('svg').css({
					'transform':'rotate(0deg)'
				});
				$(this).removeClass('opened');
				setTimeout(() => {
					$(this).css('border-bottom-left-radius','15px');
					$(this).css('border-bottom-right-radius','15px');
				},450);
			}
		});
		$('.dropdown-list .dropdown-item').on('click',function(){
			$('.info-item-wrap .dropdown-button').next().slideUp();
			$('.info-item-wrap .dropdown-button').find('svg').css({
				'transform':'rotate(0deg)'
			});
			$('.info-item-wrap .dropdown-button').removeClass('opened').attr('data-index',$(this).attr('data-index'));
			$('.info-item-wrap .dropdown-button span').text($(this).text());
			$(`.mask-list .mask-item.active`).removeClass('active');        
			$(`.mask-list .mask-item#${this.id}`).addClass('active');
			$('.mask-list .mask-item input').val('');
			$('#pincode').val('');
		});
	}
	if(artefactCount != undefined)
	{
		$('.button#sellArtefact').on('click',function(){
			let value = parseInt($('input[type="range"]').val());
			console.log(value);
			mp.trigger('sellArtefact',value);
		});
		$('input[type="range"]').attr('max',artefactCount);
		$('.artefact-wrap .count-wrapper .min span').text(1);
		$('.artefact-wrap .count-wrapper .max span').text(artefactCount);
		$('.artefact-wrap .current span').text(artefactCount);
		$(function() {
			$('input[type="range"]').on('input change', function(e) {
				let id = e.target.id,
					val = e.target.value;
				$(e).val(val).change();
				$('.artefact-wrap .current span').text(val);
			});  
			$('input[type=range]').rangeslider({
				polyfill: false,
				change: function(e) {
					console.log(e)  
				}
			});
		});
		if(artefactCount == 0)
		{
			$('.artefact-wrap .count-wrapper .min span').text(0);
			$('.artefact-wrap .button').addClass('disabled');
			setTimeout(function(){
				$('.artefact-wrap .rangeslider').css('opacity','0.7');
			},300);
		}
	}
}
