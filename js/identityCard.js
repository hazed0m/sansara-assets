function pushIdentityCard(type,name,lastname,rank,signature,agencyName)
{
    if(type == 'News')
    {
        if(agencyName != undefined)
        {
            $('.container .agency-name').css('display','flex').text(agencyName);
        }
    }
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