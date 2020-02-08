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
    mp.trigger('exitGovermentNote');
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
            mp.trigger('govermentOnlineChange',currentId,name);
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
    {"FullName":'Adsad',"Online":false}
]);
function pushNotebook(employeeOnline,taxesList,deptorsList,deptorsCount,admin = false,date)
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
            $('.container .main-wrapper .recruting-menu, .container .main-wrapper .sms-push').fadeIn();
        }
        $('.container .main-wrapper .recruting-menu input, .container .main-wrapper .sms-push textarea').keyup(function(){
            if(this.id != 'smsGoverment')
            {
                this.value = this.value.replace(/[-\.;":`',/<>@?!№%*&^#$()_+=|{}a-zA-Z0-9]/g, '');
            }
            if(this.id == 'smsGoverment')
            {
                this.value = this.value.replace(/[-\.;":'`,/<>@?!№%*&^#$()_+=|{}]/g, '');
            }
            if($(this).val().length > 0)
            {
                $(this).next().removeClass('disabled');
            }
            else
            {
                $(this).next().addClass('disabled');
            }
        });
        $('.container .main-wrapper .sms-push #sendSms').on('click',function(index,item){
            let text = $('.container .main-wrapper .sms-push textarea').val();
            if(text.length != 0)
            {
                $(this).addClass('disabled');
                $('.container .main-wrapper .sms-push textarea').val('');
                console.log(text);
                mp.trigger('sendSmsGov',text);
            }
        });
        let adminStatus = { Admin: admin };
        $('#charter-frame')[0].contentWindow.postMessage(adminStatus, "*");
        // $('#handbook-frame')[0].contentWindow.postMessage(adminStatus, "*");
        $('#employee-frame')[0].contentWindow.postMessage(adminStatus, "*");
        window.addEventListener('message', function(event) {
            if (event.data['newHandbook']) {
                const { currentId, name, penalty, article } = event.data.newHandbook;        
                console.log(currentId,name, penalty, article);
                mp.trigger('newGovermentHandbook',currentId,name,penalty,article);
            }  
            if (event.data['editHandbook']) {
                const { currentId, name, penalty, article } = event.data.editHandbook;        
                console.log(currentId,name, penalty, article);
                mp.trigger('editGovermentHandbook',currentId,name,penalty,article);
            }
            if (event.data['getStatus']) {
                console.log('getStatus');
                $('#handbook-frame')[0].contentWindow.postMessage(adminStatus, "*");
            } 
        });
        $('#hireNewbie').on('click',function(){
            let val = $(this).prev().val();
            $(this).prev().val('');
            $(this).addClass('disabled');
            console.log(val);
            mp.trigger('hireNewbieGoverment',val);
        });
    }    
    pushTax(taxesList);
    pushDeptors(deptorsList,deptorsCount);
    dealsInit();
}
let taxesList = JSON.stringify({
    RealtyWeek:10000,
    RealtyAll:1000000,
    TransportWeek:999999,
    TransportAll:99235252525325,
    BusinessWeek:235252532,
    BusinessAll:50233055030,
    GeneralPD:'Человек PD',
    GeneralMC:'Человек MC',
    OnDutyPD: 25,
    OnDutyMC:22,
    AllPD:99,
    AllMC:300
});
function pushTax(elem)
{
    let element = JSON.parse(elem);
    $('#realty .list-week span').text(element.RealtyWeek);
    $('#realty .list-all span').text(element.RealtyAll);

    $('.info-general#pd .info-name').text(element.GeneralPD);
    $('.info-general#mc .info-name').text(element.GeneralMC);

    $('.title-item#pd .on-duty').text(element.OnDutyPD);
    $('.title-item#mc .on-duty').text(element.OnDutyMC);
    $('.title-item#pd .all-duty').text(element.AllPD);
    $('.title-item#mc .all-duty').text(element.AllMC);

    $('#transport .list-week span').text(element.TransportWeek);
    $('#transport .list-all span').text(element.TransportAll);

    $('#business .list-week span').text(element.BusinessWeek);
    $('#business .list-all span').text(element.BusinessAll);
}
let deptorsList = JSON.stringify([
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:false
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:true
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:false
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:true
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:true
        },
        Business:{
            count:2235252,
            status:false
        }
    }    
]);
let deptorsList1 = JSON.stringify([
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:true
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:false
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:false
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:true
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:2235252,
            status:false
        },
        Realty:{
            count:2235252,
            status:false
        },
        Business:{
            count:2235252,
            status:true
        }
    },
    {
        FullName:'Джонни Мнемоник',
        Transport:{
            count:22,
            status:true
        },
        Realty:{
            count:2235252,
            status:true
        },
        Business:{
            count:33,
            status:false
        }
    }    
]);
function pushDeptors(elem,count)
{
    $('.pagination-wrap .button').removeClass('disabled');
    let element = JSON.parse(elem);
    $('.container .tax-wrapper .deptors-wrap .deptors-list').empty();
    $(element).each(function(index,item){
        let template = `
            <div class="deptors-item">
                <div class="deptors-name">${item.FullName}</div>
                <div class="sort-items">
                    ${item.Transport != null ? `
                    <div class="deptors-car">
                        <div class="dept-count">
                            <span>${item.Transport.count}</span>$
                        </div>
                        <div class="auction-button ${item.Transport.status ? 'active' : ''}" data-type="Транспорт">
                            
                        </div>
                    </div>` : `<div class="deptors-car"></div>`}
                    ${item.Realty != null ? `
                        <div class="deptors-house">
                            <div class="dept-count">
                                <span>${item.Realty.count}</span>$
                            </div>
                            <div class="auction-button ${item.Realty.status ? 'active' : ''}" data-type="Недвижимость">
                            
                            </div>
                        </div>` : `<div class="deptors-house"></div>`}
                    ${item.Business != null ? `
                    <div class="deptors-business">
                        <div class="dept-count">
                            <span>${item.Business.count}</span>$
                        </div>
                        <div class="auction-button ${item.Business.status ? 'active' : ''}" data-type="Бизнес">
                            
                        </div>
                    </div>` : ` <div class="deptors-business"></div>`}
                </div>
            </div>`;
        $('.container .tax-wrapper .deptors-wrap .deptors-list').append(template);
    });
    $('.container .tax-wrapper .deptors-wrap .deptors-list .auction-button.active').on('click',function(){
        $('.container .tax-wrapper .deptors-wrap .accept-window .auction-name span').text($(this).parent().parent().parent().find('.deptors-name').text());
        $('.container .tax-wrapper .deptors-wrap .accept-window .auction-type span').text($(this).attr('data-type'));
        $('#startAuction').removeClass('disabled');
        $('.container .tax-wrapper .deptors-wrap .accept-window, .container .tax-wrapper .deptors-wrap .mask').fadeIn();
    });
    $('.container .accept-window .close-but').on('click',function(){
        $('.container .tax-wrapper .deptors-wrap .accept-window, .container .tax-wrapper .deptors-wrap .mask').fadeOut();
    });
    $('.container .tax-wrapper .deptors-wrap .accept-window .button#startAuction').on('click',function(){
        let type = $(this).parent().find('.auction-type span').text(),
            name = $(this).parent().find('.auction-name span').text();
        console.log(type,name);
        $('.container .tax-wrapper .deptors-wrap .accept-window, .container .tax-wrapper .deptors-wrap .mask').fadeOut();
        $('.container .tax-wrapper .deptors-wrap .accept-window input').val('');
        $(this).addClass('disabled');
        mp.trigger('startAuction',name,type);
    });
    $('.pagination-wrap .button').on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            let pageNumber = parseInt($('.pagination-wrap .page-number').text()),
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
                    $('.pagination-wrap .page-number').text(pageNumber);
                    console.log(pageNumber);
                    $('.pagination-wrap .button').addClass('disabled');
                    mp.trigger('deptorsPagination',pageNumber);
                }
            }
            if(this.id == 'next')
            {
                if(pageNumber < maxPages)
                {
                    pageNumber++;
                    $('.pagination-wrap .page-number').text(pageNumber);
                    console.log(pageNumber);
                    $('.pagination-wrap .button').addClass('disabled');
                    mp.trigger('deptorsPagination',pageNumber);
                }
            }
        }
    });
}
function dealsInit()
{

    $('.container .deals-wrapper .info-item-wrap .dropdown-button, .container .search-wrapper .info-item-wrap .dropdown-button').on('click',function(){
        if(!$(this).hasClass('opened'))
        {
            $(this).next().slideDown();
            $(this).find('svg').css({
                'transform':'rotate(180deg)'
            });
            $(this).addClass('opened');
        }
        else
        {
            $(this).next().slideUp();
            $(this).find('svg').css({
                'transform':'rotate(0deg)'
            });
            $(this).removeClass('opened');
        }
    });
    $('.container .deals-wrapper .dropdown-list .dropdown-item').on('click',function(){
        $('.container .deals-wrapper .info-item-wrap .dropdown-button').next().slideUp();
        $('.container .deals-wrapper .info-item-wrap .dropdown-button').find('svg').css({
            'transform':'rotate(0deg)'
        });
        $('.container .deals-wrapper .info-item-wrap .dropdown-button').removeClass('opened').attr('id',this.id);
        $('.container .deals-wrapper .info-item-wrap .dropdown-button span').text($(this).text());
        $(`.mask-list .mask-item.active`).removeClass('active');        
        $(`.mask-list .mask-item#${this.id}`).addClass('active');
        $('.mask-list .mask-item input').val('');
        $('.container .deals-wrapper .button#doneDeal').addClass('disabled');
    });
    $('.deals-wrapper input').keyup(function(){
        if($(this).attr('type') == 'text')
        {
            console.log($(this).attr('type'));
            this.value = this.value.replace(/[-\.;":'`,/<>@?!№%*&^#$()_+=|{}a-zA-Z0-9]/g, '');
        }
        let dealNumber = parseInt($('#dealNumber input').val()),
            buyerInfo = $('#buyerInfo input').val(),
            sellerInfo = $('#sellerInfo input').val(),
            dealType = $('.mask-item.active')[0].id,
            dealInfo = '',
            dealSum = $('#dealSum input').val();
        if(dealType != 'realty')
        {
            dealInfo = $('.mask-item.active input').val();    
        }
        else
        {
            dealInfo = [
                parseInt($('.mask-item.active input:eq(0)').val()), 
                parseInt($('.mask-item.active input:eq(1)').val())  
            ]
            console.log('realty',dealInfo);
        }
        // console.log(dealNumber,buyerInfo,sellerInfo,dealType,dealInfo,dealSum);
        if(dealNumber.length != 0 && buyerInfo.length != 0 && sellerInfo.length != 0 && dealSum.length != 0)
        {
            if(dealType != 'realty' && dealInfo.length != 0)
            {
                $('.container .deals-wrapper .button#doneDeal').removeClass('disabled');
            }
            else if(dealType == 'realty' && dealInfo[0].length != 0 && dealInfo[1].length != 0)
            {
                console.log(dealInfo);
                $('.container .deals-wrapper .button#doneDeal').removeClass('disabled');
            }
            else
            {
                $('.container .deals-wrapper .button#doneDeal').addClass('disabled');
            }
        }
        else
        {
            $('.container .deals-wrapper .button#doneDeal').addClass('disabled');
        }
    });
    //SEARCH WRAPPER
    $('.container .search-wrapper .dropdown-list .dropdown-item').on('click',function(){
        $('.container .search-wrapper .info-item-wrap .dropdown-button').next().slideUp();
        $('.container .search-wrapper .info-item-wrap .dropdown-button').find('svg').css({
            'transform':'rotate(0deg)'
        });
        $('.container .search-wrapper .info-item-wrap .dropdown-button').removeClass('opened').attr('id',this.id);
        $('.container .search-wrapper .info-item-wrap .dropdown-button span').text($(this).text());
        $(`.mask-list .mask-item.active`).removeClass('active');        
        $(`.mask-list .mask-item#${this.id}`).addClass('active');
        $('.mask-list .mask-item input').val('');
        $('.container .search-wrapper .button#searchPerson').addClass('disabled');
    });
    $('.search-wrapper input').keyup(function(){
        if($(this).attr('type') == 'text')
        {
            console.log($(this).attr('type'));
            this.value = this.value.replace(/[-\.;":'`,/<>@?!№%*&^#$()_+=|{}a-zA-Z0-9]/g, '');
        }
        let dealType = $('.mask-item.active')[0].id,
            dealInfo = '';
        console.log(dealType,dealInfo);
        if(dealType != 'realty')
        {
            dealInfo = $('.mask-item.active input').val();    
        }
        else
        {
            dealInfo = [
                parseInt($('.mask-item.active input:eq(0)').val()), 
                parseInt($('.mask-item.active input:eq(1)').val())  
            ]
            console.log('realty',dealInfo);
        }
        if(dealType != 'realty' && dealInfo.length != 0)
        {
            $('.container .search-wrapper .button#searchPerson').removeClass('disabled');
        }
        else if(dealType == 'realty' && !Number.isNaN(dealInfo[0]) && !Number.isNaN(dealInfo[1]))
        {
            console.log(dealInfo);
            $('.container .search-wrapper .button#searchPerson').removeClass('disabled');
        }
        else
        {
            $('.container .search-wrapper .button#searchPerson').addClass('disabled');
        }
    });
    $('.container .search-wrapper .button#searchPerson').on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            let dealType = $('.mask-item.active')[0].id,
                dealInfo = '';
            if(dealType != 'realty')
            {
                dealInfo = $('.mask-item.active input').val();    
            }
            else
            {
                dealInfo = [
                    $('.mask-item.active input:eq(0)').val(), 
                    $('.mask-item.active input:eq(1)').val()  
                ]
            }
            console.log(dealType,dealInfo);
            mp.trigger('govermentSearch',dealType,dealInfo);
        }
    });
    //SEARCH WRAPPER
    $('.container .deals-wrapper .button#doneDeal').on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            let dealNumber = $('#dealNumber input').val(),
            buyerInfo = $('#buyerInfo input').val(),
            sellerInfo = $('#sellerInfo input').val(),
            dealType = $('.mask-item.active')[0].id,
            dealInfo = '',
            dealSum = $('#dealSum input').val();
            if(dealType != 'realty')
            {
                dealInfo = $('.mask-item.active input').val();    
            }
            else
            {
                dealInfo = [
                    $('.mask-item.active input:eq(0)').val(), 
                    $('.mask-item.active input:eq(1)').val()  
                ]
            }
            console.log(dealNumber,buyerInfo,sellerInfo,dealType,dealInfo,dealSum);
            mp.trigger('doneDeal',dealNumber,buyerInfo,sellerInfo,dealType,dealInfo,dealSum);
        }
    });
}
function searchInit(str)
{
    let searchData = str.split('@');
    $(searchData).each(function(index,item){
        $('.container .search-wrapper .search-done .screen').append(`<p>${item}</p>`);
    });
    $('.container .search-wrapper .search-done').slideDown();
    $('.container .search-done .close-but').on('click',function(){
        $('.container .search-wrapper .search-done').slideUp();
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

