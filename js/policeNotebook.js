
let policemanList = {},
    personalList = {},
    violatorsList = {},
    filerList = {},
    employeeList = {},
    handbookList = {},
    charterText = '';

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
$('#noteExit').on('click',function(){
    mp.trigger('exitNote');
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
$('.container .wrapper .bottom-panel .left-wrapper  .used-app').on('click',function(){
    if($(`.wrapper > .active`).is(':visible'))
    {
        $(`.wrapper > .active`).fadeOut(500);
    }
    else
    {
        $(`.wrapper > .active`).fadeIn(500).css('display','flex');
    }
});
$('.container .wrapper .police-menu .close-but').on('click',function(){        
    $('.container .wrapper .police-menu').fadeOut();
});
$('.police-menu .menu-item').on('click',function(){
    let currentWrapper = this.id;
    if(!$(this).hasClass('active'))
    {
        $('.wrapper > .active').removeClass('active').fadeOut(200);
        $('.police-menu .menu-item.active').removeClass('active');
        $(this).addClass('active');
        $(`.wrapper .${currentWrapper}`).addClass('active').fadeIn(500).css('display','flex');
        refreshActive(currentWrapper);
    }
});
$('.things-wrapper .add-violation .wanted-level .star').hover(
    function()
    {
        if(!$('.things-wrapper .add-violation .wanted-level .star').hasClass('activated'))
        {
            let currentStar = this.id;            
            $('.things-wrapper .add-violation .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            });            
            for(i=0; i <= currentStar.substring(1); i++)
            {
                $(`.things-wrapper .add-violation .wanted-level .star#s${i}`).find('svg path').css({
                    'stroke':'#ed8a19',
                    'fill':'#ed8a19'
                });
            }
        }
    }
);
function refreshActive(currentWrapper)
{
    switch(currentWrapper)
    {
        case 'wantedSearch-wrapper':
        {
            initPage();  
        }
        case 'archive-wrapper':
        {
            initFiler();
        }
        case 'things-wrapper':
        {
            initFiler();
        }
        case 'employee-wrapper':
        {
            initEmployee();
        }
        case 'handbook-wrapper':
        {
            initHandbook();
        }
        case 'charter-wrapper':
        {
            initCharter();
        }
    }
}
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
$('.things-wrapper .add-violation .wanted-level .star').on('click',function(){
    if(!$('.things-wrapper .add-violation .wanted-level .star').hasClass('activated'))
    {
        $(this).addClass('activated');
    }
    else
    {
        let currentStar = this.id;   
        $('.things-wrapper .add-violation .wanted-level .star.activated').removeClass('activated');
        $('.things-wrapper .add-violation .wanted-level .star').find('svg path').css({
            'stroke':'#000',
            'fill':'#fff'
        });  
        for(i=0; i <= currentStar.substring(1); i++)
        {
            $(`.things-wrapper .add-violation .wanted-level .star#s${i}`).find('svg path').css({
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
    $('.container .add-thing-wrapper, .container .mask, .container .add-violation').fadeOut();
});
function initTime(hour,minute)
{
    let currentHours = hour,
        currentMinutes = minute;
    time = `${currentHours <=9 ? '0' + currentHours : currentHours}:${currentMinutes <=9 ? '0' + currentMinutes : currentMinutes}`;
    $('.hud-time').text(time);
}
let policeman = JSON.stringify([
    {
        FullName:'Дмитрий Иванов',
        Position:'Начальник полиции',
        HourInDept:0,
        Status:false,
        Time:0,
        OpenedThings:1,
        ClosedThings:2
    }
]); 
let personal = JSON.stringify([
    {
        FullName:'Вася Иванов',
        Age: 55,
        Gender:'man',
        Text: 'asdasdada',
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
                Date:'15:38@23.03.19'
            },
            {
                Id: 2,
                FullName: 'Саша Белый',
                Date:'15:38@23.03.19'
            }
        ]
    },
    {
        FullName:'Вася Петров',
        Age: 25,
        Gender:'man',
        Text: 'asdasdada',
        StatementsID: 15,
        Number: '23',
        Cars: [
            'Tyrus [LS845EE]',
            'Ringo [LS2452E]',
            'Ringo [LS2452E]',
            'Ringo [LS2452E]'
        ],
        Home:'ул. Лесная 25',
        StatementsID: [
            {
                Id: 1,
                FullName: 'Саша Белый',
                Date:'15:38@23.03.19'
            },
            {
                Id: 2,
                FullName: 'Саша Белый',
                Date:'15:40@23.03.19'
            }
        ]
    }
]);
let violators = JSON.stringify([    
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
]);
let filer = JSON.stringify([ 
    {
        StatementID:1,
        PoliceMembers : [
            'Младший Сержант@Григорий Упсов',
            'Младший Сержант@Григорий Упсов'
        ],
        Victim :[
            'Виталька Усов',
            'Григорий Трусов'
        ],
        Violators: [
            'Виталька Усов',
            'Григорий Трусов'
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
        StatementID:3,
        PoliceMembers : [
            'Младший Сержант@Григорий Упсов',
            'Младший Сержант@Григорий Упсов'
        ],
        Victim :[
            'Виталька Усов',
            'Григорий Трусов'
        ],
        Violators: [
            'Виталька Усов',
            'Григорий Трусов'
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
            'Младший Сержант@Григорий Упсов',
            'Младший Сержант@Григорий Упсов'
        ],
        Victim :[
            'Виталька Усов',
            'Григорий Трусов'
        ],
        Violators: [
            'Виталька Усов',
            'Григорий Трусов'
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
        StatementID:10,
        PoliceMembers : [
            'Младший Сержант@Григорий Упсов',
            'Младший Сержант@Григорий Упсов'
        ],
        Victim :[
            'Виталька Усов',
            'Григорий Трусов'
        ],
        Violators: [
            'Виталька Усов',
            'Григорий Трусов'
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
            'Младший Сержант@Григорий Упсов',
            'Младший Сержант@Григорий Упсов'
        ],
        Victim :[
            'Виталька Усов',
            'Григорий Трусов'
        ],
        Violators: [
            'Виталька Усов',
            'Григорий Трусов'
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
]);
let employee = JSON.stringify([
    {
        FullName:'Вася Иванов',
        Rank:'Младший Сержант',
        Online:true,
        Time:'2',
        OpenedThings:1,
        ClosedThings:2
    },
    {
        FullName:'Вася Иванов',
        Rank:'Младший Сержант',
        Online:false,
        Time:'2',
        OpenedThings:1,
        ClosedThings:2
    },
    {
        FullName:'Вася Иванов',
        Rank:'Младший Сержант',
        Online:true,
        Time:'2',
        OpenedThings:1,
        ClosedThings:2
    },
    {
        FullName:'Вася Иванов',
        Rank:'Младший Сержант',
        Online:true,
        Time:'2',
        OpenedThings:1,
        ClosedThings:2
    },
    {
        FullName:'Вася Иванов',
        Rank:'Младший Сержант',
        Online:true,
        Time:'2',
        OpenedThings:1,
        ClosedThings:2
    },
    {
        FullName:'Вася Иванов',
        Rank:'Младший Сержант',
        Online:true,
        Time:'2',
        OpenedThings:1,
        ClosedThings:2
    },
    {
        FullName:'Вася Иванов',
        Rank:'Младший Сержант',
        Online:false,
        Time:'2',
        OpenedThings:1,
        ClosedThings:2
    },
    {
        FullName:'Вася Иванов',
        Rank:'Младший Сержант',
        Online:false,
        Time:'2',
        OpenedThings:1,
        ClosedThings:2
    }
]); 
let handbook = JSON.stringify([
    {
        Name:'Употребление нарк. средств',
        Penalty:'Ремнем по жопе',
        Article:'УК 228'
    },
    {
        Name:'Употребление нарк. средств',
        Penalty:'Ремнем по жопе',
        Article:'УК 228'
    },
    {
        Name:'Употребление нарк. средств',
        Penalty:'Ремнем по жопе',
        Article:'УК 228'
    },
    {
        Name:'Употребление нарк. средств',
        Penalty:'Ремнем по жопе',
        Article:'УК 228'
    }
]);
let charter = `<p>*Имя должно быть введено полностью</p>
               <p>*Номер должен состоять из 6 символов</p>
               <p>*Введите номер Авто</p>`;
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
                suspectsItems  += `<div class="suspects-item">${item}</div>`;
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
                let itemPolice = item.split('@');
                policeMembers  += `<div class="things-name">
                                        [<span class="rank">${itemPolice[0]}</span>]
                                        <span class="name">${itemPolice[1]}</span>
                                    </div> `;
            });
            let template = `
                <div class="things-item" id="thing${item.StatementID}">
                    <div class="left-block">
                        <div class="title-wrap">
                            <div class="name-wrap">
                                <div class="things-title">
                                    <span>Дело №${item.StatementID}</span>                                    
                                    <div class="wanted-level">
                                        <div class="star ${item.WantedLevel >= 1 ? 'active' : ''}" id="s1"><i class="fas fa-star"></i></div>
                                        <div class="star ${item.WantedLevel >= 2 ? 'active' : ''}" id="s2"><i class="fas fa-star"></i></div>
                                        <div class="star ${item.WantedLevel >= 3 ? 'active' : ''}" id="s3"><i class="fas fa-star"></i></div>
                                        <div class="star ${item.WantedLevel >= 4 ? 'active' : ''}" id="s4"><i class="fas fa-star"></i></div>
                                        <div class="star ${item.WantedLevel >= 5 ? 'active' : ''}" id="s5"><i class="fas fa-star"></i></div>
                                    </div>
                                </div>
                                ${policeMembers} 
                            </div>     
                            <div class="button-wrapper">
                                <div class="button" id="edit-thing">Изменить дело</div>
                                <div class="button" id="add-violation">В розыск</div>   
                            </div>                 
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
            if(item.ClosedFull == true && item.InProgress == false || item.ClosedFull == false && item.InProgress == false)
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
                    suspectsItems  += `<div class="suspects-item">${item}</div>`;
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
                    let itemPolice = item.split('@');
                    policeMembers  += `<div class="archive-name">
                                            [<span class="rank">${itemPolice[0]}</span>]
                                            <span class="name">${itemPolice[1]}</span>
                                        </div> `;
                });
                let template = `
                    <div class="archive-item">
                        <div class="left-block">
                            <div class="title-wrap">
                                <div class="name-wrap">
                                    <div class="archive-title">
                                        <span>Дело №${item.StatementID}</span>                                    
                                        <div class="wanted-level">
                                            <div class="star ${item.WantedLevel >= 1 ? 'active' : ''}" id="s1"><i class="fas fa-star"></i></div>
                                            <div class="star ${item.WantedLevel >= 2 ? 'active' : ''}" id="s2"><i class="fas fa-star"></i></div>
                                            <div class="star ${item.WantedLevel >= 3 ? 'active' : ''}" id="s3"><i class="fas fa-star"></i></div>
                                            <div class="star ${item.WantedLevel >= 4 ? 'active' : ''}" id="s4"><i class="fas fa-star"></i></div>
                                            <div class="star ${item.WantedLevel >= 5 ? 'active' : ''}" id="s5"><i class="fas fa-star"></i></div>
                                        </div>
                                    </div>
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
function pushNotebook(policeman,personal,violators,filer,employee,handbook,charter)
{
    if(policeman != undefined)
    {
        policemanList = [...JSON.parse(policeman)];
    }
    if(personal != undefined)
    {
        personalList = [...JSON.parse(personal)];
    }
    if(violators != undefined)
    {
        violatorsList = [...JSON.parse(violators)];
    }
    if(filer != undefined)
    {
        filerList = [...JSON.parse(filer)];
    }
    if(employee != undefined)
    {
        employeeList = [...JSON.parse(employee)];
    }
    if(handbook != undefined)
    {
        handbookList = [...JSON.parse(handbook)];
    }
    charterText = charter;
    let currentWrapper = $('.police-menu .menu-item.active')[0].id;
    refreshActive(currentWrapper);
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
    mp.trigger('searchPerson',field);
    // $(personalList).each(function(index,item){
    //     if($.inCars(item.Cars, field) != -1)
    //     {
    //         console.log(personalList[index]);
    //         personInit(personalList[index]);
    //     }
    //     else if($.inObject(item, field) != -1)
    //     {
    //         console.log(personalList[index]);
    //         personInit(personalList[index]);
    //     }
    //     else
    //     {
    //         console.log('thats wrong');
    //     }
    // });
}
function personInit(item)
{
    if(item !== undefined)
    {
        if(item.FullName != $('.container .business-wrapper .content-block .name').text())
        {
            let carItems = ``,
                violationItems = ``;
            $(item.Cars).each(function(innerIndex,innerItem){
                let iterator = '';
                console.log(item.Cars.length);
                if(innerIndex < item.Cars.length-1)
                {
                    iterator = ',';
                }
                carItems += `<div id="carItem">${innerItem}${iterator}</div>`;
            });
            $(item.StatementsID).each(function(index,item){
                let itemDate = item.Date.split('@');
                violationItems += `<div class="violation-item">
                    <div class="title-item">${item.Id}</div>
                    <div class="title-item">${item.FullName}</div>
                    <div class="title-item">
                        <div class="date-wrapper">
                            <div class="time">${itemDate[0]}</div>
                            <div class="date">${itemDate[1]}</div>
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
                    <div class="car">
                        <div class="car-title">Автомобиль:</div>
                        <div class="car-wrapper">
                        ${carItems}
                        </div>
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
        }
    }
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
    $('.container .things-wrapper #add-violation').on('click',function(){  
        let currentId = $(this).parent().parent().parent().parent()[0].id;
        currentId = currentId.substr(5);       
        $('.container .things-wrapper .add-violation').attr('data-index',currentId);
        $('.container .things-wrapper .add-violation, .container .things-wrapper .mask').fadeIn().css('display','flex');
        refreshViolation();
    });    
    $('.container .things-wrapper .add-violation .close-but').on('click',function(){     
        $('.container .things-wrapper .add-violation, .container .things-wrapper .mask').fadeOut();
    });
    $('.container .things-wrapper .search-wrap .notification').on('click',function(){
        $('.container .things-wrapper .search-wrap input').val('');
        $('.container .things-wrapper .search-wrap .notification').fadeOut();
    });   
    $('.container .things-wrapper #edit-thing').on('click',function(){
        let currentId = $(this).parent().parent().parent().parent()[0].id,
            currentIndex = null;
        currentId = currentId.substr(5);
        $('.container .add-thing-wrapper, .container .things-wrapper .mask').fadeIn();        
        $(filerList).each(function(index,item){
            console.log(parseInt(currentId));
            if(item.StatementID === parseInt(currentId))
            {
                let policeMembers  = ``,
                    wantedLevel = ``,
                    itemText = item.Text.split('@'),
                    textItems = ``,
                    evidenceItems = ``,
                    suspectsItems = ``;
                $(item.Proofs).each(function(index,item){
                    evidenceItems  += `<div class="evidences-item">${item}</div>`;
                });
                $(item.Violators).each(function(index,item){
                    suspectsItems  += `<div class="suspects-item">
                                            <span>${item}</span>
                                            <div class="delete-item">
                                                <i class="fas fa-times"></i>
                                            </div>
                                        </div>`;
                });
                $(itemText).each(function(index,item){
                    textItems += `<textarea id="thing-add-text" onkeyup="textarea_resize(event);">${item}</textarea>`;
                });
                $(item.PoliceMembers).each(function(index,item){
                    let itemPolice = item.split('@');
                    policeMembers  += `<div class="things-name">
                                            [<span class="rank">${itemPolice[0]}</span>]
                                            <span class="name">${itemPolice[1]}</span>
                                        </div> `;
                });
                if(item.WantedLevel > 0)
                {
                    wantedLevel = `<div class="wanted-wrapper">
                                        <div class="wanted-title">Уровень розыска</div>
                                        <div class="wanted-level">
                                            <div class="star ${item.WantedLevel >= 1 ? 'active' : ''}" id="s1"><i class="fas fa-star"></i></div>
                                            <div class="star ${item.WantedLevel >= 2 ? 'active' : ''}" id="s2"><i class="fas fa-star"></i></div>
                                            <div class="star ${item.WantedLevel >= 3 ? 'active' : ''}" id="s3"><i class="fas fa-star"></i></div>
                                            <div class="star ${item.WantedLevel >= 4 ? 'active' : ''}" id="s4"><i class="fas fa-star"></i></div>
                                            <div class="star ${item.WantedLevel >= 5 ? 'active' : ''}" id="s5"><i class="fas fa-star"></i></div>
                                        </div>   
                                    </div>`;
                }
                let template = `
                    <div class="close-but"><i class="fas fa-times"></i></div>
                    <div class="things-item" id="edit"> 
                        <div class="left-block">
                            <div class="title-wrap">
                                <div class="name-wrap" data-index="${index}">
                                    <div class="things-title">Дело №${item.StatementID}</div>
                                    ${policeMembers}  
                                </div>       
                                <div class="button" id="entryThing">Присоединиться</div>        
                            </div>   
                            ${wantedLevel}
                            <div class="text-wrapper">
                                ${textItems}
                                <div id="text_area_div"></div>
                            </div> 
                            <div class="button-wrap">          
                                <div class="button" id="add-line">Добавить абзац</div>    
                                <div class="button" id="changeThing">Изменить дело</div>    
                            </div>             
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
                            <input type="text" id="suspect-name" placeholder="Имя">
                            <input type="text" id="suspect-lastname" placeholder="Фамилия">
                            <div class="button" id="add-suspect">Добавить</div>
                        </div>
                    </div>`;  
                $('.container .things-wrapper .add-thing-wrapper').empty().append(template);
                refreshAddThings();
            }
        });
    });
    $('.container .things-wrapper #add-thing').on('click',function(){
        $('.container .add-thing-wrapper, .container .things-wrapper .mask').fadeIn();
        let sortedItem = $(filerList).sort((a, b) => (a.StatementID > b.StatementID) ? 1 : -1);
        let currentId = 0;
        if(filerList.length > 0)
        {
            currentId = sortedItem[filerList.length-1].StatementID+1;
        }
        let template = `
            <div class="close-but"><i class="fas fa-times"></i></div>
            <div class="things-item" id="add">
                <div class="left-block">
                    <div class="title-wrap">
                        <div class="name-wrap">
                            <div class="things-title" data-statement="${currentId}">Дело №${currentId}</div>  
                            <div class="things-name">
                                [<span class="rank">${policemanList[0].Position}</span>]
                                <span class="name">${policemanList[0].FullName}</span>
                            </div>                          
                        </div>                         
                    </div>
                    <div class="text-wrapper" style="margin-top:20px;">

                    </div>
                    <div class="button-wrap">          
                        <div class="button" id="add-line">Добавить абзац</div>    
                        <div class="button" id="addThing">Добавить дело</div>    
                    </div>           
                    <!-- <div class="edit-button"></div> --> 
                    <div class="edit-wrap">
                        
                    </div>
                </div>
                <div class="right-block">
                    <div class="suspects-wrapper">
                        <div class="suspects-title">Подозреваемые</div>
                        <div class="suspects-wrap">

                        </div>
                    </div>
                    <input type="text" id="suspect-name" placeholder="Имя">
                    <input type="text" id="suspect-lastname" placeholder="Фамилия">
                    <div class="button" id="add-suspect">Добавить</div>
                </div>
            </div>`;  
        $('.container .add-thing-wrapper').empty().append(template);
        refreshAddThings();        
    });
}
function refreshViolation()
{
    $('.container .things-wrapper .add-violation #violationConfirm').on('click',function(){
        let currentId = $(this).parent().parent().attr('data-index'),
            witness = $('.container .things-wrapper .add-violation #witness').val(),
            violation = $('.container .things-wrapper .add-violation #violation').val(),
            injured = $('.container .things-wrapper .add-violation #injured').val(),
            wantedLevel = $('.container .things-wrapper .add-violation .wanted-level .star.activated');
        if(wantedLevel.length != 0)
        {
            wantedLevel = wantedLevel[0].id.slice(1);
        }
        if(wantedLevel == 0)
        {
            let template = 'Выберите уровень розыска';
            $('.container .things-wrapper .add-violation .notification .text').text(template).fadeIn();
            $('.container .things-wrapper .add-violation .notification').fadeIn();
            setTimeout(()=>{
                $('.container .things-wrapper .add-violation .notification').fadeOut();
            },1500);
        }
        if(witness.length == 0)
        {
            let template = 'Добавьте свидетеля';
            $('.container .things-wrapper .add-violation .notification .text').text(template).fadeIn();
            $('.container .things-wrapper .add-violation .notification').fadeIn();
            setTimeout(()=>{
                $('.container .things-wrapper .add-violation .notification').fadeOut();
            },1500);
        }
        if(violation.length == 0)
        {
            let template = 'Добавьте нарушение';
            $('.container .things-wrapper .add-violation .notification .text').text(template).fadeIn();
            $('.container .things-wrapper .add-violation .notification').fadeIn();
            setTimeout(()=>{
                $('.container .things-wrapper .add-violation .notification').fadeOut();
            },1500);
        }
        if(injured.length == 0)
        {
            let template = 'Добавьте потерпевшего';
            $('.container .things-wrapper .add-violation .notification .text').text(template).fadeIn();
            $('.container .things-wrapper .add-violation .notification').fadeIn();
            setTimeout(() => {
                $('.container .things-wrapper .add-violation .notification').fadeOut();
            },1500);
        }
        if(witness.length > 0 && violation.length > 0 && injured.length > 0 && wantedLevel > 0)
        {
            $('.container .things-wrapper .add-violation, .container .things-wrapper .mask').fadeOut();
            $(`.container .things-wrapper .add-violation #witness,
               .container .things-wrapper .add-violation #violation,
               .container .things-wrapper .add-violation #injured`).val('');            
            $('.container .things-wrapper .add-violation .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            }); 
            $('.container .things-wrapper .add-violation .wanted-level .star.activated').removeClass('activated');
            mp.trigger('addViolation',currentId,witness,violation,injured,wantedLevel);
        }
    });
    $('.container .things-wrapper .add-violation #violationCancel').on('click',function(){
        $('.container .things-wrapper .add-violation, .container .things-wrapper .mask').fadeOut();
    });
}
function refreshAddThings()
{
    $('#add-line').on('click',function(){
        $('.container .things-wrapper .things-wrap .add-thing-wrapper .text-wrapper')
        .append(`<textarea id="thing-add-text" onkeyup="textarea_resize(event);"></textarea><div id="text_area_div"></div>`)
        .animate({scrollTop: ($('.container .things-wrapper .things-wrap .add-thing-wrapper .text-wrapper').innerHeight())}, 900);
        $('.container .things-wrapper .things-wrap .add-thing-wrapper .text-wrapper #thing-add-text').focus();
    });
    $('.container .wrapper .add-thing-wrapper .close-but').on('click',function(){        
        $('.container .wrapper .add-thing-wrapper, .container .things-wrapper .mask').fadeOut();
    });
    $('.container .wrapper .add-thing-wrapper #entryThing').on('click',function(){
        if($('.container .wrapper .add-thing-wrapper .things-item')[0].id === 'edit')
        {
            filerList[$(this).prev().attr('data-index')].PoliceMembers.push(`${policemanList[0].Position}@${policemanList[0].FullName}`);
            $('.container .things-wrapper .add-thing-wrapper .left-block .name-wrap').append(`
                <div class="things-name">
                    [<span class="rank">${policemanList[0].Position}</span>]
                    <span class="name">${policemanList[0].FullName}</span>
                </div>
            `);
        }
    });    
    $('.container .add-thing-wrapper .wanted-level .star').hover(
        function()
        {
            if(!$('.add-thing-wrapper .wanted-level .star').hasClass('activated'))
            {
                let currentStar = this.id;            
                $('.container .add-thing-wrapper .wanted-level .star').find('svg path').css({
                    'stroke':'#000',
                    'fill':'#fff'
                });            
                for(i=0; i <= currentStar.substring(1); i++)
                {
                    $(`.container .add-thing-wrapper .wanted-level .star#s${i}`).find('svg path').css({
                        'stroke':'#ed8a19',
                        'fill':'#ed8a19'
                    });
                }
            }
        }
    );
    $('.container .add-thing-wrapper .wanted-level .star').on('click',function(){
        if(!$('.container .add-thing-wrapper .wanted-level .star').hasClass('activated'))
        {
            $(this).addClass('activated');
        }
        else
        {
            let currentStar = this.id;   
            $('.container .add-thing-wrapper .wanted-level .star.activated').removeClass('activated');
            $('.container .add-thing-wrapper .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            });  
            for(i=0; i <= currentStar.substring(1); i++)
            {
                $(`.container .add-thing-wrapper .wanted-level .star#s${i}`).find('svg path').css({
                    'stroke':'#ed8a19',
                    'fill':'#ed8a19'
                });
            }
            $(this).addClass('activated');
        }
    });
    $('.container .wrapper .add-thing-wrapper #add-suspect').on('click',function(){
        let name = $('.container .wrapper .add-thing-wrapper #suspect-name').val(),
            lastname = $('.container .wrapper .add-thing-wrapper #suspect-lastname').val(),
            template = `<div class="suspects-item">
                            <span>${name+ ' ' +lastname}</span>
                            <div class="delete-item">
                              <i class="fas fa-times"></i>
                            </div>
                        </div>`;
        if(name.length != 0 && lastname.length != 0)
        {
            $(`.container .wrapper .add-thing-wrapper #suspect-name, 
               .container .wrapper .add-thing-wrapper #suspect-lastname`).val('');
            if($('.container .wrapper .add-thing-wrapper .things-item')[0].id === 'edit')
            {
                filerList[$(this).parent().parent().find('.name-wrap').attr('data-index')].Violators.push(`${name+ ' ' +lastname}`);
            }
            $('.container .wrapper .add-thing-wrapper .things-item .suspects-wrap').append(template); 
        }
        suspectsRefresh();
    });   
    $('.container .things-wrapper .add-thing-wrapper #addThing').on('click',function(){
        let tempObj = {
            StatementID: $('.container .add-thing-wrapper .things-title').attr('data-statement'),
            PoliceMembers: [
                `${policemanList[0].Position}@${policemanList[0].FullName}`                
            ],
            Victim :[],
            Violators: [],
            Proofs: [],
            ClosedFull:false,
            InProgress:true,
            WantedLevel: 0,
            Text: ''
        };
        let currentText = ``;
        $('.container .things-wrapper .add-thing-wrapper #text_area_div').each(function(index,item){
            if($(item).text().length != 0)
            {
                let separator = index > 0 ? '@' : '';
                currentText += separator + $(item).text();
            }
        });
        console.log(currentText);
        tempObj.Text = currentText;        
        $('.container .wrapper .add-thing-wrapper, .container .things-wrapper .mask').fadeOut();
        
        $('.container .add-thing-wrapper .right-block .suspects-wrap .suspects-item').each(function(index,item){
            tempObj.Violators.push($(item).find('span').text());
        });
        let package = JSON.stringify(tempObj);
        mp.trigger('addThing',package);
    });
    $('.container .add-thing-wrapper #changeThing').on('click',function(){
        let currentText = ``,
            currentId = $('.container .things-wrapper .add-thing-wrapper .name-wrap').attr('data-index');
        $('.container .things-wrapper .add-thing-wrapper #thing-add-text, .container .things-wrapper .add-thing-wrapper #text_area_div').each(function(index,item){
            if($(item).text().length != 0)
            {
                let separator = index > 0 ? '@' : '';
                currentText += separator + $(item).text();
            }
        });
        filerList[currentId].Text = currentText;
        let wantedLevel = $('.container .things-wrapper .add-thing-wrapper .wanted-level .star.activated');
        console.log(wantedLevel);
        if(wantedLevel.length != 0)
        {
            wantedLevel = wantedLevel[0].id;
            filerList[currentId].WantedLevel = wantedLevel.slice(1);
        }
        let package = JSON.stringify(filerList[currentId]);
        $('.container .wrapper .add-thing-wrapper, .container .things-wrapper .mask').fadeOut();
        console.log(package);
        mp.trigger('changeThing',package);
    });
}
function suspectsRefresh()
{    
    $('.container .add-thing-wrapper .right-block .suspects-wrap .delete-item').on('click',function(){
        if($('.container .wrapper .add-thing-wrapper .things-item')[0].id === 'edit')
        {
            let currentId = $('.container .things-wrapper .add-thing-wrapper .name-wrap').attr('data-index'),
                currentItem = $(this).parent().find('span').text();
            $(filerList[currentId].Violators).each(function(index,item){
                if(currentItem === item)
                {
                    filerList[currentId].Violators.splice(index,1);
                    return;
                }
            });
        }
        $(this).parent().remove();
    }); 
}
function textarea_resize(event, line_height = 10, min_line_count = 2)
{
    var min_line_height = min_line_count * line_height;
    var obj = event.target;    
    $(obj).next().text(obj.value);
    var obj_height = $(obj).next()[0].offsetHeight;
    if (event.keyCode == 13)
    {
        obj_height += line_height/2;
    }
    else if(obj_height < min_line_height)
    {
        obj_height = min_line_height;
    }
    obj.style.height = obj_height + 'px';
}
function initEmployee()
{
    $(`.container .employee-wrapper .onDuty-wrapper .duty-wrapper,
       .container .employee-wrapper .notOnDuty-wrapper .duty-wrapper`).empty();
    $(employeeList).each(function(index,item){
        if(item.Online)
        {
            let template = `<div class="duty-item active">
                                <div class="name">${item.FullName}</div>
                                <div class="rank">${item.Rank}</div>
                                <div class="time">
                                    <span>${item.Time}</span>ч                              
                                </div>
                                <div class="toogle"><img src="img/notebook/arrow.png" alt=""></div>
                                <div class="toogle-menu">
                                    <div class="toogle-item" id="upRank"><i class="far fa-hand-point-up"></i></div>
                                    <div class="toogle-item" id="downRank"><i class="far fa-hand-point-down"></i></div>
                                    <div class="toogle-item" id="removeRank"><i class="fas fa-user-minus"></i></div>
                                </div>
                            </div>`;
            $('.container .employee-wrapper .onDuty-wrapper .duty-wrapper').append(template);   
        }
        else
        {
            let template = `<div class="duty-item">
                                <div class="name">${item.FullName}</div>
                                <div class="rank">${item.Rank}</div>
                                <div class="time">
                                    <span>${item.Time}</span>ч                              
                                </div>
                            </div>`;
            $('.container .employee-wrapper .notOnDuty-wrapper .duty-wrapper').append(template);  
        }
    });
    employeeRefresh();
}
function employeeRefresh()
{
    $('.container .employee-wrapper .onDuty-wrapper .duty-wrapper .duty-item .toogle').on('click',function(){
        if(!$(this).next().is(':visible'))
        {
            $(this).css({
                'border-top-left-radius':'0px',
                'border-bottom-left-radius':'0px'
            });
            $(this).find('img').css('transform','rotate(180deg)');
            $(this).next().fadeIn().css('display','flex');
        }
        else
        {        
            $(this).css('border-radius','20px');
            $(this).find('img').css('transform','rotate(0deg)');
            $(this).next().fadeOut();
        }
    });
    $('.container .employee-wrapper .duty-item .toogle-menu .toogle-item').on('click',function(){
        let currentId = this.id,
            name = $(this).parent().parent().find('.name').text(),
            rank = $(this).parent().parent().find('.rank').text(),
            time = $(this).parent().parent().find('.time span').text();
        $(this).parent().prev().css('border-radius','20px');
        $(this).parent().prev().find('img').css('transform','rotate(0deg)');
        $(this).parent().fadeOut();
        mp.trigger('policeOnlineChange',currentId,name);
    });
}
function initHandbook()
{
    $('.container .handbook-wrapper .wrapper .handbook-items').empty();
    $(handbookList).each(function(index,item){
        let template = `<div class="handbook-item">
                            <div class="name">${item.Name}</div>
                            <div class="penalty">${item.Penalty}</div>
                            <div class="article">${item.Article}</div>
                        </div>`;
        $('.container .handbook-wrapper .wrapper .handbook-items').append(template);
    });
}
let editor = new Quill('#editor', {
    theme: 'snow'
});
$('.container .charter-wrapper .show-wrapper #editCharter').on('click',function(){
    $(this).parent().css('display','none');
    let currentText = $('.container .charter-wrapper .show-wrapper .text-wrapper').html();
    editor.disable();
    $(this).parent().parent().find('.edit-wrapper #editor .ql-editor').empty().append(currentText);
    $(this).parent().parent().find('.edit-wrapper').fadeIn();
    editCharter();
});
function initCharter()
{
    $('.container .charter-wrapper .show-wrapper .text-wrapper').empty().append(charterText);
}
function editCharter()
{    
    editor.enable();
    $('.container .charter-wrapper .edit-wrapper #saveCharter').on('click',function(){
        let currentText = $('.edit-wrapper #editor .ql-editor').html();
        $('.container .charter-wrapper .show-wrapper .text-wrapper').empty().append(currentText);
        $(this).parent().fadeOut();
        $(this).parent().parent().find('.show-wrapper').fadeIn();        
        mp.trigger('charterText',currentText);
    });
}
$('.container .carSearch-wrapper #carSearch').on('click',function(){
    let number = '',
        name = '',
        phone = '',
        car = '';
    $('.container .carSearch-wrapper input').each(function(index,item){
        if($(item).val().length > 0)
        {
            switch(item.id)
            {
                case 'number':
                {
                   number = $(item).val();
                }
                case 'name':
                {
                   name = $(item).val();
                }
                case 'phone':
                {
                   phone = $(item).val();
                }
                case 'car':
                {
                   car = $(item).val();
                }
            }
        }        
    });
    if(number != '' && name != '' && phone != '' && car != '')
    {
        mp.trigger('carSearch',number, name, phone, car);
    }
});