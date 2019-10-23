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
        'помповый дробовик MK II',
        'карабин винтовка',
        'самозарядная винтовка MK II',
        'снайперская винтовка'
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
                    currentName = weaponsListTranslated[$.inArray(weaponItem,weaponsList)],
                    template = `
                    <div class="weapon-item ${Type}" id="${currentId}" data-id="${currentName}">
                        <div class="weapon-name">${currentName}</div>
                        <img src="images/weapons/${weaponItem}.png" alt="">
                    </div>`;
                $('.container .weapon-wrapper').append(template);
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
        if($('.weapon-item.active').length != 0)
        {
            let active = $('.weapon-item.active').attr('data-id');
            console.log(active);
            $('.button#use').addClass('disabled');
            $('.weapon-wrapper .active').removeClass('active');
            mp.trigger('LspdUseWeapon',active);
        }
    });
    $('.button#close').on('click',function(){
        mp.trigger('closePoliceAmmunition');
    });
    
}