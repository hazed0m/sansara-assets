$('.container .input-wrapper input').on('keyup',function(){
    if($(this).val().length>0)
    {
        $('#submit').removeClass('disabled');
    }
    else
    {
        $('#submit').addClass('disabled');
    }
});
$('.container .close-but, #close').on('click',function(){
    mp.trigger('closeTextMedicalMenu');
});
$('.container .input-wrapper .button').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        // let caseNumber = $('.container .input-wrapper input').val();
        mp.trigger('TextMedicalThing');
    }
});
function pushMedicalText(text)
{
    $('.container .proofs-wrapper').append(`<p>${text}</p>`);
}