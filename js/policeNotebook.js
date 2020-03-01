
let policemanList = {},
    filerList = [],
    archiveList = [],
    clewsList = [],
    currentFiler = {
        StatementID:0,
        PoliceMembers : [],
        Victim :[],
        Violators: [],
        Proofs: [],
        ClosedFull:false,
        InProgress:false,
        WantedLevel: 0,
        Text: ''
    }, 
    charterText = '';    
$(".startup-mask").delay(450).fadeOut('slow');
$('#sansara-menu').on('click',function(){
    let menu = $('.container .wrapper .sansara-menu');
    if(!menu.is(':visible'))
    {
        $('#police-menu').removeClass('deactivated');
        menu.fadeIn();
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
$('.container .business-wrapper .search-block #searchPerson').on('click',function(){
    let value = $(this).prev().val();
    $(this).prev().val('');
    console.log(value);
    mp.trigger('searchPersonal',value);
});
$('.container .recruting-menu input').keyup(function() {
	this.value = this.value.replace(/[^А-ЯЁа-яё ]/g, '');
});
$('.container .main-wrapper .recruting-menu #hireNewbie').on('click',function(){
    let currentNewbie = $(this).prev().val();
    console.log(currentNewbie);
    mp.trigger('hireNewbie',currentNewbie);
});
$('.container .main-wrapper .licence-menu #giveLicence').on('click',function(){
    let currentPolice = $(this).prev().val();
    $(this).prev().val('');
    $(this).addClass('disabled');
    $('.licence-menu .show-wrapper').fadeIn().css('display','flex');
    setTimeout(function(){
        $('.licence-menu .show-wrapper').fadeOut();
    },1000);
    console.log(currentPolice);
    mp.trigger('giveLicence',currentPolice);
});
$('.police-menu .menu-item').on('click',function(){
    let currentWrapper = this.id;
    if(currentWrapper == 'archive-wrapper' && currentWrapper == 'things-wrapper')
    {
        $(`.${currentWrapper} .searchable`).remove();
    }
    if(!$(this).hasClass('active'))
    {
        $('.wrapper > .active').removeClass('active').fadeOut(200);
        $('.police-menu .menu-item.active').removeClass('active');
        $(this).addClass('active');
        $(`.wrapper .${currentWrapper}`).addClass('active').fadeIn(500).css('display','flex');
    }
});
function reloadNotebook()
{
    $('.container .wrapper .police-menu .reload-item').removeClass('disabled').fadeIn().css('display','flex');
    $('.container .wrapper .police-menu .reload-item').on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            $(this).addClass('disabled').fadeOut();
            mp.trigger('reloadNotebook');
        }
    });
}
function pushClews(elem)
{ 
    $(elem).each(function(index,item){
        let dateItem = item.Date.split('@');  
        let template = `<div class="clews-item" data-index="${index}">
                            <div class="date-wrap">
                                <div class="time">${dateItem[0]}</div>
                                <div class="date">${dateItem[1]}</div> 
                            </div>
                            <div class="subject">${item.Subject}</div>
                            <div class="statementId">
                            №<span>
                                ${item.StatementID}  
                                </span>
                            </div>
                            <div class="button" id="clewsView">Осмотреть</div>
                        </div>`;
        $('.container .clews-wrapper .clews-wrap').append(template);
    });
    initClews();
}
function appendClews(elem)
{
    $(`.container .clews-wrapper .clews-wrap #more-clews`).removeClass('disabled');
    $('.container .clews-wrapper #more-clews').fadeIn();
    let newList = JSON.parse(elem);
    clewsList = [...clewsList,...newList];
    pushClews(newList);
}
function initClews()
{
    $('.container .clews-wrapper #clewsView').on('click',function(){
        let subject = $(this).parent().find('.subject').text(),
            statementId = $(this).parent().find('.statementId span').text();
        mp.trigger('viewClews',subject, statementId);
    });
    $('.container .clews-wrapper #more-clews').on('click',function(){
        $('.container .clews-wrapper #more-clews').fadeOut();
        console.log(clewsList.length);
        mp.trigger('moreClews',clewsList.length);
    });
}
function initTime(hour,minute)
{
    let currentHours = hour,
        currentMinutes = minute;
    time = `${currentHours <=9 ? '0' + currentHours : currentHours}:${currentMinutes <=9 ? '0' + currentMinutes : currentMinutes}`;
    $('.hud-time').text(time);
}
let policeman = JSON.stringify(
    {
        FullName:'Велис Сансарович',
        Position:'Начальник полициasdи',
        HourInDept:0,
        Status:false,
        Time:0,
        OpenedThings:1,
        ClosedThings:2
    }
); 
let filer = JSON.stringify([ 
    {
        StatementID:1,
        PoliceMembers : null,
        Victim :null,
        Violators:null,
        Proofs: null,
        ClosedFull: false,
        InProgress:true,
        Text: 'Кто то расстрелял митинг на мэрии@[1.1.2019 6:09] Шеф ПД Дональд МакРональд Добавил подозреваемого Федор Фреш@[] : Дональд МакРональд : Это был Федор Фреш, он сам это сказал около здания ПД@[1.1.2019 6:15] Дополнил Шеф ПД Дональд МакРональд : установил наказание в виде лишения свободы сроком 228@@[1.1.2019 6:24] Дополнил Шеф ПД Дональд МакРональд : Найдено при обыске Хроник Кураторов: Низ м узкие джинсы цв.1; @@[1.1.2019 6:26] Дополнил Шеф ПД Дональд МакРональд : Найдено при обыске Хроник Кураторов: вода без газа; @@[1.1.2019 5:29] Дополнил Шеф ПД Дональд МакРональд : установил наказание в виде штрафа в сумме 1@@[1.1.2019 5:05] Дополнил Шеф ПД Дональд МакРональд : установил наказание в виде лишения свободы сроком 1@@[1.1.2019 5:09] Дополнил Шеф ПД Дональд МакРональд : Арестовал Федор Фреш@@[1.1.2019 5:22] Дополнил Шеф ПД Дональд МакРональд : Обнаружено при просмотре камеры ПД Мишн-Роу: [1.1.2019 5:18] Федор Фреш; @@[1.1.2019 5:35] Дополнил Шеф ПД Дональд МакРональд : Востановил дело из архива@',
        PunishmentType:'closed'
    },
    {
        StatementID:2,
        PoliceMembers : [],
        Victim :[],
        Violators: [],
        Proofs: [],
        ClosedFull: 0,
        InProgress:1,
        WantedLevel: 5,
        Text: 'Заявление №1 Дата : [1.1.2019 5:01] Заявитель: Дмитрий Иванов Текст заявления: hgfhfghgfhgf@Заявление №2 Дата : [9.9.2019] Заявитель: Велис Сансарович Текст заявления: фывфвфывфвф@Заявление №3 Дата : [9.9.2019] Заявитель: Велис Сансарович Текст заявления: фывфывфывфв@Заявление №4 Дата : [9.9.2019] Заявитель: Велис Сансарович Текст заявления: фвфывфы'
    },
    {
        StatementID:3,
        PoliceMembers : [],
        Victim :[],
        Violators: [],
        Proofs: [],
        ClosedFull: 0,
        InProgress:1,
        WantedLevel: 0,
        Text: 'Заявление №3 Дата : [1.1.2019 5:01] Заявитель: Дмитрий Иванов Текст заявления: 1hgfhfghgfhgfasdadasdsadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd@'
    },
    {
        StatementID:4,
        PoliceMembers : [],
        Victim :[],
        Violators: [],
        Proofs: [],
        ClosedFull: 0,
        InProgress:1,
        WantedLevel: 0,
        Text: 'Заявление №3 Дата : [1.1.2019 5:01] Заявитель: Дмитрий Иванов Текст заявления: 2hgfhfghgfhgf@'
    },
    {
        StatementID:5,
        PoliceMembers : [],
        Victim :[],
        Violators: [],
        Proofs: [],
        ClosedFull: 0,
        InProgress:1,
        WantedLevel: 0,
        Text: 'Заявление №3 Дата : [1.1.2019 5:01] Заявитель: Дмитрий Иванов Текст заявления: 3hgfhfghgfhgf@'
    },
    {
        StatementID:6,
        PoliceMembers : [],
        Victim :[],
        Violators: [],
        Proofs: [],
        ClosedFull: 0,
        InProgress:1,
        WantedLevel: 0,
        Text: 'Заявление №3 Дата : [1.1.2019 5:01] Заявитель: Дмитрий Иванов Текст заявления: 4hgfhfghgfhgf@'
    },
    {
        StatementID:7,
        PoliceMembers : [],
        Victim :[],
        Violators: [],
        Proofs: [],
        ClosedFull: 0,
        InProgress:1,
        WantedLevel: 0,
        Text: 'Заявление №3 Дата : [1.1.2019 5:01] Заявитель: Дмитрий Иванов Текст заявления: 5hgfhfghgfhgf@'
    }
]);
let archive = JSON.stringify([
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
        ClosedFull:false,
        InProgress:false,
        WantedLevel: 5,
        Text: 'Кто то расстрелял митинг на мэрии@[1.1.2019 6:09] Шеф ПД Дональд МакРональд Добавил подозреваемого Федор Фреш@[] : Дональд МакРональд : Это был Федор Фреш, он сам это сказал около здания ПД@[1.1.2019 6:15] Дополнил Шеф ПД Дональд МакРональд : установил наказание в виде лишения свободы сроком 228@@[1.1.2019 6:24] Дополнил Шеф ПД Дональд МакРональд : Найдено при обыске Хроник Кураторов: Низ м узкие джинсы цв.1; @@[1.1.2019 6:26] Дополнил Шеф ПД Дональд МакРональд : Найдено при обыске Хроник Кураторов: вода без газа; @@[1.1.2019 5:29] Дополнил Шеф ПД Дональд МакРональд : установил наказание в виде штрафа в сумме 1@@[1.1.2019 5:05] Дополнил Шеф ПД Дональд МакРональд : установил наказание в виде лишения свободы сроком 1@@[1.1.2019 5:09] Дополнил Шеф ПД Дональд МакРональд : Арестовал Федор Фреш@@[1.1.2019 5:22] Дополнил Шеф ПД Дональд МакРональд : Обнаружено при просмотре камеры ПД Мишн-Роу: [1.1.2019 5:18] Федор Фреш; @@[1.1.2019 5:35] Дополнил Шеф ПД Дональд МакРональд : Востановил дело из архива@'
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
let clews = JSON.stringify([
    {Date: '18:39@25.10.2015',StatementID: 15, Subject: 'asdasdadasdadadsadadadadasdadasdada asdasd'},
    {Date: '18:39@25.10.2015',StatementID: 15, Subject: 'asdasdadasdadadsadadadadasdadasdada asdasd'},
    {Date: '18:39@25.10.2015',StatementID: 15, Subject: 'asdasdadasdadadsadadadadasdadasdada asdasd'},
    {Date: '18:39@25.10.2015',StatementID: 15, Subject: 'asdasdadasdadadsadadadadasdadasdada asdasd'}
]);
let employeeOnline = JSON.stringify([
    {"FullName": 'Дмитрий Иванов',"Online":false},
    {"FullName":'Adsad',"Online":false}
]);
function pushNotebook(policeman,clews,filer,archive,thingsCount,archiveCount,employeeOnline,admin,date)
{
    if(typeof employeeOnline != undefined)
    {
        postEmployee(employeeOnline);
    }    
    if(typeof policeman != undefined)
    {   
        policemanList = JSON.parse(policeman);
    }
    if(typeof date != undefined)
    {   
        $('.container .wrapper .bottom-panel .right-wrapper .time-wrapper').text(date);
    }
    if(typeof filer != undefined)
    {   
        filerList = JSON.parse(filer);
        initFiler(filerList);
    }
    if(typeof clews != undefined)
    {
        clewsList = JSON.parse(clews);
        pushClews(clewsList);
    }
    if(typeof archive != undefined)
    {   
        archiveList = JSON.parse(archive);
        initFiler(archiveList);
    }
    if(typeof admin != undefined)
    {
        if(admin == 'admin')
        {
            $('.container .main-wrapper .recruting-menu, .container .main-wrapper .licence-menu').fadeIn();
        }
        $('.container .main-wrapper .recruting-menu input, .container .main-wrapper .licence-menu input').keyup(function(){
            if($(this).val().length > 0)
            {
                $(this).next().removeClass('disabled');
            }
            else
            {
                $(this).next().addClass('disabled');
            }
        });
        let adminStatus = { Admin: admin };
        $('#charter-frame')[0].contentWindow.postMessage(adminStatus, "*");
        $('#handbook-frame')[0].contentWindow.postMessage(adminStatus, "*");
        $('#employee-frame')[0].contentWindow.postMessage(adminStatus, "*");
        $('#wantedSearch-frame')[0].contentWindow.postMessage(adminStatus, "*"); 
        window.addEventListener('message', function(event) {
            if (event.data['newHandbook']) {
                const { currentId, name, penalty, article } = event.data.newHandbook;        
                console.log(currentId,name, penalty, article);
                mp.trigger('newHandbook',currentId,name,penalty,article);
            }  
            if (event.data['editHandbook']) {
                const { currentId, name, penalty, article } = event.data.editHandbook;        
                console.log(currentId,name, penalty, article);
                mp.trigger('editHandbook',currentId,name,penalty,article);
            }
            if (event.data['removeWanted']) {
                const { name } = event.data.removeWanted;        
                console.log(name);
                mp.trigger('removeWanted',name);
            }  
            if (event.data['getStatus']) {
                console.log('getStatus');
                $('#handbook-frame')[0].contentWindow.postMessage(adminStatus, "*");
            } 
        });
    }  
    $('.archive-wrapper .pagination-wrap .but').on('click',function(){
        let count = archiveCount;
        if(!$(this).hasClass('disabled'))
        {
            let pageNumber = parseInt($('.archive-wrapper .pagination-wrap .page-number').text()),
                maxPages = 0;
            if(count%10 == 0)
            {
                maxPages = count/10;
            }
            else
            {
                maxPages = Math.floor(count/10)+1;
            }
            if(this.id == 'prev')
            {
                if(pageNumber != 1)
                {
                    pageNumber--;
                    $('.archive-wrapper .pagination-wrap .page-number').text(pageNumber);
                    console.log(pageNumber);
                    $('.archive-wrapper .pagination-wrap .but').addClass('disabled');
                    mp.trigger('archivePagination',pageNumber);
                }
            }
            if(this.id == 'next')
            {
                if(pageNumber < maxPages)
                {
                    pageNumber++;
                    $('.archive-wrapper .pagination-wrap .page-number').text(pageNumber);
                    console.log(pageNumber);
                    $('.archive-wrapper .pagination-wrap .but').addClass('disabled');
                    mp.trigger('archivePagination',pageNumber);
                }
            }
        }
    });      
    $('.things-wrapper .pagination-wrap .but').on('click',function(){
        let count = thingsCount;
        if(!$(this).hasClass('disabled'))
        {
            let pageNumber = parseInt($('.things-wrapper .pagination-wrap .page-number').text()),
                maxPages = 0;
            if(count%4 == 0)
            {
                maxPages = count/4;
            }
            else
            {
                maxPages = Math.floor(count/4)+1;
            }
            if(this.id == 'prev')
            {
                if(pageNumber != 1)
                {
                    pageNumber--;
                    $('.things-wrapper .pagination-wrap .page-number').text(pageNumber);
                    console.log(pageNumber);
                    $('.things-wrapper .pagination-wrap .but').addClass('disabled');
                    mp.trigger('thingsPagination',pageNumber);
                }
            }
            if(this.id == 'next')
            {
                if(pageNumber < maxPages)
                {
                    pageNumber++;
                    $('.things-wrapper .pagination-wrap .page-number').text(pageNumber);
                    console.log(pageNumber);
                    $('.things-wrapper .pagination-wrap .but').addClass('disabled');
                    mp.trigger('thingsPagination',pageNumber);
                }
            }
        }
    });                    
}
function personInit(element)
{
    let item = JSON.parse(element);
    if(item !== undefined)
    {
        if(item.FullName != $('.container .business-wrapper .content-block .name').text())
        {
            let carItems = ``,
                violationItems = ``,
                textItems = item.Text.split('@'),
                textItem = ``;
            $(item.Cars).each(function(index,item){
                carItems += `<div class="violation-item">
                    <div class="title-item">${item}</div>
                </div>`;
            });
            $(textItems).each(function(index,item){
                textItem += `<p id="text-item">${item}</p> `;
            });
            $(item.StatementID).each(function(index,item){
                violationItems += `<div class="violation-item">
                    <div class="title-item">${item}</div>
                </div>`;
            });
            // <div class="car">
            //     <div class="car-title">Автомобиль:</div>
            //     <div class="car-wrapper">
            //     ${carItems}
            //     </div>
            // </div>
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
                    
                    <div class="house">Проживание:
                        <p id="house">${item.Home}</p>                            
                    </div>
                </div>
                <div class="text-wrapper">
                    <div class="title">Информация:</div>
                    <div class="text-wrap">
                        ${textItem}                    
                    </div>
                </div>
                <div class="violations-wrapper">    
                    <div class="title-wrap">
                        <div class="title-item">Автомобиль</div>
                    </div>
                    <div class="violation-wrap">
                        ${carItems}
                    </div>
                </div>    
                <div class="violations-wrapper">    
                    <div class="title-wrap">
                        <div class="title-item">Дело №</div>
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
function postEmployee(item)
{
    let currentElement = JSON.parse(item);
    $('#employee-frame')[0].contentWindow.postMessage({"Online":currentElement}, "*");
    window.addEventListener('message', function(event) {
        if (event.data['onlineChange']) {
            const { currentId, name } = event.data.onlineChange;        
            console.log(currentId,name);
            mp.trigger('policeOnlineChange',currentId,name);
        }    
    });
}  
function initFiler(elem,search = false)
{
    // $(`.container .archive-wrapper .archive-wrap,
    //     .container .things-wrapper .things-container`).empty();
    let searchStatus = '',
        closeBut = ``; 
    if(search)
    {
        searchStatus = `searchable`;
        closeBut = `<div class="close-but"><i class="fas fa-times"></i></div>`;
    }
    $(elem).each(function(index,item){    
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
                <div class="things-item ${ item.ClosedFull ? 'closed' : ''} ${ item.PunishmentType != "" ? 'punishment' : ''} ${index == elem.length - 1 ? 'last-in-container' : ''}${searchStatus}" id="thing${item.StatementID}">
                    ${closeBut}
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
                                <div class="button" id="print" data-index="${item.StatementID}">Печать документа</div>    
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
            if(index == elem.length-1)
            {                
                if($('.container .things-wrapper .things-container .last-in-container').length > 1)
                {
                    $('.container .things-wrapper .things-container .last-in-container:eq(0)').removeClass('last-in-container');
                }
                // $('.container .things-wrapper .things-container').scroll(function() {
                //     let currentHeight = $('.container .things-wrapper .things-container .last-in-container').position().top;
                //     if($('.container .things-wrapper .things-container').scrollTop() > currentHeight){
                //         $(".container .things-wrapper #more-things").fadeIn();
                //     }
                //     else
                //     {
                //         $(".container .things-wrapper #more-things").fadeOut();
                //     }
                // });	
            }     
            if(search)
            {                
                 $('.container .things-wrapper .search-mask').fadeIn();
            }
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
            let button = ``;
            console.log(item.StatementID,item.ClosedFull,item.InProgress);
            if(!item.ClosedFull && !item.InProgress)
            {
                button = `
                    <div class="button-wrapper">
                        <div class="button" id="archive-revive">Восстановить и присоедениться</div>   
                        <div class="button" id="print" data-index="${item.StatementID}">Печать документа</div>   
                    </div>`;
            }
            else
            {
                button = `
                    <div class="button-wrapper">
                        <div class="button" id="print" data-index="${item.StatementID}">Печать документа</div>   
                    </div>`;
            }
            let template = `
                <div class="archive-item ${ item.ClosedFull ? 'closed' : ''} ${ item.PunishmentType != "" ? 'punishment' : ''} ${index == elem.length - 1 ? 'last-in-container' : ''}${searchStatus}" id="archive${item.StatementID}">
                ${closeBut}
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
                            ${button}  

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
            $('.container .archive-wrapper .archive-container').append(template);
            if(search)
            {                
                 $('.container .archive-wrapper .search-mask').fadeIn();
            }
            if(index == elem.length-1)
            {              
                if($('.container  .archive-wrapper .archive-wrap .archive-container .last-in-container').length > 1)
                {
                    $('.container  .archive-wrapper .archive-wrap .archive-container .last-in-container:eq(0)').removeClass('last-in-container');
                }
                // $('.container .archive-wrapper .archive-wrap .archive-container').scroll(function() {
                //     const currentHeight = $('.container .archive-wrapper .archive-container .last-in-container').position().top;
                //     if($('.container .archive-wrapper .archive-container').scrollTop() > currentHeight){
                //         $(".container .archive-wrapper #more-things").fadeIn();
                //     }
                //     else
                //     {
                //         $(".container .archive-wrapper #more-things").fadeOut();
                //     }		
                // });	
            }  
        }
    });        
    refreshThingsList();
}
$('.archive-wrapper .add-violation .wanted-level .star').hover(
    function()
    {
        if(!$('.archive-wrapper .add-violation .wanted-level .star').hasClass('activated'))
        {
            let currentStar = this.id;            
            $('.archive-wrapper .add-violation .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            });            
            for(i=0; i <= currentStar.substring(1); i++)
            {
                $(`.archive-wrapper .add-violation .wanted-level .star#s${i}`).find('svg path').css({
                    'stroke':'#ed8a19',
                    'fill':'#ed8a19'
                });
            }
        }
    }
);	
$('.archive-wrapper .add-violation .wanted-level .star').on('click',function(){
    if(!$('.archive-wrapper .add-violation .wanted-level .star').hasClass('activated'))
    {
        $(this).addClass('activated');
    }
    else
    {
        let currentStar = this.id;   
        $('.archive-wrapper .add-violation .wanted-level .star.activated').removeClass('activated');
        $('.archive-wrapper .add-violation .wanted-level .star').find('svg path').css({
            'stroke':'#000',
            'fill':'#fff'
        });  
        for(i=0; i <= currentStar.substring(1); i++)
        {
            $(`.archive-wrapper .add-violation .wanted-level .star#s${i}`).find('svg path').css({
                'stroke':'#ed8a19',
                'fill':'#ed8a19'
            });
        }
        $(this).addClass('activated');
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
function appendThings(elem)
{
    $(`.container .things-wrapper .things-wrap #more-things`).removeClass('disabled');
    $('.container .things-wrapper #more-things').fadeIn();
    let newList = JSON.parse(elem);
    filerList = [...filerList,...newList];
    $('.container .things-wrapper .things-container').empty();
    $('.pagination-wrap .but').removeClass('disabled');
    initFiler(newList);
}
function appendArchive(elem)
{
    $(`.container .archive-wrapper .archive-wrap #more-things`).removeClass('disabled');
    $('.container .archive-wrapper #more-things').fadeIn();
    let newList = JSON.parse(elem);
    archiveList = [...archiveList,...newList];
    $('.container .archive-wrapper .archive-container').empty();
    $('.pagination-wrap .but').removeClass('disabled');
    initFiler(newList);
}
function searchThing(elem)
{
    if(arguments.length > 0)
    {
        let item = JSON.parse(elem);
        initFiler(item,true);
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
function searchArchive(elem)
{
    if(arguments.length > 0)
    {
        let item = JSON.parse(elem);
        initFiler(item,true);
        console.log(1);
    }
    else
    {        
        $('.container .archive-wrapper .search-wrap .notification').fadeIn(200);
        setTimeout(function(){                                 
            $('.container .archive-wrapper .search-wrap input').val('');
            $('.container .archive-wrapper .search-wrap .notification').fadeOut();
        },1500);
    }
}
function refreshThingsList()
{
    $('#searchThing, #searchArchive').on('click',function(){
        if($(this).prev().val().length != 0)
        {
            let value  = $(this).prev().val();   
            $(this).prev().val('');
            if($(value).length)
            {                             
            	$(this).prev().val('');
            	let top = $(value).offset().top - 150;
            	$('.container .things-wrapper .things-container').animate({scrollTop: top}, 900);
            }
            else
            {          
                let currentId = this.id;
                console.log(currentId);      
                mp.trigger(currentId, parseInt(value));
            }
        }
    });
    $('.container .wrapper .searchable .close-but, .container .search-mask').on('click',function(){
        if($(this).hasClass('close-but'))
        {
            $(this).parent().remove();
        }
        else
        {
            $('.searchable').remove();
        }
        $('.search-mask').fadeOut();
    });
    $(`.container .things-wrapper .things-wrap #more-things`).on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            $(this).fadeOut();
            let currentId = $('.things-wrap .last-in-container')[0].id;
            currentId = currentId.substr(5); 
            console.log(currentId);
            $(this).addClass('disabled');        
            mp.trigger('moreThings',currentId);
        }
    });
    $('.container .button-wrapper .button#print').on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            let id = parseInt($(this).attr('data-index'));
            $(this).addClass('disabled');
            console.log(id);
            setTimeout(() => {
                $(this).removeClass('disabled');
            },500);
            mp.trigger('printThing',id);
        }
    });
    $(`.container .archive-wrapper .archive-wrap #more-things`).on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            $(this).fadeOut();
            let currentId = $('.archive-wrap .last-in-container')[0].id;
            currentId = currentId.substr(7); 
            console.log(currentId);
            $(this).addClass('disabled');        
            mp.trigger('moreArchive',currentId);
        }
    });
    $('.container .things-wrapper #add-violation').on('click',function(){  
        let currentId = $(this).parent().parent().parent().parent()[0].id;
        currentId = currentId.substr(5);       
        $('.container .things-wrapper .add-violation').attr('data-index',currentId); 
        $('.container .things-wrapper .add-violation, .container .things-wrapper .mask').fadeIn().css('display','flex');
        refreshViolation();
    }); 
    $('.container .archive-wrapper #archive-revive').on('click',function(){  
        let currentId = $(this).parent().parent().parent().parent()[0].id;
        currentId = currentId.substr(7);       
        console.log(currentId);
        mp.trigger('reviveThing',currentId);
    }); 
    $('.container .archive-wrapper #add-violation').on('click',function(){  
        let currentId = $(this).parent().parent().parent().parent()[0].id;
        currentId = currentId.substr(7);       
        $('.container .archive-wrapper .add-violation').attr('data-index',currentId); 
        $('.container .archive-wrapper .add-violation, .container .archive-wrapper .mask').fadeIn().css('display','flex');
        refreshViolation();
    });    
    $('.container .things-wrapper .add-violation .close-but').on('click',function(){     
        $('.container .things-wrapper .add-violation, .container .things-wrapper .mask').fadeOut();
    });
    $('.container .archive-wrapper .add-violation .close-but').on('click',function(){     
        $('.container .archive-wrapper .add-violation, .container .archive-wrapper .mask').fadeOut();
    });
    $('.container .things-wrapper .search-wrap .notification').on('click',function(){
        $('.container .things-wrapper .search-wrap input').val('');
        $('.container .things-wrapper .search-wrap .notification').fadeOut();
    });   
    $('.container .things-wrapper #edit-thing').on('click',function(){
        let currentId = $(this).parent().parent().parent().parent()[0].id,
            currentIndex = null;
        if($(this).parent().parent().parent().parent().hasClass('searchable'))
        {
            $(this).parent().parent().parent().parent().css('z-index','99');
            console.log('searchable');
        }
        currentId = currentId.substr(5);        
        $('.container .add-thing-wrapper, .container .things-wrapper .mask').fadeIn();        
        $(filerList).each(function(index,item){
            if(item.StatementID === parseInt(currentId))
            {                
                console.log(currentId);
                currentFiler = jQuery.extend(true, {}, filerList[index]);
                for (let val in currentFiler)
                {
                    if(currentFiler[val] == null)
                    {
                        console.log('null');
                        currentFiler[val] = [];
                    }
                };
                console.log(currentFiler);
                let policeMembers  = ``,
                    wantedLevel = ``,
                    itemText = item.Text.split('@'),
                    textItems = ``,
                    evidenceItems = ``,
                    suspectsItems = ``,
                    policemanEntry = ``;
                    console.log(itemText);
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
                $(itemText).each(function(index,textItem){
                    textItems += `<p id="thing-add-text">${textItem}</p>`;
                });
                $(item.PoliceMembers).each(function(index,item){
                    if(item.indexOf(policemanList.FullName) != -1)
                    {
                        policemanEntry = 'disabled';
                    }
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
                    <div class="edit-mask"></div>
                    <div class="punishmentMenu">
                        <div class="close-but" id="closePunishment"><i class="fas fa-times"></i></div>
                        <div class="punishment-wrapper">
                            <div class="punishment-item active" id="arrest">
                                <div class="toogle"></div>
                                <div class="name">Арест</div>
                            </div>
                            <input type="number" id="arrest" min="0" max="800" maxlength="3" placeholder="Срок ареста">
                            <div class="punishment-item" id="fine">
                            <div class="toogle"></div>
                                <div class="name">Штраф</div>
                            </div>
                            <input type="number" id="fine" min="0" max="9999999" maxlength="7" placeholder="Сумма ареста" disabled>
                        </div>
                        <div class="button" id="punishmentSubmit">Добавить</div>
                    </div>
                    <div class="close-but" id="closeEdit"><i class="fas fa-times"></i></div>
                    <div class="things-item" id="edit"> 
                        <div class="left-block">
                            <div class="title-wrap">
                                <div class="name-wrap" data-index="${index}">
                                    <div class="things-title">Дело №${item.StatementID}</div>
                                    <div class="police-members">
                                        ${policeMembers}  
                                    </div>
                                    ${wantedLevel}
                                    <div class="button-wrapper">
                                        <div class="button ${policemanEntry}" id="entryThing">Присоединиться</div> 
                                        <div class="button" id="imposePunishment">Назначить наказание</div>        
                                    </div>                                 
                                </div>  
                            </div> 
                            <div class="text-wrapper">
                                ${textItems}
                                <div id="text_area_div"></div>
                            </div> 
                            <div class="button-wrap">          
                                <div class="button" id="add-line">Добавить абзац</div>    
                                <div class="button" id="changeThing">Сохранить изменения</div>    
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
            }
        });
           
        refreshAddThings();
        suspectsRefresh();
    });
    $('.container .things-wrapper #add-thing').on('click',function(){
        let sortedItem = $(filerList).sort((a, b) => (a.StatementID > b.StatementID) ? 1 : -1);
        let currentId = 0;
        if(filerList.length > 0)
        {
            currentId = sortedItem[filerList.length-1].StatementID+1;
        }
        let template = `
            <div class="close-but" id="closeAdd"><i class="fas fa-times"></i></div>
            <div class="things-item" id="add">
                <div class="left-block">
                    <div class="title-wrap">
                        <div class="name-wrap">
                            <div class="things-title" data-statement="${currentId}">Дело №${currentId}</div>  
                            <div class="things-name">
                                [<span class="rank">${policemanList.Position}</span>]
                                <span class="name">${policemanList.FullName}</span>
                            </div>                          
                        </div>                         
                    </div>
                    <div class="text-wrapper" style="margin-top:20px;">

                    </div>
                    <div class="button-wrap">          
                        <div class="button" id="add-line">Добавить абзац</div>    
                        <div class="button" id="addThing">Сохранить изменения</div>    
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
        $('.container .add-thing-wrapper, .container .things-wrapper .mask').fadeIn();
        refreshAddThings();        
    });
}
function refreshViolation()
{
    $('.container .archive-wrapper .add-violation #violationConfirm').on('click',function(){
        let currentId = $(this).parent().parent().attr('data-index'),
            wantedLevel = $('.container .archive-wrapper .add-violation .wanted-level .star.activated');
        if(wantedLevel.length != 0)
        {
            wantedLevel = wantedLevel[0].id.slice(1);
        }
        else
        {
            wantedLevel = 0;
        }
        if(parseInt(wantedLevel) == 0)
        {
            let template = 'Выберите уровень розыска';
            $('.container .archive-wrapper .add-violation .notification .text').text(template).fadeIn();
            $('.container .archive-wrapper .add-violation .notification').fadeIn();
            setTimeout(()=>{
                $('.container .archive-wrapper .add-violation .notification').fadeOut();
            },1500);
        }
        if(wantedLevel > 0)
        {
            $('.container .archive-wrapper .add-violation, .container .archive-wrapper .mask').fadeOut();            
            $('.container .archive-wrapper .add-violation .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            }); 
            $('.container .archive-wrapper .add-violation .wanted-level .star.activated').removeClass('activated');
            console.log(currentId,wantedLevel);
            mp.trigger('addViolationArchive',currentId,wantedLevel);
        }
    });
    $('.container .things-wrapper .add-violation #violationConfirm').on('click',function(){
        let currentId = $(this).parent().parent().attr('data-index'),
            // witness = $('.container .things-wrapper .add-violation #witness').val(),
            // violation = $('.container .things-wrapper .add-violation #violation').val(),
            // injured = $('.container .things-wrapper .add-violation #injured').val(),
            wantedLevel = $('.container .things-wrapper .add-violation .wanted-level .star.activated');
        if(wantedLevel.length != 0)
        {
            wantedLevel = wantedLevel[0].id.slice(1);
        }
        else
        {
            wantedLevel = 0;
        }
        if(parseInt(wantedLevel) == 0)
        {
            let template = 'Выберите уровень розыска';
            $('.container .things-wrapper .add-violation .notification .text').text(template).fadeIn();
            $('.container .things-wrapper .add-violation .notification').fadeIn();
            setTimeout(()=>{
                $('.container .things-wrapper .add-violation .notification').fadeOut();
            },1500);
        }
        // if(witness.length == 0)
        // {
        //     let template = 'Добавьте свидетеля';
        //     $('.container .things-wrapper .add-violation .notification .text').text(template).fadeIn();
        //     $('.container .things-wrapper .add-violation .notification').fadeIn();
        //     setTimeout(()=>{
        //         $('.container .things-wrapper .add-violation .notification').fadeOut();
        //     },1500);
        // }
        // if(violation.length == 0)
        // {
        //     let template = 'Добавьте нарушение';
        //     $('.container .things-wrapper .add-violation .notification .text').text(template).fadeIn();
        //     $('.container .things-wrapper .add-violation .notification').fadeIn();
        //     setTimeout(()=>{
        //         $('.container .things-wrapper .add-violation .notification').fadeOut();
        //     },1500);
        // }
        // if(injured.length == 0)
        // {
        //     let template = 'Добавьте потерпевшего';
        //     $('.container .things-wrapper .add-violation .notification .text').text(template).fadeIn();
        //     $('.container .things-wrapper .add-violation .notification').fadeIn();
        //     setTimeout(() => {
        //         $('.container .things-wrapper .add-violation .notification').fadeOut();
        //     },1500);
        // }
        if(wantedLevel > 0)
        {
            $('.container .things-wrapper .add-violation, .container .things-wrapper .mask').fadeOut();
            // $(`.container .things-wrapper .add-violation #witness,
            //     .container .things-wrapper .add-violation #violation,
            //     .container .things-wrapper .add-violation #injured`).val('');            
            $('.container .things-wrapper .add-violation .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            }); 
            $('.container .things-wrapper .add-violation .wanted-level .star.activated').removeClass('activated');
            mp.trigger('addViolationThing',currentId,wantedLevel);
        }
    });
    $('.container .things-wrapper .add-violation #violationCancel').on('click',function(){
        $('.container .things-wrapper .add-violation, .container .things-wrapper .mask').fadeOut();
    });
    $('.container .archive-wrapper .add-violation #violationCancel').on('click',function(){
        $('.container .archive-wrapper .add-violation, .container .archive-wrapper .mask').fadeOut();
    });
}
function refreshAddThings()
{
    var inputQuantity = [];
    $(function() {
      $("#fine, #arrest").each(function(i) {
        inputQuantity[i]=this.defaultValue;
         $(this).data("idx",i); // save this field's index to access later
      });
      $("#fine, #arrest").on("keyup", function (e) {
		$(this).parent().removeClass('limited');
		var $field = $(this),
            val=this.value,
            $thisIndex=parseInt($field.data("idx"),10); // retrieve the index
			//window.console && console.log($field.is(":invalid"));
          	//$field.is(":invalid") is for Safari, it must be the last to not error in IE8
        if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") || this.value == '0') {
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
    $('#add-line').on('click',function(){
        $('.container .things-wrapper .things-wrap .add-thing-wrapper .text-wrapper')
        .append(`<textarea id="thing-add-text" onkeyup="textarea_resize(event);" maxlength="200"></textarea><div id="text_area_div"></div>`)
        .animate({scrollTop: ($('.container .things-wrapper .things-wrap .add-thing-wrapper .text-wrapper').innerHeight())}, 900);
        $('.container .things-wrapper .things-wrap .add-thing-wrapper .text-wrapper #thing-add-text').focus();   
    });    
    $('.container .wrapper .add-thing-wrapper #closeEdit').on('click',function(){        
        $('.container .wrapper .add-thing-wrapper, .container .things-wrapper .mask').fadeOut();
    });
    $('.container .wrapper .add-thing-wrapper #closeAdd').on('click',function(){        
        $('.container .wrapper .add-thing-wrapper, .container .things-wrapper .mask').fadeOut();
    });
    $('.container .wrapper .add-thing-wrapper #entryThing').on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            if($('.container .wrapper .add-thing-wrapper .things-item')[0].id === 'edit')
            {
                // currentFiler.PoliceMembers.push(`${policemanList.Position}@${policemanList.FullName}`);
                let currentThing = $('.container .things-wrapper .add-thing-wrapper .left-block .name-wrap').attr('data-index');
                $('.container .things-wrapper .add-thing-wrapper .left-block .name-wrap .police-members').append(`
                    <div class="things-name">
                        [<span class="rank">${policemanList.Position}</span>]
                        <span class="name">${policemanList.FullName}</span>
                    </div>
                `);
                $(this).addClass('disabled');
                mp.trigger('entryToThing',filerList[currentThing].StatementID,policemanList.FullName);
            }            
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
                let currentThing = $('.container .things-wrapper .add-thing-wrapper .left-block .name-wrap').attr('data-index');
                console.log(filerList[currentThing].StatementID,`${name+ ' ' +lastname}`);
                mp.trigger('addViolator',filerList[currentThing].StatementID,`${name+ ' ' +lastname}`);
                // currentFiler.Violators.push(`${name+ ' ' +lastname}`);
            }
            $('.container .wrapper .add-thing-wrapper .things-item .suspects-wrap').append(template); 
        }
        suspectsRefresh();
    });   
    $('.container .things-wrapper .add-thing-wrapper #addThing').on('click',function(){
        let tempObj = {
            StatementID: $('.container .add-thing-wrapper .things-title').attr('data-statement'),
            PoliceMembers: [
                `${policemanList.Position}@${policemanList.FullName}`                
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
            currentId = $('.container .things-wrapper .add-thing-wrapper .name-wrap').attr('data-index'),
            currentIndex = 0;
        $('.container .things-wrapper .add-thing-wrapper #thing-add-text, .container .things-wrapper .add-thing-wrapper #text_area_div').each(function(index,item){
            if($(item).text().length != 0)
            {
                let templateText = $(item).text();    
                currentIndex++;
                if(this.id == 'text_area_div')
                {
                    templateText = `[${$('.container .wrapper .bottom-panel .right-wrapper .time-wrapper .date').text()}] : ${policemanList.FullName} : ${templateText}`;                
                }
                let separator = index > 0 ? '@' : '';
                currentText += separator + templateText;
            }
        });
        currentFiler.Text = currentText;
        let wantedLevel = $('.container .things-wrapper .add-thing-wrapper .wanted-level .star.activated');
        if(wantedLevel.length != 0)
        {
            wantedLevel = wantedLevel[0].id;
            currentFiler.WantedLevel = parseInt(wantedLevel.slice(1));
        }
        let package = JSON.stringify(currentFiler);
        console.log(package);
        $('.container .wrapper .add-thing-wrapper, .container .things-wrapper .mask').fadeOut();
        mp.trigger('changeThing',package);					
    });
     
    $('input,textarea').on("keydown keypress keyup", function(e){
        console.log('this');
        if(this.id == 'suspect-name' || this.id == 'suspect-lastname')
        {
            this.value = this.value.replace(/[^А-ЯЁа-яё ]/g, '');
        }
        if(this.id != 'newLoginPromo')
        {
            var e = e || event, k = e.which || e.button;
            if(e.ctrlKey && k == 86) return false
            if(k == 2)return false	
        }
        else
        {
            console.log(111);
        }
    }).bind("paste contextmenu", function(){
        if(this.id != 'newLoginPromo')
        {
           return false
        }
    });
}
function suspectsRefresh()
{   
    $('#imposePunishment').on('click',function(){
        $('.edit-mask,.add-thing-wrapper .punishmentMenu').fadeIn();
    });
    $('.punishmentMenu #closePunishment').on('click',function(){
        $('.edit-mask,.add-thing-wrapper .punishmentMenu').fadeOut();
    });
    $('.add-thing-wrapper .punishment-item').on('click',function(){
        let id = this.id,
            active = $(this).parent().find('.active')[0].id;
        console.log(id,active);
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $(`.add-thing-wrapper input#${active}`).attr('disabled',true);
        $(`.add-thing-wrapper input#${id}`).attr('disabled',false);
    });
    $('.add-thing-wrapper .punishmentMenu #punishmentSubmit').on('click',function(){
        let currentInfo = $('.punishmentMenu .active').next().val(),
            currentId = $('.punishmentMenu .active')[0].id,
            thingId = $('.container .things-wrapper .add-thing-wrapper .name-wrap').attr('data-index');
        if(currentInfo.length > 0)
        {
            if(currentId == 'currentId' && currentInfo > 9999999)
            {
                console.log('>99999999')
            }
            else if(currentId == 'arrest' && currentInfo > 800)
            {
                console.log('>800');
            }
            else
            {
                $('.punishmentMenu input').val('');
                $('.punishmentMenu .active').removeClass('active');
                $('.punishmentMenu #arrest').addClass('active');
                $('.edit-mask,.add-thing-wrapper .punishmentMenu').fadeOut();
                console.log(filerList[thingId].StatementID,currentId,parseInt(currentInfo));
                mp.trigger('punishmentStatus',filerList[thingId].StatementID,currentId,parseInt(currentInfo));
            }
        }
    });
    $('.container .add-thing-wrapper .right-block .suspects-wrap .delete-item').on('click',function(){
        if($('.container .wrapper .add-thing-wrapper .things-item')[0].id === 'edit')
        {
            let currentId = $('.container .things-wrapper .add-thing-wrapper .name-wrap').attr('data-index'),
                currentItem = $(this).parent().find('span').text();
            $(currentFiler.Violators).each(function(index,item){
                if(currentItem === item)
                {
                    currentFiler.Violators.splice(index,1);
                    return;
                }
            });
        }
        $(this).parent().remove();
    }); 
}	

function refreshFrames()
{
    let currentElement = { Refresh:true };
    // $('#archive-frame')[0].contentWindow.postMessage(currentElement, "*");
    // $('#things-frame')[0].contentWindow.postMessage(currentElement, "*");
    $('#employee-frame')[0].contentWindow.postMessage(currentElement, "*");
    setTimeout(function(){
        updateStatus = false;
    },500);
}
$('.container .clews-wrapper #carSearch').on('click',function(){
    let number = '',
        name = '',
        phone = '',
        car = '';
    $('.container .clews-wrapper input').each(function(index,item){
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
function textarea_resize(event, line_height = 10, min_line_count = 2)
{             
    console.log(event.target.value);
    event.target.value = event.target.value.replace(/[^А-ЯЁа-яё!,.?0-9 ]/g, '');
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