let className = 
    [
	   "Маска",   
	   "Шляпа",
	   "Очки",
	   "Аксессуар",
	   "Верх",
	   "Серьги",
	   "Браслет",
	   "Низ",
	   "Часы",
	   "Бронежилет",
	   "Обувь",
	   "Сумка"
    ],
    classNameTranslated = 
    [
        'Mask',
        'Hat',
        'Glasses',
        'Acessories',
        'Top',
        'Earrings',
        'Bracelet',
        'Bottom',
        'Clock',
        'Armor',
        'Shoes',
        'Bag'
    ];
$('.container .clothes-wrapper .clothes-category-title').on('click',function(){
    if(!$(this).next().is(':visible'))
    {
        $(this).next().slideDown();
        $(this).find('svg').css({
            'transform':'rotate(180deg)'
        });
    }
    else
    {
        $(this).next().slideUp();
        $(this).find('svg').css({
            'transform':'rotate(360deg)'
        });
    }
});
function initClothes()
{
    $('.clothes-item').on('click',function(){
        if(!$(this).hasClass('closed'))
        {
            if($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                if($('.clothes-item.active').length < 1)
                {
                    $('.button#use').addClass('disabled');
                }
            }
            else
            {
                $('.button#use').removeClass('disabled');
                $(`#${$(this).parent()[0].id} .clothes-item.active`).removeClass('active');
                $(this).addClass('active');
            }
        }
    });
    $('.button#use').on('click',function(){
        if($('.clothes-item.active').length != 0)
        {
            let activeList = [];
            $('.clothes-item.active').each(function(index,item){
                activeList.push($(item).attr('data-id'));
            });
            console.log(activeList);
            $('.button#use').addClass('disabled');
            $('.clothes-wrapper .active').removeClass('active');
            $('.container .clothes-category-title').next().slideUp();
            $('.container .clothes-category-title').find('svg').css({
                'transform':'rotate(360deg)'
            });
            mp.trigger('LspdUseClothes',activeList);
        }
    });
    $('.button#close').on('click',function(){
        mp.trigger('closePoliceClothes');
    });
    
}