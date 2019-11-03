let evidenceList = [];
$('.container .input-wrapper input').on('keyup',function(){
    let arr = getEvidences();
    if($(this).val().length>0 && arr.length>0)
    {
        $(this).next().removeClass('disabled');        
    }
    else
    {
        $(this).next().addClass('disabled');
        inputStatus = false;
    }
});
$('.container .close-but').on('click',function(){
    mp.trigger('closeEvidenceMenu');
});
$('.container .input-wrapper .button').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        let arr = getEvidences();
        if(arr.length>0)
        {
            let caseNumber = $('.container .input-wrapper input').val();
            console.log(arr);
            mp.trigger('evidenceList',parseInt(caseNumber),JSON.stringify(arr));
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
        let color = '';
        if(item.Type === 'Illegal_Object' || item.Type === 'Clothes_Illegal' || item.Type === 'Weapon_FireGun_Illegal')
        {   
            color = 'illegal';
        }
        let template = `<div class="evidence-item">
                            <div class="toogle"></div>
                            <div class="name ${color}">${item.Name}</div>
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
            console.log('if');
            if($('.container .evidence-wrapper .evidence-item.active').length == 0)
            {
                console.log('if2');
                $('.button').addClass('disabled');
            }
        }
        else
        {
            $(this).addClass('active');
            if($('.container input').val().length > 0)
            {
                console.log('else');
                $('.button').removeClass('disabled');
            }
        }
    });
}