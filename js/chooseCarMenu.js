let evidenceList = [];

$('.container .close-but').on('click',function(){
    mp.trigger('closeChooseCarMenu');
});
$('.container .input-wrapper .button').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        let result = getEvidences();
        if(result.length>0)
        {
            // let caseNumber = $('.container .input-wrapper input').val();
            console.log(result);
            mp.trigger('ChooseCar',result);
        }
    }
});
function getEvidences()
{    
    let result = '';
    $('.container .evidence-wrapper .evidence-item').each(function(index,item){
        if($(this).hasClass('active'))
        {
            result = $(this).find('.name').text();
        }
    });
    return result;
}
function pushCarChoose(arr)
{
    evidenceList = arr;
    $('.container .evidence-wrapper').empty();
    $(evidenceList).each(function(index,item){
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
            $(this).removeClass('active');
        }
        else
        {
            $('.container .evidence-wrapper .evidence-item.active').removeClass('active');
            $(this).addClass('active'); 
        }
        let str = getEvidences();
        if(str.length>0)
        {
            $('.input-wrapper .button').removeClass('disabled');
        }
        else
        {
            $('.input-wrapper .button').addClass('disabled');
        }
    });
}