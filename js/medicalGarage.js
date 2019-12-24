let garageList = [
        { car:'Brute Ambulance', hash:'ambulance', luggage : '80', fuel: '200' },
        { car:'Baller LE LWB', hash:'baller3', luggage : '50', fuel: '250' }
    ],
    positionList = [
        { position: 'Медик', faction: 'medical' },
        { position: 'Заместитель Главного врача', faction: 'medical' },
        { position: 'Главный врач', faction: 'medical' }
    ],
    factionList =  [
        {
            Position:'Медик',
            CarList: {
                opened:[
                    'Brute Ambulance'
                ],
                closed:[
                    'Baller LE LWB'
                ]
            }
        },
        {
            Position:'Заместитель Главного врача',
            CarList: {
                opened:[
                    'Brute Ambulance',
                    'Baller LE LWB'
                ],
                closed:[
                ]
            }
        },
        {
            Position:'Главный врач',
            CarList: {
                opened:[
                    'Brute Ambulance',
                    'Baller LE LWB'
                ],
                closed:[
                    
                ]
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
                let currentId = carItem.replace(/[\s{2,}]+/g, ''),
                    currentIndex = arrayIncludesInObj(garageList,'car',carItem),
                    template = `
                <div class="garage-item ${Type}" id="${currentId}" data-id="${carItem}">
                    <div class="img-block">
                        <img src="img/policeGarage/${currentId}.jpg" alt="">
                        <div class="characters">
                            <div class="char-wrapper">
                                <div class="char-title">
                                    Объем багажника
                                </div>
                                <div class="char-item">
                                    ${garageList[currentIndex].luggage}
                                </div>
                            </div>
                            <div class="char-wrapper">
                                <div class="char-title">
                                    Объем бака
                                </div>
                                <div class="char-item">
                                    ${garageList[currentIndex].fuel}
                                </div>
                            </div>
                        </div>
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
                        <img src="img/policeGarage/${currentId}.jpg" alt="">
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
            mp.trigger('medicalUseGarage',active);
        }
    });
    $('.button#close').on('click',function(){
        mp.trigger('closeMedicalGarage');
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