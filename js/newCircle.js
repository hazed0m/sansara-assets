let menuTitleList = {
    'Police':[
        { 
            id:'собрать улики',
            button:'searchEvidence',
            img:'img/fractionCircle/getClews.png'
        },
        { 
            id:'отобрать права',
            button:'takeCarLicence',
            img:'img/fractionCircle/getCarRights.png'
        },
        { 
            id:'отобрать лицензию на оружие',
            button:'takeWeaponLicence',
            img:'img/fractionCircle/getWeaponLicence.png'
        }
    ],
    'Medical':[
        { 
            id:'провести осмотр',
            button:'watchPatient',
            img:'img/fractionCircle/watchPatient.png'
        },
        {
            id:'посмотреть мед.карту',
            button:'showMedicalCard',
            img:'img/fractionCircle/medicalCard.png'
        }
    ],
    'Mechanical':[
        { 
            id:'провести диагностику',
            button:'doDiagnostic',
            img:'img/fractionCircle/doDiagnostic.png'
        },
        {
            id:'погрузить на эвакуатор',
            button:'evacuation',
            img:'img/fractionCircle/evacuation.png'
        },
        { 
            id:'открыть сервисную книжку',
            button:'serviceBook',
            img:'img/fractionCircle/serviceBook.png'
        }
    ]
};
function addFractionCircle(fractionName)
{
    $('.big-circle').remove();
    let items = '';
     $(menuTitleList[fractionName]).each(function(index,item){
        items += `
                <div class="big-item" id="${fractionName}" data-name="${item.button}">
                    <img src="${item.img}">
                    <div class="big-text">
                        <span>${item.id}</span>
                    </div>
                </div>`;
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
    $('.container .wrapper .big-circle .inner .big-item').on('click',function(){
        let id = $(this).attr('data-name');
        console.log(id);
        mp.trigger(id);
    });  
}
let player = [
    { 
        id:'takeHandcuff', 
        status: 'hide'
    },
    {
        id: 'takeBag',
        status: 'hide'
    },
    {
        id: 'repair',
        status: 'hide'
    },
    {
        id: 'reanimation',
        status: 'hide'
    }
];
function initPlayerCircle(takeHandcuff = 'true',takeBag = 'true',repair = 'true',reanimation = 'true')
{
    if(takeHandcuff == 'false')    
    {
        $(`.small-item#takeHandcuff`).removeClass('active').addClass('disabled');
    }
    if(takeBag == 'false')
    {
        $(`.small-item#takeBag`).removeClass('active').addClass('disabled');
    }
    if(repair == 'false')
    {
        $(`.small-item#repair`).removeClass('active').addClass('disabled');
    }
    if(reanimation == 'false')
    {
        $(`.small-item#reanimation`).removeClass('active').addClass('disabled');
    }
}
$('.container .wrapper .small-circle .inner .small-item').on('click',function(){
    let id = this.id;
    console.log(id);
    if($(this).hasClass('active'))
    {
        mp.trigger(id);
    }
});