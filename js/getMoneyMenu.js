let evidenceList = [];
$('.container .close-but').on('click',function(){
    mp.trigger('closeEvidenceMenu');
});
$('.container .input-wrapper .button').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        let arr = getEvidences();
        if(arr.length>0)
        {
            console.log(arr);
            mp.trigger('getMoneyList',JSON.stringify(arr));
        }
    }
});
function getEvidences()
{    
    let result = [];
    $('.container .evidence-wrapper .evidence-item').each(function(index,item){
        if($(this).hasClass('active'))
        {
            result.push($(this).find('.name').text());
        }
    });
    return result;
}
function pushGetMoneyMenu(element)
{
    $('.container .evidence-wrapper').empty();
    $(element).each(function(index,item){
        let template = `<div class="evidence-item">
                            <div class="toogle"></div>
                            <div class="name">${item}</div>
                        </div>`;
        $('.container .evidence-wrapper').append(template);
    });
    evidenceRefresh();
}
function evidenceRefresh()
{
    $('.container .evidence-wrapper .evidence-item').on('click',function(){
        if($(this).hasClass('active'))
        {
            $(this).removeClass('active')
            if($('.container .evidence-wrapper .evidence-item.active').length == 0)
            {
                $('.button').addClass('disabled');
            }
        }
        else
        {
            $(this).addClass('active');
            $('.button').removeClass('disabled');
        }
    });
}