
let personalList = {},
    violatorsList = {},
    filerList = {};

$('#sansara-menu').on('click',function(){
    let menu = $('.container .wrapper .sansara-menu');
    if(!menu.is(':visible'))
    {
        $('#police-menu').removeClass('deactivated');
        menu.fadeIn();
        // if(!$('.container .wrapper .police-menu').is(':visible'))
        // {
        // }
    }
    else
    {
        menu.fadeOut();
    }
});
$('#police-menu').on('click',function(){
    let menu = $('.container .wrapper .police-menu');
    if(!menu.is(':visible'))
    {
        menu.fadeIn().css('display','flex');
        $(this).addClass('deactivated');
        $(this).parent().fadeOut();
    }
});
$('.container .wrapper .police-menu .close-but').on('click',function(){        
    $('.container .wrapper .police-menu').fadeOut();
});
$('.police-menu .menu-item').on('click',function(){
    let currentWrapper = this.id;
    $('.wrapper > .active').removeClass('active').fadeOut(200);
    $('.police-menu .menu-item.active').removeClass('active');
    $(this).addClass('active');
    $(`.wrapper .${currentWrapper}`).addClass('active').fadeIn(200).css('display','flex');
    initPage();
    initFiler();
});
$('.business-wrapper .add-violation .wanted-level .star').hover(
    function()
    {
        if(!$('.business-wrapper .add-violation .wanted-level .star').hasClass('activated'))
        {
            let currentStar = this.id;            
            $('.business-wrapper .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            });            
            for(i=0; i <= currentStar.substring(1); i++)
            {
                $(`.business-wrapper .wanted-level .star#s${i}`).find('svg path').css({
                    'stroke':'#ed8a19',
                    'fill':'#ed8a19'
                });
            }
        }
    }
);
$('.container .wantedSearch-wrapper .add-violation .star').hover(
    function()
    {
        if(!$('.container .wantedSearch-wrapper .add-violation .star').hasClass('activated'))
        {
            let currentStar = this.id;            
            $('.wantedSearch-wrapper .add-violation .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            });            
            for(i=0; i <= currentStar.substring(1); i++)
            {
                $(`.wantedSearch-wrapper .add-violation .wanted-level .star#s${i}`).find('svg path').css({
                    'stroke':'#ed8a19',
                    'fill':'#ed8a19'
                });
            }
        }
    }
);
$('.business-wrapper .add-violation .wanted-level .star').on('click',function(){
    if(!$('.business-wrapper .add-violation .wanted-level .star').hasClass('activated'))
    {
        $(this).addClass('activated');
    }
    else
    {
        let currentStar = this.id;   
        $('.business-wrapper .add-violation .wanted-level .star.activated').removeClass('activated');
        $('.business-wrapper .wanted-level .star').find('svg path').css({
            'stroke':'#000',
            'fill':'#fff'
        });  
        for(i=0; i <= currentStar.substring(1); i++)
        {
            $(`.business-wrapper .wanted-level .star#s${i}`).find('svg path').css({
                'stroke':'#ed8a19',
                'fill':'#ed8a19'
            });
        }
        $(this).addClass('activated');
    }
});
$('.container .wantedSearch-wrapper .add-violation .star').on('click',function(){
    if(!$('.container .wantedSearch-wrapper .add-violation .star').hasClass('activated'))
    {
        $(this).addClass('activated');
    }
    else
    {
        let currentStar = this.id;   
        $('.container .wantedSearch-wrapper .add-violation .star.activated').removeClass('activated');
        $('.wantedSearch-wrapper .add-violation .wanted-level .star').find('svg path').css({
            'stroke':'#000',
            'fill':'#fff'
        });  
        for(i=0; i <= currentStar.substring(1); i++)
        {
            $(`.wantedSearch-wrapper .add-violation .wanted-level .star#s${i}`).find('svg path').css({
                'stroke':'#ed8a19',
                'fill':'#ed8a19'
            });
        }
        $(this).addClass('activated');
    }
});
$('.container .wantedSearch-wrapper .wanted-content-wrapper #add-violation').on('click',function(){        
    $('.container .mask').css('z-index','999');
    $('.container .wantedSearch-wrapper .add-violation .star.activated').removeClass('activated');
    $('.wantedSearch-wrapper .add-violation .wanted-level .star').find('svg path').css({
        'stroke':'#000',
        'fill':'#fff'
    });  
    $('.container .wantedSearch-wrapper .add-violation, .container .wantedSearch-wrapper .mask').fadeIn().css('display','flex');
});
$('.container .business-wrapper .add-violation .close-but').on('click',function(){     
    $('.container .business-wrapper .add-violation, .container .business-wrapper .mask').fadeOut();
});
$('.container .wantedSearch-wrapper .close-but').on('click',function(){           
    $('.container .mask').css('z-index','99');        
    $('.container .wantedSearch-wrapper .add-violation').fadeOut();
});
$('.container .wantedSearch-wrapper .wanted-content-wrapper .close-but').on('click',function(){     
    $('.container .wantedSearch-wrapper .wanted-content-wrapper, .container .wantedSearch-wrapper .mask').fadeOut();
});
$('.container .wantedSearch-wrapper .wanted-item').on('click',function(){
    $('.container .wantedSearch-wrapper .mask,.container .wantedSearch-wrapper .wanted-content-wrapper').fadeIn();
});
$('.container .add-thing-wrapper .close-but, .container .things-wrapper .mask').on('click',function(){
    $('.container .add-thing-wrapper, .container .mask').fadeOut();
});
function initTime(hour,minute)
{
    let currentHours = hour,
        currentMinutes = minute;
    time = `${currentHours <=9 ? '0' + currentHours : currentHours}:${currentMinutes <=9 ? '0' + currentMinutes : currentMinutes}`;
    $('.hud-time').text(time);
}
let package = JSON.stringify({
    'personalList':[
        {
            FullName:'Вася Иванов',
            Age: 55,
            Gender:'man',
            Text: 'asdasdada',
            StatementsID: 15,
            Number: '111111',
            Cars: [
                'Tyrus [LS245EE]',
                'Tyrus [LS1452E]'
            ],
            Home:'ул. Лесная 20',
            StatementsID: [
                {
                    Id: 1,
                    FullName: 'Саша Белый',
                    Time:'15:38',
                    Date:'23.03.19'
                },
                {
                    Id: 2,
                    FullName: 'Саша Белый',
                    Time:'15:40',
                    Date:'23.03.19'
                }
            ]
        },
        {
            FullName:'Вася Петров',
            Age: 25,
            Gender:'man',
            Text: 'asdasdada',
            StatementsID: 15,
            Number: '232235',
            Cars: [
                'Tyrus [LS845EE]',
                'Ringo [LS2452E]'
            ],
            Home:'ул. Лесная 25'
        }
    ],
    'violatorsList':[            
        {
            FullName:'Вася Иванов',
            WantedLevel: 5,
            StatementID:100
        },
        {
            FullName:'Рубин Иванов',
            WantedLevel: 2,
            StatementID:99
        }            
    ],
    'filerList':[
        {
            StatementID:1,
            PoliceMembers : [
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                },
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                }
            ],
            Victim :[
                {
                    FullName:'Виталька Усов'
                },
                {
                    FullName:'Григорий Трусов'
                }
            ],
            Violators: [
                {
                    FullName:'Виталька Усов'
                },
                {
                    FullName:'Григорий Трусов'
                }
            ],
            Proofs: [
                'Нож',
                'Кровь нападавшего'
            ],
            ClosedFull: false,
            InProgress:true,
            WantedLevel: 5,
            Text: 'Этот хер, украл у меня еду в Бергер Кинге пока@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.'
        },
        {
            StatementID:12,
            PoliceMembers : [
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                },
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                }
            ],
            Victim :[
                {
                    FullName:'Виталька Трусов'
                },
                {
                    FullName:'Григорий Усов'
                }
            ],
            Violators: [
                {
                    FullName:'Виталька Трусов'
                },
                {
                    FullName:'Григорий Усов'
                }
            ],
            Proofs: [
                'Нож',
                'Кровь нападавшего'
            ],
            ClosedFull: false,
            InProgress:true,
            WantedLevel: 5,
            Text: 'Этот хер, украл у меня еду в Бергер Кинге пока@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.'
        },
        {
            StatementID:8,
            PoliceMembers : [
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                },
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                }
            ],
            Victim :[
                {
                    FullName:'Виталька Трусов'
                },
                {
                    FullName:'Григорий Усов'
                }
            ],
            Violators: [
                {
                    FullName:'Виталька Трусов'
                },
                {
                    FullName:'Григорий Усов'
                }
            ],
            Proofs: [
                'Нож',
                'Кровь нападавшего'
            ],
            ClosedFull: false,
            InProgress:true,
            WantedLevel: 5,
            Text: 'Этот хер, украл у меня еду в Бергер Кинге пока@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.'
        },
        {
            StatementID:2,
            PoliceMembers : [
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                },
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                }
            ],
            Victim :[
                {
                    FullName:'Виталька Трусов'
                },
                {
                    FullName:'Григорий Усов'
                }
            ],
            Violators: [
                {
                    FullName:'Виталька Трусов'
                },
                {
                    FullName:'Григорий Усов'
                }
            ],
            Proofs: [
                'Нож',
                'Кровь нападавшего'
            ],
            ClosedFull: false,
            InProgress:true,
            WantedLevel: 5,
            Text: 'Этот хер, украл у меня еду в Бергер Кинге пока@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.'
        },
        {
            StatementID:5,
            PoliceMembers : [
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                },
                {
                    FullName:'Григорий Упсов',
                    Position:'Младший Сержант'
                }
            ],
            Victim :[
                {
                    FullName:'Виталька Усов'
                },
                {
                    FullName:'Григорий Трусов'
                }
            ],
            Violators: [
                {
                    FullName:'Виталька Усов'
                },
                {
                    FullName:'Григорий Трусов'
                }
            ],
            Proofs: [
                'Нож',
                'Кровь нападавшего'
            ],
            ClosedFull: true,
            InProgress:false,
            WantedLevel: 5,
            Text: 'Этот хер, украл у меня еду в Бергер Кинге пока@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.@я отходил к кассе за салфетками.'
        }
    ]
});
function initFiler()
{
    $(`.container .archive-wrapper .archive-wrap,
        .container .things-wrapper .things-container`).empty();
    let sortedItem = $(filerList).sort((a, b) => (a.StatementID > b.StatementID) ? 1 : -1);  
    $(sortedItem).each(function(index,item){         
        if(item.ClosedFull == false && item.InProgress == true)
        {
            let policeMembers  = ``,
                itemText = item.Text.split('@'),
                textItems = ``,
                evidenceItems = ``,
                suspectsItems = ``;
            $(item.Proofs).each(function(index,item){
                evidenceItems  += `<div class="evidences-item">${item}</div>`;
            });
            $(item.Violators).each(function(index,item){
                suspectsItems  += `<div class="suspects-item">${item.FullName}</div>`;
            });
            $(itemText).each(function(index,item){
                textItems += `
                    <div class="item-text">
                        <div class="inner-text">
                        ${item}
                        </div>
                    </div>`;
            });
            $(item.PoliceMembers).each(function(index,item){
                policeMembers  += `<div class="things-name">
                                        [<span class="rank">${item.Position}</span>]
                                        <span class="name">${item.FullName}</span>
                                    </div> `;
            });
            let template = `
                <div class="things-item" id="thing${item.StatementID}">
                    <div class="left-block">
                        <div class="title-wrap">
                            <div class="name-wrap">
                                <div class="things-title">Дело №${item.StatementID}</div>
                                ${policeMembers} 
                            </div>       
                            <div class="button" id="edit-thing">Изменить дело</div>              
                        </div>
                        <div class="text-wrapper">
                            ${textItems}
                        </div>     
                        <div class="edit-wrap">
                            
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="evidences-wrapper">
                            <div class="evidences-title">Улики</div>
                            <div class="evidences-wrap">
                                ${evidenceItems}
                            </div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="suspects-wrapper">
                            <div class="suspects-title">Подозреваемые</div>
                            <div class="suspects-wrap">
                                ${suspectsItems}
                            </div>
                        </div>
                    </div>
                </div>`;
                $('.container .things-wrapper .things-container').append(template);
            }
            if(item.ClosedFull == true && item.InProgress == false)
            {
                let policeMembers  = ``,
                itemText = item.Text.split('@'),
                textItems = ``,
                evidenceItems = ``,
                suspectsItems = ``;
                $(item.Proofs).each(function(index,item){
                    evidenceItems  += `<div class="evidences-item">${item}</div>`;
                });
                $(item.Violators).each(function(index,item){
                    suspectsItems  += `<div class="suspects-item">${item.FullName}</div>`;
                });
                $(itemText).each(function(index,item){
                    textItems += `
                        <div class="item-text">
                            <div class="inner-text">
                            ${item}
                            </div>
                        </div>`;
                });
                $(item.PoliceMembers).each(function(index,item){
                    policeMembers  += `<div class="archive-name">
                                            [<span class="rank">${item.Position}</span>]
                                            <span class="name">${item.FullName}</span>
                                        </div> `;
                });
                let template = `
                    <div class="archive-item" id="thing${item.StatementID}">
                        <div class="left-block">
                            <div class="title-wrap">
                                <div class="name-wrap">
                                    <div class="archive-title">Дело №${item.StatementID}</div>
                                    ${policeMembers} 
                                </div>                  
                            </div>
                            <div class="text-wrapper">
                                ${textItems}
                            </div>   
                        </div>
                        <div class="right-block">
                            <div class="evidences-wrapper">
                                <div class="evidences-title">Улики</div>
                                <div class="evidences-wrap">
                                    ${evidenceItems}
                                </div>
                            </div>
                        </div>
                        <div class="right-block">
                            <div class="suspects-wrapper">
                                <div class="suspects-title">Подозреваемые</div>
                                <div class="suspects-wrap">
                                    ${suspectsItems}
                                </div>
                            </div>
                        </div>
                    </div>`;
                $('.container .archive-wrapper .archive-wrap').append(template);
            }
    });
    refreshThingsList();
}
pushNotebook(package);
function pushNotebook(package)
{
    let obj = JSON.parse(package);
    $(obj).each(function(index,item){
        if(obj.personalList != undefined)
        {
            personalList = [...obj.personalList];
        }
        if(obj.violatorsList != undefined)
        {
            violatorsList = [...obj.violatorsList];
        }
        if(obj.filerList != undefined)
        {
            filerList = [...obj.filerList];
        }
    });
}
function initPage()
{
    let currentActive = $('.container .police-menu .menu-item.active')[0].id;
    if(currentActive == 'wantedSearch-wrapper')
    {
        $('.container .wantedSearch-wrapper .wanted-wrapper').empty();
        let sortedItem = $(violatorsList).sort((a, b) => (a.StatementID > b.StatementID) ? 1 : -1);  
        $(sortedItem).each(function(index,item){
            let template = `
            <div class="wanted-item">
                <div class="wanted-title">
                    ${item.FullName}
                </div>
                <div class="statement-title">
                    Дело №${item.StatementID}
                </div>
                <div class="wanted-level">
                    <div class="star ${item.WantedLevel >= 1 ? 'active' : ''}" id="s1"><i class="fas fa-star"></i></div>
                    <div class="star ${item.WantedLevel >= 2 ? 'active' : ''}" id="s2"><i class="fas fa-star"></i></div>
                    <div class="star ${item.WantedLevel >= 3 ? 'active' : ''}" id="s3"><i class="fas fa-star"></i></div>
                    <div class="star ${item.WantedLevel >= 4 ? 'active' : ''}" id="s4"><i class="fas fa-star"></i></div>
                    <div class="star ${item.WantedLevel >= 5 ? 'active' : ''}" id="s5"><i class="fas fa-star"></i></div>
                </div>
            </div>`;                
            $('.container .wantedSearch-wrapper .wanted-wrapper').append(template);
        });
    }
}
$('.container .business-wrapper .search-block #searchPerson').on('click',function(){
    let value = $(this).prev().val();
    console.log(value);
    searchPerson(value);
});
$.inObject = function(obj, value) {
    var foundKey = -1;
    $.each(obj, function(key, val) {
        if (value === val) {
            foundKey = key;
            return;
        }
    });
    return foundKey;
};
$.inCars = function(obj, value) {
    var foundKey = -1;
    $.each(obj, function(key, val) {
        let temp = val;
        temp = temp.slice(temp.indexOf('[')+1,-1);
        if (value === temp) {
            foundKey = key;
            return;
        }
    });
    return foundKey;
};
function searchPerson(field)
{
    $(personalList).each(function(index,item){
        if($.inCars(item.Cars, field) != -1)
        {
            console.log(personalList[index]);
            personInit(personalList[index]);
        }
        else if($.inObject(item, field) != -1)
        {
            console.log(personalList[index]);
            personInit(personalList[index]);
        }
        else
        {
            console.log('thats wrong');
        }
    });
}
function personInit(item)
{
    if(item !== undefined)
    {
        if(item.FullName != $('.container .business-wrapper .content-block .name').text())
        {
            let carItems = ``,
                violationItems = ``;
            $(item.Cars).each(function(index,item){
                carItems += `<p id="carItem">${item}</p>`;
            });
            $(item.StatementsID).each(function(index,item){
                violationItems += `<div class="violation-item">
                    <div class="title-item">${item.Id}</div>
                    <div class="title-item">${item.FullName}</div>
                    <div class="title-item">
                        <div class="date-wrapper">
                            <div class="time">${item.Time}</div>
                            <div class="date">${item.Date}</div>
                        </div>
                    </div>
                </div>`;
            });
            let template = `
                <div class="name-wrapper">
                    <div class="name">${item.FullName}</div>
                    <div class="age">Возраст:
                        <span id="age">${item.Age}</span>
                    </div>
                    <div class="number">Номер:
                        <span id="number">${item.Number}</span>
                    </div>
                </div>
                <div class="property-wrapper">
                    <div class="car">Автомобиль:
                    ${carItems}
                    </div>
                    <div class="house">Проживание:
                        <p id="house">${item.Home}</p>                            
                    </div>
                </div>
                <div class="violations-wrapper">
                    <div class="title-wrap">
                        <div class="title-item">Дело №</div>
                        <div class="title-item">Сотрудник</div>
                        <div class="title-item">Дата</div>
                    </div>
                    <div class="violation-wrap">
                        ${violationItems}
                    </div>
                </div>                    
                <div class="button" id="add-violation">Добавить запись</div>
            `;
            if(!$('.container .business-wrapper .content-block').is(':visible'))
            {
                $('.container .business-wrapper .content-block').empty().append(template).addClass('opened flipInY').css('display','block');
            }
            else
            {
                $('.container .business-wrapper .content-block').removeClass('opened flipInY').addClass('flipOutY');
                setTimeout(()=>{
                    $('.container .business-wrapper .content-block').empty().append(template).removeClass('flipOutY').addClass('opened flipInY').css('display','block');
                },800);
            }
            refreshPersonalViolation();
        }
    }
}
function refreshPersonalViolation()
{        
    $('.container .business-wrapper #add-violation').on('click',function(){        
        $('.container .business-wrapper .add-violation, .container .business-wrapper .mask').fadeIn().css('display','flex');
    });
}
function refreshThingsList()
{
    $('#search-thing').on('click',function(){
        if($(this).prev().val().length != 0)
        {
            let id  = '#thing' + $(this).prev().val();   
            if($(id).length)
            {                             
                $(this).prev().val('');
                let top = $(id).offset().top - 150;
                $('.container .things-wrapper .things-container').animate({scrollTop: top}, 900);
            }
            else
            {
                $('.container .things-wrapper .search-wrap .notification').fadeIn(200);
                setTimeout(function(){                                 
                    $('.container .things-wrapper .search-wrap input').val('');
                    $('.container .things-wrapper .search-wrap .notification').fadeOut();
                },1500);
            }
        }
    });
    $('.container .things-wrapper .search-wrap .notification').on('click',function(){
        $('.container .things-wrapper .search-wrap input').val('');
        $('.container .things-wrapper .search-wrap .notification').fadeOut();
    });    
    $('.container .things-wrapper #edit-thing').on('click',function(){
        let currentId = $(this).parent().parent().parent()[0].id,
            currentIndex = null;
        currentId = currentId.substr(5);
        $('.container .add-thing-wrapper, .container .things-wrapper .mask').fadeIn();        
        $(filerList).each(function(index,item){
            if(item.StatementID === parseInt(currentId))
            {
                let policeMembers  = ``,
                    itemText = item.Text.split('@'),
                    textItems = ``,
                    evidenceItems = ``,
                    suspectsItems = ``;
                $(item.Proofs).each(function(index,item){
                    evidenceItems  += `<div class="evidences-item">${item}</div>`;
                });
                $(item.Violators).each(function(index,item){
                    suspectsItems  += `<div class="suspects-item">
                                            ${item.FullName}
                                            <div class="delete-item">
                                                <i class="fas fa-times"></i>
                                            </div>
                                        </div>`;
                });
                $(itemText).each(function(index,item){
                    textItems += `<textarea id="thing-add-text">${item}</textarea>`;
                });
                $(item.PoliceMembers).each(function(index,item){
                    policeMembers  += `<div class="things-name">
                                            [<span class="rank">${item.Position}</span>]
                                            <span class="name">${item.FullName}</span>
                                        </div> `;
                });
                let template = `
                    <div class="close-but"><i class="fas fa-times"></i></div>
                    <div class="things-item">
                        <div class="left-block">
                            <div class="title-wrap">
                                <div class="name-wrap">
                                    <div class="things-title">Дело №${item.StatementID}</div>
                                    ${policeMembers}  
                                </div>                
                                <div class="button" id="entryThing">Присоединится</div>          
                            </div>
                            <div class="text-wrapper">
                                ${textItems}
                            </div>          
                            <div class="button" id="add-line">Добавить абзац</div>               
                            <!-- <div class="edit-button"></div> --> 
                            <div class="edit-wrap">
                                
                            </div>
                        </div>
                        <div class="right-block">
                            <div class="suspects-wrapper">
                                <div class="suspects-title">Подозреваемые</div>
                                <div class="suspects-wrap">
                                    ${suspectsItems}           
                                </div>
                            </div>
                            <input type="text" placeholder="Имя">
                            <input type="text" placeholder="Фамилия">
                            <div class="button" id="add-suspect">Добавить</div>
                        </div>
                    </div>`;  
                $('.container .add-thing-wrapper').empty().append(template);
                refreshAddThings();
            }
        });
    });
    $('.container .things-wrapper #add-thing').on('click',function(){
        $('.container .add-thing-wrapper, .container .things-wrapper .mask').fadeIn();
        $('.container .things-wrapper .add-thing-wrapper #thing-add-text').text(
            `Этот хер, украл у меня еду в Бергер Кинге пока я отходил к кассе за салфетками.Этот хер, украл у меня еду в Бергер Кинге пока я отходил к кассе за салфетками.Этот хер, украл у меня еду в Бергер Кинге пока я отходил к кассе за салфетками.Этот хер, украл у меня еду в Бергер Кинге пока я отходил к кассе за салфетками.
        `);        
    });
}
function refreshAddThings()
{
    $('#add-line').on('click',function(){
        $('.container .things-wrapper .things-wrap .add-thing-wrapper .text-wrapper')
        .append(`<textarea id="thing-add-text"></textarea>`)
        .animate({scrollTop: ($('.container .things-wrapper .things-wrap .add-thing-wrapper .text-wrapper').innerHeight())}, 900);
    });
    $('.container .wrapper .add-thing-wrapper .close-but').on('click',function(){        
        $('.container .wrapper .add-thing-wrapper, .container .things-wrapper .mask').fadeOut();
    });
}