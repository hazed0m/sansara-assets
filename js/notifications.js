var emailValidate = false;
function loginError(text)
{
	$('.alert-message').text(text);
	$('.alert').fadeIn();
	setTimeout(function(){
		$('.alert').fadeOut()
	}, 3000);
}
let signIn = document.getElementById('signin'),
    signUp = document.getElementById('signup'),
    btn = document.querySelectorAll('.form-auth'),
    inputs = document.querySelectorAll('.form-input');

btn[0].addEventListener('click', function() {
   signIn.style.display = 'none';
   signUp.style.display = 'block'; 
});

btn[1].addEventListener('click', function() {
   signIn.style.display = 'block';
   signUp.style.display = 'none'; 
});

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function(){
        inputs[i].value = inputs[i].value.replace(/[-\;":',/<>?!№%*&^#$()_+=|{}а-яА-Я]/g, '');
    });
}
$('.form-btn').on('click', function() {
    if(!$(this).hasClass('disabled'))
    {
        sendAccountInfos(parseInt($(this).attr('data-attr')));
    }
});
$('input[type="text"]').keyup(function() {
    if($(this)[0].id != 'newLoginEmail')
    {
        this.value = this.value.replace(/[^a-zA-Z0-9_]/g, '');
    }
    else
    {
        if(document.getElementById('newLoginEmail').value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"))
        {
            emailValidate = true;
        }
        else
        {
            emailValidate = false;
        }
    }    
});
var verifyCallback = function(response) {
    if(response)
    {
        $('.form-input__wrap input').keyup(function(){
            if($(this).parent().parent()[0].id === 'signin')
            {
                if($('#loginName').val().length > 6 && $('#loginPass').val().length > 6)
                {
                    $('.login').removeClass('disabled');
                }
                else
                {
                    $('.login').addClass('disabled');
                }
            }
            if($(this).parent().parent()[0].id === 'signup')
            {
                if($('#newLoginName').val().length > 6 && $('#newLoginPass').val().length > 6 && emailValidate)
                {
                    $('.register').removeClass('disabled');
                }
                else
                {
                    $('.register').addClass('disabled');
                }
            }           
        });
        if($('#loginName').val().length > 6 && $('#loginPass').val().length > 6)
        {
            $('.login').removeClass('disabled');
        }
        if($('#newLoginName').val().length > 6 && $('#newLoginPass').val().length > 6 && emailValidate)
        {
            $('.register').removeClass('disabled');
        }
    }    
    else
    {
        alert('fail');
    }     
};

var regCaptcha;
var onloadCallback = function() {
   
    regCaptcha = grecaptcha.render('g-recaptcha1', {
        'sitekey' : '6LcShqcUAAAAAEFfGkm9KKambio8Ik5XGbD3Lruz',
        'callback' : verifyCallback,
        'theme' : 'dark'
    });
    grecaptcha.render('g-recaptcha', {
    'sitekey' : '6LcShqcUAAAAAEFfGkm9KKambio8Ik5XGbD3Lruz',
    'callback' : verifyCallback,
    'theme' : 'dark'
    });
};
function sendAccountInfos(type) {
    switch (type) {
        case 0: 
            loginName = document.getElementById("newLoginName").value;
            loginPass = document.getElementById("newLoginPass").value;
            loginEmail = document.getElementById("newLoginEmail").value;
            $('.register').addClass('disabled');
            mp.trigger("registerLogin.client", type, loginName, loginPass, loginEmail);
            break;
        case 1:
            loginName = document.getElementById("loginName").value;
            loginPass = document.getElementById("loginPass").value;
            $('.login').addClass('disabled');
            mp.trigger("registerLogin.client", type, loginName, loginPass);
            break;
    }
};