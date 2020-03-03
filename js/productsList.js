let productsList = [
    'авокадо',
    'айва',
    'баварскиесосиски',
    'банкакукурузы',
    'банкафасоли',
    'броколли',
    'водабезгаза',
    'груша',
    'дорадо',
    'йогурт1%',
    'йогуртсклубникой',
    'клубничноемороженое',
    'кола',
    'куриныекрылья',
    'куриныенагетсы',
    'лапшабыстрогоприготовления',
    'латтемакиато',
    'лимонад',
    'мандарин',
    'мармеладныемишки',
    'минеральнаявода',
    'ореховаясмесь',
    'панакота',
    'пастаболоньезе',
    'пастакарбонара',
    'пастанери',
    'пирожное',
    'пирожок',
    'пицца4сыра',
    'пиццавегетарианская',
    'пиццамаргарита',
    'пиццаскурицей',
    'пиццастунцом',
    'пончикскремом',
    'пончиксшоколадом',
    'рафславандой',
    'рем.комплект',
    'роллсавокадо',
    'роллсогурцом',
    'слойка',
    'содовая',
    'стейкирибай',
    'сушиизлосося',
    'сушиизтунца',
    'сыр',
    'устрица',
    'фисташковоемороженое',
    'фо-босговядиной',
    'хлеб',
    'хот-дог',
    'хумус',
    'хурма',
    'чайзеленый',
    'чайчерный',
    'чизкейкнью-йорк',
    'чипсы',
    'шаурмаизиндейки',
    'эклер',
    'эспрессо'
],
instrumentsList = [
    'топор',
    'лопата',
    'садовыеножницы',
    'кирка',
    'серп'
],
drugsList = [
    '',
    '',
    '',
    'бинт',
    'адреналин'
];
function instrumentTranslate(cyrillic)
{
    let currentIndex = -1;
    $(instrumentsList).each(function(index,item){
        if(item == cyrillic)
        {
            currentIndex = index;
        }
    });
    return currentIndex;
}
function productTranslate(cyrillic)
{
    let currentIndex = -1;
    $(productsList).each(function(index,item){
        if(item == cyrillic)
        {
            currentIndex = index;
        }
    });
    return currentIndex;
}
function drugsTranslate(cyrillic)
{
    let currentIndex = -1;
    $(drugsList).each(function(index,item){
        if(item == cyrillic)
        {
            currentIndex = index;
        }
    });
    return currentIndex;
}