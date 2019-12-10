let menuTitleList = {
    'Police':[
        'собрать улики',
        'отобрать права',
        'отобрать лицензию на оружие'
    ],
    'Medical':[
        'провести осмотр',
        'посмотреть мед.карту'
    ],
    'Mechanical':[
        'провести диагностику',
        'посмотреть сервисную книжку'
    ]
};
function addFractionCircle(fractionName)
{
    $('.big-circle').remove();
    let items = '';
     $(menuTitleList[fractionName]).each(function(index,item){
        items += `<div class="big-item" id="${fractionName}"><span>${item}</span></div>`;
     });
     let template = `
        <div class="big-circle" id="section${menuTitleList[fractionName].length}">
            <div class="inner">
               ${items}
            </div>
        </div>`;
    $('.container .wrapper').append(template);
    let circleType = null;
    if(menuTitleList[fractionName].length == 2)
    {
        document.querySelectorAll('.big-circle#section2 .big-item').forEach(function(item,index){
            circleType = new CircleType(item).radius(270);
        });
    }
    if(menuTitleList[fractionName].length == 3)
    {
        document.querySelectorAll('.big-circle#section3 .big-item').forEach(function(item,index){
            if(index == 2)
            {
               circleType = new CircleType(item).dir(-1).radius(240);
            }
            else
            {
                circleType = new CircleType(item).radius(240);
            }
        });
    }
    if(menuTitleList[fractionName].length == 4)
    {
        document.querySelectorAll('.big-circle#section4 .big-item').forEach(function(item,index){
            circleType = new CircleType(item).radius(200);
        });
    }   
}
let player = JSON.stringify([
    { 
        id:'handcuff', 
        status: false
    },
    {
        id: 'putBag',
        status: false
    },
    {
        id: 'repair',
        status: false
    },
    {
        id: 'reanimation',
        status: false
    }
]);
function initPlayerCircle(elem)
{
    let playerStatus = JSON.parse(elem);
    $(playerStatus).each(function(index,item){
        if(!item.status)
        {
            $(`.small-item#${item.id}`).removeClass('active').addClass('disabled');
        }
    });
}
$('.container .wrapper .small-circle .inner .small-item').on('click',function(){
    let id = this.id;
    console.log(id);
    mp.trigger('PlayerCircle',id);
});