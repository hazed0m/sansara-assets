let animCircle = new Vue({
    el: '#animCircle',
    data: {
        fastAnimList: [
            { id: -1, title: 'Отсутствует', class: 'slot1', dict: '', name: '', active: false },
            { id: -1, title: 'Отсутствует', class: 'slot2', dict: '', name: '', active: false },
            { id: -1, title: 'Отсутствует', class: 'slot3', dict: '', name: '', active: false },
            { id: -1, title: 'Отсутствует', class: 'slot4', dict: '', name: '', active: false },
            { id: -1, title: 'Отсутствует', class: 'slot5', dict: '', name: '', active: false },
            { id: -1, title: 'Отсутствует', class: 'slot6', dict: '', name: '', active: false },
            { id: -1, title: 'Отсутствует', class: 'slot7', dict: '', name: '', active: false },
            { id: -1, title: 'Отсутствует', class: 'slot8', dict: '', name: '', active: false },
            { id: -1, title: 'Отсутствует', class: 'slot9', dict: '', name: '', active: false }
        ],
        settingsAnimShow: false,
        isActive: true
    },
    methods: {       
        circleAnim: function(id, index) {
            if (id != -1) {
                // id - номер анимации | index  - номер в круговом меню
                dict = this.fastAnimList[index].dict;
                name = this.fastAnimList[index].name;                
                mp.trigger("animate.client", dict, name);
            }
        },
        showAnimSettingsMenu: function(id, index) {
            menu.animateSettingsShow = true;   
            menu.setFastAnimIndex = index;

            this.fastAnimList.forEach(function (value, key) {
                animCircle.fastAnimList[key].active = false;
            });

            this.fastAnimList[index].active = true;
        }
    }
});  

