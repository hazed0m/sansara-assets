
let policemanList = {},
    filerList = [],
    archiveList = [],
    currentFiler = {}, 
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
$('.police-menu .menu-item').on('click',function(){
    let currentWrapper = this.id;
    if(!$(this).hasClass('active'))
    {
        $('.wrapper > .active').removeClass('active').fadeOut(200);
        $('.police-menu .menu-item.active').removeClass('active');
        $(this).addClass('active');
        $(`.wrapper .${currentWrapper}`).addClass('active').fadeIn(500).css('display','flex');
    }
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
        FullName:'Дмитрий Ивановasd',
        Position:'Начальник полициasdи',
        HourInDept:0,
        Status:false,
        Time:0,
        OpenedThings:1,
        ClosedThings:2
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
    }
]);
let archive = JSON.stringify([
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
let employeeOnline = JSON.stringify([
    {"FullName": 'Ruslan',"Online":true},
    {"FullName":'Adsad',"Online":false}
]);
function pushNotebook(policeman,filer,archive,employeeOnline,admin = false)
{
    if(typeof employeeOnline != undefined)
    {
        postEmployee(employeeOnline);
    }    
    if(typeof policeman != undefined)
    {   
        policemanList = JSON.parse(policeman);
    }
    if(typeof filer != undefined)
    {   
        filerList = JSON.parse(filer);
        initFiler(filerList);
    }
    if(typeof archive != undefined)
    {   
        archiveList = JSON.parse(archive);
        initFiler(archiveList);
    }
    if(typeof admin != undefined)
    {
        let adminStatus = { Admin: admin };
        $('#charter-frame')[0].contentWindow.postMessage(adminStatus, "*");
        $('#employee-frame')[0].contentWindow.postMessage(adminStatus, "*");
        $('.debugger').append("<p>Админ прошел</p>");
    }                      
}
$('.container .business-wrapper .search-block #searchPerson').on('click',function(){
    let value = $(this).prev().val();
    mp.trigger('searchPerson',field);
});
function personInit(element)
{
    let item = JSON.parse(element);
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
    $('.debugger').append("<p>Сотрудники прошли</p>");
}  
function initFiler(elem)
{
    // $(`.container .archive-wrapper .archive-wrap,
    //     .container .things-wrapper .things-container`).empty();
    if(elem.length < 1)
    {
        $('.debugger').append("<p>Пустой объект</p>");
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
                <div class="things-item ${index == elem.length - 1 ? 'last-in-container' : ''}" id="thing${item.StatementID}">
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
            if(index == elem.length-1)
            {                
                if($('.container .things-wrapper .things-container .last-in-container').length > 1)
                {
                    $('.container .things-wrapper .things-container .last-in-container:eq(0)').removeClass('last-in-container');
                }
                $('.container .things-wrapper .things-container').scroll(function() {
                    let currentHeight = $('.container .things-wrapper .things-container .last-in-container').position().top;
                    console.log(currentHeight,$('.container .things-wrapper .things-container').scrollTop());
                    if($('.container .things-wrapper .things-container').scrollTop() > currentHeight){
                        $(".container .things-wrapper #more-things").fadeIn();
                    }
                    else
                    {
                        $(".container .things-wrapper #more-things").fadeOut();
                    }
                });	
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
            let template = `
                <div class="archive-item ${index == elem.length - 1 ? 'last-in-container' : ''}" id="archive${item.StatementID}">
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
            $('.container .archive-wrapper .archive-container').append(template);
            if(index == elem.length-1)
            {              
                if($('.container  .archive-wrapper .archive-wrap .archive-container .last-in-container').length > 1)
                {
                    $('.container  .archive-wrapper .archive-wrap .archive-container .last-in-container:eq(0)').removeClass('last-in-container');
                }
                $('.container .archive-wrapper .archive-wrap .archive-container').scroll(function() {
                    const currentHeight = $('.container .archive-wrapper .archive-container .last-in-container').position().top;
                    console.log(currentHeight,$('.container .archive-wrapper .archive-container').scrollTop());
                    if($('.container .archive-wrapper .archive-container').scrollTop() > currentHeight){
                        $(".container .archive-wrapper #more-things").fadeIn();
                    }
                    else
                    {
                        $(".container .archive-wrapper #more-things").fadeOut();
                    }		
                });	
            }  
        }
    });        
    refreshThingsList();
}
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
    let newList = JSON.parse(elem);
    filerList = [...filerList,...newList];
    initFiler(newList);
}
function appendArchive(elem)
{
    let newList = JSON.parse(elem);
    archiveList = [...archiveList,...newList];
    initFiler(newList);
}
function refreshThingsList()
{
    $('#search-thing').on('click',function(){
        if($(this).prev().val().length != 0)
        {
            let id  = $(this).prev().val();   
            $(this).prev().val('');
            if($(id).length)
            {                             
            	$(this).prev().val('');
            	let top = $(id).offset().top - 150;
            	$('.container .things-wrapper .things-container').animate({scrollTop: top}, 900);
            }
            else
            {                
                mp.trigger("searchThing", id);
            	$('.container .things-wrapper .search-wrap .notification').fadeIn(200);
            	setTimeout(function(){                                 
            		$('.container .things-wrapper .search-wrap input').val('');
            		$('.container .things-wrapper .search-wrap .notification').fadeOut();
            	},1500);
            }
        }
    });
    $(`.container .things-wrapper .things-wrap #more-things`).on('click',function(){
        $(this).fadeOut();
        mp.trigger('moreThings');
    });
    $(`.container .archive-wrapper .archive-wrap #more-things`).on('click',function(){
        $(this).fadeOut();
        mp.trigger('moreArchive');
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
            if(item.StatementID === parseInt(currentId))
            {                
                currentFiler = jQuery.extend(true, {}, filerList[index]);
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
                    textItems += `<p id="thing-add-text">${item}</p>`;
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
        $('.container .add-thing-wrapper, .container .things-wrapper .mask').fadeIn();
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
            currentFiler.PoliceMembers.push(`${policemanList[0].Position}@${policemanList[0].FullName}`);
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
                currentFiler.Violators.push(`${name+ ' ' +lastname}`);
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
        currentFiler.Text = currentText;
        let wantedLevel = $('.container .things-wrapper .add-thing-wrapper .wanted-level .star.activated');
        if(wantedLevel.length != 0)
        {
            wantedLevel = wantedLevel[0].id;
            currentFiler.WantedLevel = parseInt(wantedLevel.slice(1));
        }
        let package = JSON.stringify(currentFiler);
        $('.container .wrapper .add-thing-wrapper, .container .things-wrapper .mask').fadeOut();
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