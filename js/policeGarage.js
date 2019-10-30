let garageList = [
        { car:'Vapid LSPD', hash:'police' },
        { car:'Buffalo', hash:'police2' },
        { car:'Interceptor', hash:'police3' },
        { car:'Police Bike', hash:'policeb' },
        { car:'Transporter', hash:'policet' },
        { car:'Prison Bus', hash:'pbus' },
        { car:'Cheval Fugitive', hash:'add-on' },
        { car:'GS 350', hash:'add-on' },
        { car:'Cruiser Utility', hash:'add-on' },
        { car:'Cayman S', hash:'add-on' },
        { car:'Vapid Sheriff', hash:'sheriff' },
        { car:'Sheriff SUV', hash:'sheriff2' },
        { car:'Scout', hash:'add-on' },
        { car:'Vapid Detective', hash:'police4' },
        { car:'Bravado', hash:'fbi' },
        { car:'Declasse', hash:'fbi2' }
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
            CarList: {
                opened:[
                    'Vapid Sheriff',
                    'Prison Bus'
                ],
                closed:[
                    'Sheriff SUV'
                ]
            }
        },
        {
            Position:'Помощник Шерифа 1-го ранга',
            CarList: {
                opened:[
                    'Vapid Sheriff',
                    'Prison Bus',	
                    'Sheriff SUV'
                ],
                closed:[
                ]
            }
        },
        {
            Position:'Заместитель Шерифа',
            CarList: {
                opened:[
                    'Vapid Sheriff',
                    'Prison Bus',
                    'Sheriff SUV'
                ],
                closed:[
                    
                ]
            }
        },
        {
            Position:'Шериф',
            CarList: {
                    opened:[
                        'Vapid Sheriff',
                        'Prison Bus',
                        'Sheriff SUV'
                    ],
                    closed:[]
            }
        },
        {
            Position:'Детектив 3-го ранга',
            CarList: {
                opened:[
                    'Vapid Detective'
                ],
                closed:[
                    'Bravado',
                    'Prison Bus',
                    'Declasse',
                    'Scout'
                ]
            }
        },
        {
            Position:'Детектив 2-го ранга',
            CarList: {
                opened:[
                    'Vapid Detective',
                    'Bravado'
                ],
                closed:[
                    'Prison Bus',
                    'Declasse',
                    'Scout'
                ]
            }
        },
        {
            Position:'Детектив 1-го ранга',
            CarList: {
                opened:[
                    'Vapid Detective',
                    'Bravado',
                    'Prison Bus',
                    'Declasse'
                ],
                closed:[
                ]
            }
        },
        {
            Position:'Глава Детективов',
            CarList: {
                opened:[
                    'Vapid Detective',
                    'Bravado',
                    'Prison Bus',
                    'Declasse'
                ],
                closed:[]
            }
        },
        { 
            Position :'Кадет',
            CarList: {
                opened:[
                    'Vapid LSPD'
                ],
                closed:[                    
                    'Police Bike',
                    'Buffalo',
                    'Interceptor',
                    'Prison Bus',
                    'Transporter',
                    'Cheval Fugitive',
                    'Cruiser Utility',
                    'GS 350', 
                    'Cayman S'	
                ]
            }
        },
        { 
            Position :'Офицер 3-го ранга',
            CarList: {
                opened:[
                    'Vapid LSPD'
                ],
                closed:[                    
                    'Police Bike',
                    'Buffalo',
                    'Interceptor',
                    'Prison Bus',
                    'Transporter',
                    'Cheval Fugitive',
                    'Cruiser Utility',
                    'GS 350', 
                    'Cayman S'
                ]
            }
        },
        { 
            Position :'Офицер 2-го ранга',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Police Bike',
                    'Buffalo'
                ],
                closed:[                    
                    'Interceptor',
                    'Cheval Fugitive',
                    'Transporter',
                    'Prison Bus',
                    'Chevrolet Impala',
                    'GS 350', 
                    'Cayman S'
                ]
            }
        },
        { 
            Position :'Офицер 1-го ранга',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Buffalo',
                    'Police Bike',
                    'Interceptor'
                ],
                closed:[                    
                    'Cheval Fugitive',
                    'Transporter',
                    'Prison Bus',
                    'Chevrolet Impala',
                    'GS 350', 
                    'Cayman S'
                ]
            }
        },
        { 
            Position :'Сержант 3-го ранга',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Police Bike',
                    'Buffalo',
                    'Interceptor',
                    'Cheval Fugitive',                    
                    'Prison Bus',
                    'Transporter'
                ],
                closed:[                    
                    'Chevrolet Impala',
                    'GS 350', 
                    'Cayman S'
                ]
            }
        },
        { 
            Position :'Сержант 2-го ранга',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Police Bike',
                    'Buffalo',
                    'Interceptor',
                    'Cheval Fugitive',
                    'Prison Bus',
                    'Transporter'
                ],
                closed:[                    
                    'Chevrolet Impala',
                    'GS 350', 
                    'Cayman S'
                ]
            }
        },
        { 
            Position :'Сержант 1-го ранга',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Police Bike',
                    'Buffalo',
                    'Interceptor',
                    'Cheval Fugitive',
                    'Prison Bus',
                    'Transporter'
                ],
                closed:[                    
                    'Chevrolet Impala',
                    'GS 350', 
                    'Cayman S'
                ]
            }
        },
        { 
            Position :'Лейтенант 3-го ранга',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Police Bike',
                    'Buffalo',
                    'Interceptor',
                    'Cheval Fugitive',
                    'Prison Bus',
                    'Transporter',
                    'Cruiser Utility',
                    'GS 350', 
                    'Cayman S'
                ],
                closed:[]
            }
        },
        { 
            Position :'Лейтенант 2-го ранга',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Police Bike',
                    'Buffalo',
                    'Interceptor',
                    'Cheval Fugitive',
                    'Prison Bus',
                    'Transporter',
                    'Cruiser Utility',
                    'GS 350', 
                    'Cayman S'
                ],
                closed:[]
            }
        },
        { 
            Position :'Лейтенант 1-го ранга',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Police Bike',
                    'Buffalo',
                    'Interceptor',
                    'Cheval Fugitive',
                    'Prison Bus',
                    'Transporter',
                    'Cruiser Utility',
                    'GS 350', 
                    'Cayman S'
                ],
                closed:[]
            }
        },
        { 
            Position :'Капитан',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Police Bike',
                    'Buffalo',
                    'Interceptor',
                    'Cheval Fugitive',
                    'Prison Bus',
                    'Transporter',
                    'Cruiser Utility',
                    'GS 350', 
                    'Cayman S'
                ],
                closed:[]
            }
        },
        { 
            Position :'Шеф ПД',
            CarList: {
                opened:[
                    'Vapid LSPD',
                    'Police Bike',
                    'Vapid Sheriff',
                    'Prison Bus',	
                    'Sheriff SUV',
                    'Buffalo',
                    'Interceptor',
                    'Vapid Detective',
                    'Bravado',
                    'Declasse',
                    'Transporter',
                    'Cheval Fugitive',
                    'Cruiser Utility',
                    'GS 350', 
                    'Cayman S'
                ],
                closed:[]
            }
        }
    ];
