
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
    mp.trigger('exitMedicalNote');
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
let policeman = JSON.stringify([
    {
        FullName:'Вася Иванов',
        Position:'Младший Сержант',
        Status:true,
        Time:'2',
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
$('.container .business-wrapper .search-block #searchPerson').on('click',function(){
    let value = $(this).prev().val();
    mp.trigger('searchPerson',field);
});
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
    mp.trigger('carSearch',number, name, phone, car);
});