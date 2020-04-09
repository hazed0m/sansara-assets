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
// function fadeOut()
// {
// 	$('.container').fadeOut();
// }
// function fadeIn()
// {	
// 	$('.container').fadeIn();
// }
$('.sansara-menu #police-menu').on('click',function(){
    $('.sansara-menu').fadeOut();
    $('.police-menu').removeClass('slideOutLeft').addClass('slideInLeft');
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
$('.container .wrapper .bottom-panel .left-wrapper .used-app').on('click',function(){
    if($(`.wrapper > .active`).is(':visible'))
    {
        $(`.wrapper > .active`).fadeOut(500);
        $('.menu-item.active').addClass('hovered');
    }
    else
    {
        $('.menu-item.active').removeClass('hovered');
        $(`.wrapper > .active`).fadeIn(500).css('display','flex');
    }
    $('.sansara-menu').fadeOut();
    $('.police-menu').removeClass('slideOutLeft').addClass('slideInLeft');
});
$('.container .wrapper .police-menu .close-but').on('click',function(){        
    $('.container .wrapper .police-menu').fadeOut();
});
$('.police-menu .menu-item').on('click',function(){
    let currentWrapper = this.id;
    // console.log(currentWrapper);
    $('.sansara-menu').fadeOut();
    if(currentWrapper == 'handbook-wrapper')
    {
        $('.police-menu').addClass('animated slideOutLeft');
    }
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
            // console.log(currentId,name);
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
    {"FullName":'Дмитрий Иванов',"Online":true},
    {"FullName":'Дмитрий Иванов',"Online":false},
    {"FullName":'Лейсан Кастро',"Online":true}
]);
function pushNotebook(employeeOnline,admin = false,date)
{
    if(typeof date != undefined)
    {   
        $('.container .wrapper .bottom-panel .right-wrapper .time-wrapper').text(date);
    }
    if(typeof employeeOnline != undefined)
    {
        postEmployee(employeeOnline);
    } 
    if(typeof admin != undefined)
    {
        if(admin == 'admin')
        {
            $('.container .main-wrapper .recruting-menu').fadeIn();
        }
        $('.container .main-wrapper .recruting-menu input').keyup(function(){
            this.value = this.value.replace(/[-\.;":',/<>@?!№%*&^#$()_+=|{}a-zA-Z0-9]/g, '');
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
        // $('#handbook-frame')[0].contentWindow.postMessage(adminStatus, "*");
        $('#employee-frame')[0].contentWindow.postMessage(adminStatus, "*");
        window.addEventListener('message', function(event) {
            if (event.data['newHandbook']) {
                const { currentId, name, penalty, article } = event.data.newHandbook;        
                // console.log(currentId,name, penalty, article);
                mp.trigger('newMedicalHandbook',currentId,name,penalty,article);
            }  
            if (event.data['editHandbook']) {
                const { currentId, name, penalty, article } = event.data.editHandbook;        
                // console.log(currentId,name, penalty, article);
                mp.trigger('editMedicalHandbook',currentId,name,penalty,article);
            }
            if (event.data['getStatus']) {
                // console.log('getStatus');
                $('#handbook-frame')[0].contentWindow.postMessage(adminStatus, "*");
            } 
        });
        $('#hireNewbie').on('click',function(){
            let val = $(this).prev().val();
            $(this).prev().val('');
            $(this).addClass('disabled');
            // console.log(val);
            mp.trigger('hireNewbieMedical',val);
        });
    }
    initHandbook(0);
}
$('.container .business-wrapper .search-block #searchDNA').on('click',function(){
    let value = $(this).prev().val();
    // console.log(value);
    if(value.length != 0)
    {
        mp.trigger('searchDNA',field);
    }
});
function initHandbook()
{
    let handbookList = [
        'sick',
        'injury1',
        'injury2',
        'burn',
        'coldweapon',
        'drugs',
        'fireshot1',
        'fireshot2'
    ];
    $('.container .handbook-wrapper .inner-pic .arrow-left,.container .handbook-wrapper .inner-pic .arrow-right').on('click',function(){
        // console.log('action');
        let currentPage = parseInt($('.container .handbook-wrapper .inner-pic').attr('data-index'));
        if($(this).hasClass('arrow-left'))
        {
            // console.log('left');
            if(currentPage == 0)
            {
                currentPage = handbookList.length - 1;
            }
            else
            {
                currentPage--;
            }
        }
        if($(this).hasClass('arrow-right'))
        {
            // console.log('right');
            if(currentPage == handbookList.length-1)
            {
                currentPage = 0;
            }
            else
            {
                currentPage++;
            }
        }
        $('.container .handbook-wrapper .inner-pic').attr({'data-image':handbookList[currentPage],'data-index':currentPage});     
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
                    <div class="blood">Группа крови:
                        <span id="blood">${item.Blood}</span>
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
$('.container .business-wrapper input').keyup(function(){
    this.value = this.value.replace(/[-\.;":',/<>@?!№%*&^#$()_+=|{}а-яА-Я0-9]/g, '');
});

