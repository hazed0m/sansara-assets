const 
    qaList = [
        {   
            question:'Можно ли получить срок за нарушение правил транспортного движения?', 
            answersList:[   
                    {   answer:`Да`, status:true
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Нет, но полицейские могут сами пришить статью`, status:false
                    }
                ]
        },
        {   
            question:'Взаимодействия каких транспортных средств описаны в ПДД?', 
            answersList:[   
                    {   answer:`Все`, status:true
                    },
                    {   answer:`Только автомобили`, status:false
                    },
                    {   answer:`Автомобили и вертолеты и пешеходы`, status:false
                    }
                ]
        },
        {   
            question:'Можно ли полицейским использовать вооруженную технику?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Да, в случае государственного переворота`, status:true
                    }
                ]
        },
        {   
            question:'Сколько типов лицензий существует в Штате?', 
            answersList:[   
                    {   answer:`4`, status:false
                    },
                    {   answer:`3`, status:false
                    },
                    {   answer:`5`, status:true
                    }
                ]
        },
        {   
            question:'Разрешено ли гражданским иметь бронированную технику?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Да, с разрешения Полицейского департамента`, status:true
                    },
                    {   answer:`Нет`, status:false
                    }
                ]
        },
        {   
            question:'Можно ли избежать наказания, сдав другого нарушителя?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет, но можно уменьшить`, status:true
                    },
                    {   answer:`Нет`, status:false
                    }
                ]
        }
        ,
        {   
            question:'Можно ли водить без лицензии?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:true
                    },
                    {   answer:`Да, пока не поймают`, status:false
                    }
                ]
        }
        ,
        {   
            question:'Что надо сделать в случае ДТП?', 
            answersList:[   
                    {   answer:`Договориться с другим участником ДТП`, status:false
                    },
                    {   answer:`Вызвать полицию и медицинскую службу`, status:true
                    },
                    {   answer:`Уехать побыстрее`, status:false
                    }
                ]
        }
        ,
        {   
            question:'Должен ли водитель останавливаться, если за ним едет полицейская машина?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет, если не включены проблесковые маячки`, status:true
                    },
                    {   answer:`Нет`, status:false
                    }
                ]
        }
        ,
        {   
            question:'С какой скоростью можно ездить по городу?', 
            answersList:[   
                    {   answer:`50 км/ч`, status:false
                    },
                    {   answer:`80 км/ч`, status:true
                    },
                    {   answer:`60 км/ч`, status:false
                    }
                ]
        }
        ,
        {   
            question:'С какой скоростью можно ездить за городом?', 
            answersList:[   
                    {   answer:`90 км/ч`, status:false
                    },
                    {   answer:`110 км/ч`, status:true
                    },
                    {   answer:`130 км/ч`, status:false
                    }
                ]
        }
        ,
        {   
            question:'С какой скоростью можно ездить по автомагистрали?', 
            answersList:[   
                    {   answer:`130 км/ч`, status:false
                    },
                    {   answer:`150 км/ч`, status:true
                    },
                    {   answer:`Нет ограничения`, status:false
                    }
                ]
        }
        ,
        {   
            question:'Где можно не соблюдать правила транспортного движения?', 
            answersList:[   
                    {   answer:`В горах`, status:false
                    },
                    {   answer:`На специальных участках`, status:true
                    },
                    {   answer:`В пустыне`, status:false
                    }
                ]
        }
        ,
        {   
            question:'На сколько можно превышать скорость?', 
            answersList:[   
                    {   answer:`На 10 км/ч`, status:false
                    },
                    {   answer:`Вообще нельзя`, status:true
                    },
                    {   answer:`На 20 км/ч`, status:false
                    }
                ]
        }
        ,
        {   
            question:'Можно ли оставить транспортное средство на тротуаре?', 
            answersList:[   
                    {   answer:`Да, на 10 минут`, status:false
                    },
                    {   answer:`Да, если это мототранспорт`, status:true
                    },
                    {   answer:`Нет`, status:false
                    }
                ]
        }
        ,
        {   
            question:'Можно ли припарковать автомобиль на обочине с желтой полосой?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:true
                    },
                    {   answer:`Да, если нет помехи движению`, status:false
                    }
                ]
        }
        ,
        {   
            question:'Можно ли остановить грузовик на обочине?', 
            answersList:[   
                    {   answer:`Да, на 10 минут`, status:false
                    },
                    {   answer:`Да, если не в центре города и не более 10 минут`, status:true
                    },
                    {   answer:`Нет`, status:false
                    }
                ]
        }
        ,
        {   
            question:'Где можно парковать автомобиль?', 
            answersList:[   
                    {   answer:`В любом месте кроме полицейского департамента и больницы`, status:false
                    },
                    {   answer:`На парковке и в гараже`, status:true
                    },
                    {   answer:`Только в гараже`, status:false
                    }
                ]
        }
        ,
        {   
            question:'Я припарковал машину рядом со своим домом. Ко мне подошел медик и попросил убрать авто. Что мне делать?', 
            answersList:[   
                    {   answer:`Оставить как есть. Мой дом – мои правила`, status:false
                    },
                    {   answer:`Оставить там, где не будет мешать, а через 10 минут отвезти в гараж или на парковку`, status:true
                    },
                    {   answer:`Перепаковать в гараж.`, status:false
                    }
                ]
        },
        {   
            question:'На моей машине отвалился бампер. Что мне делать?', 
            answersList:[   
                    {   answer:`Можно ездить и так`, status:true
                    },
                    {   answer:`Вызвать механиков и оставаться на месте`, status:false
                    },
                    {   answer:`Самому доехать до механиков`, status:false
                    }
                ]
        },
        {   
            question:'Я пробил колесо. Что делать?', 
            answersList:[   
                    {   answer:`Ездить так`, status:true
                    },
                    {   answer:`Вызвать механиков и оставаться на месте`, status:false
                    },
                    {   answer:`Самому кое как доехать до механиков`, status:false
                    }
                ]
        },
        {   
            question:'У меня не горит одна фара. Что мне делать?', 
            answersList:[   
                    {   answer:`Ездить так`, status:false
                    },
                    {   answer:`Вызвать механиков и оставаться на месте`, status:true
                    },
                    {   answer:`Самому кое как доехать до механиков`, status:false
                    }
                ]
        },
        {   
            question:'У меня разбито заднее стекло. Что мне делать?', 
            answersList:[   
                    {   answer:`Самому доехать до механиков`, status:true
                    },
                    {   answer:`Можно ездить и так`, status:false
                    },
                    {   answer:`Вызвать механиков и оставаться на месте`, status:false
                    }
                ]
        },
        {   
            question:'У меня разбито переднее стекло. Что мне делать?', 
            answersList:[   
                    {   answer:`Можно ездить и так`, status:false
                    },
                    {   answer:`Вызвать механиков и оставаться на месте`, status:true
                    },
                    {   answer:`Самому кое как доехать до механиков`, status:false
                    }
                ]
        },
        {   
            question:'Я купил новую машину и хочу показать подруге как круто умею водить. Где это можно сделать?', 
            answersList:[   
                    {   answer:`В горах`, status:false
                    },
                    {   answer:`В пустыне`, status:false
                    },
                    {   answer:`На специальных участках трассы`, status:true
                    }
                ]
        },
        {   
            question:'Меня подрезал какой-то баран и я чуть не перевернулся. Что мне делать?', 
            answersList:[   
                    {   answer:`Вызвать полицию и сообщить номер авто`, status:true
                    },
                    {   answer:`Догнать и наказать`, status:false
                    },
                    {   answer:`Подкараулить этого мудака и выбыть ему стекла`, status:false
                    }
                ]
        },
        {   
            question:'Я заслушался музыку и внезапно передо мной выскочил пешеход на дороге без пешеходного перехода. Что мне делать?', 
            answersList:[   
                    {   answer:`Задавить его, пусть учит правила и ходит по зебре`, status:false
                    },
                    {   answer:`Резко остановиться`, status:false
                    },
                    {   answer:`Постараться выполнить наиболее безопасный маневр, объехать, снижая скорость`, status:true
                    }
                ]
        },
        {   
            question:'Мы с другом выпили по пивку, а машина не припаркована. Что делать?', 
            answersList:[   
                    {   answer:`Быстро доехать домой`, status:false
                    },
                    {   answer:`Вызвать такси, а машина пусть стоит на обочине`, status:false
                    },
                    {   answer:`Вызвать такси и попросить таксиста запарковать машину, а потом отвезти меня домой`, status:true
                    }
                ]
        },
        {   
            question:'Мы с другом выпили по пивку, а машина не припаркована. Что делать?', 
            answersList:[   
                    {   answer:`Быстро доехать домой`, status:false
                    },
                    {   answer:`Вызвать такси, а машина пусть стоит на обочине`, status:false
                    },
                    {   answer:`Вызвать такси и попросить таксиста запарковать машину, а потом отвезти меня домой`, status:true
                    }
                ]
        },
        {   
            question:'Я выкурил косяк, но вроде попустило. Остановила полиция. Что я должен делать?', 
            answersList:[   
                    {   answer:`Не сопротивляться и поехать в участок`, status:false
                    },
                    {   answer:`Доказывать, что я чист`, status:false
                    },
                    {   answer:`Попросить мед. освидетельствование`, status:true
                    }
                ]
        },
        {   
            question:'Я ничего не нарушал, но полицейские меня остановили. Что мне делать?', 
            answersList:[   
                    {   answer:`Выполнять все требования, потом спросить причину остановки`, status:true
                    },
                    {   answer:`Спросить причину остановки, потом выполнять все требования`, status:false
                    },
                    {   answer:`Просто поехать дальше`, status:false
                    }
                ]
        },
        {   
            question:'Произошло мелкое ДТП. Отделались царапиной на бампере и легким испугом. Что надо делать?', 
            answersList:[   
                    {   answer:`Вызвать полицию и медиков`, status:false
                    },
                    {   answer:`Договориться на месте`, status:true
                    },
                    {   answer:`Просто уехать`, status:false
                    }
                ]
        },
        {   
            question:'Могу ли я бросить свою машину у входа в больницу, если у меня ранен друг?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:true
                    },
                    {   answer:`Да, но не более 10 минут`, status:false
                    }
                ]
        },
        {   
            question:'Где может переходить дорогу пешеход?', 
            answersList:[   
                    {   answer:`Только на пешеходном переходе`, status:false
                    },
                    {   answer:`В любом месте`, status:false
                    },
                    {   answer:`На пешеходном переходе или в любом месте, если нет рядом перехода`, status:true
                    }
                ]
        },
        {   
            question:'Пешеход всегда прав?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Да, но у государственных служб преимущество`, status:true
                    }
                ]
        },
        {   
            question:'Можно ли ездить по тротуарам?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет, но парковать мототранспорт можно`, status:true
                    },
                    {   answer:`Нет`, status:false
                    }
                ]
        },
        {   
            question:'Можно ли ездить по рельсам?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Только мототранспорту`, status:false
                    }
                ]
        },
        {   
            question:'Можно ли останавливаться у обочины?', 
            answersList:[   
                    {   answer:`Да, параллельной парковкой`, status:true
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Да`, status:false
                    }
                ]
        },
        {   
            question:'Можно ли ездить по встречной?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Да, для гос. служб в экстренной ситуации`, status:true
                    }
                ]
        },
        {   
            question:'Можно ли обгонять другой автомобиль?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Везде, кроме перекрестков и выездов`, status:true
                    }
                ]
        },
        {   
            question:'На перекрестке грузовик едет с востока на запад, а легковая с юга на север. Дороги равнозначны. Кто должен уступить?', 
            answersList:[   
                    {   answer:`Легковая`, status:true
                    },
                    {   answer:`Грузовик`, status:false
                    },
                    {   answer:`Кто первый успеет проехать`, status:false
                    }
                ]
        },
        {   
            question:'На перекрестке легковая едет по главной дороге и поворачивает на лево. По той же главной на встречу едет грузовик. Кто должен уступить?', 
            answersList:[   
                    {   answer:`Легковая`, status:true
                    },
                    {   answer:`Грузовик`, status:false
                    },
                    {   answer:`У кого совести больше`, status:false
                    }
                ]
        },
        {   
            question:'На перекрестке легковая едет с севера на юг, грузовик востока на запад, внедорожник с запада на восток. Дороги равнозначны. В каком порядке они должны проехать?', 
            answersList:[   
                    {   answer:`Легковая, внедорожник, грузовик`, status:false
                    },
                    {   answer:`Грузовик, легковая, внедорожник`, status:false
                    },
                    {   answer:`Внедорожник, легковая, грузовик`, status:true
                    }
                ]
        },
        {   
            question:'С моего двора выезжает скорая с включенными проблесковыми маячками. Мимо проезжает автомобиль. Кто должен уступить?', 
            answersList:[   
                    {   answer:`Автомобиль, потому что это скорая`, status:false
                    },
                    {   answer:`Скорая, потому что выезд со двора`, status:false
                    },
                    {   answer:`Автомобиль, потому что включены проблесковые`, status:true
                    }
                ]
        },
        {   
            question:'Я проехал поворот. Могу сдать задним ходом?', 
            answersList:[   
                    {   answer:`Да, если не мешаю движению`, status:true
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Да, если я полицейский`, status:false
                    }
                ]
        },
        {   
            question:'Можно ли высадить друга посреди дороги, если он сильно торопится?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет, надо подъехать к обочине`, status:true
                    },
                    {   answer:`Нет`, status:false
                    }
                ]
        },
        {   
            question:'Я увидел, что медики ехали со спец сигналом в кафе. Что мне делать?', 
            answersList:[   
                    {   answer:`Проследить, сделать фото и продать журналистам`, status:false
                    },
                    {   answer:`Просто забить, ничего ведь не докажешь`, status:false
                    },
                    {   answer:`Сообщить руководству больницы, сообщив номер скорой`, status:true
                    }
                ]
        },
        {   
            question:'Мы с ребятами решили устроить соревнования по дрифту. Что делать?', 
            answersList:[   
                    {   answer:`Устроить ночью за городом по тихой`, status:false
                    },
                    {   answer:`Получить разрешение на выделение специальных участков дорог`, status:true
                    },
                    {   answer:`Отказаться от идеи, дрифт запрещен ПДД`, status:false
                    }
                ]
        },
        {   
            question:'Как нужно буксировать автомобиль?', 
            answersList:[   
                    {   answer:`Только по правой полосе`, status:true
                    },
                    {   answer:`По любой полосе`, status:false
                    },
                    {   answer:`Только по левой полосе`, status:false
                    }
                ]
        },
        {   
            question:'Закончился бензин. Что делать?', 
            answersList:[   
                    {   answer:`Бросить машину. Вызвать такси`, status:false
                    },
                    {   answer:`Вызвать СТО`, status:false
                    },
                    {   answer:`Включить аварийный сигнал и вызвать СТО`, status:true
                    }
                ]
        },
        {   
            question:'Где можно парковаться около полицейского департамента?', 
            answersList:[   
                    {   answer:`Нигде`, status:false
                    },
                    {   answer:`Везде`, status:false
                    },
                    {   answer:`Рядом с участком только с разрешения полицейского не ниже офицера 2-го ранга`, status:true
                    }
                ]
        },
        {   
            question:'Где можно парковаться рядом с больницей?', 
            answersList:[   
                    {   answer:`Везде`, status:false
                    },
                    {   answer:`Нигде`, status:true
                    },
                    {   answer:`Везде, если это не затрудняет проезд к больнице`, status:false
                    }
                ]
        },
        {   
            question:'Сколько мест в легковом автомобиле?', 
            answersList:[   
                    {   answer:`4`, status:false
                    },
                    {   answer:`Сколько сделал производитель`, status:false
                    },
                    {   answer:`Не более 8`, status:true
                    }
                ]
        },
        {   
            question:'Я купил малолитражку чтобы возить уголь. Это законно?', 
            answersList:[   
                    {   answer:`Моя машина, что хочу, то и вожу`, status:false
                    },
                    {   answer:`Нет`, status:true
                    },
                    {   answer:`Да, это ведь в личных целях`, status:false
                    }
                ]
        },
        {   
            question:'В моём джипе помещается 8 мешков картошки. Могу ли я на нем зарабатывать?', 
            answersList:[   
                    {   answer:`Да`, status:true
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Зарабатывать нет, а вот в личных нуждах возить грузы можно`, status:false
                    }
                ]
        },
        {   
            question:'Моя легковушка может заехать на гору. Что мне за это будет?', 
            answersList:[   
                    {   answer:`Ничего, это не запрещено`, status:false
                    },
                    {   answer:`Раз может, значит это не легковушка`, status:false
                    },
                    {   answer:`Штраф 700$`, status:true
                    }
                ]
        },
        {   
            question:'Я могу водить микроавтобус на 12 человек с лицензией категории «В»?', 
            answersList:[   
                    {   answer:`Да, потому что это не грузовик`, status:false
                    },
                    {   answer:`Нет`, status:true
                    },
                    {   answer:`Да, главное любая лицензия на вождение`, status:false
                    }
                ]
        },
        {   
            question:'Я могу водить фургон с лицензией категории «D»?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Да, если у меня есть категория «С»`, status:true
                    }
                ]
        },
        {   
            question:'У меня есть категория «С». Я могу водить тягач с прицепом?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Нет`, status:false
                    },
                    {   answer:`Да, но, только тягач без прицепа`, status:true
                    }
                ]
        },
        {   
            question:'Для вождения фуры без прицепа мне нужны лицензии категорий:', 
            answersList:[   
                    {   answer:`А, В, С, D`, status:false
                    },
                    {   answer:`C`, status:true
                    },
                    {   answer:`С, D`, status:false
                    }
                ]
        },
        {   
            question:'Для вождения тягача с прицепом мне нужны лицензии категорий:', 
            answersList:[   
                    {   answer:`Всех`, status:false
                    },
                    {   answer:`Только С`, status:false
                    },
                    {   answer:`С, D`, status:true
                    }
                ]
        },
        {   
            question:'Мой бизнес находится недалеко от Мэрии. Как мне проехать на грузовике?', 
            answersList:[   
                    {   answer:`Как угодно, это же мой бизнес и мой грузовик`, status:false
                    },
                    {   answer:`В объезд Мэрии на грузовике`, status:true
                    },
                    {   answer:`Только на легковой`, status:false
                    }
                ]
        },
        {   
            question:'Я ехал на грузовике по городу по левой полосе. В меня врезалась легковая. Кто виноват?', 
            answersList:[   
                    {   answer:`Легковая, потому что врезалась`, status:false
                    },
                    {   answer:`Я, потому что ехал по левой полосе`, status:true
                    },
                    {   answer:`Оба хороши`, status:false
                    }
                ]
        },
        {   
            question:'Я купил лодку. Мне нужны права?', 
            answersList:[   
                    {   answer:`Да, для водного транспорта`, status:false
                    },
                    {   answer:`Да, подойдет любая категория`, status:true
                    },
                    {   answer:`Нет, вообще не нужны`, status:false
                    }
                ]
        },
        {   
            question:'Можно ли заехать на лодке на берег?', 
            answersList:[   
                    {   answer:`Да`, status:false
                    },
                    {   answer:`Можно, но это запрещено правилами`, status:true
                    },
                    {   answer:`Нет`, status:false
                    }
                ]
        },
        {   
            question:'Как можно получить лицензию на вертолет?', 
            answersList:[   
                    {   answer:`Никак`, status:false
                    },
                    {   answer:`Только на службе в гос. органах`, status:true
                    },
                    {   answer:`За взятку в полиции`, status:false
                    }
                ]
        },
        {   
            question:'Что делать если воздушный транспорт терпит крушение?', 
            answersList:[   
                    {   answer:`Выбрать район где мало строений, меньше людей пострадает`, status:false
                    },
                    {   answer:`Сообщить в ПД и медикам об ориентировочном месте посадки`, status:true
                    },
                    {   answer:`Выбрать место, где ближе дорога, быстрее спасут`, status:false
                    }
                ]
        },
        {   
            question:'Меня лишили прав за вождение в нетрезвом виде. Я сел за руль без прав и опять нетрезв. Что мне грозит?', 
            answersList:[   
                    {   answer:`Штраф 5000$`, status:false
                    },
                    {   answer:`Штраф 12000$ и постановка на учет в диспансер`, status:true
                    },
                    {   answer:`Штраф 12000$`, status:false
                    }
                ]
        },
        {   
            question:'Я бросил машину около магазина. Что мне грозит?', 
            answersList:[   
                    {   answer:`Ничего`, status:false
                    },
                    {   answer:`Штраф 2000$`, status:true
                    },
                    {   answer:`Штраф 5000$`, status:false
                    }
                ]
        },
        {   
            question:'Я перекрыл движение на улице. Что мне грозит?', 
            answersList:[   
                    {   answer:`Штраф 5000$`, status:false
                    },
                    {   answer:`Эвакуация авто на штрафстоянку`, status:true
                    },
                    {   answer:`Срок 1 суток`, status:false
                    }
                ]
        },
        {   
            question:'Я перепутал улицы и проехал около полицейского участка на грузовике. Что мне грозит?', 
            answersList:[   
                    {   answer:`3 суток`, status:false
                    },
                    {   answer:`Штраф 700$`, status:true
                    },
                    {   answer:`Штраф 5000$`, status:false
                    }
                ]
        },
        {   
            question:'Сколько стоит 1 км/ч превышения скорости?', 
            answersList:[   
                    {   answer:`100$`, status:false
                    },
                    {   answer:`50$, но сам штраф от 300$ до 2000$`, status:true
                    },
                    {   answer:`50$`, status:false
                    }
                ]
        },
        {   
            question:'Если я откажусь показать мультипаспорт, то', 
            answersList:[   
                    {   answer:`Меня посадят на 15 суток`, status:false
                    },
                    {   answer:`Мне выпишут штраф 2000$`, status:true
                    },
                    {   answer:`Без причины не имеют требовать документы`, status:false
                    }
                ]
        },
        {   
            question:'Могу ли я как-то решить вопрос, если нет денег на штраф?', 
            answersList:[   
                    {   answer:`Да, дать на лапу меньшую сумму`, status:false
                    },
                    {   answer:`Нет, придется занимать у друзей`, status:false
                    },
                    {   answer:`Да, я могу оплатить штраф позже или отработать общественным трудом`, status:true
                    }
                ]
        },
        {   
            question:'За нарушение каких правил ПТД я могу получить 15 суток?', 
            answersList:[   
                    {   answer:`Вождение без лицензии`, status:false
                    },
                    {   answer:`За то и другое, если повторное нарушение`, status:true
                    },
                    {   answer:`Парковка около ПД или больницы`, status:false
                    }
                ]
        },
        {   
            question:'Какое самое серьезное нарушение ПТД и влечет за собой арест на 60 месяцев?', 
            answersList:[   
                    {   answer:`Загородить вход в полицейский департамент`, status:false
                    },
                    {   answer:`Пытаться скрыться от полиции на личном автомобиле`, status:true
                    },
                    {   answer:`Спрыгнуть с обрыва, выполнив крутой трюк`, status:false
                    }
                ]
        }
    ];
