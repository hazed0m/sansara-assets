let garageList = [
    { 'Vapid LSPD' : '0x79FBB0C5' },
    { 'Buffalo'	: '0x9F05F101' },
    { 'Interceptor' : '0x71FA16EA' },
    { 'Police Bike' : '0xFDEFAEC3' },
    { 'Transporter' : '0x1B38E955' },
    { 'Prison Bus' : '0x885F3671' },
    { 'Ford Interceptor' : 'add on' },
    { 'Dodge Charger LSPD' : 'add on' },
    { 'Chevrolet Impala' : 'add on' },
    { 'Ferrari 458 Italia' : 'add on' },
    { 'Ford Crown Victoria' : 'add on' },
    { 'Dodge Charger Sheriff' : 'add on' },
    { 'Chevrolet Tahoe' : 'add on' },
    { 'Ford Taurus' : 'add on' },
    { 'Scout' : 'add on' },
    { 'Vapid detective' : '0x8A63C7B9' },
    { 'Bravado' : '0x432EA949' },
    { 'Declasse' : '0x9DC66994' }
];
$('.garage-item').on('click',function(){
    if(!$(this).hasClass('closed'))
    {
        if($(this).hasClass('active'))
        {
            $(this).removeClass('active');
            $('.button#use').addClass('disabled');
        }
        else
        {
            $('.button#use').removeClass('disabled');
            $('.garage-item.active').removeClass('active');
            $(this).addClass('active');
        }
    }
});
$('.button#use').on('click',function(){
    if($('.garage-item.active').length != 0)
    {
        let active = $('.garage-item.active')[0].id;
        console.log(active);
        $('.button#use').addClass('disabled');
        mp.trigger('LspdUseGarage',active);
    }
});
$('.button#close').on('click',function(){
    mp.trigger('closePoliceGarage');
});
function openPoliceCars(count)
{
    for(let i=0;i < count;i++)
    {
        $(`.container .garage-item:eq(${i})`).removeClass('closed');
    }
}