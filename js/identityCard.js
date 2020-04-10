function pushIdentityCard(type,name,lastname,rank,signature)
{
    $('.container .wrapper').attr('id',type);
    $('.container #name .data').text(name);
    $('.container #lastname .data').text(lastname);
    $('.container #rank .data').text(rank);
    $('.container .signature-wrap').text(signature);
}
$('.container .wrapper .close-button').on('click',function(){
    mp.trigger('closeIdentityCard');
});
function fadeIn()
{
    $('.container').fadeIn();
}
function fadeOut()
{
    $('.container').fadeOut();
}