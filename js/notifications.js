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
$('.form-input__wrap input').on('input',function(){
    if($(this).parent().parent()[0].id === 'signin')
    {
        $('.login').removeClass('disabled');
    }
    if($(this).parent().parent()[0].id === 'signup')
    {
        $('.register').removeClass('disabled');
    }
 });
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