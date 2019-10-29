let clothesList = [],
    formList = [],
    className = 
    [
       "Маска",   
       "Шляпа",
       "Очки",
       "Аксессуар",
       "Торс",
       "Рубашка",
       "Куртка",
       "Серьги",
       "Браслет",
       "Низ",
       "Часы",
       "Бронежилет",
       "Обувь",
       "Сумка",
       "Значки"
    ],
    classNameTranslated = 
    [
        'Mask',
        'Hat',
        'Glasses',
        'Acessories',
        'Top1',
        'Top2',
        'Top3',
        'Earrings',
        'Bracelet',
        'Bottom',
        'Clock',
        'Armor',
        'Shoes',
        'Bag',
        'Acessories'
    ],
    admin = false;
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
function pushClothes(elem,elem2)
{
    clothesList = JSON.parse(elem);    
    appendClothes(clothesList);
    if(arguments.length == 2)
    {
        console.log(arguments);
        admin = true;
        formList = JSON.parse(elem2);
        $('.container').addClass('admin');
        $('.toogle-wrap, .top-title').fadeIn();
        initAdmin();
    }
}
function appendClothes(elem)
{
    $('.container .clothes-category-title').next().slideUp();
    $('.container .clothes-category-title').find('svg').css({
        'transform':'rotate(360deg)'
    });
    $('.button-block #use, #saveSet').addClass('disabled');
    $('#setText').val('');
    $(classNameTranslated).each(function(index,item){
        $(`.clothes-wrapper #${item}`).empty(); 
    });
    $(elem).each(function(index,item){
        $(className).each(function(indexEl,classEl){
            if(item.name.includes(classEl))
            {
                item.class = indexEl;
            }
        });
        // console.log(classNameTranslated[item.class],item.class);
        // console.log(currentType);
        let template =
            `<div class="clothes-item" data-id="${item.name}">
                <div class="clothes-name">${item.name}</div>
                <img src="images/person/${classNameTranslated[item.class]}.png" alt="">
            </div>`;
        $(`.clothes-wrapper #${classNameTranslated[item.class]}`).append(template);
    });
    initClothes();
}
function initAdmin()
{       
    $("#toogle").change(function() {
        console.log('checked',this.checked);
        if(this.checked)
        {
            appendClothes(formList);
            $('.top-title').text('Форма');
        }
        else
        {
            appendClothes(clothesList);
            $('.top-title').text('Гражданская одежда');
        }
    });
}
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
                    if(admin)
                    {
                        $('.button#saveSet').addClass('disabled');
                    }
                }
                else
                {         
                    $('.button#use').removeClass('disabled');
                    if(admin && $('#setText').val().length > 0)
                    {
                        console.log(1);
                        $('.button#saveSet').removeClass('disabled');
                    }
                }
            }
            else
            {     
                $('.button#use').removeClass('disabled');
                if(admin && $('#setText').val().length > 0)
                {
                    console.log(2);
                    $('.button#saveSet').removeClass('disabled');
                }
                $(`#${$(this).parent()[0].id} .clothes-item.active`).removeClass('active');
                $(this).addClass('active');
            }
        }
    });
    $('#setText').keyup(function(){
        if($('.clothes-item.active').length != 0)
        {
            if($(this).val().length > 0)
            {
                $('.button#saveSet').removeClass('disabled');
            }
            else
            {
                $('.button#saveSet').addClass('disabled');
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
            $('.button#use').addClass('disabled');
            $('.clothes-wrapper .active').removeClass('active');
            $('.container .clothes-category-title').next().slideUp();
            $('.container .clothes-category-title').find('svg').css({
                'transform':'rotate(360deg)'
            });
            console.log(activeList);
            mp.trigger('LspdUseClothes',activeList);
        }
    });
    $('.button#saveSet').on('click',function(){
        if($('.clothes-item.active').length != 0)
        {
            let activeList = [];
            $('.clothes-item.active').each(function(index,item){
                activeList.push($(item).attr('data-id'));
            });
            $('.button#saveSet').addClass('disabled');
            $('.clothes-wrapper .active').removeClass('active');
            $('.container .clothes-category-title').next().slideUp();
            $('.container .clothes-category-title').find('svg').css({
                'transform':'rotate(360deg)'
            });
            let name = $(this).prev().val();
            console.log({ name : name, clothes: activeList });
            $(this).prev().val('');
            mp.trigger('LspdSaveClothes',{ name : name, clothes: activeList });
        }
    });
    $('.button#close').on('click',function(){
        mp.trigger('closePoliceClothes');
    });
    
}