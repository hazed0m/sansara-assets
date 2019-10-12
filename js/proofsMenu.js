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
    mp.trigger('closeProofsMenu');
});
$('.container .input-wrapper .button').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        let caseNumber = $('.container .input-wrapper input').val();
        mp.trigger('proofsThing',parseInt(caseNumber));
    }
});
function pushProofs(text)
{
    $('.container .proofs-wrapper').append(`<p>${text}</p>`);
}