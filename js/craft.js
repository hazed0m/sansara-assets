var craftList = [],
    currentNeedsList = [],
    finalElement = '',
    counter = 0,
    multiple = 0;

function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");
    $quantityNum.attr('max',2);
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus); 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
	        $(craftList).each(function(index,item){
	        	$(currentNeedsList).each(function(indexNeeds,itemNeeds){
	        		if(item.name == itemNeeds.name)
	        		{
                if(itemNeeds.delete)
                {
                  item.count += itemNeeds.count;
                }	        			
	        		}
	        	});          
	        });
        $quantityNum.val(+$quantityNum.val() - 1);
        blockRefresh();    
        refreshFinalElem();
      }
    }  
    function quantityPlus() {
      if($quantityNum.attr('max') != $quantityNum.val())
      {
	        $(craftList).each(function(index,item){
	          	$(currentNeedsList).each(function(indexNeeds,itemNeeds){
	        		if(item.name == itemNeeds.name)
	        		{
	        			if(itemNeeds.delete)
                {
                  item.count -= itemNeeds.count;
                }
	        		}
	        	}); 
	        });
	        $quantityNum.val(+$quantityNum.val() + 1); 
          blockRefresh();
	        refreshFinalElem();	    
      }      
    }
};
function firstInitialize()
{  
	counter = 0;
	do 
	{ 
  	 $(craftList).each(function(index,item){
		$(currentNeedsList).each(function(indexNeeds,itemNeeds){
			if(item.name == itemNeeds.name)
			{
				if(itemNeeds.delete)
        {
          item.count -= itemNeeds.count;
        }
			}
		}); 
	});
  	$(".quantity-num").val(parseInt($(".quantity-num").val())+1);
  	counter++;
  	}  while (checkCountMin()); 
  	$('.quantity-num').attr('max',counter);
	  blockRefresh();
    refreshFinalElem(); 
}
function pushCraft(inventory, needsArr, finalElem, elemMultiple)
{
  let newElem = JSON.parse(inventory);
  multiple = elemMultiple;
  $(newElem).each(function(index,item){
    if(item.type == 'Resourses' || item.type == 'Recycled_Resources' || item.type == 'Craft_Resources')
    {
      let obj = 
      {
        name: item.name,
        type: item.type,
        weight: parseFloat(item.weight),
        count: item.count
      }
      craftList.push(obj);
    }
  });  
  pushNeedsList(needsArr,finalElem);
  needsListRefresh();
  blockRefresh();  
  checkCompatibility(); 
  // jsonDebugger();
};
function pushNeedsList(items,final)
{
  finalElement = final;
  let newElem = JSON.parse(items);
  $(newElem).each(function(index,item){
  	  let obj = {
  	  	name: item.name,
  	  	count: item.count,
  	  	delete: item.delete
  	  };
      currentNeedsList.push(obj);
  });
};
function needsListRefresh()
{
  $('#needs-list').empty();
  $('.main-block').empty();
  $('.title-block .title-name').text(finalElement);
  $(currentNeedsList).each(function(index,item){
    $('#needs-list').append(`<li data-name="${item.name}">${item.name} (${item.count})</li>`);
    $('.main-block').append(`<div class="block" data-name="${item.name}" data-count="${item.count}"></div>`);
  });
  $('.final-block .block').attr('data-name',finalElement);
};
// function jsonDebugger()
// {
//   $('body').append(`
//                     <div class="container newcontainer">
//                       <div class="title" style="color:#fff">Список инвентаря</div>
//                       <ul class="list1"></ul>
//                       <div class="title" style="color:#fff">Список нужного</div>
//                       <ul class="list2"></ul>
//                     </div>`);
//   $('.newcontainer').css('left','25%');
//   $(craftList).each(function(index,item){
//     $('.newcontainer ul.list1').append(`<li style="color:#fff">${item.name}</li>`)
//   });
//   $(currentNeedsList).each(function(index,item){
//     $('.newcontainer ul.list2').append(`<li style="color:#fff">${item.name}</li>`)
//   });
  
// }
function blockRefresh()
{    
  $('.main-block .block').empty();
  $(craftList).each(function(index,item){
      $('.main-block .block').each(function(indexBlock,itemBlock){
          if(item.name == $(itemBlock).attr('data-name'))
          {
            let currentCount = $('input.quantity-num').val();
            let template = 
            `<div class="inner-block" style="background-image:url(img/${item.type}.png);">            
                <div class="count">${currentNeedsList[indexBlock].count*currentCount}</div>
                <div class="inner-wrap">
                  <div class="title">${item.name}</div>
                  <div class="type">${item.type == 'Resourses' ? 'Неперер. ресурс' : 'Перер. ресурс'}</div>
                </div>  
            </div>`;
            $(this).append(template);
          }
      });  
  });
};
function checkCompatibility()
{
  let checker = true;
  $('.main-block .block').each(function(index,item){
    if($(item).is(':empty'))
    {
      checker = false;
    }
    else
    {
      $('#needs-list li').each(function(indexList,itemList){
        if($(item).attr('data-name') == $(itemList).attr('data-name'))
        {
          $(itemList).css('text-decoration','line-through').css('text-decoration-color','red').css('text-decoration-style','double');
        }
      });
    }
  });
  if(checker == true)
  {    
      if(checkCountMin())
      {
      	$('.create-but').removeClass('blocked');
    	$('.button-wrap .blocked').removeClass('blocked');
    	$('.final-block .block').empty();		
     	let currentCount = $('input.quantity-num').val();
      	let template = 
	      `<div class="inner-block" style="background-image:url(img/Craft_Resources.png);">            
	          <div class="count">${currentCount}</div>
	          <div class="inner-wrap">
	            <div class="title">${finalElement}</div>
	            <div class="type">Крафт ресурс</div>
	          </div>  
	      </div>`;
	      $('.final-block .block').append(template);  
      	blockRefresh();
      	quantityProducts();
  		  firstInitialize();
      }    
  }
};
function refreshFinalElem()
{
  let currentCount = parseInt($('input.quantity-num').val());
  $('.final-block .block .count').text(currentCount*multiple);
}
function checkCountMin()
{
    let checker = true;
    $(craftList).each(function(index,item){
    	$(currentNeedsList).each(function(indexNeeds,itemNeeds){
    		if(item.name == itemNeeds.name)
    		{
    			let currentOper = JSON.stringify(item.count);
    			currentOper = JSON.parse(currentOper);
    			currentOper -= itemNeeds.count;
    			if(currentOper < 0)
    			{
    				checker = false;
    			}
    		}        	
    	});    	
    });
   return checker;
};
$('.create-but').on('click',function(){
  if(!$(this).hasClass('blocked'))
  {
    let currentCount = $('.final-block .block .count').text();
    let craftedObj = {
      name: finalElement,
      count: parseInt(currentCount),
      type: 'Craft_Resources'
    };
    mp.trigger('doneCraft',JSON.stringify(craftedObj),JSON.stringify(craftList));
  }  
});
$('.exit-but').on('click',function(){
  mp.trigger("craftExit");
});