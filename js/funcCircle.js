var currentMax = 10000;
function initializeFuncCircle(maxsum)
{
    currentMax = maxsum;    
    $('.max-numb').text(currentMax);
}
$('ul li').on('click',function(){
    let currentAction = $(this).find('.slot').attr('data-action');
    if(currentAction != 'giveMoney')
    {
        mp.trigger(currentAction);
    }
    else
    {
        var col = 0,
            input = `<input class="quantity" type="number" min="1" max="${currentMax}" value="1">`,
            currentMin = 1;
        $('.ok-button').attr('done','undone');
        $('.col-wrapper').find('.quantity').replaceWith(input);
        $('.col-wrapper .min').on('click',function(){
            currentMin = $(this).parent().find('.quantity').attr('min');
            $(this).parent().find('.quantity').val(currentMin);
        });			
        $('.col-wrapper .max').on('click',function(){
            $(this).parent().find('.quantity').val(currentMax);
        });			
        $('.ok-button').on('click',function(){
            if($(this).attr('done') == 'undone')
            {
                col = $(this).parent().parent().find('input').val();
                console.log(col);
                $('.col-wrapper').fadeOut();
                $(this).attr('done','done');
                mp.trigger(currentAction, parseInt(col));
            }
        });
        $('.cancel-button').on('click',function(){
            $('.col-wrapper').fadeOut();				
        });	
        var inputQuantity = [];
            $(function() {
                $(".quantity").each(function(i) {
                inputQuantity[i]=this.defaultValue;
                    $(this).data("idx",i); // save this field's index to access later
                });
                $(".quantity").on("keyup", function (e) {
                var $field = $(this),
                    val=this.value,
                    $thisIndex=parseInt($field.data("idx"),10); // retrieve the index
                    //window.console && console.log($field.is(":invalid"));
                    //$field.is(":invalid") is for Safari, it must be the last to not error in IE8
                if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
                    this.value = inputQuantity[$thisIndex];
                    return;
                } 
                if (val.length > Number($field.attr("maxlength"))) {
                    val=val.slice(0, 5);
                    $field.val(val);
                }
                inputQuantity[$thisIndex]=val;
            });      
        });	
        $('.col-wrapper').fadeIn();		
    }
});

