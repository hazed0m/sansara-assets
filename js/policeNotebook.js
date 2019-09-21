
let policemanList = {},
    charterText = '';    
$(".startup-mask").delay(450).fadeOut('slow');
$('.main-wrapper').fadeIn();
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
let employeeOnline = JSON.stringify([
    {"FullName": 'Ruslan',"Online":true},
    {"FullName":'Adsad',"Online":false}
]);
function pushNotebook(policeman,employeeOnline,admin = false)
{
    if(typeof employeeOnline != undefined)
    {
        postEmployee(employeeOnline);
    }    
    if(typeof policeman != undefined)
    {   
        postPoliceman(policeman);
    }
    if(typeof admin != undefined)
    {
        let adminStatus = { Admin: admin };
        $('#charter-frame')[0].contentWindow.postMessage(adminStatus, "*");
        $('#employee-frame')[0].contentWindow.postMessage(adminStatus, "*");
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
}  
function postPoliceman(item)
{
    let currentElement = JSON.parse(item);
    $('#archive-frame')[0].contentWindow.postMessage(currentElement, "*");
    $('#things-frame')[0].contentWindow.postMessage(currentElement, "*");
    window.addEventListener('message', function(event) {
        if (event.data['addViolation']) {
            const { currentId,witness,violation,injured,wantedLevel } = event.data.addViolation;        
            console.log(currentId,witness,violation,injured,wantedLevel);            
            mp.trigger('addViolation',currentId,witness,violation,injured,wantedLevel);
        }  
        if (event.data['addThing']) {
            const package = event.data.addThing;        
            console.log(package);   
            mp.trigger('addThing',package);
        }    
        if (event.data['changeThing']) {
            const package = event.data.changeThing;        
            console.log(package);            
            mp.trigger('changeThing',package);
        }   
    });
}  
function refreshFrames()
{
    let currentElement = { Refresh:true };
    $('#archive-frame')[0].contentWindow.postMessage(currentElement, "*");
    $('#things-frame')[0].contentWindow.postMessage(currentElement, "*");
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