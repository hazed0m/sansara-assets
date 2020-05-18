$('.button#start').on('click',function(){
    console.log('start');
    mp.trigger('startTest');
});
let questionCounter = 0,
    currentQuest = ``;
function shuffle(arr){
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
function pushQuestion(quest,ans1,ans2,ans3,truth)
{
    currentQuest = quest;
    $('.qa-wrapper .button-next').removeClass('disabled');
    questionCounter++;
    let answerArr = [
        { 'answer':ans1, 'status': parseInt(truth) == 1 ? true : false },
        { 'answer':ans2, 'status': parseInt(truth) == 2 ? true : false },
        { 'answer':ans3, 'status': parseInt(truth) == 3 ? true : false }
    ];
    answerArr = shuffle(answerArr);
    $('.qa-wrapper .qa-question').text(quest);
    $('.qa-wrapper .question-count').text(questionCounter);    
    $('.qa-wrapper .qa-wrap').empty();      
    $(answerArr).each(function(index,item){
        let template = `<div class="question-item" data-answer="${item.status}">
                            <div class="trigger"></div>
                            <div class="question-text">
                                ${item.answer}
                            </div>
                        </div>`;
        $('.qa-wrapper .qa-wrap').append(template);
    });
    $('.qa-wrapper .mask').fadeOut();
    $('.qa-wrapper').fadeIn(); 
    refreshQuest();
}
function refreshQuest()
{
    $('.qa-wrap .question-item').on('click',function(){
        $('.qa-wrap .question-item.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.qa-wrapper .button-next').on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            if($('.question-item.active').length != 0)
            {
                let answer = $('.question-item.active').attr('data-answer');
                $(this).addClass('disabled');
                console.log(answer);    
                $('.qa-wrapper .mask').fadeIn();
                mp.trigger('Answer',currentQuest,answer);
            }
            else
            {
                errorMessage();
            }
        }
    });
}
function errorMessage()
{
    $('.container .notification').html(`
        <span>Вы не выбрали ответ</span>
        <div class="button" id="notifSubmit">Ок</div> 
    `).fadeIn();
    $('.qa-wrapper .mask').fadeIn();
    $('.container .notification #notifSubmit').on('click',() => {
        $('.container .notification, .qa-wrapper .mask').fadeOut();
    });
}
$('.container .close-but').on('click',function(){
    mp.trigger('closeTest');
});