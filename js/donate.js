const vipList = {
       'vip1': { 'vip':1, prices: {'oneWeek':200,'twoWeeks':300,'oneMonth':500 }, 'futures':['ЗП + 50%','цена +20%','цена на запчасти и служебный транспорт минус 20%','увеличение грузоподъемности транспорта'] },
       'vip2':  { 'vip':2, prices: {'oneWeek':400,'twoWeeks':600,'oneMonth':1000 }, 'futures':['ЗП + 100%','цена +50%','цена на запчасти минус 60% на служебный транспорт минус 40%','увеличение грузоподъемности транспорта'] },
       'vip3':  { 'vip':3, prices: {'oneWeek':700,'twoWeeks':1200,'oneMonth':2000 }, 'futures':['ЗП + 200%','цена +100%','цена на запчасти минус 100% на служебный транспорт минус 60%','увеличение грузоподъемности транспорта'] }
    },
    secondChance = 500;

$(document).ready(function(){

    $('.property-item#vip').on('click',function(){
        if(!$(this).hasClass('active'))
        {
            $('.vip-wrap').fadeIn().css('display','flex');
        }
    });
    $('.wrapper .property-wrapper .vip-wrap .back-but').on('click',function(){
        $(this).parent().fadeOut();
    });
    $('.vip-item').on('click',function(){
        let vip = this.id,
            time = $(this).parent()[0].id,
            timeTitle = $(this).parent().find('.title').text();        
        console.log(vip,time); 
        $('.inform-popup #vip-level .front').text(vipList[vip].vip);
        $('.inform-popup #validity .front').text(timeTitle);
        $('.inform-popup #add-info ul').empty();
        $('.inform-popup #cost-info .karma-count').text(vipList[vip].prices[time]);
        $('.inform-popup #main-info .vip-image').attr('id', vip);
        $('.inform-popup #buyVip').attr({'data-vip':vip,'data-time':time});
        $(vipList[vip].futures).each(function(index,item){            
            let template = `<li><span class="back">${item}</span></li>`;
            $('.inform-popup #add-info ul').append(template);
        });
        $('.mask, .inform-popup').fadeIn();
    });
    $('#buyVip').on('click',function(){
        let vip = $(this).attr('data-vip'),
            time = $(this).attr('data-time');
        console.log(vip,time); 
        $('.mask, .inform-popup').fadeOut();
        mp.trigger('getVip', $('#login .front').text(), vip, time);
    });    
    $('#secondChance').on('click',function(){
        if(!$(this).hasClass('active'))
        {
            $('.notification #cost-info .karma-count').text(secondChance);
            $('.mask, .notification').fadeIn();
        }
    });
    $('#buySecondChance').on('click',function(){
        $('.mask, .notification').fadeOut();
        mp.trigger('buySecondChance');
    });
    //Кнопки закрытия и рестарта интерфейса
    $('.wrapper .error-wrapper .button#restart').on('click',function(){
        mp.trigger('errorDonate');
    });
    $('#closeMenu').on('click',function(){
        mp.trigger('closeDonate');
    });
    $('#closeNotif').on('click',function(){
        $('.mask, .notification').fadeOut();
     });
    $('#closePopup').on('click',function(){
       $('.mask, .inform-popup').fadeOut();
    });
});

function pushDonatePanel(login,email,karma,secondChance,vip,vipDate)
{
    if(login != undefined && email != undefined && karma != undefined && vip != undefined && secondChance != undefined)
    {
        $('.status-wrapper, .property-wrapper').fadeIn();
        $('.error-wrapper').css('display','none');
        $('#login .front').text(login);
        $('#email .front').text(email);
        $('#karma .front span').text(karma);
        if(vip.includes('vip'))
        {
            $('.property-item#vip').attr('class',`property-item ${vip} active`);
        }
        if(secondChance ==  true)
        {
            $('.property-item#secondChance').attr('class',`property-item active`);
        }
    }
    else
    {
        $('.status-wrapper, .property-wrapper').css('display','none');
        $('.error-wrapper').fadeIn().css('display','flex');
    }
}