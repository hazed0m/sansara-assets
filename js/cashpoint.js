var cardVal = 0,
	cashVal = 0,
	putbackInput = '',
	withdrawalInput = '',
	topupInput = '',
	maxWithdrawal = 9999999999;
$('#withdrawal, #putback, #topup, #payments, #payfine').on('click',function(){
	$('#main-wrapper').fadeOut().css('display','none');
	let currentEl = '#'+$(this)[0].id+'-wrapper';
	$(currentEl).fadeIn().css('display','flex');
	checkBackButton();
});
$('.back-button').on('click',function(){
	clearInput();
	$('.container div[id*="-wrapper"]').fadeOut();
	$('#main-wrapper').fadeIn().css('display','flex');
	checkBackButton();
});
function clearInput()
{	
	if($('#putback-wrapper').is(':visible'))
	{
		$('#putback-wrapper input').replaceWith(putbackInput);		
	}
	if($('#withdrawal-wrapper').is(':visible'))
	{
		$('#withdrawal-wrapper input').replaceWith(withdrawalInput);		
	}
	if($('#topup-wrapper').is(':visible'))
	{
		$('#topup-wrapper input').replaceWith(topupInput);		
	}
	$('#putback-wrapper input').attr('max',cashVal);	
	if(cardVal < maxWithdrawal)
	{
		$('#withdrawal-wrapper input').attr('max',cardVal);
	}
	else
	{
		$('#withdrawal-wrapper input').attr('max',maxWithdrawal);
	}
	if(cardVal < 1000)
	{
		$('#topup-wrapper input').attr('max',cardVal);
	}
	else
	{
		$('#topup-wrapper input').attr('max',1000);
	}
	
	var inputQuantity = [];
    $(function() {
      $("#putback-wrapper input, #withdrawal-wrapper input, #topup-wrapper input").each(function(i) {
        inputQuantity[i]=this.defaultValue;
         $(this).data("idx",i); // save this field's index to access later
      });
      $("#putback-wrapper input, #withdrawal-wrapper input, #topup-wrapper input").on("keyup", function (e) {
		$(this).parent().removeClass('limited');
		var $field = $(this),
            val=this.value,
            $thisIndex=parseInt($field.data("idx"),10); // retrieve the index
			//window.console && console.log($field.is(":invalid"));
          	//$field.is(":invalid") is for Safari, it must be the last to not error in IE8
        if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") || this.value == '0') {
            this.value = inputQuantity[$thisIndex];
            return;
        } 
        if (val.length > Number($field.attr("maxlength"))) {
          val=val.slice(0, 5);
          $field.val(val);
        }
        inputQuantity[$thisIndex]=val;
      });      
    });	
};
function checkBackButton()
{
	if($('#main-wrapper').is(':visible'))
	{
		$('.back-button').css('display','none');
	}
	else
	{
		$('.back-button').css('display','flex');
	}
}
$('.exit-button').on('click',function(){
	mp.trigger("cashpoint.exit");
});
let accountsList = JSON.stringify([
	{ 
		Account: 'Квартира №455',
		Count: 500
	},
	{ 
		Account: 'Квартира №455',
		Count: 500
	},
	{ 
		Account: 'Квартира №455',
		Count: 500
	},
	{ 
		Account: 'Квартира №455',
		Count: 500
	},
	{ 
		Account: 'Квартира №455',
		Count: 224
	},
	{ 
		Account: 'Квартира №455',
		Count: 133
	}
]);
let finesList = JSON.stringify([
	{
		Car:'Tyzeract',
		Fine:'Превышение скорости',
		Count:25552
	},
	{
		Car:'Tyzeract',
		Fine:'Превышение скорости',
		Count:25552
	},
	{
		Car:'Tyzeract',
		Fine:'Превышение скорости',
		Count:25552
	},
	{
		Car:'Tyzeract',
		Fine:'Превышение скорости',
		Count:25552
	},
	{
		Car:'Tyzeract',
		Fine:'Превышение скорости',
		Count:25552
	},
	{
		Car:'Buffalo',
		Fine:'Дтп',
		Count:25552
	},
	{
		Car:'Tyzeract',
		Fine:'Превышение скорости',
		Count:25552
	}
]);
function cashpointInit(card,cash,terminal,maxwithdrawal,phoneNumber,accountsList,finesList)
{
	maxWithdrawal = maxwithdrawal;
	cardVal = parseInt(card);
	cashVal = parseInt(cash);
	let numberStr = phoneNumber.toString();
	numberStr = numberStr.slice(0, 3) + '-' + numberStr.slice(-3);
	$('#topup-wrapper .number').text(numberStr);
	$('.bankaccount .cardVal').text(card);
	$('.terminal-numb').text(terminal);
	$('#putback-wrapper input').attr('max',cashVal);
	putbackInput = $('#putback-wrapper input')[0].outerHTML;
	$('#withdrawal-wrapper input').attr('max',cardVal);
	withdrawalInput = $('#withdrawal-wrapper input')[0].outerHTML;
	$('#topup-wrapper input').attr('max',cardVal);
	topupInput = $('#topup-wrapper input')[0].outerHTML;
	clearInput();
	fineInit(finesList);
	accountInit(accountsList)
}
function fineInit(finesList)
{
	finesList = JSON.parse(finesList);
	$('#payfine-wrapper .buttons-wrapper').empty();
	$(finesList).each(function(index,item){
		let template = `
			<div class="payfine-button" data-car="${item.Car}" data-fine="${item.Fine}" data-count="${item.Count}">
				<div class="button-wrap">
					<div class="button-title">${item.Car}</div>
					<div class="button-note">${item.Fine}</div>
				</div>	
				<div class="button-wrap">	
					<div class="button-price">${item.Count}<span></span>$</div>
				</div>			
			</div>`;
		$('#payfine-wrapper .buttons-wrapper').append(template);
	});
	$('#payfine-wrapper .buttons-wrapper .payfine-button').on('click',function(){
		if(!$(this).hasClass('disabled'))
		{
			let car = $(this).attr('data-car'),
				fine = $(this).attr('data-fine'),
				count = $(this).attr('data-count');
			if(cardVal >= count)
			{
				cardVal -= count;		
				console.log(car,fine,count);
				refreshCashpoint();
				$(this).remove();
				mp.trigger('payFine',car,fine,count,cardVal);
			}
			else
			{
				$('.notification-wrapper').fadeIn();
				setTimeout(function(){
					$('.notification-wrapper').fadeOut();
				},1500);
			}			
		}
	});
}
function accountInit(accountsList)
{
	accountsList = JSON.parse(accountsList);
	$('#payments-wrapper .buttons-wrapper').empty();
	$(accountsList).each(function(index,item){
		let template = `
			<div class="payments-button" data-account="${item.Account}" data-count="${item.Count}">
				<div class="button-wrap">
					<div class="button-title">${item.Account}</div>
				</div>	
				<div class="button-wrap">	
					<div class="button-price">${item.Count}<span></span>$</div>
				</div>			
			</div>`;
		$('#payments-wrapper .buttons-wrapper').append(template);
	});
	$('#payments-wrapper .buttons-wrapper .payments-button').on('click',function(){
		if(!$(this).hasClass('disabled'))
		{
			let account = $(this).attr('data-account'),
				count = $(this).attr('data-count');
			if(cardVal >= count)
			{
				cardVal -= count;		
				console.log(account,count);
				$(this).addClass('disabled');
				refreshCashpoint();
				mp.trigger('payAccount',account,count,cardVal);
			}
			else
			{
				$('.notification-wrapper').fadeIn();
				setTimeout(function(){
					$('.notification-wrapper').fadeOut();
				},1500);
			}
		}
	});
}
function refreshCashpoint()
{
	$('.bankaccount .cardVal').text(cardVal);
}
//Снятие наличных
$('#withdrawal-wrapper .button').on('click',function(){
	let currentVal = parseInt($(this).parent().find('input').val()),
		currentMax = parseInt($(this).parent().find('input').attr('max'));
	if(currentVal != '' && currentVal > 0 && currentVal <= currentMax)
	{
		cardVal = parseInt(cardVal) - parseInt(currentVal);
		cashVal = parseInt(cashVal) + parseInt(currentVal);
		refreshCashpoint();
		$('#withdrawal-wrapper').fadeOut();
		clearInput();
		$('#main-wrapper').fadeIn();
		checkBackButton();
		mp.trigger("cashpoint.withdrawal",currentVal);
	}
	else
	{
		$(this).parent().addClass('limited');
		$(this).parent().find('input').val('');		
	}
});
//Пополнение карты
$('#putback-wrapper .button').on('click',function(){
	let currentVal = parseInt($(this).parent().find('input').val()),
		currentMax = parseInt($(this).parent().find('input').attr('max'));
	if(currentVal != '' && currentVal > 0 && currentVal <= currentMax)
	{
		cardVal = parseInt(cardVal) + parseInt(currentVal);
		cashVal = parseInt(cashVal) - parseInt(currentVal);
		$('#putback-wrapper').fadeOut();
		clearInput();	
		refreshCashpoint();
		$('#main-wrapper').fadeIn();
		checkBackButton();
		mp.trigger("cashpoint.putback",currentVal);
	}
	else
	{
		$(this).parent().addClass('limited');
		$(this).parent().find('input').val('');
	}
});
//Пополнение телефона
$('#topup-wrapper .button').on('click',function(){
	let currentVal = parseInt($(this).parent().find('input').val()),
		currentMax = parseInt($(this).parent().find('input').attr('max'));
	if(currentVal != '' && currentVal > 0 && currentVal <= currentMax)
	{
		cardVal = parseInt(cardVal) - parseInt(currentVal);
		$('#topup-wrapper').fadeOut();
		clearInput();	
		refreshCashpoint();
		$('#main-wrapper').fadeIn();
		checkBackButton();
		mp.trigger("cashpoint.topup",currentVal);
	}
	else
	{
		$(this).parent().addClass('limited');
		$(this).parent().find('input').val('');
	}
});