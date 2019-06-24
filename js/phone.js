const wallpaperList = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13];
var contactsList = 	[],
	callsList = [{number:111111,status:'allow'}],
	incomingAudio = new Audio('audio/incoming.ogg'),	
	dialingAudio = new Audio('audio/dialing.ogg'),
	messageAudio = new Audio('audio/message.ogg'),
	currentTopPosition = 0,
	myInterval = null,
    callInterval = null,
	secondsCounter = 0,
	minutesCounter = 0,	
	dialingTimeout = '';
function phoneFadeOut()
{
	$('.container').fadeOut();
}
function phoneFadeIn()
{
	$('.container').fadeIn();
}
function messagePlay()
{
	messageAudio.play();
}
function phoneToTop()
{
	currentTopPosition = $('.container').css('top');
	$('.container').css('top','50%');
}
function phoneToBottom()
{
	$('.container').css('top',currentTopPosition);
}
function pushContactList(item)
{
	let itemList = JSON.parse(item);
	$(itemList).each(function(index,item){
		let obj = {
			'name': item.name,
			'number': item.number,
			'messageList': []
		};
		contactsList.push(obj);
	});	
	pushContacts('contacts');
	pushContacts('geo');
	pushContacts('messages');
	pushContacts('messages-inner');
};
function pushPhoneBalance(count)
{
	$('.phoneBalance').text(count);
}
$(wallpaperList).each(function(index,item){
	var active = '';
	if(index == 0)
	{
		active = 'active';
	}
	const wallpaperSettingsTemplate = 
 	'<div class="background'+ ' ' + active +'"data-wallpaper="'+ index +'" style="background-image:url(img/wallpapers/w'+ index +'.png)"></div>';
	$('.settings-wrapper').append(wallpaperSettingsTemplate);
});
$('.settings-wrapper i').on('click',function(){
	var clicker = $(this);
	var length = wallpaperList.length-1;
	var elementList = $('.settings-wrapper .background');
	var currentItem = $('.settings-wrapper .active').attr('data-wallpaper');
	if($(clicker).hasClass('fa-chevron-left') && currentItem != 0)
	{
		currentItem--;
		$('.settings-wrapper .active').removeClass('active');		
		$(elementList).each(function(index,item){
			if($(item).attr('data-wallpaper') == currentItem)
			{
				$(item).addClass('active');
			}
		});
	} 
	if($(clicker).hasClass('fa-chevron-right') && currentItem != length)
	{
		currentItem++;
		$('.settings-wrapper .active').removeClass('active');		
		$(elementList).each(function(index,item){
			if($(item).attr('data-wallpaper') == currentItem)
			{
				$(item).addClass('active');
			}
		});
	}
});
$('.settings-wrapper .apply-but').on('click',function(){
	var currentItem = $('.settings-wrapper .active').attr('data-wallpaper');
	const background = 'url(img/wallpapers/w' + currentItem + '.png)';
	$('.main-wrapper').css('background-image', background);
	$('.settings-wrapper').removeClass('active').fadeOut();
	$('.main-wrapper').addClass('active').fadeIn();
	mp.trigger('phoneWallpaper',currentItem);
});
function settingsInitialize(wallIndex)
{
	if(wallIndex <= 13 && wallIndex  >= 0)
	{
		const background = 'url(img/wallpapers/w' + wallIndex + '.png)';
		$('.main-wrapper').css('background-image', background);
	}		
}
$('.main-wrapper .settings').on('click',function(){
	$('.main-wrapper').removeClass('active').fadeOut();
	$('.settings-wrapper').addClass('active').fadeIn();
});
$('.home-but').on('click',function(){
	$('.main-wrapper').fadeIn();
	let active = $('.container > .active')[0].classList[0];
	$('.contacts-wrapper .current-wrapper .active').css('display','none').removeClass('active');
	$('.contacts-wrapper .current-wrapper .nothing-used').fadeIn(500).css('display','flex').addClass('active');
	$('.contacts-wrapper .wrapper .number.active').fadeTo("slow",1).removeClass('active');
	if(active != 'main-wrapper' && active != 'incomingCall-wrapper' && active != 'caller-wrapper' && active != 'outCaller-wrapper')
	{
		$('.'+active).removeClass('active').fadeOut();
		$('.main-wrapper').addClass('active').fadeIn();
		$('.settings-wrapper').fadeOut();
	}
});
$('.main-wrapper .fast-block div').on('click',function(){
	outCaller($(this).attr('data-number'));
	checkCall($(this).attr('data-number'));
});
var getNumber = 0;
$('.incomingCall-wrapper .cancel').on('click',function(){	
	callsList.push({number: getNumber, status:'cancel'});
	mp.trigger("cancelIncomingCall",getNumber);
});
$('.outCaller-wrapper .cancel, .caller-wrapper .cancel').on('click',function(){	
	mp.trigger("cancelOutcomingCall",getNumber);
});
function cancelOutcomingCall(){
	if($('.caller-wrapper').hasClass('active'))
	{
		$('.caller-wrapper').removeClass('active').fadeOut();
	}
	if($('.outCaller-wrapper').hasClass('active'))
	{
		$('.outCaller-wrapper').removeClass('active').fadeOut();
	}
	$('.main-wrapper').addClass('active').fadeIn();
	clearInterval(callInterval);
	callInterval = null;
	clearInterval(myInterval);
	myInterval = null;
	secondsCounter = 0;
	minutesCounter = 0;
};
function cancelIncomingCall()
{
	$('.incomingCall-wrapper').removeClass('active').fadeOut();
	$('.main-wrapper').addClass('active').fadeIn();
	clearInterval(callInterval);
	callInterval = null;
	clearInterval(myInterval);
	myInterval = null;
	secondsCounter = 0;
	minutesCounter = 0;
};
$('input[type="text"]').keyup(function() {
    this.value = this.value.replace(/[^a-zA-Zа-яА-Я0-9,.!?_ ]/g, '');
});
$('.incomingCall-wrapper .allow').on('click',function(){
	mp.trigger("allowIncomingCall",getNumber);
});
function goHome(number,status)
{
	if(number != undefined && status != undefined)
	{
		callsList.push({number: number, status:status});
	}
	clearInterval(callInterval);
	callInterval = null;
	clearInterval(myInterval);
	myInterval = null;
	secondsCounter = 0;
	minutesCounter = 0;
	dialingAudio.pause();
	dialingAudio.currentTime = 0;
	incomingAudio.pause();
	incomingAudio.currentTime = 0;
	let active = $('.container > .active')[0].classList[0];
	$('.'+active).removeClass('active').fadeOut();
	$('.main-wrapper').addClass('active').fadeIn();
}
function toCall(number,type)
{
	clearInterval(dialingTimeout);
	dialingTimeout = null;
	dialingAudio.pause();
	dialingAudio.currentTime = 0;
	incomingAudio.pause();
	incomingAudio.currentTime = 0;
	getNumber = number;
	let currentName = '';
	let active = $('.container > .active')[0].classList[0];
	$('.'+active).removeClass('active').fadeOut();
	$(contactsList).each(function(index,item){
		if(item.number == getNumber)
		{
			currentName = item.name;
		}
	});	
	if(type == 'in')
	{
		type = 'Входящий вызов';		
	}
	else if(type == 'out')
	{	
		type = 'Исходящий вызов'; 
	}
	else
	{
		type = 'Вызов';
	}
	if(currentName == '')
	{
		currentName = getNumber;
	}
	$('.caller-wrapper').find('.number').text(currentName);
	$('.caller-wrapper').find('.title').text(type);
	$('.caller-wrapper').addClass('active').fadeIn();
	clearInterval(callInterval);
	callInterval = null;
	clearInterval(myInterval);
	myInterval = null;
	secondsCounter = 0;
	minutesCounter = 0;
	timerOnCaller();
	callsList.push({number: getNumber, status:'allow'});
}
function checkCall(number)
{
	getNumber = number;
	mp.trigger('PhoneCheckCall',getNumber);
}
function getCall(number)
{	
	getNumber = number;
	let active = $('.container > .active')[0].classList[0],
		currentName = '';
	$('.'+active).removeClass('active').fadeOut();
	$(contactsList).each(function(index,item){
		if(item.number == getNumber)
		{
			currentName = item.name;
		}
	});
	if(currentName == '')
	{
		currentName = getNumber;
	}
	$('.incomingCall-wrapper').find('.number').text(currentName);
	callInterval = setInterval(function () {
		++secondsCounter;
		if(secondsCounter % 3 == 0 || secondsCounter == 1)
		{
			$('.incomingCall-wrapper .caller-ico').addClass('animated infinite bounce');
		}
	}, 1000);
	$('.incomingCall-wrapper').addClass('active').fadeIn();
	incomingAudio.play();
}
function timerOnCaller()
{
	$('.timer .seconds, .timer .minutes').text('00');
	clearInterval(myInterval);
	myInterval = null;	
	myInterval = setInterval(function () {
	  ++secondsCounter;
	  if(secondsCounter % 60 == 0)
	  {
	  	 secondsCounter = 0;
	  	 ++minutesCounter;
	  }
	  $('.timer .minutes').text(prettyTime(minutesCounter));
	  $('.timer .seconds').text(prettyTime(secondsCounter));
	}, 1000);
}
function prettyTime(num) {
	return ( num < 10 ? "0" : "" ) + num;
}
$('.bottom-block .phone').on('click',function(){
	$('.main-wrapper').removeClass('active').fadeOut();
	historyRefresh();
	$('.dialing-wrapper').addClass('active').fadeIn();
});
function historyRefresh()
{
	$('.history-wrapper').empty();
	$(callsList).each(function(index,item){
		let currentName = '';
		$(contactsList).each(function(innerIndex,innerItem){
			if(innerItem.number == item.number)
			{
				currentName = innerItem.name;
			}
		});	
		if(currentName == '')
		{
			currentName = 'Неизвестный';
		}
		let currentNumber = item.number.toString();
		currentNumber = currentNumber.slice(0, 3) + '-' + currentNumber.slice(-3);
		let currentItem = `<div class="history-block ${item.status}">
								<div class="name">${currentName}</div>
								<div class="number">${currentNumber}</div>
							</div>`;		
		$('.history-wrapper').prepend(currentItem);
	});
};
$('.number-wrap .call').on('click',function(){
	let number = $(this).parents().find('.this-block').text();	
	$(this).parents().find('.this-block').text('');
	if(number.length >= 6)
	{	
		outCaller(number);
		checkCall(number);
	}
});
function outCaller(number)
{	
	let active = $('.container > .active')[0].classList[0];	
	$('.'+active).removeClass('active').fadeOut();
	$('.outCaller-wrapper').find('.number').text(number);
	$('.outCaller-wrapper').addClass('active').fadeIn();
	dialingAudio.play();
	dialingTimeout = setTimeout(function(){		
		callsList.push({number: getNumber, status:'cancel'});
		mp.trigger("cancelOutcomingCall", getNumber);
	},15000)
}
jQuery.fn.reverse = [].reverse;
$('.number-wrap .cross').on('click',function(){
	var numbersList = $('.this-block').text();
	var length = numbersList.length-1;	
	if(length >= 0)
	{
		numbersList = numbersList.replace(numbersList[length], '');
		$('.this-block').empty().append(numbersList);
	}		
});
$('.number-wrap .number').on('click',function(){
	var currentNumber = $(this).text();
	var numbersList = $('.this-block').text();
	if(numbersList.length != 6)
	{
		numbersList += currentNumber;
	}
	$('.this-block').empty().append(numbersList);
});
$('.bottom-block .phonebook').on('click',function(){
	$('.main-wrapper').removeClass('active').fadeOut();
	$('.contacts-wrapper .current-wrapper .active').css('display','none').removeClass('active');
	$('.contacts-wrapper .current-wrapper .nothing-used').fadeIn(500).css('display','flex').addClass('active');
	pushContacts('contacts');
	$('.contacts-wrapper').addClass('active').fadeIn();
});
function pushContacts(currentWrapper)
{
	$(`.${currentWrapper}-wrapper .wrapper`).empty();
	$(contactsList).each(function(index,item){
		let currentTemplate = '';
		if(currentWrapper == 'contacts')
		{
			currentTemplate = `<div class="number" data-index="${index}" data-number="${item.number}">\
								 <div class="title-number">${item.name}</div>\
								 <div class="caller"></div>\
							  </div>`;
		}
		if(currentWrapper == 'geo')
		{
			currentTemplate = `<div class="number" data-index="${index}" data-number="${item.number}">\
								 <div class="title-number">${item.name}</div>\
								 <div class="geo"></div>\
							  </div>`;
		}
		if(currentWrapper == 'messages')
		{
			if(!$.isEmptyObject(item.messageList))
			{
				var currentNumber = item.name;
				if(item.name == 'Неизвестный')
				{
					currentNumber = `${item.name} ( ${item.number} )`;
				}
				else
				{
					currentNumber = item.name;
				}
				currentTemplate = `<div class="message-item" data-index="${index}">
									<div class="message-border">
										<div class="number">${currentNumber}</div>
										<div class="time">${item.messageList[item.messageList.length-1].time}</div>
									</div>
									<div class="message-text">
										<div class="text">${item.messageList[item.messageList.length-1].message}</div>
										<div class="text-3">...</div>
									</div>
								</div>`;	
			}
			else
			{
				currentTemplate = `<div class="message-item" data-index="${index}">
									<div class="message-border">
										<div class="number">${item.name}</div>
										<div class="time"></div>
									</div>
									<div class="message-text">
										<div class="text">Нажмите, чтобы начать переписку</div>
										<div class="text-3"></div>
									</div>
								</div>`;
			}
		}
		$(`.${currentWrapper}-wrapper .wrapper`).append(currentTemplate);
	});
	contactsInitialize();
	refreshMessagesList();
}
function pushCurrentMessages(number)
{	
	$(`.messages-inner .wrapper`).empty();
	$(contactsList[number].messageList).each(function(indexMessage,itemMessage){
		if(!$.isEmptyObject(itemMessage))
		{
			let innerTemplate = `<div class="message-wrap" id="${itemMessage.status}">
									<div class="message">${itemMessage.message}</div>
									<div class="time">${itemMessage.time}</div>
								</div>`;
			$(`.messages-inner .wrapper`).append(innerTemplate);			
		}
	});		
};	
var saveTimeout;
function contactsInitialize()
{	
	$('.contacts-wrapper .wrapper .number').on('click',function(){
		if(!$(this).hasClass('active'))
		{
			if(!$('.contacts-wrapper .current-wrapper .create-contact').hasClass('active'))
			{
				if(saveTimeout != undefined)
				{
					clearTimeout(saveTimeout); 
					$('.contacts-wrapper .current-wrapper .active').css('display','none').removeClass('active');
				}
				$('.contacts-wrapper .wrapper .number.active').fadeTo("slow",1).removeClass('active');
				$(this).fadeTo("slow",0.7).addClass('active');
				let currentIndex = $(this).attr('data-index');
				$('.contacts-wrapper .current-wrapper .selected-contact').attr('data-index',currentIndex);
				$('.contacts-wrapper .current-wrapper .selected-contact .name').text($(contactsList)[currentIndex].name);
				$('.contacts-wrapper .current-wrapper .selected-contact .number-wrapper span.number').text($(contactsList)[currentIndex].number);
				$('.contacts-wrapper .current-wrapper .nothing-used').css('display','none').removeClass('active');
				$('.contacts-wrapper .current-wrapper .selected-contact').fadeIn(500).css('display','flex').addClass('active');
			}
		}		
	});
	$('.add-contact').on('click',function(){
		if($('.contacts-wrapper .current-wrapper .nothing-used').hasClass('active'))
		{
			if(saveTimeout != undefined)
			{
				clearTimeout(saveTimeout); 
			}
			$('.contacts-wrapper .current-wrapper .active').css('display','none').removeClass('active');
			$('.contacts-wrapper .wrapper .number.active').fadeTo("slow",1).removeClass('active');
			$('.contacts-wrapper .current-wrapper .create-contact').fadeIn(300).css('display','flex').addClass('active');
		};
	});		
	$('.contacts-wrapper .caller').on('click',function(){
		let currentIndex = $(this).parent().attr('data-index');		
		$('.contacts-wrapper .current-wrapper .active').css('display','none').removeClass('active');
		$('.contacts-wrapper .current-wrapper .nothing-used').fadeIn(500).css('display','flex').addClass('active');
		outCaller($(contactsList)[currentIndex].number);
		checkCall($(contactsList)[currentIndex].number);
	});
	$('.contacts-wrapper .current-wrapper .create-contact .delete, .contacts-wrapper .current-wrapper .change-contact .delete, .contacts-wrapper .current-wrapper .selected-contact .delete').on('click',function(){
		if($(this).parent().hasClass('change-contact') || $(this).parent().hasClass('selected-contact'))
		{
			$('.contacts-wrapper .wrapper .number.active').fadeTo(1500,1).removeClass('active');
		}
		$(this).parent().css('display','none').removeClass('active');
		$(this).parent().parent().find('.nothing-used').fadeIn(300).css('display','flex').addClass('active');
	});
};
//Редактировать
$('.contacts-wrapper .current-wrapper .selected-contact .change-but').on('click',function(){
	$('.contacts-wrapper .current-wrapper .selected-contact').css('display','none').removeClass('active');
	$('.contacts-wrapper .current-wrapper .change-contact #name').val()
	let currentIndex = $('.contacts-wrapper .current-wrapper .selected-contact').attr('data-index');
	$('.contacts-wrapper .current-wrapper .change-contact #name').val($(contactsList)[currentIndex].name);
	$('.contacts-wrapper .current-wrapper .change-contact #number').val($(contactsList)[currentIndex].number);
	$('.contacts-wrapper .current-wrapper .change-contact').fadeIn(500).css('display','flex').addClass('active');
});
$('.contacts-wrapper .current-wrapper #change-but').on('click',function(){
	let currentName = $('.contacts-wrapper .current-wrapper .change-contact #name').val();
	let currentNumber = $('.contacts-wrapper .current-wrapper .change-contact #number').val();
	let currentIndex = $('.contacts-wrapper .current-wrapper .selected-contact').attr('data-index');
	let currentMessage = 'Контакт успешно изменён';
	$('.contacts-wrapper .current-wrapper .contact-added').text(currentMessage);
	if(currentNumber.length == 6 && !namePosibilityCheck(currentName,currentIndex) && !numberPosibilityCheck(currentNumber, currentIndex))
	{
		$(this).parent().find('#name').replaceWith(currentInputName);
		$(this).parent().find('#number').replaceWith(currentInputNumber);
		$(contactsList)[currentIndex].name = currentName;
		$(contactsList)[currentIndex].number = currentNumber;
		$(this).parent().css('display','none').removeClass('active');
		$(this).parent().parent().find('.contact-added').fadeIn(300).css('display','flex').addClass('active');
		saveTimeout = setTimeout(function(){
			$('.contacts-wrapper .current-wrapper .contact-added').css('display','none').removeClass('active');
			$('.contacts-wrapper .current-wrapper .nothing-used').fadeIn(500).css('display','flex').addClass('active');
		}, 1500);	
		refreshContacts();	
	}
	else
	{
		if(currentNumber.length != 6)
		{
			$('.contacts-wrapper .current-wrapper .change-contact .inform-block').text('Номер состоит из 6 цифр');
		}
		if(namePosibilityCheck(currentName,currentIndex))
		{
			$('.contacts-wrapper .current-wrapper .change-contact .inform-block').text('Такое имя существует');
		}
		if(numberPosibilityCheck(currentNumber,currentIndex))
		{
			$('.contacts-wrapper .current-wrapper .change-contact .inform-block').text('Такое номер уже записан');
		}
		$('.contacts-wrapper .current-wrapper .change-contact .inform-block').fadeIn(300).css('display','flex');
		setTimeout(function(){
			$('.contacts-wrapper .current-wrapper .change-contact .inform-block').fadeOut(300);
		}, 1500);	
	}
});
//Удаление
$('.contacts-wrapper .current-wrapper .trash-but').on('click',function(){
	$('.confirm-block').fadeIn();
});
$('.contacts-wrapper .current-wrapper .confirm-block .confirmTrash').on('click',function(){
	let currentIndex = parseInt($(this).parent().parent().parent().attr('data-index'));
	$('.confirm-block').fadeOut();
	contactsList.splice(currentIndex, 1);	
	$('.contacts-wrapper .selected-contact').fadeOut(100).removeClass('active');
	$('.contacts-wrapper .nothing-used').fadeIn(1000).css('display','flex').addClass('active');
	refreshContacts();	
});
$('.contacts-wrapper .current-wrapper .confirm-block .cancelTrash').on('click',function(){
	$('.confirm-block').fadeOut();
});
var currentInputName = '<input type="text" id="name" placeholder="Имя">';
var currentInputNumber = '<input type="number" id="number" oninput="maxLengthCheck(this)" placeholder="Номер" min="0" max="999999" maxlength="6">';
//Сохранение
$('.contacts-wrapper .current-wrapper #save-but').on('click',function(){
	let currentName = $(this).parent().find('#name').val(),
		currentNumber = $(this).parent().find('#number').val(),
		currentMessage = 'Контакт успешно добавлен',	
		currentIndex = $('.contacts-wrapper .current-wrapper .selected-contact').attr('data-index');
	$('.contacts-wrapper .current-wrapper .contact-added').text(currentMessage);
	if(currentNumber.length == 6 && !namePosibilityCheck(currentName,currentIndex) && !numberPosibilityCheck(currentNumber,currentIndex))
	{
		let obj = {
			'name': currentName,
			'number': parseInt(currentNumber),
			'messageList': []
		};
		contactsList.unshift(obj);
		let currentElem = $(this);
		$(this).parent().css('display','none').removeClass('active');
		$(this).parent().parent().find('.contact-added').fadeIn(300).css('display','flex').addClass('active');
		saveTimeout = setTimeout(function(){
			$(currentElem).parent().parent().find('.contact-added').css('display','none');
			$(currentElem).parent().parent().find('.nothing-used').fadeIn(500).css('display','flex').addClass('active');
		}, 1500);	
		refreshContacts();
		$(this).parent().find('#name').replaceWith(currentInputName);
		$(this).parent().find('#number').replaceWith(currentInputNumber);
	}
	else
	{
		if(currentNumber.length != 6)
		{
			$('.contacts-wrapper .current-wrapper .create-contact .inform-block').text('Номер состоит из 6 цифр');
		}
		if(namePosibilityCheck(currentName,currentIndex))
		{
			$('.contacts-wrapper .current-wrapper .create-contact .inform-block').text('Такое имя существует');
		}
		if(numberPosibilityCheck(currentNumber,currentIndex))
		{
			$('.contacts-wrapper .current-wrapper .create-contact .inform-block').text('Такое номер уже записан');
		}
		$('.contacts-wrapper .current-wrapper .create-contact .inform-block').fadeIn(300).css('display','flex');
		setTimeout(function(){
			$('.contacts-wrapper .current-wrapper .create-contact .inform-block').fadeOut(300);
		}, 1500);	
	}
});
function namePosibilityCheck(currentName, currentIndex)
{
	var checker = false;
	$(contactsList).each(function(index,item){
		if(item.name == currentName && index != currentIndex)
		{
			checker = true;
		}
	});
	return checker;
}
function numberPosibilityCheck(currentNumber, currentIndex)
{
	var checker = false;
	$(contactsList).each(function(index,item){
		if(item.number == currentNumber && index != currentIndex)
		{
			checker = true;
		}
	});
	return checker;
}
function refreshContacts()
{
	$('.contacts-wrapper .wrapper').empty();
	pushContacts('contacts');	
	$('#name, #number').val('');
	contactsInitialize();
	$('.contacts-wrapper .wrapper .number').first().css('display','none');
	setTimeout(function(){
		$('.contacts-wrapper .wrapper .number').first().slideDown();		
	}, 100);	
	mp.trigger('refreshedContacts',JSON.stringify(contactsList));	
};
function refreshMessages()
{
	$('.messages-inner .wrapper').empty();
	let currentIndex = $('.messages-inner .title').attr('data-index');
	pushCurrentMessages(currentIndex);
};
function maxLengthCheck(object)
{
if (object.value.length > object.maxLength)
  object.value = object.value.slice(0, object.maxLength)
};
function refreshMessagesList()
{
	$('.messages-wrapper .message-item').on('click',function(){
		$('.messages-wrapper').removeClass('active').fadeOut();	
		let currentIndex = $(this).attr('data-index');
		pushCurrentMessages(currentIndex);	
		$('.messages-inner').find('.title').text(contactsList[currentIndex].name);
		$('.messages-inner').find('.title').attr('data-index',currentIndex);
		checkSmile();
		$('.messages-inner').addClass('active').fadeIn();
		messageInnerScroll('inner');			
		messageWrapperRound('inner');
	});
};
//Сообщения
$('.bottom-block .sms').on('click',function(){
	$('.main-wrapper').removeClass('active').fadeOut();
	pushContacts('messages');	
	$('.messages-wrapper').addClass('active').fadeIn();
	messageInnerScroll('inner');	
	messageInnerScroll('wrapper');		
});

