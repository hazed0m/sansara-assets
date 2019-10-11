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
        'smg',
        'штурмовое smg',
        'боевая pdw',
        'помповый дробовик mk ii',
        'карабин винтовка',
        'самозарядная винтовка mk ii',
        'снайперская винтовка'
    ],
    sheriffList =  [
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun' 
                ],
                closed:[]
            }
        }
    ],
    detectiveList = [
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
                    'smg', 
                    'assault-smg', 
                    'combat-pdw',
                    'shotgun' 
                ],
                closed:[]
            }
        }
    ],
    policeList = [
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol',
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
                    'heavy-pistol'
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
                    'heavy-pistol'
                ]
            }
        }
    ];
function pushWeapons(Type,Position)
{
    $('.container .weapon-wrapper').empty();
    $(eval(Type + 'List')).each(function(index,item){
        if(item.Position === Position)
        {
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