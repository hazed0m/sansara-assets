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
    }
});
function postEmployee(item)
{
    let currentElement = JSON.parse(item);
    $('#employee-frame')[0].contentWindow.postMessage({"Online":currentElement}, "*");
    window.addEventListener('message', function(event) {
        if (event.data['onlineChange']) {
            const { currentId, name } = event.data.onlineChange;        
            console.log(currentId,name);
            mp.trigger('medicalOnlineChange',currentId,name);
        }    
    });
}  
function refreshFrames()
{
    let currentElement = { Refresh:true };
    $('#employee-frame')[0].contentWindow.postMessage(currentElement, "*");
}
let employeeOnline = JSON.stringify([
    {"FullName": 'Ruslan',"Online":true},
    {"FullName":'Adsad',"Online":false}
]);
function pushNotebook(employeeOnline,admin = false)
{
    if(typeof employeeOnline != undefined)
    {
        postEmployee(employeeOnline);
    } 
    if(typeof admin != undefined)
    {
        let adminStatus = { Admin: admin };
        $('#charter-frame')[0].contentWindow.postMessage(adminStatus, "*");
        $('#employee-frame')[0].contentWindow.postMessage(adminStatus, "*");
    }
}
$('.container .business-wrapper .search-block #searchStory').on('click',function(){
    let value = $(this).prev().val();
    mp.trigger('searchHistory',field);
});
function historyInit(element)
{
    let item = JSON.parse(element);
    if(item !== undefined)
    {
        if(item.FullName != $('.container .business-wrapper .content-block .name').text())
        {
            let carItems = ``,
                violationItems = ``;
            $(item.Therapies).each(function(index,item){
                let itemDate = item.Date.split('@');
                violationItems += `<div class="violation-item">
                    <div class="title-item">${item.Diagnosis}</div>
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
                <div class="violations-wrapper">
                    <div class="title-wrap">
                        <div class="title-item">Диагноз</div>
                        <div class="title-item">Врач</div>
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