$('.messages-inner .back-but').on('click',function(){
	$('.messages-inner').removeClass('active').fadeOut();
	messageInnerScroll('wrapper');	
	$('.messages-wrapper').addClass('active').fadeIn();
});
$('.messages-inner .smiles-wrap .smile, .messages-inner .big-smiles-wrap .smile').on('click',function(){	
	let messageTemplate = `:${$(this)[0].id}:`,
		currentIndex = $(this).parent().parent().parent().find('.title').attr('data-index');
	if($(this).parent().hasClass('big-smiles-wrap'))
	{
		currentIndex = $(this).parent().parent().parent().find('.title').attr('data-index');
		$('.messages-inner .big-smiles-wrap').fadeOut();
		$('.home-but').fadeIn();
	}
	mp.trigger("sendMessage",contactsList[currentIndex].number, messageTemplate);
});
$('.messages-inner .sender').on('click',function(){
	let currentMessage = $(this).prev().val();
	if(currentMessage.length > 0)
	{
		let currentIndex = $(this).parent().parent().find('.title').attr('data-index');
		$(this).prev().val('');
		mp.trigger("sendMessage",contactsList[currentIndex].number, currentMessage);
	}	
});
function incomingMessage(number, status, time, message)
{
	let checker = false;
	if(status == 'incoming')
	{
		messageAudio.play();
	}
	$(contactsList).each(function(index,item){
		if(item.number == number)
		{
			item.messageList.push({	
									status: status,
									time: time,
									message: message
								  });
			if($('.messages-inner').hasClass('active') && $('.messages-inner .title').attr('data-index') == index)
			{
				refreshMessages();
				checkSmile();
				messageInnerScroll('inner');
				messageWrapperRound('inner');		
			}
			checker = true;
		}
	});		
	if(!checker)
	{
		contactsList.push({ 
							name:'Неизвестный', 
							number:number, 
							messageList:
							[{
								status: status,
								time: time, 
								message: message
							}]
						});
		pushContacts('messages');
		messageInnerScroll('wrapper');			
	}	
};
function checkSmile()
{
	$('.messages-inner .wrapper .message').each(function(index,item){		
		if($(item).text().includes(':s'))
		{
			$(item).addClass('smile');
			if($(item).text() == ':s1:')
			{
				$(item).css('background-image','url(img/phone/sms/smile/b1.png');
				$(item).empty();
			}
			else
			{
				let newEl = $(item).text().substring(1,$(item).text().length-1)
				$(item).css('background-image',`url(img/phone/sms/smile/${newEl}.png`);
				$(item).empty();
			}			
		}
	});
};
function messageInnerScroll(currentWrapper)
{
	$(`.messages-${currentWrapper} .wrapper`).scrollTop($(`.messages-${currentWrapper} .wrapper`)[0].scrollHeight);
};
checkSmile();
$('.messages-inner .smiles-wrap .fa-ellipsis-v').on('click',function(){
	$('.messages-inner .big-smiles-wrap').fadeIn().css('display','flex');
	$('.home-but').fadeOut();
});
$('.messages-inner .big-smiles-wrap .close').on('click',function(){
	$('.messages-inner .big-smiles-wrap').fadeOut();
	$('.home-but').fadeIn();
});



