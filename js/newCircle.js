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
            },
            { 
                id:'перевернуть машину',
                button:'reverseCar',
                img:'img/fractionCircle/reverseCar.png'
            }            
        ]
    },
    maxMoney = 10000;
function addFractionCircle(fractionName)
{
    $('.container .wrapper .small-circle#personCircle #showPassport').hover(
        function(){
            let template = `
                <div class="show-wrapper">
                    <div class="showItem" id="showPassport">Показать паспорт</div>
                    <div class="showItem" id="showIdentityСard">Показать удостоверение</div>
                </div>
            `;
            $('.small-item#showPassport').off('click');
            $('.container .wrapper .small-circle#personCircle .info-circle').empty().append(template);
            $('.show-wrapper .showItem').on('click',function(){
                let id = this.id;
                console.log(id);
                mp.trigger(id);
            });
        },
        function(){
    
        }
    );
    $('.big-circle').remove();
    if(fractionName != 'Goverment')
    {

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
        // if(menuTitleList[fractionName].length == 2)
        // {
        //     document.querySelectorAll('.big-circle#section2 .big-item .big-text').forEach(function(item,index){
        //         circleType = new CircleType(item).radius(280);
        //     });
        // }
        // if(menuTitleList[fractionName].length == 3)
        // {
        //     document.querySelectorAll('.big-circle#section3 .big-item .big-text')
        //     .forEach(function(item,index){
        //         if(index == 2)
        //         {
        //            circleType = new CircleType(item).dir(-1).radius(300);
        //         }
        //         else
        //         {
        //             circleType = new CircleType(item).radius(300);
        //         }
        //     });
        // }
        // if(menuTitleList[fractionName].length == 4)
        // {
        //     document.querySelectorAll('.big-circle#section4 .big-item .big-text').forEach(function(item,index){
        //         if(index == 3)
        //         {
        //            circleType = new CircleType(item).dir(-1).radius(280);
        //         }
        //         else
        //         {
        //             circleType = new CircleType(item).radius(280);
        //         }
        //     });
        // } 
        $('.container .wrapper .big-circle .inner .big-item').on('click',function(){
            let id = $(this).attr('data-name');
            console.log(id);
            mp.trigger(id);
        });  
    }
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
$('.container .wrapper .small-circle .inner .small-item.active').hover(function(){
        $('.info-circle').text($(this).attr('data-translate')).css('display','flex');
    },
    function(){
        $('.info-circle').css('display','none');
});
$('.container .info-circle').hover(function(){
    $('.container .info-circle').css('display','flex');
},function(){});
function initPlayerCircle(takeHandcuff = 'true',takeBag = 'true',reanimation = 'true')
{
    if(takeHandcuff == 'false')    
    {
        $(`.small-item#takeHandcuff`).removeClass('active').addClass('disabled');
    }
    if(takeBag == 'false')
    {
        $(`.small-item#takeBag`).removeClass('active').addClass('disabled');
    }
    if(reanimation == 'false')
    {
        $(`.small-item#reanimation`).removeClass('active').addClass('disabled');
    }
}
function initCarCircle(repair = 'true')
{
    if(repair == 'false')
    {
        $(`.small-item#repair`).removeClass('active').addClass('disabled');
    }
}
$(`.container .wrapper .small-circle#personCircle .inner .small-item,
   .container .wrapper .small-circle#carCircle .inner .small-item`).on('click',function(){
    let id = this.id;
    console.log(id);
    if($(this).hasClass('active') && id != 'giveMoney')
    {
        mp.trigger(id);
    }
});
$('#giveMoney').on('click',function(){
	var col = 0,
		input = '<input class="quantity" type="number" min="1" max="150">',
		currentMin = 0,
        currentMax = 0;
    $('.container .wrapper').fadeOut();
	$('.ok-button').attr('action','giveMoney').attr('done','undone');
	$('.col-wrapper').find('.quantity').replaceWith(input);
	if(maxMoney <= 0)
	{
		$('.col-wrapper').find('.quantity').attr('min',parseInt(maxMoney));
		$('.col-wrapper').find('.quantity').attr('max',parseInt(maxMoney));
		$('.col-wrapper').find('.quantity').val(parseInt(maxMoney));
		$('.col-wrapper').find('.min-numb').text(parseInt(maxMoney));
		$('.col-wrapper').find('.max-numb').text(parseInt(maxMoney));
		$('.col-wrapper .ok-button').addClass('disabled');
	}
	else
	{		
		$('.col-wrapper').find('.quantity').val(1);
		$('.col-wrapper').find('.col-title').text('Передача средств');
		$('.col-wrapper').find('.quantity').attr('max',parseInt(maxMoney));
		$('.col-wrapper').find('.max-numb').text(parseInt(maxMoney));
	}
	$('.col-wrapper .min').on('click',function(){
		currentMin = $(this).parent().find('.quantity').attr('min');
		$(this).parent().find('.quantity').val(currentMin);
	});			
	$('.col-wrapper .max').on('click',function(){
		currentMax = $(this).parent().find('.quantity').attr('max');
		$(this).parent().find('.quantity').val(currentMax);
	});			
	$('.ok-button').on('click',function(){
		if($(this).attr('done') == 'undone')
		{
			col = $(this).parent().parent().find('input').val();
			if(col <= maxMoney && col != 0)
			{
				$('.col-wrapper').fadeOut();
				$(this).attr('done','done');
				console.log($('.ok-button').attr('action'), col);
				mp.trigger($('.ok-button').attr('action'), parseInt(col));
            }
            else
            {
                console.log('inputObuz');
                mp.trigger('inputObuz');
            }
		}
	});
	$('.cancel-button').on('click',function(){
		$('.col-wrapper').fadeOut();				
	});			
	//Input
	var inputQuantity = [];
	$(function() {
	  $(".quantity").each(function(i) {
		inputQuantity[i]=this.defaultValue;
		 $(this).data("idx",i); // save this field's index to access later
	  });
	  $(".quantity").on("keyup", function (e) {
		var $field = $(this),
			val=this.value,
			$thisIndex=parseInt($field.data("idx"),10); // retrieve the index
			//window.console && console.log($field.is(":invalid"));
			  //$field.is(":invalid") is for Safari, it must be the last to not error in IE8
		if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
			this.value = inputQuantity[$thisIndex];
			return;
		} 
		if (val.length > Number($field.attr("maxlength"))) {
		  val=val.slice(0, 5);
		  $field.val(val);
		}
		inputQuantity[$thisIndex]=val;
		
		if(this.value == 0 || this.value == '' || this.value == ' ')
		{
			$('.col-wrapper .ok-button').addClass('disabled');
		}
		else
		{
			$('.col-wrapper .ok-button').removeClass('disabled');

		}
	  });      
	});	
	$('.col-wrapper').fadeIn();
});