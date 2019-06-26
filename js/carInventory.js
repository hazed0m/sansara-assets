var sex = '',
	currentWeight = 0,
	maxWeight = 50,
	inventoryList = [],
	weaponsList = [],
	luggageList = [],
	newList = [],
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
    className = 
    [
	   "Маска",   
	   "Шляпа",
	   "Очки",
	   "Аксессуар",
	   "Верх",
	   "Серьги",
	   "Браслет",
	   "Низ",
	   "Часы",
	   "Бронежилет",
	   "Обувь",
	   "Сумка"
	],
	weaponClassArray = 
	[
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false
	],
	weaponsListFull = [
		{name:'flashlight',type:'Weapon_Cold',legal:'police',class:1},
		{name:'brass-knuckles',type:'Weapon_Cold',legal:'illegal',class:1},
		{name:'knife',type:'Weapon_Cold',legal:'legal',class:1},
		{name:'machete',type:'Weapon_Cold',legal:'illegal',class:1},
		{name:'f-knife',type:'Weapon_Cold',legal:'legal',class:1},
		{name:'nightstick',type:'Weapon_Cold',legal:'police',class:1},
		{name:'pistol',type:'Weapon_FireGun_Legal',legal:'legal',class:2},
		{name:'pistol-mk2',type:'Weapon_FireGun_Legal',legal:'legal',class:2},
		{name:'combat-pistol',type:'Weapon_FireGun_Police',legal:'police',class:2},
		{name:'ad-pistol',type:'Weapon_FireGun_Illegal',legal:'illegal',class:2},
		{name:'stun-gun',type:'Weapon_FireGun_Legal',legal:'legal',class:2},
		{name:'pistol-50',type:'Weapon_FireGun_Police',legal:'police',class:2},
		{name:'heavy-pistol',type:'Weapon_FireGun_Police',legal:'police',class:2},
		{name:'micro-smg',type:'Weapon_FireGun_Illegal',legal:'illegal',class:3},
		{name:'smg',type:'Weapon_FireGun_Police',legal:'police',class:3},
		{name:'smg-mk2',type:'Weapon_FireGun_Illegal',legal:'illegal',class:3},
		{name:'assault-smg',type:'Weapon_FireGun_Police',legal:'police',class:3},
		{name:'combat-pdw',type:'Weapon_FireGun_Police',legal:'police',class:3},
		{name:'shotgun',type:'Weapon_FireGun_Police',legal:'police',class:4},
		{name:'sawed-off-shotgun',type:'Weapon_FireGun_Illegal',legal:'illegal',class:4},
		{name:'assault-rifle',type:'Weapon_FireGun_Illegal',legal:'illegal',class:5},
		{name:'carbine-rifle',type:'Weapon_FireGun_Police',legal:'police',class:5},
		{name:'bullpup-rifle-mk2',type:'Weapon_FireGun_Police',legal:'police',class:5},
		{name:'sniper-rifle',type:'Weapon_FireGun_Police',legal:'police',class:6}
	],
	weaponsListTranslated = [
		'фонарик',
		'кастет',
		'охотничий нож',
		'мачете',
		'выкидной нож',
		'дубинка',
		'пистолет',
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
	classNameTranslated = 
    [
	   "Mask",   
	   "Hat",
	   "Glasses",
	   "Accessories",
	   "Top",
	   "Earrings",
	   "Bracelet",
	   "Bottom",
	   "Clock",
	   "Armor",
	   "Shoes",
	   "Bag"
	];
	console.log(typeName);
function checkAction(action, index, id, currentCount)
{
    mp.trigger(action, index, id, currentCount);          
};
function doneAction(action, index, id, currentCount)
{	
	var removeElem = '';
	newList = [];	
    switch(action)
    {
    	case ('remove'):
        	removeElem = eval(id +'List').splice(inventoryList[index].wearedId,1);        			
			$(eval(id+'List')).each(function(index,item){
				inventoryList[item.inventoryIndex].wearedId = index;
			});      	
        	if(inventoryList[removeElem[0].inventoryIndex].enabled)
        	{
        		inventoryList[removeElem[0].inventoryIndex].enabled = false;
        		inventoryList[removeElem[0].inventoryIndex].count++;
        		inventoryList[removeElem[0].inventoryIndex].used = false;
        	}
			else 
			{
				inventoryList[removeElem[0].inventoryIndex].count++;
				inventoryList[removeElem[0].inventoryIndex].used = false;
			}
			refreshInventory('luggage');	
			refreshInventory('inventory');
            inventoryInitialize();  
			break;
			
        case ('put'):
			console.log('before count' + index);
			if(inventoryList[index].count < 1 && !inventoryList[index].used)
			{
				removeElem = eval(id +'List').splice(index,1);
			}
			else
			{
				let newCount = inventoryList[index].count;
				newCount -= currentCount;
				if(newCount < 1 && !inventoryList[index].used)
				{
					removeElem = eval(id +'List').splice(index,1);
				}
				else
				{
					inventoryList[index].count = newCount;
				}
			}
			refreshInventory('luggage');
			refreshInventory('inventory');	
            inventoryInitialize();  
            break;        
    }
    genFullInventory();
    mp.trigger("action.currentInventory", action, JSON.stringify(newList));
};
function listIndexCheck(id)
{
	$(eval(id+'List')).each(function(index,item){
		if(item.name != inventoryList[item.inventoryIndex].name && item.inventoryIndex != 0)
		{
			item.inventoryIndex--;
		}
	});   
}
function genFullInventory()
{
    newList = JSON.stringify(inventoryList);
    newList = JSON.parse(newList);
	$(luggageList).each(function(indexPerson,itemPerson){
		let count = newList[itemPerson.inventoryIndex].count;
		newList[itemPerson.inventoryIndex].count = count + 1;
		newList[itemPerson.inventoryIndex].enabled = true;
	});
	$(weaponsList).each(function(indexWeapons,itemWeapons){
		let count = newList[itemWeapons.inventoryIndex].count;
		newList[itemWeapons.inventoryIndex].count = count + 1;
		newList[itemWeapons.inventoryIndex].enabled = true;
	});	
};
function useElement(element, index)
{
	if(element.type == 'Clothes_Legal' || element.type == 'Clothes_Duty' || element.type == 'Clothes_Illegal')
	{
		if(!element.used)
		{
			element.used = true;
			if(element.count != 0)
			{
				element.count--;	
				if(element.count == 0)
				{
					inventoryList[index].enabled = true;
				}
				luggageList.push(element); 				
				let length = luggageList.length-1;
				inventoryList[index].wearedId = length;
			}
			else
			{				
				luggageList.push(element); 	
				let length = luggageList.length-1;
				inventoryList[index].wearedId = length;
			}
		}
		else
		{
			notificationShow('Данная одежда уже одета');
			mp.trigger('WrongClothes');			
		}
	}	
	if(element.type == 'Weapon_Cold' || element.type == 'Weapon_FireGun_Legal' || element.type == 'Weapon_FireGun_Police' || element.type == 'Weapon_FireGun_Illegal')
	{	
		if(!element.used && weaponClassArray[element.class-1] === false)
		{		
				element.used = true;
				if(element.count != 0)
				{
					element.count--;
					if(element.count == 0)
					{
						inventoryList[index].enabled = true;
					}
					weaponsList.push(element);
					let length = weaponsList.length-1;
					inventoryList[index].wearedId = length;
				}	
				else
				{
					weaponsList.push(element); 				
					let length = weaponsList.length-1;
					inventoryList[index].wearedId = length;
				}
		}		
		else
		{
			notificationShow('Вы не можете носить больше одного оружия, данного класса');
			mp.trigger('WrongWeapon');			
		}			
	}
	if(element.type == 'Eat' || element.type == 'Drink' || element.type == 'Alcohol' || element.type == 'Instrument'
		|| element.type == 'Medical_Preparation' || element.type == 'Illegal_Object' || element.type == 'LegalObject' 
		|| element.type == 'Resourses' || element.type == 'Recycled_Resources' || element.type == 'Craft_Resources')
	{
		if(inventoryList[index].count>1)
		{
			inventoryList[index].count--;
			if(inventoryList[index].count == 0)
			{
				inventoryList.splice(index,1);
				listIndexCheck('weapons');
				listIndexCheck('luggage');
			}
		}
		else
		{
			inventoryList.splice(index,1);
			listIndexCheck('weapons');
			listIndexCheck('luggage');
		}
	}
};
function notificationShow(notification)
{
	$('.info-wrapper .title').text(notification);
	$('.info-wrapper').fadeIn();
	setTimeout(() => {$('.info-wrapper').fadeOut()},2000);
};
function pushInventory(item,gender,maxweight)
{
	sex = gender;
	maxWeight = maxweight;
	// $('.left-inventory .items').css('background-image','url(images/' + sex + '.png');
    inventoryList = [];
    var itemList = JSON.parse(item);
    $(itemList).each(function(index,item){    	
    	let obj = 
    	{
    		name: item.name,
    		type: item.type,
    		weight: parseFloat(item.weight),
    		count: item.count,
    		itemElem: item.itemElem, 
    		enabled: item.enabled,
    		visible: true 
    	}
    	if(obj.type == 'Clothes_Legal' || obj.type == 'Clothes_Duty' || obj.type == 'Clothes_Illegal')
		{
	    	$(className).each(function(index,classEl){
				if(item.name.includes(classEl))
				{
					obj.class = classEl;
				}
			});
		}		
		if(obj.type == 'Ammo')
		{
			obj.enabled = false;
		}
    	if(obj.enabled)
		{	
			if(obj.count >= 1)
			{
				obj.count--;
			}	
			obj.used = true;			
			let currentElement = $.inArray(obj.name.toLowerCase(), weaponsListTranslated);
			if(currentElement != -1)
			{
				obj.class = getWeaponClass(currentElement);
			}
			inventoryList.push(obj);
			let currentLength = inventoryList.length-1;			
			obj.inventoryIndex = currentLength;
			if(obj.type == 'Clothes_Legal' || obj.type == 'Clothes_Duty' || obj.type == 'Clothes_Illegal')
			{
				luggageList.push(obj);
				let length = luggageList.length-1;
				inventoryList[currentLength].wearedId = length;
			}	
			if(obj.type == 'Weapon_Cold' || obj.type == 'Weapon_FireGun_Legal' || obj.type == 'Weapon_FireGun_Police' || item.type == 'Weapon_FireGun_Illegal')
			{				
				weaponsList.push(obj);
				let length = weaponsList.length-1;
				inventoryList[currentLength].wearedId = length;
			}			
		}
		if(!obj.enabled)
		{		        
	    	inventoryList.push(obj);
	    }    	
    }); 
	refreshInventory('luggage');
	refreshInventory('inventory');	
    inventoryInitialize();  
};
function inventoryInitialize()
{	
	$('#inventory .itemInv').on('click', function()
	{   
        if($(this).parent().find('.dropdown-menu').is(':visible'))
        {
         	$(this).parent().find('.dropdown-menu').slideDown().css('display','none');
        }
        else
        {
            $(this).parents().find('.dropdown-menu').each(function(index,item){$(item).css('display','none')});
            $(this).parent().find('.dropdown-menu').css('display','block');
        }
	});	
	$('#inventory #put, #luggage #remove').on('click',function(){
		var action = $(this)[0].id,		
			id = $(this).parent().parent()[0].id,
			index = $(this).parent().attr(id+'-id'),
			col = 0,
			input = '<input class="quantity" type="number" min="1" max="150" value="1">',
			currentMin = 0,
			currentMax = 0;
		if(eval(id+'List')[index].count <=1)
		{
			doneAction(action,index,id);
		}
		else
		{			
			$('.ok-button').attr('action',action).attr('id',id).attr('index',index).attr('done','undone');
			$('.col-wrapper').find('.quantity').replaceWith(input);
			if(id == 'inventory')
			{
				$('.col-wrapper').find('.col-title').text(eval(id+'List')[index].name);
				$('.col-wrapper').find('.quantity').attr('max',eval(id+'List')[index].count);
				$('.col-wrapper').find('.max-numb').text(eval(id+'List')[index].count);
			} 
			else
			{
				$('.col-wrapper').find('.col-title').text(inventoryList[eval(id+'List')[index].inventoryIndex].name);
				$('.col-wrapper').find('.quantity').attr('max',inventoryList[eval(id+'List')[index].inventoryIndex].count);
				$('.col-wrapper').find('.max-numb').text(inventoryList[eval(id+'List')[index].inventoryIndex].count);
			}
			$('.col-wrapper .min').on('click',function(){
				currentMin = $(this).parent().find('.quantity').attr('min');
				$(this).parent().find('.quantity').val(currentMin);
			});			
			$('.col-wrapper .max').on('click',function(){
				currentMax = $(this).parent().find('.quantity').attr('max');
				$(this).parent().find('.quantity').val(currentMax);
			});			
			$('.ok-button').on('click',function(){
				if($(this).attr('done') == 'undone')
				{
					col = $(this).parent().parent().find('input').val();
					$('.col-wrapper').fadeOut();
					$(this).attr('done','done');
					doneAction($('.ok-button').attr('action'), $('.ok-button').attr('index'), $('.ok-button').attr('id'), col);
				}
			});
			$('.cancel-button').on('click',function(){
				$('.col-wrapper').fadeOut();				
			});			
			//Input
			var inputQuantity = [];
			$(function() {
				$(".quantity").each(function(i) {
				inputQuantity[i]=this.defaultValue;
					$(this).data("idx",i); // save this field's index to access later
				});
				$(".quantity").on("keyup", function (e) {
				var $field = $(this),
					val=this.value,
					$thisIndex=parseInt($field.data("idx"),10); // retrieve the index
					//window.console && console.log($field.is(":invalid"));
					//$field.is(":invalid") is for Safari, it must be the last to not error in IE8
				if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
					this.value = inputQuantity[$thisIndex];
					return;
				} 
				if (val.length > Number($field.attr("maxlength"))) {
					val=val.slice(0, 5);
					$field.val(val);
				}
				inputQuantity[$thisIndex]=val;
				});      
			});	
			$('.col-wrapper').fadeIn();
		}	
	});
};
$('.tabs-inventory .tabMenu').on('click',function(){
	$('.tabs-inventory .tabMenu').each(function(index,item){
		if($(item).hasClass('active'))
		{
			$(item).removeClass('active')
		}
	});
	$(this).addClass('active');
	toogleTab($(this).attr('filter'));
});
function toogleTab(currentTab)
{
	switch(currentTab)
	{
		case 'all':
			$(inventoryList).each(function(index,item){
				item.visible = true;
			});
			break;
		case 'weapons':
			$(inventoryList).each(function(index,item){
				if(item.type == 'Weapon_Cold' || item.type == 'Weapon_FireGun_Legal' || item.type == 'Weapon_FireGun_Police' || item.type == 'Weapon_FireGun_Illegal' || item.type == 'Ammo')
				{
					item.visible = true;
				}
				else
				{
					item.visible = false;
				}
			});
			break;
		case 'clothes':
			$(inventoryList).each(function(index,item){	
				if(item.type == 'Clothes_Legal' || item.type == 'Clothes_Illegal' || item.type == 'Clothes_Duty' )
				{
					item.visible = true;
				}
				else
				{
					item.visible = false;
				}
			});
			break;
		case 'resources':
			$(inventoryList).each(function(index,item){
				if(item.type == 'Resourses' || item.type == 'Recycled_Resources' || item.type == 'Craft_Resources' || item.type == 'Documents')
				{
					item.visible = true;
				}
				else
				{
					item.visible = false;
				}
			});
			break;
		case 'items':
			$(inventoryList).each(function(index,item){
				if(item.type == 'Instrument' || item.type == 'Medical_Preparation' || item.type == 'Illegal_Object' || item.type == 'LegalObject' || item.type == 'Eat' || item.type == 'Drink' || item.type == 'Alcohol')
				{
					item.visible = true;
				}
				else
				{
					item.visible = false;
				}
			});
			break;
	}
	refreshInventory('luggage');
	refreshInventory('inventory');	
    inventoryInitialize(); 
}
function countWeight()
{
	if(jQuery.isEmptyObject(newList))
	{
		genFullInventory();
	};
	$(newList).each(function(index,item){
		currentWeight += item.weight * item.count;		
	});		
	currentWeight = currentWeight.toFixed(2);
	$('.weight .current').text(currentWeight);
	$('.weight .max').text(maxWeight);
};
function refreshPerson(currentIterator)
{	
	$(eval(currentIterator + 'List')).each(function(index,item)
	{
		if(item.name != inventoryList[item.inventoryIndex].name)
		{
			let currentIndex = item.inventoryIndex;
			item.inventoryIndex = currentIndex - 1;
		}
	});
};
function refreshImages(currentClass)
{
	let newElement = '';
	$(className).each(function(index,item){
		if(item === currentClass)
		{			
			newElement = classNameTranslated[index];
		}
	});
	return newElement;	
};
function getWeaponClass(currentElement)
{
	return weaponsListFull[currentElement].class;
}
function refreshInventory(currentIterator)
{
	currentWeight = 0;
	$('#'+currentIterator).empty();
	var itemTemplate = '',
		usedCounter = 0,
		shadowClass = 'legal',
		currentLength = inventoryList.length < 48 ? '54' : '108',
		luggageLength = luggageList.length < 15 ? '15' : '30';

	if(currentLength > 54 || currentLength > 108 || currentLength > 216)
	{
		currentLength += currentLength;
	}
	if(luggageLength > 15 || luggageLength > 30 || luggageLength > 60)
	{
		luggageLength += luggageLength;
	}
    $(eval(currentIterator + 'List')).each(function(index,item)
    {      		
		if(item.type == 'Weapon_Cold' || item.type == 'Instrument' || item.type == 'Documents' || item.type == 'Weapon_FireGun_Legal' || item.type == 'Clothes_Legal' 
									  || item.type == 'LegalObject' || item.type == 'Resourses' || item.type == 'Recycled_Resources' || item.type == 'Craft_Resources' 
									  || item.type == 'Eat' || item.type == 'Drink' || item.type == 'Alcohol' || item.type == 'Ammo' || item.type == 'Medical_Preparation')
		{
			shadowClass = 'legal';
		}
		if(item.type == 'Clothes_Illegal' || item.type == 'Illegal_Object' || item.type == 'Weapon_FireGun_Illegal')
		{
			shadowClass = 'illegal';
		}				
		if(item.type == 'Clothes_Duty' || item.type == 'Weapon_FireGun_Police')
		{
			shadowClass = 'form';
		}	
		if(currentIterator == 'luggage')
		{
			itemTemplate = 
			'<li ' + currentIterator + '-id="' + index +'">\
				<div class="itemInv'+' '+ shadowClass +'" id="remove">\
					<div class="button-dropdown">\
						<div class="infoItem dropdown-toggle">\
							<div class="nameItem">' + item.name + '</div>\
						</div>\
						<img src="images/person/' + refreshImages(item.class) + '.png" class="itemImg dropdown-toggle" style="transform:scale(0.9);">\
					</div>\
				</div>\
			</li>';
		}
		if(currentIterator == 'inventory')
		{		
			var currentImg = item.type,
				currentIter = 'inventory',
				currentElement = $.inArray(item.name.toLowerCase(), weaponsListTranslated);
			if(item.type == 'Weapon_Cold' || item.type == 'Weapon_FireGun_Legal' || item.type == 'Weapon_FireGun_Police' || item.type == 'Weapon_FireGun_Illegal')
			{				
				if(currentElement != -1)
				{				
					currentImg = weaponsListFull[currentElement].name;
					currentIter = 'weapons';
					item.class = getWeaponClass(currentElement);
				}
				if(item.type == 'Weapon_FireGun_Police' || item.type == 'Clothes_Duty')
				{
					
				}
			}
			else
			{
				personId = '';
				currentImg = item.type;
			}			
			itemTemplate = 
			`<li ${currentIterator}-id="${index}">
				<div class="itemInv ${shadowClass}" id="put">
					<div class="button-dropdown">
						<div class="quantity">${item.count}</div>
						<div class="infoItem dropdown-toggle">
							<div class="nameItem">${item.name}</div>
						</div>
						<img src="images/${currentIter}/${currentImg}.png" class="itemImg dropdown-toggle">
					</div>
				</div>
			</li>`;
		}    		
		switch (currentIterator)
		{
			case 'luggage':				
				
				$('.left-inventory ul#luggage').append(itemTemplate);
								
				break;
			case 'inventory':
				switch(item.enabled)
				{
					case (true):
						if(item.visible && item.count >=1)
						{
							$('.right-inventory ul#inventory').append(itemTemplate);
						}
						else
						{
							usedCounter++;
						}
						break;
					case (false):
						if(item.visible && item.count >=1)
						{
							$('.right-inventory ul#inventory').append(itemTemplate);
						}													
					break;
				}										
				break;
		}		   	
    }); 
	switch (currentIterator)
	{	
		case 'inventory':
			for (var i = inventoryList.length-usedCounter; i != currentLength; i++) {
				$('.right-inventory ul#inventory').append('<li></li>'); 
			}
			break;
		case 'luggage':
			for (var i = luggageList.length; i != luggageLength; i++) {
				$('.left-inventory ul#luggage').append(`<li luggage-id="${i}"></li>`); 
			}	
			break;			
		}    
    countWeight();      
};
$('.left-inventory .weapons').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 40);
    e.preventDefault();
});