Vue.component('vue-slide-up-down', VueSlideUpDown);
let menu = new Vue({
    el: '#buttons',
    data: {
        admin: 0,
        passShow: false,
        activeClass: 'btn-active',
        phoneNumber:1111111,
        settingsShow: false,
        mapSettingsShow:false,
        skillsShow: false,
        reportShow: false,
        loginSetShow:false,
        animateShow: false,
        selectAnim: false,
        animToogle:true,
        keySettingsShow:false,
        setFastAnimIndex: 0,
        animateSettingsShow: false,
        saveButtonState:false,
        keyChangeSettingsShow:false,
        setKeyIndex: 0,
        gpsFilterArr: [false,false,false,false,false,false],
        isDisabled: false,
        keyNameList: [
            "F1",
            "F2",
            "F4",
            "F7",
            "F8",
            "F9",
            "F10",
            "F11",
            "F12",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "B, b, И, и",
            "C, c, С, с",
            "G, g, П, п",
            "I, i, Ш, ш",
            "J, j, О, о",
            "K, k, Л, л",
            "L, l, Д, д",
            "M, m, Ь, ь",
            "N, n, Т, т",
            "O, o, Щ, щ",
            "R, r, К, к",
            "T, t, Е, е",
            "U, u, Г, г",
            "X, x, Ч, ч",
            "Z, z, Я, я",
            "-",
            "=",
            ";, Ж, ж",
            ",, Б, б",
            "., Ю, ю",
            "[, {, Х, х",
            "], }, Ъ, ъ",
            '\\',
            "', Э, э",
            "/, .",
            'Ё, ё',
            "CapsLock",
            "Shift",
            "Control",
            "Meta",
            "Meta",
            "ContextMenu",
            "ScrollLock",
            "Pause",
            "Home",
            "PageUp",
            "Delete",
            "End",
            "PageDown",
            "NumLock",
            "ArrowLeft",
            "ArrowUp",
            "ArrowDown",
            "ArrowRight",            
            "Num 0",
            "Num 1",
            "Num 2",
            "Num 3",
            "Num 4",
            "Num 5",
            "Num 6",
            "Num 7",
            "Num 8",
            "Num 9"
        ],
        keyCodeList: [ 112, 113, 115, 118, 119, 120, 121, 122, 123, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 66, 67, 71, 73, 74, 75, 76, 77, 78, 79, 82, 84, 85, 88, 90, 189, 187, 186, 188, 190, 219, 221, 220, 222, 191, 192, 20, 16, 17, 91, 93, 93, 145, 19, 36, 33, 46, 35, 34, 144, 37, 38, 40, 39, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
        actionList: [
            { keyCode: 73, title: "I, i, Ш, ш", action: 'Инвентарь', active: false },
            { keyCode: 79, title: "O, o, Щ, щ", action: 'Рация', active: false },
            { keyCode: 78, title: "N, n, Т, т", action: 'Планшет', active: false },
            { keyCode: 77, title: "M, m, Ь, ь", action: 'Смартфон', active: false },
            { keyCode: 113, title: "F2", action: 'Остановить анимацию', active: false },
            { keyCode: 118, title: "F7", action: 'Мышка (Показать/Скрыть)', active: false },
            { keyCode: 76, title: "L, l, Д, д", action: 'Анимации', active: false },
            { keyCode: 75, title: "K, k, Л, л", action: 'Транспорт', active: false },
            { keyCode: 74, title: "J, j, О, о", action: 'Поднять руки', active: false },
            { keyCode: 88, title: "X, x, Ч, ч", action: 'Микрофон общий', active: false },
            { keyCode: 71, title: "G, g, П, п", action: 'Взаимодействие', active: false },
            { keyCode: 17, title: "Control", action: 'Выделение', active: false },
            { keyCode: 90, title: "Z, z, Я, я", action: 'Микрофон рации', active: false },
            { keyCode: 66, title: "B, b, И, и", action: 'Указать', active: false }
        ],
        pushKeyList: function(obj)
        {
            this.actionList = JSON.parse(obj);
        },
        showKeySettingsMenu: function(keyCode, action, index) {
            menu.keyChangeSettingsShow = true;   
            menu.setKeyIndex = index;
            $('.keyTitle').text(action);
            $('.currentKey').empty();
            $('.currentKey').attr('data-index',index).text(this.getKeyTitle(keyCode,'init'));
            this.actionList.forEach(function (value, key) {
                menu.actionList[key].active = false;
            });
            
            this.actionList[index].active = true;
        },
        getKeyTitle: function(keyCode,param){
            let currentIndex = this.keyCodeList.indexOf(keyCode),
                currentName = `Запрещено`;
            console.log(currentIndex);
            if(currentIndex != -1)
            {              
                currentName = this.keyNameList[currentIndex];                
                $(this.actionList).each(function(index,item){
                    if(keyCode == item.keyCode && param != 'menu' && param != 'init')
                    {
                        currentName = `Занято`
                        $('.getKeyCode-wrap .save').addClass('saveText__active');
                    }
                });
            }
            else
            {
                $('.getKeyCode-wrap .save').addClass('saveText__active');
            } 
            return currentName;
        },
        options: [
            { text: 'Мультипаспорт', value: 'passShow', status: true },
            { text: 'Вызов администрации', value: 'reportShow', status: true },
            { text: 'Эмоции', value: 'animateShow', status: false },
            { text: 'Навыки персонажа', value: 'skillsShow', status: true },
            { text: 'Фильтр GPS', value: 'mapSettingsShow', status: true},
            { text: 'Настройка быстрых эмоций', value: 'settingsAnimShow', status: false},
            { text: 'Настройка клавиш', value: 'keySettingsShow', status: true},
            { text: 'Настройки аккаунта', value: 'settingsShow', status: true}
        ],
        animations: [
            { title: 'Искать', dict: 'amb@prop_human_bum_bin@idle_b', name: 'idle_d' },
            { title: 'Чинить наверху', dict: 'amb@prop_human_movie_bulb@base', name: 'base' },
            { title: 'Чинить', dict: 'amb@prop_human_movie_studio_light@base', name: 'base' },
            { title: 'Подтягиваться', dict: 'amb@prop_human_muscle_chin_ups@male@base', name: 'base' },
            { title: 'Рассматривать руки', dict: 'amb@prop_human_parking_meter@female@base', name: 'base_female' },
            { title: 'Сесть на стул', dict: 'amb@prop_human_seat_chair_drink@male@generic@base', name: 'base' },
            { title: 'Нога на ногу', dict: 'amb@prop_human_seat_chair_food@female@base', name: 'base' },
            { title: 'Сесть, раздвинув ноги', dict: 'amb@prop_human_seat_chair_food@male@base', name: 'base' },
            { title: 'Сидеть за компьютером', dict: 'amb@prop_human_seat_computer@male@base', name: 'base' },
            { title: 'Пить кофе', dict: 'amb@world_human_drinking@coffee@female@base', name: 'base' },
            { title: 'Окучивать грядки', dict: 'amb@world_human_gardener_plant@male@base', name: 'base' },
            { title: 'Стоять, скрестив руки', dict: 'amb@world_human_golf_player@male@base', name: 'base' },
            { title: 'Бить молотком', dict: 'amb@world_human_hammering@male@base', name: 'base' },
            { title: 'Руки на груди', dict: 'amb@world_human_hang_out_street@female_arms_crossed@base', name: 'base' },
            { title: 'Руки в боки', dict: 'amb@world_human_hang_out_street@female_arm_side@idle_a', name: 'idle_a' },
            { title: 'Скромница', dict: 'amb@world_human_hang_out_street@female_hold_arm@base', name: 'base' },
            { title: 'Стойка копа', dict: 'amb@world_human_hang_out_street@male_b@base', name: 'base' },
            { title: 'Стойка 1', dict: 'amb@world_human_hang_out_street@male_c@base', name: 'base' },
            { title: 'Курить', dict: 'amb@world_human_hang_out_street@male_c@idle_a', name: 'idle_a' },
            { title: 'Бег на месте', dict: 'amb@world_human_jog_standing@male@base', name: 'base' },
            { title: 'Уставший бег на месте', dict: 'amb@world_human_jog_standing@male@fitidle_a', name: 'idle_a' },
            { title: 'Опереться о стену', dict: 'amb@world_human_leaning@female@coffee@base', name: 'base' },
            { title: 'Курить 2', dict: 'amb@world_human_leaning@female@smoke@base', name: 'base' },
            { title: 'Опереться попой', dict: 'amb@world_human_leaning@female@wall@back@holding_elbow@base', name: 'base' },
            { title: 'Задуматься', dict: 'amb@world_human_leaning@female@wall@back@mobile@base', name: 'base' },
            { title: 'Играть в телефоне', dict: 'amb@world_human_leaning@female@wall@back@texting@base', name: 'base' },
            { title: 'Сниматься', dict: 'amb@world_human_leaning@male@wall@back@foot_up@base', name: 'base' },
            { title: 'Стойка охранника', dict: 'amb@world_human_leaning@male@wall@back@hands_together@base', name: 'base' },
            { title: 'Сесть на стол', dict: 'amb@world_human_seat_wall_eating@female@sandwich_right_hand@base', name: 'base' },
            { title: 'Фонарик', dict: 'amb@world_human_security_shine_torch@male@idle_a', name: 'idle_a' },
            { title: 'Курить косяк', dict: 'amb@world_human_smoking_pot@female@base', name: 'base' },
            { title: 'Качать пресс', dict: 'amb@world_human_sit_ups@male@base', name: 'base' },
            { title: 'Удочка', dict: 'amb@world_human_stand_fishing@idle_a', name: 'idle_c' },
            { title: 'Говорить по телефону', dict: 'amb@world_human_stand_mobile@male@standing@call@base', name: 'base' },
            { title: 'Апплодисменты', dict: 'amb@world_human_strip_watch_stand@male_a@idle_a', name: 'idle_a' },
            { title: 'Танец', dict: 'amb@world_human_strip_watch_stand@male_b@base', name: 'base' },
            { title: 'Танец с пивом', dict: 'amb@world_human_strip_watch_stand@male_c@base', name: 'base' },
            { title: 'Сесть на песок', dict: 'amb@world_human_stupor@male@idle_a', name: 'idle_c' },
            { title: 'Лечь на песок', dict: 'amb@world_human_stupor@male_looking_left@idle_a', name: 'idle_a' },
            { title: 'Лечь на живот', dict: 'amb@world_human_sunbathe@female@front@idle_a', name: 'idle_c' },
            { title: 'Лечь на спину', dict: 'amb@world_human_sunbathe@male@back@idle_a', name: 'idle_a' },
            { title: 'Руки вверх', dict: 'anim@move_hostages@male', name: 'male_idle' },
            { title: 'Спрятаться', dict: 'anim@move_hostages@male', name: 'male_idle_to_cower' },
            { title: 'Facepalm', dict: 'anim@mp_player_intcelebrationfemale@face_palm', name: 'face_palm' },
            { title: 'Рокер', dict: 'anim@mp_player_intcelebrationfemale@air_guitar', name: 'air_guitar' },
            { title: 'Скибиди', dict: 'anim@mp_player_intcelebrationfemale@air_shagging', name: 'air_shagging' },
            { title: 'Воздушный поцелуй', dict: 'anim@mp_player_intcelebrationfemale@blow_kiss', name: 'blow_kiss' },
            { title: 'Арам-зам-зам', dict: 'anim@mp_player_intcelebrationfemale@chicken_taunt', name: 'chicken_taunt' },
            { title: 'Кокетка', dict: 'anim@mp_player_intcelebrationfemale@jazz_hands', name: 'jazz_hands' },
            { title: 'Кокетка 2', dict: 'anim@mp_player_intcelebrationfemale@no_way', name: 'no_way' },
            { title: '2 $', dict: 'anim@mp_player_intcelebrationfemale@peace', name: 'peace' },
            { title: 'Сарказм', dict: 'anim@mp_player_intcelebrationfemale@slow_clap', name: 'slow_clap' }
        ],
        pass: {},
        autoLogin: 0,
        countsArr: []
    },
    methods: {   
        pushBusinessGeo(json,divisor)
        {
            let element = JSON.parse(json);   
            element.sort((prev, next) => {
                next.name.replace('Бизнес: ','');
                prev.name.replace('Бизнес: ','');
                if ( prev.name < next.name ) return -1;
                if ( prev.name < next.name ) return 1;
            });    
            console.log(element,element.length); 
            let count = element.length / divisor;
            count = Math.ceil(count);
            console.log(count);
            let currentIndex = 0;
            $(element).each(function(index,item)
            {
                item.id = index;
                if(index == 0)
                {
                    menu.countsArr[currentIndex] = [];
                }
                menu.countsArr[currentIndex].push(item);                
                console.log(currentIndex);
                let checkIndex = index+1;
                if(checkIndex % divisor == 0 && index != 0)
                {
                    currentIndex++;
                    menu.countsArr[currentIndex] = [];
                }
            });            
            console.log(menu.countsArr,currentIndex);
            $(menu.countsArr).each(function(index,item){
                let template = `<div class="gps-business-item" data-index="${index}">${item[0].id} - ${item[item.length-1].id}</div>`;
                $('.gps-business').append(template);
            });  
            $('.gps-item, .gps-house, .gps-business-item').on('click',function(){
                menu.saveButtonState = false;
                if($(this).hasClass('active'))
                {
                    $(this).removeClass('active');
                }
                else
                {        
                    console.log($(`.map-settings .active`));
                    $(`.map-settings .active`).removeClass('active');
                    $(this).addClass('active');
                }
            });           
        },  
        closePassport()
        {
            $('.passport-wrap').fadeOut();
        },
        clickClose(){
            mp.trigger('closePassport');
        },
        switching (section){
            switch (section) {
                case 'passShow':
                    this.settingsShow = false;
                    this.reportShow = false;
                    this.animateShow = false;
                    this.skillsShow = false;
                    animCircle.settingsAnimShow = false;
                    this.animateSettingsShow = false;
                    this.mapSettingsShow = false;
                    this.keySettingsShow = false;
                    switch (this.passShow) {
                        case true:
                            this.passShow = false;
                            break;
                        case false: 
                            this.passShow = true;                            
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                                {
                                    $(item).fadeIn(500); 
                                }
                            });
                            break;
                    }
                    break;
                case 'skillsShow':
                    this.passShow = false;
                    this.settingsShow = false;
                    this.reportShow = false;
                    this.animateShow = false;
                    animCircle.settingsAnimShow = false;
                    this.animateSettingsShow = false;
                    this.mapSettingsShow = false;
                    this.keySettingsShow = false;
                    switch (this.skillsShow) {
                        case true:
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                                {
                                    $(item).fadeIn(500); 
                                }
                            });
                            this.skillsShow = false;
                            break;
                        case false: 
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                                {
                                    $(item).css('display','none'); 
                                }
                            });
                            this.skillsShow = true;
                            break;
                    }
                    break;
                case 'settingsShow':
                    this.passShow = false;
                    this.reportShow = false;
                    this.animateShow = false;
                    this.skillsShow = false;
                    animCircle.settingsAnimShow = false;
                    this.animateSettingsShow = false;
                    this.mapSettingsShow = false;
                    this.keySettingsShow = false;
                    switch (this.settingsShow) {
                        case true:
                            this.settingsShow = false;
                            break;
                        case false: 
                            this.settingsShow = true;
                            break;
                    }
                    break;
                case 'mapSettingsShow':
                this.passShow = false;
                this.reportShow = false;
                this.animateShow = false;
                this.skillsShow = false;
                animCircle.settingsAnimShow = false;
                this.animateSettingsShow = false;
                this.settingsShow = false;
                this.keySettingsShow = false;
                switch (this.mapSettingsShow) {
                    case true:                        
                       $('.categorie-title').each(function(index,item){
                           if($(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                           {
                               $(item).fadeIn(500); 
                           }
                        });
                        this.mapSettingsShow = false;
                        break;
                    case false: 
                        $('.categorie-title').each(function(index,item){
                           if($(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                           {
                               $(item).css('display','none'); 
                           }
                        });
                        this.gpsInit();
                        this.mapSettingsShow = true;
                        break;
                }
                break;
                case 'settingsAnimShow':
                    this.passShow = false;
                    this.reportShow = false;
                    this.animateShow = false;
                    this.settingsShow = false;
                    this.skillsShow = false;
                    this.mapSettingsShow = false;
                    this.keySettingsShow = false;
                    switch (animCircle.settingsAnimShow) {
                        case true:
                            animCircle.settingsAnimShow = false;
                            this.animateSettingsShow = false;
                            break;
                        case false: 
                            animCircle.settingsAnimShow = true;
                            break;
                    }
                    break;
                case 'reportShow':
                    this.passShow = false;
                    this.settingsShow = false;
                    this.animateShow = false;
                    this.skillsShow = false;
                    animCircle.settingsAnimShow = false;
                    this.animateSettingsShow = false;
                    this.mapSettingsShow = false;
                    this.keySettingsShow = false;
                    $('.report-wrap textarea').val('');
                    $('.report-btn').removeClass('disabled');
                    switch (this.reportShow) {
                        case true:
                            this.reportShow = false;
                            break;
                        case false: 
                            this.reportShow = true;                            
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                                {
                                    $(item).fadeIn(500); 
                                }
                            });
                            break;
                    }
                    break;
                case 'animateShow':
                    this.passShow = false;
                    this.settingsShow = false;
                    this.reportShow = false;
                    this.skillsShow = false;
                    this.animateSettingsShow = false;
                    animCircle.settingsAnimShow = false;
                    this.mapSettingsShow = false;
                    this.keySettingsShow = false;
                    switch (this.animateShow) {
                        case true:
                            this.animateShow = false;
                            break;
                        case false: 
                            this.animateShow = true;                            
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                                {
                                    $(item).fadeIn(500); 
                                }
                            });
                            break;
                    }
                    break;
                case 'keySettingsShow':
                    this.passShow = false;
                    this.settingsShow = false;
                    this.reportShow = false;
                    this.skillsShow = false;
                    this.animateSettingsShow = false;
                    animCircle.settingsAnimShow = false;
                    this.mapSettingsShow = false;
                    this.animateShow = false;
                    switch (this.keySettingsShow) {
                        case true:
                            this.keySettingsShow = false;
                            break;
                        case false: 
                            this.keySettingsShow = true;                            
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                                {
                                    $(item).fadeIn(500); 
                                }
                            });
                            break;
                    }
                    break;
            }
        },  
        autoLoginF (value){
            switch (value) {
                case 'on': 
                    this.autoLogin = 1;
                    break;
                case 'off':
                    this.autoLogin = 0;
                    break;
            }
            this.saveButtonState = false;
        },        
        saveCurrentKey ()
        {
            let currentKeyCode = parseInt($('.getKeyCode-wrap .currentKey').attr('data-key')),
                currentIndex = parseInt($('.getKeyCode-wrap .currentKey').attr('data-index')),
                currentKey = this.getKeyTitle(currentKeyCode);
            console.log(currentKey);
            let error = false;
            $(this.actionList).each(function(index,item){
                if(currentKeyCode == item.keyCode)
                {
                    error = true;
                    $('.getKeyCode-wrap .save').addClass('saveText__active');
                }
            });
            if(currentKey != 'Запрещено' && !error)
            {
                this.actionList[currentIndex].keyCode = currentKeyCode;
                this.actionList[currentIndex].title = this.getKeyTitle(currentKeyCode,'menu');
                this.keyChangeSettingsShow = false;
                this.saveButtonState = true;
                console.log(this.actionList);
                mp.trigger('currentKeys',JSON.stringify(this.actionList));
            }
            else
            {
                console.log('wrongKey');
            }
        },
        save (value) {
            this.saveButtonState = true;
            this.settingsShow = false;
            mp.trigger("settingsSave.client", this.autoLogin);
        },
        gpsFilter()
        {        
            this.saveButtonState = true;
            $(this.gpsFilterArr).each(function(index,item){
                if(index == 0)
                {
                    if($(`.gps-house.active`).length != 0)
                    {
                        menu.gpsFilterArr[0] = $(`.gps-house.active`).text();
                    }
                    else
                    {
                        menu.gpsFilterArr[0] = false;
                    }
                }
                else if(index == 4)
                {
                    if($(`.gps-business-item.active`).length != 0)
                    {
                        let currentId = parseInt($(`.gps-business-item.active`).attr('data-index'));
                        menu.gpsFilterArr[4] = JSON.stringify(menu.countsArr[currentId]);
                    }
                    else
                    {
                        menu.gpsFilterArr[4] = false;
                    }
                }
                else
                {
                    let currentItem = -1;
                    if(index == 1)
                    {
                        currentItem = 0;
                    }
                    if(index == 2)
                    {
                        currentItem = 1;
                    }
                    if(index == 3)
                    {
                        currentItem = 2;
                    }
                    if(index == 5)
                    {
                        currentItem = 3;
                    }
                    if($(`.gps-item:eq(${currentItem})`).hasClass('active'))
                    {
                        menu.gpsFilterArr[index] = true;
                    }
                    else
                    {
                        menu.gpsFilterArr[index] = false;
                    }
                }
            });
            console.log(this.gpsFilterArr);
            this.mapSettingsShow = false;
            $('.categorie-title').each(function(index,item){
                if($(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'settingsAnimShow' || $(item).attr('data-id') == 'keySettingsShow')
                {
                    $(item).fadeIn(500); 
                }
            });
            mp.trigger('gpsFilter',JSON.stringify(this.gpsFilterArr));
        },
        gpsInit(array)
        {
            if(typeof array != 'undefined')
            {
                this.gpsFilterArr = JSON.parse(array);
            }
            $(this.gpsFilterArr).each(function(index,item){
                if(index != 0 && index != 4)
                {
                    let currentItem = -1;
                    if(index == 1)
                    {
                        currentItem = 0;
                    }
                    if(index == 2)
                    {
                        currentItem = 1;
                    }
                    if(index == 3)
                    {
                        currentItem = 2;
                    }
                    if(index == 5)
                    {
                        currentItem = 3;
                    }
                    if(item)
                    {                    
                        console.log(index,'if');
                        $(`.gps-item:eq(${currentItem})`).addClass('active');                    
                    }
                    else
                    {
                        $(`.gps-item:eq(${currentItem})`).removeClass('active');
                    }
                }
                else
                {
                    if(typeof item == 'string')
                    {
                        let currentHouse = gpsHousesList.indexOf(item);
                        if(currentHouse != -1)
                        {
                            $(`.gps-houses .gps-house:eq(${currentHouse})`).addClass('active');
                        }
                    }
                }
            });
        },
        animate (dict, name) {
            this.animateShow = false;
            mp.trigger("animate.client", dict, name);
        },
        setFastAnim (id) {
            animCircle.fastAnimList[this.setFastAnimIndex].title = menu.animations[id].title;
            animCircle.fastAnimList[this.setFastAnimIndex].id = id;
            animCircle.fastAnimList[this.setFastAnimIndex].dict = menu.animations[id].dict;
            animCircle.fastAnimList[this.setFastAnimIndex].name = menu.animations[id].name;
            animCircle.fastAnimList[this.setFastAnimIndex].active = false;
            this.animateSettingsShow = false;
            mp.trigger("animCircleSave.client", id, this.setFastAnimIndex);
        }
    }
});
let gpsHousesList = [
    'Ранчо',
    'Дэвис',
    'Эль-Бурро',
    'МиррорПарк',
    'ВосточныйВайнвуд',
    'ЛяПуэрта',
    'ПляжВеспуччи',
    'КаналыВеспуччи',
    'Пилбокс-Хилл',
    'Дель-Перро',
    'Морнингвуд',
    'ТихоокеанскийБлеф',
    'РичардсМаджестик',
    'Веспуччи'
];
$(gpsHousesList).each(function(index,item){
    let template = `<div class="gps-house">${item}</div>`;
    $('.gps-houses').append(template);
});     
$('.map-settings .gps-category').on('click',function(){
    if(!$(this).next().is(':visible'))
    {
        $(this).next().slideDown();
    }
    else
    {
        $(this).next().slideUp();
    }
});  
function keypressUp(e){  
    if(menu.keyChangeSettingsShow)
    {
        console.log(e.keyCode);
        $('.getKeyCode-wrap .save').removeClass('saveText__active');
        $('.getKeyCode-wrap .currentKey').attr('data-key',e.keyCode).text(menu.getKeyTitle(e.keyCode));
    }
};
$('.report-btn').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        let currentText = $('.report-wrap textarea').val();
        console.log(currentText);
        menu.reportShow = false;
        $('.report-btn').addClass('disabled');
        mp.trigger('sendReport',currentText);
    }
});
$(window).on("keyup", keypressUp);
function categoryHide()
{
    $(`.categorie-wrap .categorie-title[data-id="animateShow"],
       .categorie-wrap .categorie-title[data-id="settingsAnimShow"]`)
    .parent().css('display','none');
}
$('.report-wrap textarea').keyup(function() {
	this.value = this.value.replace(/[^А-ЯЁа-яё0-9,.!? ]/g, '');
});