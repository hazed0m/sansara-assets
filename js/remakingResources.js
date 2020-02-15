function pushRemake(name,count)
{
    $('.resource-item .title').text(name);
    $('.resource-item .max span').text(count);
    $('input[type="range"]').attr('max',count);
    $(function() {
        $('input[type="range"]').on('input change', function(e) {
            let id = e.target.id,
                val = e.target.value;
            $(e).val(val).change();
            $(this).parent().find('.current-count span').text(val);
            checkButton(val);
        });  
        $('input[type=range]').rangeslider({
          polyfill: false,
          change: function(e) {
              console.log(e)  
          }
        });
    });
}
function checkButton(value)
{
    if(value > 0)
    {
        $('.button#remakeResources').removeClass('disabled');
    }
    else
    {
        $('.button#remakeResources').addClass('disabled');
    }
}
let interval = null;
$('.button#remakeResources').on('click',function(){
    let currentCount = parseInt($('.container .current-count span').text()),
        timing = currentCount/20,
        currentBlock = 0;
    $('.container').attr('current-timing',timing);
    interval = setInterval(function(){
        $('.container').attr('current-block',currentBlock);
        if(currentBlock > 20)
        {
            $('.button#remakeResources, .inner-wrap').css('display','none');
            $('.button#Done').css('display','flex');
            clearInterval(interval);
            interval = null;
            $('.progress-bar').fadeOut(500);
            setTimeout(function(){$('.mask').fadeOut()},400);            
        }
        else
        {
            $(`.progress-bar .block:eq(${currentBlock})`).fadeIn();
            currentBlock++;
        }
    },timing*300);
    
    if(!$(this).hasClass('disabled'))
    {
        $('.mask, .progress-bar').fadeIn();
    }
});
$('.button').on('click',function(){
    let id = this.id;
    if(id == 'Close')
    {
        clearInterval(interval);
        interval = null;
        let currentBlock = $('.container').attr('current-block'),
            currentTiming = $('.container').attr('current-timing'),
            finalCount = Math.round(currentBlock*currentTiming);
        console.log(finalCount);
        if(Number.isNaN(finalCount))
        {
            finalCount = 0;
        }
        console.log(finalCount);
        mp.trigger('closeRemake',finalCount);
    }
    if(id == 'Done')
    {
        let currentCount = parseInt($('.container .current-count span').text());
        console.log(currentCount);
        mp.trigger('doneRemake',currentCount);
    }
    console.log(id);
});