function pushGarage(Position)
{
    $('.container .garage-wrapper').empty();
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
            $(item.CarList.opened).each(function(carIndex,carItem){
                let currentId = carItem.replace(/[\s{2,}]+/g, '');
                let template = `
                <div class="garage-item ${Type}" id="${currentId}" data-id="${carItem}">
                    <div class="img-block">
                        <img src="img/policeGarage/${carItem}.jpg" alt="">
                    </div>
                    <div class="garage-name">${carItem}</div>
                </div>`;
                $('.container .garage-wrapper').append(template);
            });
            $(item.CarList.closed).each(function(carIndex,carItem){
                let currentId = carItem.replace(/[\s{2,}]+/g, '');
                let template = `
                <div class="garage-item ${Type} closed" id="${currentId}" data-id="${carItem}">
                    <div class="img-block">
                        <img src="img/policeGarage/${carItem}.jpg" alt="">
                    </div>
                    <div class="garage-name">${carItem}</div>
                </div>`;
                $('.container .garage-wrapper').append(template);
            });
        }
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
            let active = $('.garage-item.active').attr('data-id'),
                index = arrayIncludesInObj(garageList,'car',active);
            // console.log(active,index);
            if(garageList[index].hash != 'add-on')
            {
                active = garageList[index].hash;
            }
            console.log(active);
            $('.button#use').addClass('disabled');
            $('.garage-wrapper .active').removeClass('active');
            mp.trigger('LspdUseGarage',active);
        }
    });
    $('.button#close').on('click',function(){
        mp.trigger('closePoliceGarage');
    });
}
const arrayIncludesInObj = (arr, key, valueToCheck) => {
    let found = -1,
        index = -1;

    arr.some(value => {
        index++;
        if (value[key] === valueToCheck) {
            found = index;
            return true; // this will break the loop once found
        }
    });
    return found;
}
function openPoliceCars(count)
{
    for(let i=0;i < count;i++)
    {
        $(`.container .garage-item:eq(${i})`).removeClass('closed');
    }
}