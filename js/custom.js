const fathers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 42, 43, 44];
const mothers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45];
const fatherNames = ["Бенджамин", "Дэниел", "Джошуа", "Ной", "Эндрю", "Хуан", "Алекс", "Исаак", "Эван", "Итан", "Винсент", "Ангел", "Диего", "Адриан", "Габриэль", "Майкл", "Сантьяго", "Кевин", "Луи", "Самуил", "Энтони", "Клод", "Нико", "Джон"];
const eyeColors = ["Зеленый", "Изумрудный", "голубой", "Синий океан", "Русые", "Темно-коричневый", "Карий", "Темно-Серый", "Светло-серый", "Розовый", "Желтый", "Пурпурный", "Затемненный", "Градации серого", "Текила Санрайз", "Атомный", "Деформация", "ECola", "Космический странник", "Инь Ян", "Яблочко", "Ящерица", "Дракон", "Внеземные", "Коза", "Улыбка", "Одержимый", "Демон", "Зараженный", "Инопланетянин", "Смерть", "Зомби"];
const motherNames = ["Ханна", "Обри", "Жасмин", "Жизель", "Амелия", "Изабелла", "Зоя", "Аве", "Камила", "Фиалка", "София", "Эвелин", "Николь", "Ашли", "Грейси", "Брианна", "Натали", "Оливия", "Элизабет", "Шарлотта", "Эмма", "Мисти"];
const hairList = [
// male
[
{ID: 0, Name: "Отстствуют", Collection: "mpbeach_overlays", Overlay: "FM_Hair_Fuzz"},
{ID: 1, Name: "1", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_001"},
{ID: 2, Name: "2", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_002"},
{ID: 3, Name: "3", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_003"},
{ID: 4, Name: "4", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_004"},
{ID: 5, Name: "5", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_005"},
{ID: 6, Name: "6", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_006"},
{ID: 7, Name: "7", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_007"},
{ID: 8, Name: "8", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_008"},
{ID: 9, Name: "9", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_009"},
{ID: 10, Name: "11", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_013"},
{ID: 11, Name: "12", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_002"},
{ID: 12, Name: "13", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_011"},
{ID: 13, Name: "14", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_012"},
{ID: 14, Name: "15", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_014"},
{ID: 15, Name: "16", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_015"},
{ID: 16, Name: "17", Collection: "multiplayer_overlays", Overlay: "NGBea_M_Hair_000"},
{ID: 17, Name: "18", Collection: "multiplayer_overlays", Overlay: "NGBea_M_Hair_001"},
{ID: 18, Name: "19", Collection: "multiplayer_overlays", Overlay: "NGBus_M_Hair_000"},
{ID: 19, Name: "20", Collection: "multiplayer_overlays", Overlay: "NGBus_M_Hair_001"},
{ID: 20, Name: "21", Collection: "multiplayer_overlays", Overlay: "NGHip_M_Hair_000"},
{ID: 21, Name: "22", Collection: "multiplayer_overlays", Overlay: "NGHip_M_Hair_001"},
{ID: 22, Name: "23", Collection: "multiplayer_overlays", Overlay: "NGInd_M_Hair_000"},
{ID: 24, Name: "24", Collection: "mplowrider_overlays", Overlay: "LR_M_Hair_000"},
{ID: 25, Name: "25", Collection: "mplowrider_overlays", Overlay: "LR_M_Hair_001"},
{ID: 26, Name: "26", Collection: "mplowrider_overlays", Overlay: "LR_M_Hair_002"},
{ID: 27, Name: "27", Collection: "mplowrider_overlays", Overlay: "LR_M_Hair_003"},
{ID: 28, Name: "28", Collection: "mplowrider2_overlays", Overlay: "LR_M_Hair_004"},
{ID: 29, Name: "29", Collection: "mplowrider2_overlays", Overlay: "LR_M_Hair_005"},
{ID: 30, Name: "30", Collection: "mplowrider2_overlays", Overlay: "LR_M_Hair_006"},
{ID: 31, Name: "31", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_000_M"},
{ID: 32, Name: "32", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_001_M"},
{ID: 33, Name: "33", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_002_M"},
{ID: 34, Name: "34", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_003_M"},
{ID: 35, Name: "35", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_004_M"},
{ID: 36, Name: "36", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_005_M"},
{ID: 72, Name: "37", Collection: "mpgunrunning_overlays", Overlay: "MP_Gunrunning_Hair_M_000_M"},
{ID: 73, Name: "38", Collection: "mpgunrunning_overlays", Overlay: "MP_Gunrunning_Hair_M_001_M"}
],
// female
[
{ID: 0, Name: "Отстствуют", Collection: "mpbeach_overlays", Overlay: "FM_Hair_Fuzz"},
{ID: 1, Name: "1", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_001"},
{ID: 2, Name: "2", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_002"},
{ID: 3, Name: "3", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_003"},
{ID: 4, Name: "4", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_004"},
{ID: 5, Name: "5", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_005"},
{ID: 6, Name: "6", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_006"},
{ID: 7, Name: "7", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_007"},
{ID: 8, Name: "8", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_008"},
{ID: 9, Name: "9", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_009"},
{ID: 10, Name: "10", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_010"},
{ID: 11, Name: "11", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_011"},
{ID: 12, Name: "12", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_012"},
{ID: 13, Name: "13", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_013"},
{ID: 14, Name: "14", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_014"},
{ID: 15, Name: "15", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_015"},
{ID: 16, Name: "16", Collection: "multiplayer_overlays", Overlay: "NGBea_F_Hair_000"},
{ID: 17, Name: "17", Collection: "multiplayer_overlays", Overlay: "NGBea_F_Hair_001"},
{ID: 18, Name: "18", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_007"},
{ID: 19, Name: "19", Collection: "multiplayer_overlays", Overlay: "NGBus_F_Hair_000"},
{ID: 20, Name: "20", Collection: "multiplayer_overlays", Overlay: "NGBus_F_Hair_001"},
{ID: 21, Name: "21", Collection: "multiplayer_overlays", Overlay: "NGBea_F_Hair_001"},
{ID: 22, Name: "22", Collection: "multiplayer_overlays", Overlay: "NGHip_F_Hair_000"},
{ID: 23, Name: "23", Collection: "multiplayer_overlays", Overlay: "NGInd_F_Hair_000"},
{ID: 25, Name: "24", Collection: "mplowrider_overlays", Overlay: "LR_F_Hair_000"},
{ID: 26, Name: "25", Collection: "mplowrider_overlays", Overlay: "LR_F_Hair_001"},
{ID: 27, Name: "26", Collection: "mplowrider_overlays", Overlay: "LR_F_Hair_002"},
{ID: 28, Name: "27", Collection: "mplowrider2_overlays", Overlay: "LR_F_Hair_003"},
{ID: 29, Name: "28", Collection: "mplowrider2_overlays", Overlay: "LR_F_Hair_003"},
{ID: 30, Name: "29", Collection: "mplowrider2_overlays", Overlay: "LR_F_Hair_004"},
{ID: 31, Name: "30", Collection: "mplowrider2_overlays", Overlay: "LR_F_Hair_006"},
{ID: 32, Name: "31", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_000_F"},
{ID: 33, Name: "32", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_001_F"},
{ID: 34, Name: "33", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_002_F"},
{ID: 35, Name: "34", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_003_F"},
{ID: 36, Name: "35", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_003"},
{ID: 37, Name: "36", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_006_F"},
{ID: 38, Name: "37", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_004_F"},
{ID: 76, Name: "38", Collection: "mpgunrunning_overlays", Overlay: "MP_Gunrunning_Hair_F_000_F"},
{ID: 77, Name: "39", Collection: "mpgunrunning_overlays", Overlay: "MP_Gunrunning_Hair_F_001_F"}
]
];

const appearanceItemNames = [
// blemishes
["Отстствуют", "Корь", "Цыпки", "Крапинки", "Заражение", "Угревая сыпь", "Наращивание", "Пустулы", "Прыщи", "Лицо в угре", "Угорь", "Сыпь На Щеках", "Сыпь На Лице", "Сборщик", "Половое созревание", "Бельмо на глазу", "Сыпь На Подбородке ", "Две Грани", "Интимная зона", "Жирный", "Отмеченный", "Прыщи", "Прыщи повсюду", "Герпес", "Импетиго"],
// facial hair
["Отстствуют", "Легкая Небритость", "Бальбо", "Круговая Борода", "Эспаньолка", "Подбородок", "Пуховый Подбородок", "Ремешок для подбородка", "Неряшливая", "Мушкетер", "Усы", "Подстриженная Борода", "Щетина", "Борода Тонкого Круга", "Подкова", "Карандаш и отбивные", "Подбородочная борода", "Бальбо и бакенбарды", "Баранья отбивная", "Неряшливая 2", "Кудрявая", "Кудрявая", "Колесо", "Фантастическая", "Отто", "Отто и незнакомец", "Свет Франца", "Хэмпстед", "Эмброуз", "Линкольнский Занавес"],
// eyebrows
["Отстствуют", "Сбалансированные", "Модные", "Клеопатра", "Насмешливые", "Женские", "Соблазнительные", "Сжатые", "Чола", "Триумфальные", "Беззаботные", "Пышные", "Грызун", "Двойные", "Тонкие", "Карандаш", "Мать Плюккерово", "Прямые и узкие", "Натуральные", "Размытые", "Неопрятные", "Гусеница", "Обычные", "Средиземные", "Холеные", "Бушели", "Крылатые", "Колючие", "Монобровь", "Крылатые 2", "Тройные", "Арочные", "Контур", "Исчезающие", "Одинокие"],
// ageing
["Отстствуют", "Гусиные лапки", "Первые Признаки", "Средний возраст", "Линии Беспокойства", "Депрессия", "Выдающийся", "Престарелый", "Потрепанный", "Морщинистый", "Отвисший", "Трудная жизнь", "Старинный", "Пенсионер", "Наркоман", "Гериатрический"],
// makeup
["Отстствуют", "Дымчато-Черный", "Бронза", "Мягкий Серый", "Ретро Глэм", "Естественный вид", "кошачий глаз", "Чола", "Вампир", "Голливудское очарование", "Жевательная резинка", "Водяная мечта", "Подколки", "Пурпурная страсть", "Дымчатый кошачий глаз", "Тлеющий рубин", "Поп-принцесса"],
// blush
["Отстствуют", "Полный", "Под углом", "Круглый", "Горизонтальный", "Высокий", "Возлюбленный", "Восьмидесятые"],
// complexion
["Отстствуют", "Румяные Щеки", "Стерневая Сыпь", "Приливы", "Загар", "Избитый", "Алкоголик", "Неоднородный", "Тотем", "Сосуды", "Раненый", "Бледный", "Призрачный"],
// sun damage
["Отстствуют", "Неравномерный", "Наждачная бумага", "Неоднородный", "Грубый", "Кожистый", "Текстурированный", "Грубый 2", "Неровный", "Мятый", "Потрескавшийся", "Песчаный"],
// lipstick
["Отстствуют", "Матовые", "Лоск", "Матовый 2", "Глянецевые", "Тяжелый матовый", "Тяжелый лоск", "Матовый 3", "Лоск 3", "Размазанные", "Гейша"],
// freckles
["Отстствуют", "Ангелоподобный", "Повсюду", "Неравномерный", "Точки", "Мост", "Куколка", "Эльф", "Поцелуй солнца", "Веснушки красотки", "Созвездие", "Модные", "Произво", "Крапчатый", "Капли дождя", "Двойное погружение", "Односторонний", "Парочка", "Рост"],
// chest hair
["Отстствуют", "Естественные", "Полоска", "Дерево", "Волосатый", "Ужасный", "Обезьяна", "Ухоженная обезьяна", "Бикини", "Удар молнии", "Обратная Молния", "Сердце Любви", "Грудь", "Счастливое лицо", "Череп", "Улиточный След", "Слизняк и щипки", "Волосатые руки"]
];

let prevs = document.querySelectorAll('.appearancePrev'),
    items = document.querySelectorAll('.appearanceItems'),
    nexts = document.querySelectorAll('.appearanceNext'),
    index = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    appearanceItem = '',
    opacitys = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

for (let i = 0; i < items.length; i++) {
    items[i].textContent = appearanceItemNames[i][index[i]];
    
    nexts[i].addEventListener('click', function() {
        plusSlides(1);
    });

    prevs[i].addEventListener('click', function() {
        plusSlides(-1);
    });

    function showSlide(n) {
        if (n > appearanceItemNames[i].length - 1) {
            index[i] = 1;
        }
        if (n < 0) {
            index[i] = appearanceItemNames[i].length - 1;
        }

        items[i].textContent = appearanceItemNames[i][index[i]];

        switch (i) {
            case 0: 
                appearanceItem = 'blemishesOpacity';
                break;
            case 1: 
                appearanceItem = 'facialHairOpacity';
                break;
            case 2: 
                appearanceItem = 'eyebrowsOpacity';
                break;
            case 3: 
                appearanceItem = 'ageingOpacity';
                break;
            case 4: 
                appearanceItem = 'makeupOpacity';
                break;
            case 5: 
                appearanceItem = 'blushOpacity';
                break;
            case 6: 
                appearanceItem = 'complexionOpacity';
                break;
            case 7: 
                appearanceItem = 'sundamageOpacity';
                break;
            case 8: 
                appearanceItem = 'lipstickOpacity';
                break;
            case 9: 
                appearanceItem = 'frecklesOpacity';
                break;
            case 10: 
                appearanceItem = 'chestHairOpacity';
                break;
        }
        mp.trigger("inputsRange.client", appearanceItem, opacitys[i], index[i]);
    }

    function plusSlides(n) {
        showSlide(index[i] += n);
    }  
}
let colorPrev = document.querySelectorAll('.colorPrev'),
colorItem = document.querySelectorAll('.colorItem'),
colorNext = document.querySelectorAll('.colorNext'),
colorIndex = [0, 0, 0, 0, 0];

for (let i = 0; i < colorPrev.length; i++) {
    colorItem[i].textContent = colorIndex[i];
    
    colorNext[i].addEventListener('click', function() {
        plusSlides(1);
    });

    colorPrev[i].addEventListener('click', function() {
        plusSlides(-1);
    });

    function showSlide(n) {
        if (n > maxHairColor - 1) {
            colorIndex[i] = 1;
        }
        if (n < 0) {
            colorIndex[i] = maxHairColor - 1;
        }

        colorItem[i].textContent = colorIndex[i];

        mp.trigger("colors.client", colorIndex[0], colorIndex[1], colorIndex[2], colorIndex[3], colorIndex[4]);
        
    }

    function plusSlides(n) {
        showSlide(colorIndex[i] += n);
    }  
}        
let btnMale = document.getElementById('male'),
btnFemale = document.getElementById('female'),
fatherInput = document.getElementById('Father'),
fatherPrev = document.getElementById('fatherPrev'),
fatherNext = document.getElementById('fatherNext'),
motherInput = document.getElementById('Mother'),
motherPrev = document.getElementById('motherPrev'),
motherNext = document.getElementById('motherNext'),
resemblanceBtn = document.getElementById('Resemblance'),
skinToneBtn = document.getElementById('Skin Tone'),
familyRandBtn = document.getElementById('Randomize'),
featuresItems = document.querySelectorAll('.features'),

hairInput = document.getElementById('Hair'),
hairPrev = document.getElementById('hairPrev'),
hairNext = document.getElementById('hairNext'),

hairColorPrev = document.getElementById('hairColorPrev'),
hairColorNext = document.getElementById('hairColorNext'),
hairColorInput = document.getElementById('HairColor'),

eyesColorPrev = document.getElementById('eyesPrev'),
eyesColorNext = document.getElementById('eyesNext'),
eyesColorInput = document.getElementById('eyesInput'),

currentGender = 0;

let hairIndex = 1,
hairColorIndex = 1,
maxHairColor = 64,
maxEyeColor = 32,
eyesColorIndex = 1;

let hairColors = [];
for (let i = 0; i < maxHairColor; i++) hairColors.push(i);
hairColor();
hairs();
eyesColor();
hairColorInput.textContent =  hairColors[0];
hairInput.textContent =  hairList[currentGender][0].Name;
eyesColorInput.textContent =  eyeColors[0];
// Цвет глаз
function eyesColor() {
eyesColorNext.addEventListener('click', function() {
    plusSlides(1);
});

eyesColorPrev.addEventListener('click', function() {
    plusSlides(-1);
});

function showSlide(n) {
    if (n > eyeColors.length) {
        eyesColorIndex = 1;
    }
    if (n < 1) {
        eyesColorIndex = eyeColors.length;
    }

    eyesColorInput.textContent = eyeColors[eyesColorIndex - 1];
    mp.trigger("eyesColor.client", eyesColorIndex - 1);
}

function plusSlides(n) {
    showSlide(eyesColorIndex += n);
}  
}
// Цвет волос 
function hairColor() {
hairColorNext.addEventListener('click', function() {
    plusSlides(1);
});

hairColorPrev.addEventListener('click', function() {
    plusSlides(-1);
});

function showSlide(n) {
    if (n > hairColors.length) {
        hairColorIndex = 1;
    }
    if (n < 1) {
        hairColorIndex = hairColors.length;
    }

    hairColorInput.textContent =  hairColors[hairColorIndex - 1];
    mp.trigger("hairsColor.client", hairColors[hairColorIndex - 1])
}

function plusSlides(n) {
    showSlide(hairColorIndex += n);
}  
}
// Волосы 
function hairs() {
hairNext.addEventListener('click', function() {
    plusSlides(1);
});

hairPrev.addEventListener('click', function() {
    plusSlides(-1);
});

function showSlide(n) {
    if (n > hairList[currentGender].length) {
        hairIndex = 1;
    }

    if (n < 1) {
        hairIndex = hairList[currentGender].length;
    }

    hairInput.textContent =  hairList[currentGender][hairIndex - 1].Name;
    mp.trigger("hairsList.client", hairList[currentGender][hairIndex - 1].ID)
}

function plusSlides(n) {
    showSlide(hairIndex += n);
}          
}


// Папа 
let fatherIndex = 0;

fatherInput.textContent = fatherNames[fatherIndex];

slidesMinus(fatherPrev, fatherIndex, fatherNames, fatherInput, fathers);
slidesPlus(fatherNext, fatherIndex, fatherNames, fatherInput, fathers);

// Мама
let motherIndex = 0;

motherInput.textContent = motherNames[motherIndex];


slidesMinus(motherPrev, motherIndex, motherNames, motherInput, mothers);
slidesPlus(motherNext, motherIndex, motherNames, motherInput, mothers);


familyRandBtn.addEventListener('click', function() {
fatherIndex = getRandomInt(0, fathers.length - 1);
motherIndex = getRandomInt(0, mothers.length - 1);
resemblance = getRandomInt(0, 100);
skinTone = getRandomInt(0, 100);

fatherInput.textContent = fatherNames[fatherIndex];
motherInput.textContent = motherNames[motherIndex];

mp.trigger("inputsRange.client", 'resemblance', resemblance, '');
mp.trigger("inputsRange.client", 'skinTone', skinTone, '');

mp.trigger("custom.clientCreate", motherIndex, fatherIndex);
});
// Смена пола 

btnFemale.addEventListener('click', function() {
this.classList.add('active');
btnMale.classList.remove('active');
currentGender = 1;
mp.trigger("creator_GenderChange.client", currentGender);
});

btnMale.addEventListener('click', function() {
this.classList.add('active');
btnFemale.classList.remove('active');
currentGender = 0;
mp.trigger("creator_GenderChange.client", currentGender);
});   

// Функции
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
function slidesPlus(btn, index, names, inputs, genders) {
btn.addEventListener('click', () => {
    if (index >= names.length) {
        index = 0;
        inputs.textContent = names[index];
    } else {
        index = ++index;
        inputs.textContent = names[index];
    }
    switch (genders.length){
        case 24:
            fatherIndex = index;
            break;
        default: 
            motherIndex = index;
            break;
    }
    mp.trigger("custom.clientCreate", motherIndex, fatherIndex);
});
}

function slidesMinus(btn, index, names, inputs, genders) {
btn.addEventListener('click', () => {
    if (index <= 0) {
        index = genders.length - 1;
        inputs.textContent = names[index];
    } else {
        index = --index;
        inputs.textContent = names[index];
    }
    switch (genders.length){
        case 24:
            fatherIndex = index;
            break;
        default: 
            motherIndex = index;
            break;
    }
    mp.trigger("custom.clientCreate", motherIndex, fatherIndex);
});
}

function random() {
fatherIndex = getRandomInt(0, fathers.length - 1);
motherIndex = getRandomInt(0, mothers.length - 1);
resemblance = getRandomInt(0, 100);
skinTone = getRandomInt(0, 100);

fatherInput.textContent = fatherNames[fatherIndex];
motherInput.textContent = motherNames[motherIndex];

mp.trigger("inputsRange.client", 'resemblance', resemblance, '');
mp.trigger("inputsRange.client", 'skinTone', skinTone, '');

mp.trigger("custom.clientCreate", motherIndex, fatherIndex);
let itemId = 0;

for (let i = 0; i < items.length; i++) {
    opacitys[i] = getRandomInt(0, 100);
    index[i] = getRandomInt(0, appearanceItemNames[i].length - 1);
    items[i].textContent = appearanceItemNames[i][index[i]];

    switch (i) {
        case 0:
            itemId = 'blemishesOpacity';
            break;
        case 1:
            itemId = 'facialHairOpacity';
            break;
        case 2:
            itemId = 'eyebrowsOpacity';
            break;
        case 3:
            itemId = 'ageingOpacity';
            break;
        case 4:
            itemId = 'makeupOpacity';
            break;
        case 5:
            itemId = 'blushOpacity';
            break;
        case 6:
            itemId = 'complexionOpacity';
            break;
        case 7:
            itemId = 'sundamageOpacity';
            break;
        case 8:
            itemId = 'lipstickOpacity';
            break;
        case 9:
            itemId = 'frecklesOpacity';
            break;
        case 10:
            itemId = 'chestHairOpacity';
            break;
    }

    mp.trigger("inputsRange.client", itemId, opacitys[i], index[i]);
}

for (let i = 0; i < colorIndex.length; i++) {
    colorIndex[i] = getRandomInt(i, maxHairColor - 1);
    colorItem[i].textContent = colorIndex[i];
}

mp.trigger("colors.client", colorIndex[0], colorIndex[1], colorIndex[2], colorIndex[3], colorIndex[4])

for (let i = 0; i < featuresItems.length; i++) {
    min = -1;
    featuresItems[i].value = getRandomInt(-100, 100) * 0.01;

    mp.trigger("featuresSetting.client", featuresItems[i].value, i);
    featuresItems[i].style.backgroundSize = (featuresItems[i].value - min) * 100 / (1 - min) + '% 100%';
}

eyesColorIndex = getRandomInt(1, eyeColors.length)
eyesColorInput.textContent = eyeColors[eyesColorIndex - 1];
mp.trigger("eyesColor.client", eyesColorIndex - 1)

hairColorIndex = getRandomInt(1, hairColors.length);
hairColorInput.textContent =  hairColors[hairColorIndex - 1];
mp.trigger("hairsColor.client", hairColors[hairColorIndex - 1])

hairIndex = getRandomInt(1, hairList[currentGender].length)
hairInput.textContent =  hairList[currentGender][hairIndex - 1].Name;
mp.trigger("hairsList.client", hairList[currentGender][hairIndex - 1].ID)

}

inputsRange = document.getElementsByTagName('input');
let currentRange = 0;

$(function() {
    $('input[type="range"]').on('input change', function(e) {
        let id = e.target.id,
            val = e.target.value;
        $(e).val(val).change();
        switch (id) {
            case 'blemishesOpacity':
                currentRange = 0;
                opacitys[currentRange] = val;
                break;
            case 'facialHairOpacity':
                currentRange = 1;
                opacitys[currentRange] = val;
                break;
             case 'eyebrowsOpacity':
                currentRange = 2;
                opacitys[currentRange] = val;
                break;
            case 'ageingOpacity':
                currentRange = 3;
                opacitys[currentRange] = val;
                break;
            case 'makeupOpacity':
                currentRange = 4;
                opacitys[currentRange] = val;
                break;
            case 'blushOpacity':
                currentRange = 5;
                opacitys[currentRange] = val;
                break;
            case 'complexionOpacity':
                currentRange = 6;
                opacitys[currentRange] = val;
                break;
            case 'sundamageOpacity':
                currentRange = 7;
                opacitys[currentRange] = val;
                break;
            case 'lipstickOpacity':
                currentRange = 8;
                opacitys[currentRange] = val;
                break;
            case 'frecklesOpacity':
                currentRange = 9;
                opacitys[currentRange] = val;
                break;
            case 'chestHairOpacity':
                currentRange = 10;
                opacitys[currentRange] = val;
                break;
        }
        mp.trigger("inputsRange.client", id, val, index[currentRange]);
    });
    
    $('input[type=range]').rangeslider({
      polyfill: false,
      change: function(e) {
          console.log(e)
      }
    });
});