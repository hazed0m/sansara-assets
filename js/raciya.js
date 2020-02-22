var casta = '';
var stationArray = [
    { title: 'FBI', volume: 1},
    { title: 'FBI', volume: 2},
    { title: 'FBI', volume: 3},
    { title: 'PD', volume: 4},
    { title: 'PD', volume: 5},
    { title: 'PD', volume: 6},    
    { title: 'EM', volume: 7},
    { title: 'EM', volume: 8},
    { title: 'EM', volume: 9},
    { title: 'TX', volume: 10},
    { title: 'TX', volume: 11},
    { title: 'TX', volume: 12}
];
function initializeRaciya(group)
{
    casta = group;
    let iterator = 0;
    switch(casta)
    {
        case 'FBI':
            break;
        case 'PD':
        iterator = 3;
            break;        
        case 'EM':
        iterator = 6;
            break;
        case 'TX':
        iterator = 9;
            break;
    }
    $('.lcd-wrapper .channel-name').text(stationArray[iterator].title);
    $('.lcd-wrapper .channel-numb').text(stationArray[iterator].volume);    
}
$('.little-button.headphone-big').on('click',function(){
    let status = '';
    if($('.lcd .headphone').is(':visible'))
    {
        status = 'off';
        $('.lcd .headphone').fadeOut();
    }
    else {
        status = 'on';
        $('.lcd .headphone').fadeIn();
    } 
    mp.trigger("raciya.headphone",status);
});
$('.little-button.microphone-big').on('click',function(){
    // let status = '';
    // if($('.lcd .headphone').is(':visible'))
    // {
    //     status = 'off';
    //     $('.lcd .headphone').fadeOut();
    // }
    // else {
    //     status = 'on';
    //     $('.lcd .headphone').fadeIn();
    // } 
    mp.trigger("raciya.microphone");
});
$.fn.reverse = [].reverse;
$('.big-button .up, .big-button .down').on('click',function(){
    var currentClass = $(this)[0].classList[1];
    var currentLevel = -1;
    var volumeList = $('.volume-block .volume-item').reverse();
    volumeList.each(function(index,item){
        if($(item).hasClass('active'))
        {
            currentLevel = index;
        }
    });    
    if(currentClass == 'up' && currentLevel!=7)
    {
        currentLevel++;
        $(volumeList[currentLevel]).addClass('active');
        mp.trigger("raciya.volume",currentLevel)
    }
    if(currentClass == 'down' && currentLevel != -1)
    {      
        $(volumeList[currentLevel]).removeClass('active');
        currentLevel--;       
        mp.trigger("raciya.volume",currentLevel) 
    }   
});
$('.button-wrap .arrow-up, .button-wrap .arrow-down').on('click',function(){
    var currentClass = $(this)[0].classList[1];
    var channelName = $('.lcd-wrapper .channel-name');
    var channelNumb = $('.lcd-wrapper .channel-numb');
    var currentElement = (channelNumb[0].textContent)-1;
    var minOf = 0;
    var maxOf = stationArray.length-1;
    switch(casta)
    {
        case 'FBI':
            break;
        case 'PD':
        minOf = 3;
        maxOf = 5;
            break;        
        case 'EM':
        minOf = 6;
        maxOf = 8;
            break;
        case 'TX':
        minOf = 9;
        maxOf = 11;
            break;
    }
    if(currentClass == 'arrow-up' && currentElement < maxOf)
    {
        currentElement++;
        channelName.text(stationArray[currentElement].title);
        channelNumb.text(stationArray[currentElement].volume);     
        mp.trigger("raciya.station", currentElement);   
    }
    if(currentClass == 'arrow-down' && currentElement > minOf)
    {
        currentElement--;
        channelName.text(stationArray[currentElement].title);
        channelNumb.text(stationArray[currentElement].volume);
        mp.trigger("raciya.station", currentElement);
    }    
});
function raciyaToTop()
{
    $('.container').css('top','50%');
}
$('.little-button.exit').on('click',function(){
	// $('.container').fadeOut();
    mp.trigger("raciya.exit");
});