let qaArray = [],
    randArr = getRandList(),    
    myInterval = null,
    secondsCounter = 0,
    minutesCounter = 0;
$('.container .rules-button').on('click',function(){
    $('.rules-wrapper,.mask').fadeIn();
});
$('.container .rules-wrapper .rules-close').on('click',function(){
    $('.rules-wrapper, .mask').fadeOut();
});
$('#A, #B, #C, #D').on('click',function(){
    if(!$(this).parent().hasClass('locked'))
    {
        $('.mask').fadeIn();
        let currentSum = $(this).find('.license-price .price').text();
        refreshQuestion(this.id, 0);
        qaArray = [];
        randArr = getRandList();
        $('.qa-wrapper').fadeIn();                    
        clearInterval(myInterval);
        myInterval = null;
        timer();
        mp.trigger('startExam',currentSum);
    }
});
$('.qa-wrapper .button-next').on('click',function(){
    var status = false,
        answer = false;
    $('.question-item').each(function(index,item){
        if($(this).hasClass('active'))
        {
            status = true;
            answer = $(this).attr('data-answer');
        }
    });
    if(status == true)
    {
        let currentIter = $('.qa-wrapper').attr('data-iterator');
        let currentIndex = parseInt($('.qa-wrapper').attr('data-question')); 
        qaArray.push(answer);
        currentIndex++;
        if(currentIndex!= 5)
        {
            refreshQuestion(currentIter, currentIndex);
        }
        else
        {
            let final = 0;
            clearInterval(myInterval);
            myInterval = null;	
            minutesCounter = 0;
            secondsCounter = 0;
            $(qaArray).each(function(index,item){
                if(item == 'true')
                {
                    final++;
                }
            });
            if(final >= 4)
            {
                $('.container .qa-wrapper .notification').text(`Вы прошли экзамен! Оценка - ${final}`).fadeIn();
            }
            else
            {
                $('.container .qa-wrapper .notification').text(`Вы завалили экзамен! Оценка - ${final}`).fadeIn();
            }
            setTimeout(function(){
                $('.container .qa-wrapper .notification, .container .qa-wrapper, .container .mask').fadeOut();
            },1700);
            showVerdict(currentIter,final);
        }
    }
    else
    {
        $('.container .qa-wrapper .notification').text('Вы не выбрали ответ').fadeIn();
        setTimeout(function(){
            $('.container .qa-wrapper .notification').fadeOut();
        },1200);
    }
});
function showVerdict(currentIter,final)
{
    $(`#${currentIter}`).parent().find('.status-item').each(function(index,item)
    {
        if(index < final)
        {
            $(item).addClass('active');
        }
        else
        {
            $(item).removeClass('active');
        }
    });
    mp.trigger('examSchool',currentIter,final);
}
function refreshQuestion(currentIter, currentIndex)
{
    $('.qa-wrapper .qa-question').text(eval(`qaList`)[randArr[currentIndex]].question);
    $('.qa-wrapper .question-count').text(parseInt(currentIndex)+1);    
    $('.qa-wrapper .qa-wrap').empty();
    $('.qa-wrapper').attr('data-question',currentIndex).attr('data-iterator',currentIter);
      
    $(eval(`qaList`)[randArr[currentIndex]].answersList).each(function(index,item){
        let template = `<div class="question-item" data-answer="${item.status}">
                            <div class="trigger"></div>
                            <div class="question-text">
                                ${item.answer}
                            </div>
                        </div>`;
        $('.qa-wrapper .qa-wrap').append(template);
    });
    $('.qa-wrap .question-item').on('click',function(){
        $('.qa-wrap .question-item.active').removeClass('active');
        $(this).addClass('active');
    });
}
function initSchool(catArr)
{
    let currentCat = JSON.parse(catArr);
    let catList = $('.license-wrap');
    $(currentCat).each(function(index,item){
        if(item == 'false')
        {
            $(catList[index]).addClass('locked');
        }
        else
        {
            $(catList[index]).removeClass('locked');
        }
    });
}
function getRandList()
{
    let max = qaList.length;
    let array = [];
    for (i = 0; i < 5; i++)
    {
        let currentRand = randomInteger(0, max);
        if(array.indexOf(currentRand) != -1)
        {
            console.log(currentRand,'error');
            do{
                currentRand = randomInteger(0, max);                
            }
            while(array.indexOf(currentRand) != -1)
        }
        array.push(currentRand);
    }
    return array;
}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
function timer()
{
	$('.timer .seconds, .timer .minutes').text('00');
	clearInterval(myInterval);
	myInterval = null;	
	myInterval = setInterval(function () {
	  ++secondsCounter;
	  if(secondsCounter % 60 == 0)
	  {
	  	 secondsCounter = 0;
	  	 ++minutesCounter;
      }
	  $('.timer .minutes').text(prettyTime(minutesCounter));
	  $('.timer .seconds').text(prettyTime(secondsCounter));
      if(minutesCounter == 5)
      {	         
        clearInterval(myInterval);
        myInterval = null;	
        minutesCounter = 0;
        secondsCounter = 0;
        $('.container .qa-wrapper .notification').text(`Время вышло! Попробуйте еще!`).fadeIn();
        setTimeout(function(){
            $('.container .qa-wrapper .notification, .container .qa-wrapper, .container .mask').fadeOut();
        },1700);
      }
    }, 1000);    
}
function prettyTime(num) {
	return ( num < 10 ? "0" : "" ) + num;
}