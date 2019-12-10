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
    let items = '';
     $(menuTitleList[fractionName]).each(function(index,item){
        items += `<div class="big-item"><span>${item}</span></div>`;
     });
     let template = `
        <div class="big-circle" id="section${menuTitleList[fractionName].length}">
            <div class="inner">
               ${items}
            </div>
        </div>`;
    $('.container .wrapper').append(template);
    document.querySelectorAll('.big-circle .big-item').forEach(function(item,index){
        new CircleType(item).radius(270);
    });
}