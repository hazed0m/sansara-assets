let adminList = [],
    currentAdmin = {};
$('.button#generalAdminSlide').on('click',function(){
    if($('.main-wrapper .general-admin-block').is(':visible'))
    {
        $('.main-wrapper .general-admin-block').slideUp();
        $(this).find('svg').css({
            'transform':'rotate(360deg)'
        });
    }
    else
    {
        $('.main-wrapper .general-admin-block').slideDown();
        $(this).find('svg').css({
            'transform':'rotate(180deg)'
        });
    }
});
$('#notification, #notifyAll, #callGeneralAdmin').on('click',function(){
    let id = this.id,
        currentName = $('input#searchPlayer').val();
    $('.container .notification-screen textarea').val('');    
    if(id == 'notifyAll')
    {
        $('.container .notification-screen .title').html('Обращение ко <span>всем</span>');
    }
    else if(id == 'callGeneralAdmin')
    {
        $('.container .notification-screen .title').html(`Обращение к <span>главному администратору</span>`);
    }
    else
    {
        $('.container .notification-screen .title').html(`Обращение к <span>${currentName}</span>`);
    }
    if(!$(this).hasClass('disabled'))
    {
        $('.container .notification-screen').attr({'id':id,'data-index':currentName}).fadeIn();
    }    
    mp.trigger('NotificationScreenOpened');
});
$('.container .notification-screen textarea').keyup(function(){
    if($(this).val().length != 0)
    {
        $('.container .notification-screen #sendMessage').removeClass('disabled');
    }
    else
    {
        $('.container .notification-screen #sendMessage').addClass('disabled');
    }
});
$('.container .notification-screen #sendMessage').on('click',function(){
    let id = $('.container .notification-screen').attr('id'),
        currentIndex = $('.container .notification-screen').attr('data-index'),
        text = $('.container .notification-screen textarea').val();
    console.log('adminNotification',id,currentAdmin.id,currentAdmin.name,currentIndex,text);
    $('.container .notification-screen').fadeOut();
    if(id != 'sendAnswer')
    {
        mp.trigger('adminNotification',id,currentAdmin.id,currentAdmin.name,currentIndex,text);
    }
    else
    {
        mp.trigger('adminNotification',id,currentAdmin.id,currentAdmin.name,adminList[parseInt(currentIndex)].Id,adminList[parseInt(currentIndex)].FullName,text);
    }
});
$('.container .notification-screen #cancel').on('click',function(){
    let id = $('.container .notification-screen').attr('id');
    console.log(id);    
    $('.container .notification-screen').fadeOut();
});
$('.ban-player #banPlayer, .kick-player #kickPlayer').on('click',function(){
    let currentName = $('input#searchPlayer').val(),
        currentKickValue = $('.kick-player input').val(),
        currentBanValue = $('.ban-player input').val(),
        id = this.id;
    if(id == 'kickPlayer')
    {
        $('.kick-player #kickPlayer, .ban-player #banPlayer').addClass('disabled');
        $('.kick-player input').val('');
        console.log(id,currentAdmin.id,currentAdmin.name,currentName,currentKickValue);
        mp.trigger(id,currentAdmin.id,currentAdmin.name,currentName,currentKickValue);
    }
    if(id == 'banPlayer')
    {
        $('.kick-player #kickPlayer, .ban-player #banPlayer').addClass('disabled');
        $('.kick-player input').val('');
        $('.ban-player input').val('');
        console.log(id,currentAdmin.id,currentAdmin.name,currentName,currentKickValue,currentBanValue);
        mp.trigger(id,currentAdmin.id,currentAdmin.name,currentName,currentKickValue,currentBanValue);
    }
});
$('.ban-player input, .kick-player input').keyup(function(){
    let id = this.id,
        kickVal = $('.kick-player input').val(),
        banVal = $('.ban-player input').val();
    if($('input#searchPlayer').val().length != 0 && kickVal.length != 0)
    {
        $('.button#kickPlayer').removeClass('disabled');
    }
    else
    {
        $('.button#kickPlayer').addClass('disabled');
    }
    if($('input#searchPlayer').val().length != 0 && kickVal.length != 0 && banVal.length != 0)
    {
        console.log($('input#searchPlayer').val().length,kickVal.length,'banVAl=',banVal.length);
        $('.button#banPlayer').removeClass('disabled');
    }
    else
    {
        $('.button#banPlayer').addClass('disabled');
    }
});
$('input#searchPlayer').keyup(function(){
    if($(this).val().length != 0)
    {
        if($('.ban-player input').val().length != 0)
        {
            $('.ban-player .button').removeClass('disabled');
        }
        if($('.kick-player input').val().length != 0)
        {
            $('.kick-player .button').removeClass('disabled');
        }        
        $('.container .main-wrapper .main-block .buttons-wrapper .button').removeClass('disabled');
    }
    else
    {
        if($('.ban-player input').val().length != 0)
        {
            $('.ban-player .button').addClass('disabled');
        }
        if($('.kick-player input').val().length != 0)
        {
            $('.kick-player .button').addClass('disabled');
        }   
        $('.textblock#aboutPlayer').slideUp();
        $('.container .main-wrapper .main-block .buttons-wrapper .button').addClass('disabled');
    }
});
$('.container .main-block .buttons-wrapper .button').on('click',function(){
    let currentData = $('input#searchPlayer').val(),
        id = this.id;
    console.log(id,currentAdmin.id,currentAdmin.name,currentData);
    if(id != 'notification')
    {
        mp.trigger('adminButton', id, currentAdmin.id,currentAdmin.name, currentData)
    }
});
function showMenu(status)
{
    if(status == 'open')
    {
        $('.main-wrapper').fadeIn();
    }
    if(status == 'close')
    {
        $('.main-wrapper').fadeOut();
    }
}
function pushNameSearch(name)
{
    $('input#searchPlayer').val(name);
    $('.container .main-wrapper .main-block .buttons-wrapper .button').removeClass('disabled');
}
function pushInfo(text)
{
    let textArr = text.split('@');
    $('.textblock#aboutPlayer').empty();
    $(textArr).each(function(index,item){
        $('.textblock#aboutPlayer').append(`<p>${item}</p>`);
    });
    $('.textblock#aboutPlayer').slideDown();
}
function pushGeneralAdmin(playersOnServer,objectsOnServer,transportOnServer)
{
    $('.info-item#playersOnServer .value').text(playersOnServer);
    $('.info-item#objectsOnServer .value').text(objectsOnServer);
    $('.info-item#transportOnServer .value').text(transportOnServer);
}
// $('.general-admin-block input#generalAdminInput').keyup(function(){
//     if($(this).val().length != 0)
//     {
//         $('.container .main-wrapper .general-admin-block .buttons-wrapper .button').removeClass('disabled');
//     }
//     else
//     {
//         $('.container .main-wrapper .general-admin-block .buttons-wrapper .button').addClass('disabled');
//     }
// });
$('.container .general-admin-block .buttons-wrapper .button').on('click',function(){
    let currentData = $('input#generalAdminInput').val(),
        id = this.id;
    console.log(id,currentAdmin.id,currentAdmin.name,currentData);
    mp.trigger('generalAdminButton', id, currentAdmin.id,currentAdmin.name, currentData)
});
$('.main-wrapper .additional-block .admin-panel-checkbox input').on('click',function(){
    $(this).attr("checked", !$(this).parent().find('input').attr("checked"));
});
$('.main-wrapper .admin-panel-checkbox input').on('change',function(){
    if($(this).attr("checked") == 'checked')
    {
        $('.adminpanel-wrapper').fadeIn();
    }
    else
    {
        $('.adminpanel-wrapper').fadeOut();
    }
});
function pushAdmin(Id,FullName,Admin)
{
    currentAdmin = {
        id: Id,
        name: FullName,
        admin: Admin
    };
    if(Admin == 'general')
    {
        $('.button#generalAdminSlide').fadeIn();
        $('.main-wrapper .general-admin-block').slideDown();
    }
}
function pushAdminPanel(data)
{
    adminList = JSON.parse(data).reverse();
    $('.container .adminpanel-wrapper').empty();
    $(adminList).each(function(index,item){
        let template = `<div class="player-notification-item" data-index="${index}" data-id="${item.Id}" data-fullname="${item.FullName}">
                            <div class="text">${item.Text}</div>
                            <div class="buttons-wrapper">
                                <div class="player-status" id="${item.Status}"></div>
                                <div class="button" id="sendAnswer">Ответ</div>
                                <div class="button" id="teleport">ТП</div>
                                <div class="button" id="teleportToYourself">ТП к себе</div>
                                <div class="button" id="restartInterface">Рест. интерф.</div>
                            </div>
                        </div>`;
        $('.container .adminpanel-wrapper').append(template);
    });
    refreshAdminPanel();
}
function refreshAdminPanel()
{
    $('.container .player-notification-item .buttons-wrapper .button').on('click',function(){
        let currentIndex = parseInt($(this).parent().parent().attr('data-index')),
            id = this.id;
        if(id != 'sendAnswer')
        {
            console.log('adminPanelButton', id, currentAdmin.id,currentAdmin.name, adminList[currentIndex].Id, adminList[currentIndex].FullName);
            mp.trigger('adminPanelButton', id, currentAdmin.id,currentAdmin.name, adminList[currentIndex].Id, adminList[currentIndex].FullName);
        }
        else
        {
            let id = this.id;
            $('.container .notification-screen textarea').val('');
            if(!$(this).hasClass('disabled'))
            {
                $('.container .notification-screen').attr({'id':id,'data-index':currentIndex}).fadeIn();
                $('.container .notification-screen .title span').text(adminList[currentIndex].FullName);
            }
            mp.trigger('NotificationScreenOpened');
        }
    });
}