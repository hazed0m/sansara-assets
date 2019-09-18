
let policemanList = {},
    charterText = '';    

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
function pushNotebook(policeman,employeeOnline)
{
    if(typeof policeman != undefined)
    {   
        postPoliceman(policeman);
    }
    if(typeof employeeOnline != undefined)
    {
        postEmployee(employeeOnline);
    }
}
$('.container .business-wrapper .search-block #searchPerson').on('click',function(){
    let value = $(this).prev().val();
    mp.trigger('searchPerson',field);
});
function searchPerson(field)
{
    mp.trigger('searchPerson',field);
}
function postEmployee(item)
{
    let currentElement = JSON.parse(item);
    $('#employee-frame')[0].contentWindow.postMessage(currentElement, "*");
    window.addEventListener('message', function(event) {
        if (event.data['policeOnlineChange']) {
            const { currentId, name } = event.data.policeOnlineChange;        
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