var micro = null,
    sleepTime = 1000;

function microphoneStatus(bool)
{
    if(bool)
    {
        $('.hud-voice').addClass('voice-active');
        // micro = setTimeout(function() {
        //     $(function(){
        //         (function pulse(){
        //            $('.hud-voice').delay(100).fadeOut(300).delay(50).fadeIn(300,pulse);
        //         })();
        //     });
        // });
    }
    else
    {
        clearTimeout(micro);
        $('.hud-voice').removeClass('voice-active');
        // $('.hud-voice').removeClass('voice-active').stop(true).fadeIn();
    }
};
function closeMoney()
{
    if($('.hud-footer .hud-footer__wrap').is(':visible'))
    {
        $('.hud-footer .hud-footer__wrap').slideUp();
    }
    else
    {
        $('.hud-footer .hud-footer__wrap').slideDown();
    }
}
function hudInit(water,eat,cash,card,microStatus)
{
    initTime();
    microphoneStatus(microStatus);
    waterStatus(water);
    eatStatus(eat);
    cardStatus(card);
    cashStatus(cash);
};
$('.button#hover').on('click',function(){
    if($('.hud-footer__wrap').is(':visible'))
    {
        $(this).css('bottom','-16px');
        $('.hud-footer__wrap, .geo-wrapper, .buttons').slideUp();
        $(this).find('i').css('transform','rotate(180deg)');
    }
    else
    {
        $('.hud-footer__wrap, .geo-wrapper, .buttons').slideDown();
        $(this).find('i').css('transform','rotate(0deg)');
        $(this).css('bottom','-17px');
    }
});
function waterStatus(water)
{
    if(water > 75)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/100.png)');
    }
    if(water <= 75 && water > 50)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/75.png)');
    }
    if(water <=50 && water >25)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/50.png)');
    }
    if(water <= 25 && water > 10)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/25.png)');
    }
    if(water <= 10)
    {
        $('.hud-needs__wrap .water').css('background-image','url(img/hud/water/0.png)');
    }
};
function eatStatus(eat)
{
    if(eat > 75)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/100.png)');
    }
    if(eat <= 75 && eat > 50)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/75.png)');
    }
    if(eat <=50 && eat >25)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/50.png)');
    }
    if(eat <= 25 && eat > 10)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/25.png)');
    }
    if(eat <= 10)
    {
        $('.hud-needs__wrap .eat').css('background-image','url(img/hud/eat/0.png)');
    }
};
function cardStatus(card)
{
    $('#card').text(card);
};
function cashStatus(cash)
{
    $('#cash').text(cash);
};
function initTime(hour,minute)
{
    let currentHours = hour,
        currentMinutes = minute;
    time = `${currentHours <=9 ? '0' + currentHours : currentHours}:${currentMinutes <=9 ? '0' + currentMinutes : currentMinutes}`;
    $('.hud-time').text(time);
};
function pushGeo(text)
{
    $('.geo-wrapper').text(text);
}
let keyList = [
    { keyCode: 73, title: "I, i, Ш, ш", action: 'Инвентарь', active: false },
    { keyCode: 79, title: "O, o, Щ, щ", action: 'Рация', active: false },
    { keyCode: 78, title: "N, n, Т, т", action: 'Планшет', active: false },
    { keyCode: 77, title: "M, m, Ь, ь", action: 'Смартфон', active: false },
    { keyCode: 113, title: "F2", action: 'Остановить анимацию', active: false },
    { keyCode: 118, title: "F7", action: 'Мышка (Показать/Скрыть)', active: false },
    { keyCode: 76, title: "L, l, Д, д", action: 'Анимации', active: false },
    { keyCode: 75, title: "K, k, Л, л", action: 'Транспорт', active: false },
    { keyCode: 74, title: "J, j, О, о", action: 'Поднять руки', active: false },
    { keyCode: 88, title: "X, x, Ч, ч", action: 'Микрофон общий', active: false },
    { keyCode: 71, title: "G, g, П, п", action: 'Взаимодействие', active: false },
    { keyCode: 17, title: "Control", action: 'Выделение', active: false },
    { keyCode: 90, title: "Z, z, Я, я", action: 'Микрофон рации', active: false },
    { keyCode: 66, title: "B, b, И, и", action: 'Указать', active: false }
];
function pushKeyList(obj)
{
    keyList = JSON.parse(obj);
}
let triggersList = [
    'KeyIpress',   ////////////ИНВЕНТАРЬ
    'KeyOpress',     ///////////////РАЦИЯ
    'KeyNpress',           /////////////ПЛАНШЕТ
    'KeyMpress',      //////////////СМАРТФОН
    'KeyF2press',       ////////////ОСТАНОВИТЬ АНИМАЦИЮ
    'KeyF7press',       //////////////МЫШКА (ПОКАЗАТЬ/СКРЫТЬ)
    'KeyLpress',        /////////////АНИМАЦИИ
    'KeyKpress',         //////////////////ТРАНСПОРТ
    'KeyJpress',         /////////////////ПОДНЯТЬ РУКИ
    'KeyXpress',         ////////////////МИКРОФОН     ТОЛЬКО ТУТ 2 ТРИГГЕРА ОБРАТИ ВНИМАНИЕ, ПРИ НАЖИТИИ И ОТПУСКАНИИ
    'KeyGpress',       //////////////////ВЗАИМОДЕЙСТВИЕ
    'KeyCtrlpress',    ////////////////// ВЫДЕЛЕНИЕ
    'KeyZpress'         ////////////////////// МИКРОФОН РАЦИИ
];
function keypressDown(e){ 
    $(keyList).each(function(index,item){
        if(index == 9)
        {
            if(e.keyCode == item.keyCode)
            {
                mp.trigger('KeyXpressDown');
            }
        } 
    });   
}
function keypressUp(e){  
    $(keyList).each(function(index,item){
        if(e.keyCode == item.keyCode)
        {
            mp.trigger(triggersList[index]);
        }
    });
    switch(e.keyCode){         
        case 72:  // I инвентарь
            mp.trigger('KeyHpress');   
        break;
        case 116:  // O инвентарь авто
            mp.trigger('KeyF5press');        
        break;
        case 69:  // E взаимодействие
            mp.trigger('KeyEpress');
        break;
        case 45:  // Menu Insert взаимодействие 
            mp.trigger('KeyPress');
        break;       
        case 89:  // Y взаимодействие
            mp.trigger('KeyYpress');        
        break;  
		  case 72:  // Y взаимодействие
            mp.trigger('KeyPolice');
        break;  
        case 18:  // alt
            mp.trigger('KeyAltpress');
        break;
        case 114:  // alt
            mp.trigger('KeyF3press');
        break;
		case 117:  // F6
            mp.trigger('KeyF6Press');
        break;
        case 119:  // Num9
            mp.trigger('KeyF8Press');
        break;
    }
}
// function runOnKeys(func, ...codes) {
//     let pressed = new Set();

//     document.addEventListener('keydown', function(event) {
//       console.log(event.code);
//       pressed.add(event.code);
//       for (let code of codes) { // все ли клавиши из набора нажаты?
//         if (!pressed.has(code)) {
//           return;
//         }
//       }

//       // да, все

//       // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
//       // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
//       // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
//       pressed.clear();

//       func();
//     });

//     document.addEventListener('keyup', function(event) {
//       pressed.delete(event.code);
//     });

// };
$(window).on("keyup", keypressUp);
$(window).on("keydown", keypressDown);
// runOnKeys(
//     () =>  mp.trigger('KeyZLeftAltpress'),
//     'KeyZ',
//     'AltLeft'
// );