//Геопозиция
$('.bottom-block .geo').on('click',function(){
	$('.main-wrapper').removeClass('active').fadeOut();
	pushContacts('geo');
	refreshGeo();
	$('.geo-wrapper').addClass('active').fadeIn();
});
function refreshGeo()
{
	$('.geo-wrapper .number .geo').on('click',function(){
		let currentElem = contactsList[$(this).parent().attr('data-index')];
		$(this).fadeOut();
		$('.geo-wrapper .current-wrapper .nothing-used').css('display','none').removeClass('active');
		$('.geo-wrapper .current-wrapper .geo-added').fadeIn(300).css('display','flex').addClass('active');
		saveTimeout = setTimeout(function(){
			$('.geo-wrapper .current-wrapper .geo-added').css('display','none');
			$('.geo-wrapper .current-wrapper .nothing-used').fadeIn(500).css('display','flex').addClass('active');
		}, 1500);
		mp.trigger('PhoneSendGeo', currentElem.number);
	});
};
function messageWrapperRound(currentWrapper)
{
	let currentHeight = parseInt($(`.messages-${currentWrapper} .wrapper`).css('height'));
	let currentPadding = parseInt($(`.messages-${currentWrapper} .wrapper`).css('padding-top'));
	let maxHeight = 400;
	let difference = 0;
	if(currentHeight < 400)
	{
		difference = maxHeight - currentHeight;
		$(`.messages-${currentWrapper} .wrapper`).css('padding-top',difference+currentPadding);
	}
};