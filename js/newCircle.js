let menuTitleList = {
    'Police':[
        { 
            id:'собрать улики'
        },
        { 
            id:'отобрать права'
        },
        { 
            id:'отобрать лицензию на оружие'
        }
    ],
    'Medical':[
        { 
            id:'провести осмотр',
            img:'img/fractionCircle/watchPatient.png'
        },
        {
            id:'посмотреть мед.карту',
            img:'img/fractionCircle/medicalCard.png'
        }
    ],
    'Mechanical':[
        { 
            id:'провести диагностику'
        },
        {
            id:'погрузить на эвакуатор'
        },
        { 
            id:'открыть сервисную книжку'
        }
    ]
};
function addFractionCircle(fractionName)
{
    $('.big-circle').remove();
    let items = '';
     $(menuTitleList[fractionName]).each(function(index,item){
        // ${item.img != undefined ? `<img src="${item.img}">` : item.id}
        items += `<div class="big-item" id="${fractionName}"><div class="big-text"><span>${item.id}</span></div></div>`;
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
        document.querySelectorAll('.big-circle#section2 .big-item .big-text').forEach(function(item,index){
            circleType = new CircleType(item).radius(280);
        });
    }
    if(menuTitleList[fractionName].length == 3)
    {
        document.querySelectorAll('.big-circle#section3 .big-item .big-text')
        .forEach(function(item,index){
            if(index == 2)
            {
               circleType = new CircleType(item).dir(-1).radius(300);
            }
            else
            {
                circleType = new CircleType(item).radius(300);
            }
        });
    }
    if(menuTitleList[fractionName].length == 4)
    {
        document.querySelectorAll('.big-circle#section4 .big-item .big-text').forEach(function(item,index){
            circleType = new CircleType(item).radius(200);
        });
    } 
    $('.container .wrapper .big-circle .inner .big-item .big-text').on('click',function(){
        let id = this.id;
        console.log(`FractionCircle`,id,$(this).text());
        mp.trigger(`FractionCircle`,id,$(this).text());
    });  
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
    if($(this).hasClass('active'))
    {
        mp.trigger('PlayerCircle',id);
    }
});