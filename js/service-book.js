$('.container .close-but').on('click',function(){
    mp.trigger('closeServiceBook');
});
$('.container .buttons-wrapper .left, .container .buttons-wrapper .right').on('click',function(){
    let currentPage = $('.container .page.active'),
        id = currentPage[0].id;
    if(id == 'page1')
    {
        $(currentPage).removeClass('active');
        $(currentPage).next().addClass('active');
    }
    if(id == 'page2')
    {
        $(currentPage).removeClass('active');
        $(currentPage).prev().addClass('active');
    }
});
let serviceBook = [];
let service = JSON.stringify({
    carNumber: '14as21',
    sellDate: '25.11.2019',
    carType: 'Arnold',
    carScore: 25252,
    dateOf: '25.11.2019',
    doneWorks: 'Здесь должен быть текст сто процентов Вас уверяю.@Здесь должен быть текст сто процентов Вас уверяю. Здесь должен быть текст сто процентов Вас уверяю. @Здесь должен быть текст сто процентов Вас уверяю. Здесь должен быть текст сто процентов Вас уверяю. @Здесь должен быть текст сто процентов Вас уверяю. Здесь должен быть текст сто процентов Вас уверяю. @Здесь должен быть текст сто процентов говорю.'
});
function pushServiceBook(elem)
{
    serviceBook = JSON.parse(elem);
    let serviceWorks = serviceBook.doneWorks.split('@'); 
    for (const elem in serviceBook)
    {
        if(elem != 'doneWorks')
        {
            console.log(`.container .page #${elem} .text-block`);
            $(`.container .page #${elem} .text-block`).append(serviceBook[elem]);
        }
    }
    $(serviceWorks).each(function(index,item){
        $(`.container .page #doneWorks .text-block`).append(`<p>${item}</p>`)
    });
}