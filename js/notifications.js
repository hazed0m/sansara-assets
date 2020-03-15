var emailValidate = false,
    licenceStatus = false;
function loginError(text)
{
	$('.alert-message').text(text);
	$('.alert').fadeIn();
	setTimeout(function(){
		$('.alert').fadeOut()
	}, 3000);
}
$('input').on('click',function(){
    $(this).attr('placeholder',$(this).attr('data-error'));
});
$('input').focusout(function(){
    if($(this).val().length == 0)
    {
        $(this).css('border','none');
    }
    $(this).attr('placeholder','');
});
$('.popup-wrap#licence .input-wrapper input').on('click',function(){
    $(this).attr("checked", !$(this).parent().find('input').attr("checked"));
});
$('.popup-wrap#licence .input-wrapper input').on('change',function(){
    if($(this).attr("checked") == 'checked')
    {
        $('.form-btn#accept').removeClass('disabled');
    }
    else
    {
        $('.form-btn#accept').addClass('disabled');
    }
});
$('#licence .text-wrapper').scroll(function (e) {
    console.log($(this).height() + $(this).scrollTop() ,this.scrollHeight);
    if ($(this).height() + $(this).scrollTop() >= this.scrollHeight) {
      console.log("► End of scroll");
      $('#licence .input-wrapper').fadeIn();
    }
    else
    {
        $('#licence .input-wrapper').fadeOut();
    }
});
$('.form-btn#accept').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        $('.popup-wrap#licence').fadeOut();
        $('.popup-wrap#signup').fadeIn();
        licenceStatus = true;
    }
    // mp.trigger('acceptLicence');
});
$('.form-btn#close').on('click',function(){
    $('.popup-wrap#licence').fadeOut();
    $('.popup-wrap#signin').fadeIn();
    mp.trigger('cancelLicence');
});
let signIn = document.getElementById('signin'),
    signUp = document.getElementById('signup'),
    licenceAc = document.getElementById('licence'),
    btn = document.querySelectorAll('.form-auth'),
    inputs = document.querySelectorAll('.form-input');

btn[0].addEventListener('click', function() {
   signIn.style.display = 'none';
   if(licenceStatus)
   {
      signUp.style.display = 'block'; 
   }
   else
   {
      licenceAc.style.display = 'block';
   }
});

btn[1].addEventListener('click', function() {
   signIn.style.display = 'block';
   signUp.style.display = 'none'; 
});

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function(){
        inputs[i].value = inputs[i].value.replace(/[\;":'`,/<>?!№%*&^#$()-+=|{}а-яА-Я ]/g, '');
    });
}
$('.form-btn').on('click', function() {
    if(!$(this).hasClass('disabled'))
    {
        sendAccountInfos(parseInt($(this).attr('data-attr')));
    }
});
$('input[type="text"], input[type="password"]').keyup(function() {
    if($(this)[0].id != 'newLoginEmail' && $(this)[0].id != 'newLoginPromo')
    {
        console.log($(this)[0].id);
        if($(this).val().length < 6)
        {
            console.log($(this)[0].id+'if');
            $(this).css('border','2px solid red');
        }
        else
        {
            console.log($(this)[0].id+'else');
            $(this).css('border','2px solid green');
        }
        this.value = this.value.replace(/[^a-zA-Z0-9_]/g, '');
    }
    else
    {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        if(document.getElementById('newLoginEmail').value.match(emailRegex))
        {
            emailValidate = true;
            $('#newLoginEmail').css('border','2px solid green');
        }
        else
        {
            emailValidate = false;
            $('#newLoginEmail').css('border','2px solid red');
        }
    }    
});
$('.form-input__wrap input').keyup(function(){
    if($(this).parent().parent()[0].id === 'signin')
    {
        if($('#loginName').val().length >= 6 && $('#loginPass').val().length >= 6)
        {
            $('.login').removeClass('disabled');
        }
        else
        {
            $('.login').addClass('disabled');
        }
    }          
});
// var verifyLoginCallback = function(response) {
//     if(response)
//     {
//         if($('#loginName').val().length >= 6 && $('#loginPass').val().length >= 6)
//         {
//             $('.login').removeClass('disabled');
//         }
//     }    
//     else
//     {
//         alert('fail');
//     }     
//};
$('.form-input__wrap input').keyup(function(){
    if($(this).parent().parent()[0].id === 'signup')
    {
        if($('#newLoginName').val().length >= 6 && $('#newLoginPass').val().length >= 6 && emailValidate)
        {
            $('.register').removeClass('disabled');
        }
        else
        {
            $('.register').addClass('disabled');
        }
    }           
});
// var verifyRegisterCallback = function(response) {
//     if($('#newLoginName').val().length >= 6 && $('#newLoginPass').val().length >= 6 && emailValidate)
//     {
//         $('.register').removeClass('disabled');
//     }
//     if(response)
//     {
//     }    
//     else
//     {
//         alert('fail');
//     }     
// };
// var regCaptcha;
// var onloadCallback = function() {
   
//     regCaptcha = grecaptcha.render('g-recaptcha1', {
//         'sitekey' : '6LcShqcUAAAAAEFfGkm9KKambio8Ik5XGbD3Lruz',
//         'callback' : verifyRegisterCallback,
//         'theme' : 'dark'
//     });
//     grecaptcha.render('g-recaptcha', {
//     'sitekey' : '6LcShqcUAAAAAEFfGkm9KKambio8Ik5XGbD3Lruz',
//     'callback' : verifyLoginCallback,
//     'theme' : 'dark'
//     });
// };
function sendAccountInfos(type) {
    switch (type) {
        case 0: 
            loginName = document.getElementById("newLoginName").value;
            loginPass = document.getElementById("newLoginPass").value;
            loginEmail = document.getElementById("newLoginEmail").value;
            loginPromo = document.getElementById("newLoginPromo").value;
            $('.register').addClass('disabled');
            console.log(type, loginName, loginPass, loginEmail,loginPromo);
            mp.trigger("registerLogin.client", type, loginName, loginPass, loginEmail,loginPromo);
            break;
        case 1:
            loginName = document.getElementById("loginName").value;
            loginPass = document.getElementById("loginPass").value;
            $('.login').addClass('disabled');
            mp.trigger("registerLogin.client", type, loginName, loginPass);
            break;
    }
};
let vklink = new ClipboardJS('.social .social-vk');
    vklink.on('success',function(e){
    $('.social .social-vk .copy-info').fadeIn();
    let timeOut = setTimeout(function(){
        $('.social .social-vk .copy-info').fadeOut();
    },3000);
});  
let discordlink = new ClipboardJS('.social .social-disc');
    discordlink.on('success',function(e){
    $('.social .social-disc .copy-info').fadeIn();
    let timeOut = setTimeout(function(){
        $('.social .social-disc .copy-info').fadeOut();
    },3000);
});  