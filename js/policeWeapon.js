let weaponsList = [
        'flashlight',
        'nightstick', 
        'combat-pistol',
        'stun-gun',
        'pistol-50', 
        'heavy-pistol',
        'smg', 
        'assault-smg', 
        'combat-pdw',
        'shotgun', 
        'carbine-rifle',
        'bullpup-rifle-mk2',
        'sniper-rifle'
    ],
    weaponsListTranslated = [
        'фонарик',
        'дубинка',
        'боевой пистолет',
        'электрошокер',
        'пистолет .50',
        'тяжелый пистолет',
        'SMG',
        'штурмовое SMG',
        'боевая PDW',
        'помповый дробовик Mk II',
        'карабин винтовка',
        'самозарядная винтовка Mk II',
        'снайперская винтовка'
    ],
    bulletsList = [
        '',
        '',
        'патроны 9 БП',
        '',
        'патроны .50 П',
        'патроны 25 ТП',
        'патроны 9 SMG',
        'патроны 5.45 SMG',
        'патроны 4.6 PDW',
        'патроны 12 ПД Mk II',
        'патроны 5.56 КВ',
        'патроны 7.62 СВ Mk ll',
        'патроны 8.60 СВ'
    ],
    positionList = [
        { position: 'Помощник Шерифа 2-го ранга', faction: 'sheriff' },
        { position: 'Помощник Шерифа 1-го ранга', faction: 'sheriff' },
        { position: 'Заместитель Шерифа', faction: 'sheriff' },
        { position: 'Шериф', faction: 'sheriff' },
        { position: 'Детектив 3-го ранга', faction: 'detective' },
        { position: 'Детектив 2-го ранга', faction: 'detective' },
        { position: 'Детектив 1-го ранга', faction: 'detective' },
        { position: 'Глава Детективов', faction: 'detective' },
        { position: 'Кадет', faction: 'police' },
        { position: 'Офицер 3-го ранга', faction: 'police' },
        { position: 'Офицер 2-го ранга', faction: 'police' },
        { position: 'Офицер 1-го ранга', faction: 'police' },
        { position: 'Сержант 3-го ранга', faction: 'police' },
        { position: 'Сержант 2-го ранга', faction: 'police' },
        { position: 'Сержант 1-го ранга', faction: 'police' },
        { position: 'Лейтенант 3-го ранга', faction: 'police' },
        { position: 'Лейтенант 2-го ранга', faction: 'police' },
        { position: 'Лейтенант 1-го ранга', faction: 'police' },
        { position: 'Капитан', faction: 'police' }

    ],
    factionList =  [
        {
            Position:'Помощник Шерифа 2-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'combat-pistol',
                    'stun-gun',
                    'pistol-50'
                ],
                closed:[
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        {
            Position:'Помощник Шерифа 1-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'combat-pistol',
                    'stun-gun',
                    'pistol-50',
                    'smg', 
                    'assault-smg'
                ],
                closed:[
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        {
            Position:'Заместитель Шерифа',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'combat-pistol',
                    'stun-gun',
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun' 
                ],
                closed:[]
            }
        },
        {
            Position:'Шериф',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'combat-pistol',
                    'stun-gun',
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun' 
                ],
                closed:[]
            }
        },
        {
            Position:'Детектив 3-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'combat-pistol',
                    'stun-gun',
                    'pistol-50',
                ],
                closed:[
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        {
            Position:'Детектив 2-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'combat-pistol',
                    'stun-gun',
                    'pistol-50',
                ],
                closed:[
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        {
            Position:'Детектив 1-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'combat-pistol',
                    'stun-gun',
                    'pistol-50',
                    'smg' 
                ],
                closed:[
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        {
            Position:'Глава Детективов',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'combat-pistol',
                    'stun-gun',
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun' 
                ],
                closed:[]
            }
        },
        { 
            Position :'Кадет',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun'
                ],
                closed:[
                    'combat-pistol',
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        { 
            Position :'Офицер 3-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol'
                ],
                closed:[
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        { 
            Position :'Офицер 2-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol'
                ],
                closed:[
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        { 
            Position :'Офицер 1-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol'
                ],
                closed:[
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        { 
            Position :'Сержант 3-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol',
                    'pistol-50'
                ],
                closed:[
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        { 
            Position :'Сержант 2-го ранга',
            WeaponList: {
                oopened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol',
                    'pistol-50'
                ],
                closed:[
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        { 
            Position :'Сержант 1-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol',
                    'pistol-50',
                    'smg' 
                ],
                closed:[
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        { 
            Position :'Лейтенант 3-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol',
                    'pistol-50',
                    'smg', 
                    'assault-smg' 
                ],
                closed:[
                    'combat-pdw',
                    'shotgun'
                ]
            }
        },
        { 
            Position :'Лейтенант 2-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol',
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'shotgun' 
                ],
                closed:[
                    'combat-pdw'
                ]
            }
        },
        { 
            Position :'Лейтенант 1-го ранга',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol',
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'shotgun', 
                    'combat-pdw'
                ],
                closed:[
                    
                ]
            }
        },
        { 
            Position :'Капитан',
            WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol',
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'shotgun', 
                    'combat-pdw'
                ],
                closed:[

                ]
            },
            {
                Position :'Шеф ПД',
                WeaponList: {
                opened:[
                    'flashlight',
                    'nightstick', 
                    'stun-gun',
                    'combat-pistol',
                    'pistol-50',
                    'smg', 
                    'assault-smg', 
                    'shotgun', 
                    'combat-pdw'
                ],
                closed:[

                ]
            }
        }
    ];
function pushWeapons(Position)
{
    $('.container .weapon-wrapper').empty();
    $(factionList).each(function(index,item){
        if(item.Position === Position)
        {
            let Type = '';
            $(positionList).each(function(index,item){
                if(Position == item.position)
                {
                    Type = item.faction;
                }                
            });
            $(item.WeaponList.opened).each(function(weaponIndex,weaponItem){
                let currentId = weaponItem.replace(/[\s{2,}]+/g, ''),
                    ident = $.inArray(weaponItem,weaponsList),
                    currentName = weaponsListTranslated[ident],
                    template = `
                    <div class="weapon-item ${Type}" id="${currentId}" data-id="${currentName}">
                        <div class="weapon-name">${currentName}</div>
                        <img src="images/weapons/${weaponItem}.png" alt="">
                    </div>`;
                $('.container .weapon-wrapper').append(template);
                if(bulletsList[ident] != '')
                {
                    let ammo = `<div class="ammo-item" id="${currentId}Ammo" data-id="${bulletsList[ident]}">
                                    <div class="ammo-name">${bulletsList[ident]}</div>
                                    <img src="images/inventory/Ammo.png" alt="">
                                    <div class="col-wrap">
                                        <div class="minus">-</div>
                                        <div class="col-box">0</div>		
                                        <div class="plus">+</div>
                                    </div>
                                </div>`;
                    $('.container .weapon-wrapper').append(ammo);
                }
            });
            $(item.WeaponList.closed).each(function(weaponIndex,weaponItem){
                let currentId = weaponItem.replace(/[\s{2,}]+/g, ''),
                    currentName = weaponsListTranslated[$.inArray(weaponItem,weaponsList)],
                    template = `
                    <div class="weapon-item ${Type} closed" id="${currentId}" data-id="${currentName}">
                        <div class="weapon-name">${currentName}</div>
                        <img src="images/weapons/${weaponItem}.png" alt="">
                    </div>`;
                $('.container .weapon-wrapper').append(template);
            });
        }
    });
    initWeapons();
}
function initWeapons()
{
    $('.ammo-item .plus').on('click',function(){
        let currentCount = parseInt($(this).prev().text());
        $(this).prev().text(currentCount+=10);
        $('.button#use').removeClass('disabled');
    });
    $('.ammo-item .minus').on('click',function(){
        let currentCount = parseInt($(this).next().text());
        currentCount -= 10;
        if(currentCount >= 0)
        {
            $(this).next().text(currentCount);
            if(currentCount == 0)
            {
                $('.button#use').addClass('disabled');
            }
        }
    });
    $('.weapon-item').on('click',function(){
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
                $('.weapon-item.active').removeClass('active');
                $(this).addClass('active');
            }
        }
    });
    $('.button#use').on('click',function(){
        let activeWeapon = $('.weapon-item.active').attr('data-id'),
            activeAmmo = $('.ammo-item'),
            ammoArr = [];
        if(activeAmmo.length > 0)
        {
            $(activeAmmo).each(function(index,item){
                let currentCount = parseInt($(item).find('.col-box').text());
                if(currentCount > 0)
                {
                    let obj = { ammo: $(item).attr('data-id'), count: currentCount };
                    ammoArr.push(obj);
                    $(item).find('.col-box').text(0);
                }                
            });
        }
        console.log(ammoArr);        
        if(activeWeapon == undefined)
        {
            activeWeapon = '';  
        }
        $('.button#use').addClass('disabled');
        $('.weapon-wrapper .active').removeClass('active');
        console.log(activeWeapon,ammoArr);
        mp.trigger('LspdUseWeapon',activeWeapon,JSON.stringify(ammoArr));
    });
    $('.button#close').on('click',function(){
        mp.trigger('closePoliceAmmunition');
    });
    
}