let evidenceList = [];

$('.container .close-but').on('click',function(){
    mp.trigger('closeChooseMedicalMenu');
});
$('.container .input-wrapper .button').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        let arr = getEvidences();
        if(arr.length>0)
        {
            // let caseNumber = $('.container .input-wrapper input').val();
            console.log(arr);
            mp.trigger('ChooseMedicalList',JSON.stringify(arr));
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
function pushEvidence(element)
{
    evidenceList = JSON.parse(element);
    $('.container .evidence-wrapper').empty();
    $(evidenceList).each(function(index,item){
        let template = `<div class="evidence-item">
                            <div class="toogle"></div>
                            <div class="name">${item.Name}</div>
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
        }
        else
        {
            $(this).addClass('active')
        }
        let arr = getEvidences();
        if(arr.length>0)
        {
            $('.input-wrapper .button').removeClass('disabled');
        }
        else
        {
            $('.input-wrapper .button').addClass('disabled');
        }
    });
}