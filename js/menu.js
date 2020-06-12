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
        informShow: false,
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
            // console.log(currentIndex);
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
            { text: 'Справка', value: 'informShow', status: true},
            { text: 'Настройки аккаунта', value: 'settingsShow', status: true}
        ],
        animations: [
            { title: 'Искать', dict: 'amb@prop_human_bum_bin@idle_b', name: 'idle_d', group:"Общее"},
            { title: 'Чинить наверху', dict: 'amb@prop_human_movie_bulb@base', name: 'base', group:"Общее"},
            //{ title: 'Чинить', dict: 'amb@prop_human_movie_studio_light@base', name: 'base', group:"Общее"},
            { title: 'Подтягиваться', dict: 'amb@prop_human_muscle_chin_ups@male@base', name: 'base', group:"Общее"},
            { title: 'Рассматривать руки', dict: 'amb@prop_human_parking_meter@female@base', name: 'base_female', group:"Общее"},
            { title: 'Сесть на стул', dict: 'amb@prop_human_seat_chair_drink@male@generic@base', name: 'base', group:"Общее"},
            { title: 'Нога на ногу', dict: 'amb@prop_human_seat_chair_food@female@base', name: 'base', group:"Общее"},
            { title: 'Сесть, раздвинув ноги', dict: 'amb@prop_human_seat_chair_food@male@base', name: 'base', group:"Общее"},
            { title: 'Сидеть за компьютером', dict: 'amb@prop_human_seat_computer@male@base', name: 'base', group:"Общее"},
            //{ title: 'Пить кофе', dict: 'amb@world_human_drinking@coffee@female@base', name: 'base', group:"Общее"},
            { title: 'Окучивать грядки', dict: 'amb@world_human_gardener_plant@male@base', name: 'base', group:"Общее"},
            { title: 'Стоять, скрестив руки', dict: 'amb@world_human_golf_player@male@base', name: 'base', group:"Общее"},
            { title: 'Бить молотком', dict: 'amb@world_human_hammering@male@base', name: 'base', group:"Общее"},
            { title: 'Руки на груди', dict: 'amb@world_human_hang_out_street@female_arms_crossed@base', name: 'base', group:"Общее"},
            { title: 'Руки в боки', dict: 'amb@world_human_hang_out_street@female_arm_side@idle_a', name: 'idle_a', group:"Общее"},
            { title: 'Скромница', dict: 'amb@world_human_hang_out_street@female_hold_arm@base', name: 'base', group:"Общее"},
            { title: 'Стойка копа', dict: 'amb@world_human_hang_out_street@male_b@base', name: 'base', group:"Общее"},
            { title: 'Стойка 1', dict: 'amb@world_human_hang_out_street@male_c@base', name: 'base', group:"Общее"},
            //{ title: 'Курить', dict: 'amb@world_human_hang_out_street@male_c@idle_a', name: 'idle_a', group:"Общее"},
            { title: 'Бег на месте', dict: 'amb@world_human_jog_standing@male@base', name: 'base', group:"Общее"},
            { title: 'Уставший бег на месте', dict: 'amb@world_human_jog_standing@male@fitidle_a', name: 'idle_a', group:"Общее"},
            { title: 'Опереться о стену', dict: 'amb@world_human_leaning@female@coffee@base', name: 'base', group:"Общее"},
            { title: 'Курить 2', dict: 'amb@world_human_leaning@female@smoke@base', name: 'base', group:"Общее"},
            { title: 'Опереться попой', dict: 'amb@world_human_leaning@female@wall@back@holding_elbow@base', name: 'base', group:"Общее"},
            { title: 'Задуматься', dict: 'amb@world_human_leaning@female@wall@back@mobile@base', name: 'base', group:"Общее"},
            { title: 'Играть в телефоне', dict: 'amb@world_human_leaning@female@wall@back@texting@base', name: 'base', group:"Общее"},
            { title: 'Сниматься', dict: 'amb@world_human_leaning@male@wall@back@foot_up@base', name: 'base', group:"Общее"},
            { title: 'Стойка охранника', dict: 'amb@world_human_leaning@male@wall@back@hands_together@base', name: 'base', group:"Общее"},
            { title: 'Сесть на стол', dict: 'amb@world_human_seat_wall_eating@female@sandwich_right_hand@base', name: 'base', group:"Общее"},
            { title: 'Фонарик', dict: 'amb@world_human_security_shine_torch@male@idle_a', name: 'idle_a', group:"Общее"},
            { title: 'Курить косяк', dict: 'amb@world_human_smoking_pot@female@base', name: 'base', group:"Общее"},
            { title: 'Качать пресс', dict: 'amb@world_human_sit_ups@male@base', name: 'base', group:"Общее"},
            { title: 'Удочка', dict: 'amb@world_human_stand_fishing@idle_a', name: 'idle_c', group:"Общее"},
            { title: 'Говорить по телефону', dict: 'amb@world_human_stand_mobile@male@standing@call@base', name: 'base', group:"Общее"},
            { title: 'Апплодисменты', dict: 'amb@world_human_strip_watch_stand@male_a@idle_a', name: 'idle_a', group:"Общее"},
            { title: 'Танец', dict: 'amb@world_human_strip_watch_stand@male_b@base', name: 'base', group:"Общее"},
            //{ title: 'Танец с пивом', dict: 'amb@world_human_strip_watch_stand@male_c@base', name: 'base', group:"Общее"},
            { title: 'Сесть на песок', dict: 'amb@world_human_stupor@male@idle_a', name: 'idle_c', group:"Общее"},
            { title: 'Лечь на песок', dict: 'amb@world_human_stupor@male_looking_left@idle_a', name: 'idle_a', group:"Общее"},
            { title: 'Лечь на живот', dict: 'amb@world_human_sunbathe@female@front@idle_a', name: 'idle_c', group:"Общее"},
            { title: 'Лечь на спину', dict: 'amb@world_human_sunbathe@male@back@idle_a', name: 'idle_a', group:"Общее"},
            { title: 'Руки вверх', dict: 'anim@move_hostages@male', name: 'male_idle', group:"Общее"},
            { title: 'Спрятаться', dict: 'anim@move_hostages@male', name: 'male_idle_to_cower', group:"Общее"},
            { title: 'Facepalm', dict: 'anim@mp_player_intcelebrationfemale@face_palm', name: 'face_palm', group:"Общее"},
            { title: 'Рокер', dict: 'anim@mp_player_intcelebrationfemale@air_guitar', name: 'air_guitar', group:"Общее"},
            { title: 'Скибиди', dict: 'anim@mp_player_intcelebrationfemale@air_shagging', name: 'air_shagging', group:"Общее"},
            { title: 'Воздушный поцелуй', dict: 'anim@mp_player_intcelebrationfemale@blow_kiss', name: 'blow_kiss', group:"Общее"},
            { title: 'Арам-зам-зам', dict: 'anim@mp_player_intcelebrationfemale@chicken_taunt', name: 'chicken_taunt', group:"Общее"},
            { title: 'Кокетка', dict: 'anim@mp_player_intcelebrationfemale@jazz_hands', name: 'jazz_hands', group:"Общее"},
            { title: 'Кокетка 2', dict: 'anim@mp_player_intcelebrationfemale@no_way', name: 'no_way', group:"Общее"},
            { title: '2 $', dict: 'anim@mp_player_intcelebrationfemale@peace', name: 'peace', group:"Общее"},
            { title: 'Сарказм', dict: 'anim@mp_player_intcelebrationfemale@slow_clap', name: 'slow_clap', group:"Общее"},
        
            //{ dict:"amb@code_human_in_bus_passenger_idles@male@sit@idle_a", name:"idle_a", title:"Сидеть покачиваясь", group:"Сидячие анимации"},
            { dict:"amb@code_human_in_bus_passenger_idles@female@sit@base", name:"base", title:"Сидеть", group:"Сидячие анимации"},
            { dict:"amb@incar@male@patrol@base", name:"base", title:"Сидеть сложив руки", group:"Сидячие анимации"},
            { dict:"amb@lo_res_idles@", name:"prop_human_deckchair_female_lo_res_base", title:"Нога на ногу", group:"Сидячие анимации"},
            { dict:"amb@lo_res_idles@", name:"prop_human_deckchair_male_lo_res_base", title:"Откинуться", group:"Сидячие анимации"},
            { dict:"amb@lo_res_idles@", name:"prop_human_sunlounger_lo_res_base", title:"На лежаке", group:"Сидячие анимации"},
            { dict:"amb@lo_res_idles@", name:"world_human_picnic_female_lo_res_base", title:"На пикнике (Женщина)", group:"Сидячие анимации"},
            { dict:"amb@lo_res_idles@", name:"world_human_picnic_male_lo_res_base", title:"На пикнике (Мужчина)", group:"Сидячие анимации"},
            { dict:"amb@prop_human_seat_bar@female@elbows_on_bar@idle_b", name:"idle_d", title:"В баре", group:"Сидячие анимации"},
            { dict:"amb@prop_human_seat_strip_watch@female@base", name:"base", title:"Ожидать", group:"Сидячие анимации"},
            { dict:"amb@prop_human_seat_sunlounger@female@idle_a", name:"idle_a", title:"На лежаке (Женщина)", group:"Сидячие анимации"},
            { dict:"timetable@trevor@smoking_meth@idle_a", name:"idle_a", title:"Курить на диване", group:"Сидячие анимации"},
            { dict:"amb@world_human_stupor@male@base", name:"base", title:"Отчаяться", group:"Сидячие анимации"},
            { dict:"amb@world_human_stupor@male_looking_left@base", name:"base", title:"Облокотившись к стенке", group:"Сидячие анимации"},
            { dict:"amb@prop_human_seat_chair@female@legs_crossed@react_shock", name:"forward", title:"Сидеть скрестив ноги", group:"Сидячие анимации"},
            { dict:"missfbi3ig_0", name:"shit_loop_trev", title:"Диарея", group:"Сидячие анимации"},
            { dict:"anim@miss@low@fin@lamar@", name:"idle", title:"Пригнуться", group:"Сидячие анимации"},
            { dict:"anim@amb@yacht@jacuzzi@seated@female@variation_01@", name:"base", title:"В джакузи", group:"Сидячие анимации"},
            { dict:"anim@heists@prison_heistig_5_p1_rashkovsky_idle", name:"idle", title:"Плохое состояние", group:"Сидячие анимации"},
            { dict:"anim@heists@ornate_bank@hostages@ped_c@", name:"fail", title:"Заложник", group:"Сидячие анимации"},
        
            //{ dict:"amb@lo_res_idles@", name:"world_human_bum_slumped_left_lo_res_base", title:"Лежать на левом боку", group:"Лежачие анимации:"},
            { dict:"amb@lo_res_idles@", name:"world_human_bum_slumped_right_lo_res_base", title:"Лежать на правом боку", group:"Лежачие анимации:"},
            { dict:"amb@lo_res_idles@", name:"world_human_sit_ups_lo_res_base", title:"Лежать на спине", group:"Лежачие анимации:"},
            { dict:"amb@world_human_bum_slumped@male@laying_on_right_side@base", name:"base", title:"Клубок", group:"Лежачие анимации:"},
            { dict:"anim@amb@nightclub@lazlow@lo_sofa@", name:"lowsofa_dlg_crying_laz", title:"На диване", group:"Лежачие анимации:"},
            { dict:"amb@world_human_sunbathe@female@back@base", name:"base", title:"Загорать", group:"Лежачие анимации:"},
        
            { dict:"amb@lo_res_idles@", name:"world_human_lean_female_holding_elbow_lo_res_base", title:"Облокотиться", group:"Анимации у стенки:"},
            { dict:"amb@lo_res_idles@", name:"world_human_lean_male_foot_up_lo_res_base", title:"Облоктотить ногу", group:"Анимации у стенки:"},
            { dict:"amb@world_human_leaning@female@smoke@idle_a", name:"idle_b", title:"Курить у стенки", group:"Анимации у стенки:"},
            { dict:"amb@world_human_leaning@female@wall@back@texting@idle_a", name:"idle_a", title:"Играть в телефоне", group:"Анимации у стенки:"},
            { dict:"anim@amb@clubhouse@bar@bartender@", name:"base_bartender", title:"Облокотиться у стойки", group:"Анимации у стенки:"},
            { dict:"anim@amb@nightclub@dancers@club_ambientpeds@", name:"li-mi_amb_club_06_base_female^2", title:"Облокотиться на стойку", group:"Анимации у стенки:"},
            { dict:"anim@heists@prison_heiststation@cop_reactions", name:"drunk_idle", title:"Отдыхать на стойке", group:"Анимации у стенки:"},
            { dict:"anim@mini@yacht@bar@drink@four", name:"four_bartender", title:"Руки на столе", group:"Анимации у стенки:"},
            { dict:"amb@world_human_hammering@male@base", name:"base", title:"Стучать в дверь", group:"Анимации у стенки:"},
        
            //{ dict:"amb@world_human_jog_standing@female@base", name:"base", title:"Пританцовывая", group:"Анимации танцев:"},
            { dict:"amb@world_human_jog_standing@female@idle_a", name:"idle_a", title:"Активно пританцовывая", group:"Анимации танцев:"},
            { dict:"amb@world_human_partying@female@partying_beer@base", name:"base", title:"Медленно пританцовывая", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_facedj@", name:"hi_dance_facedj_09_v1_female^1", title:"Танец на месте", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_facedj@", name:"hi_dance_facedj_09_v1_female^2", title:"Танец из стороны в сторону", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_facedj@", name:"hi_dance_facedj_09_v2_female^1", title:"Танец тазом", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_facedj@", name:"hi_dance_facedj_09_v2_female^3", title:"Танец всем телом", group:"Анимации танцев:"},
            { dict:"mini@strip_club@private_dance@part3", name:"priv_dance_p3", title:"Приватный танец", group:"Анимации танцев:"},
            { dict:"mini@strip_club@private_dance@part2", name:"priv_dance_p2", title:"Эротический танец", group:"Анимации танцев:"},
            { dict:"mini@strip_club@private_dance@idle", name:"priv_dance_idle", title:"Танец живота", group:"Анимации танцев:"},
            { dict:"mini@strip_club@pole_dance@pole_enter", name:"pd_enter", title:"Танец на шесте", group:"Анимации танцев:"},
            { dict:"mini@strip_club@pole_dance@pole_dance3", name:"pd_dance_03", title:"На шесте с шапагатом", group:"Анимации танцев:"},
            { dict:"mini@strip_club@pole_dance@pole_dance3", name:"pd_dance_03", title:"Эротичный танец на шесте", group:"Анимации танцев:"},
            { dict:"mini@strip_club@backroom@", name:"stripper_b_backroom_idle_b", title:"Трясти дынями", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_groups@", name:"hi_dance_crowd_17_v1_female^2", title:"Танец 1", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_facedj_transitions@from_hi_intensity", name:"trans_dance_facedj_hi_to_mi_11_v1_female^6", title:"Танец 15", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_facedj_transitions@", name:"trans_dance_facedj_mi_to_li_09_v1_female^6", title:"Танец 16", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@black_madonna_entourage@", name:"hi_dance_facedj_09_v2_male^5", title:"Разогрев", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@black_madonna_entourage@", name:"li_dance_facedj_11_v1_male^1", title:"Медленный танец", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_facedj@", name:"hi_dance_facedj_09_v1_male^4", title:"Активный танец", group:"Анимации танцев:"},
            { dict:"special_ped@mountain_dancer@monologue_3@monologue_3a", name:"mnt_dnc_buttwag", title:"Чечётка", group:"Анимации танцев:"},
            { dict:"anim@mp_player_intcelebrationmale@dj", name:"dj", title:"DJ", group:"Анимации танцев:"},
            { dict:"anim@mp_player_intcelebrationmale@air_synth", name:"air_synth", title:"Игра на синтезаторе", group:"Анимации танцев:"},
            { dict:"anim@mp_player_intcelebrationfemale@uncle_disco", name:"uncle_disco", title:"Диско", group:"Анимации танцев:"},
            { dict:"anim@mp_player_intcelebrationfemale@salsa_roll", name:"salsa_roll", title:"Сальса", group:"Анимации танцев:"},
            { dict:"anim@mp_player_intcelebrationfemale@find_the_fish", name:"find_the_fish", title:"Волна", group:"Анимации танцев:"},
            { dict:"anim@mp_player_intcelebrationfemale@chicken_taunt", name:"chicken_taunt", title:"Цыплёнок", group:"Анимации танцев:"},
            { dict:"anim@mp_player_intcelebrationfemale@banging_tunes", name:"banging_tunes", title:"Заводить толпу", group:"Анимации танцев:"},
            { dict:"missfbi3_sniping", name:"dance_m_default", title:"Читать реп", group:"Анимации танцев:"},
            { dict:"mini@strip_club@idles@dj@base", name:"base", title:"За пультом DJ 1", group:"Анимации танцев:"},
            { dict:"mini@strip_club@idles@dj@idle_02", name:"idle_02", title:"За пультом DJ 2", group:"Анимации танцев:"},
            { dict:"mini@strip_club@idles@dj@idle_04", name:"idle_04", title:"За пультом DJ 3", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_groups@", name:"hi_dance_crowd_15_v2_male^1", title:"Танец 1", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_facedj_transitions@from_hi_intensity", name:"trans_dance_facedj_hi_to_mi_09_v1_male^4", title:"Танец 2", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@dancers@crowddance_facedj_transitions@", name:"trans_dance_facedj_mi_to_li_09_v1_male^4", title:"Танец 3", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_podium@", name:"danceidle_hi_11_turnaround_laz", title:"Танец 4", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_podium@", name:"danceidle_hi_15_crazyrobot_laz", title:"Танец 5", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_podium@", name:"danceidle_hi_17_smackthat_laz", title:"Танец 6", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_podium@", name:"danceidle_hi_17_spiderman_laz", title:"Танец 7", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_podium@", name:"danceidle_mi_11_hippain_laz", title:"Танец 8", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_podium@", name:"danceidle_mi_11_pointthrust_laz", title:"Танец 9", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_podium@", name:"danceidle_mi_15_robot_laz", title:"Танец 10", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_podium@", name:"danceidle_mi_15_shimmy_laz", title:"Танец 11", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_chair@", name:"seatedidle_hi_15_handsup_laz", title:"Танец 12", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_chair@", name:"seatedidle_hi_13_armswirl_laz", title:"Танец 13", group:"Анимации танцев:"},
            { dict:"anim@amb@nightclub@lazlow@hi_chair@", name:"seatedidle_hi_11_handpump_laz", title:"Танец 14", group:"Анимации танцев:"},
        
            //{ dict:"amb@prop_human_muscle_chin_ups@male@base", name:"base", title:"Подтягивание", group:"Анимации спорта:"},
            { dict:"amb@world_human_yoga@female@base", name:"base_c", title:"Йога Ж", group:"Анимации спорта:"},
            { dict:"amb@world_human_yoga@male@base", name:"base_a", title:"Йога М", group:"Анимации спорта:"},
            { dict:"amb@world_human_muscle_flex@arms_at_side@idle_a", name:"idle_a", title:"Мускулы", group:"Анимации спорта:"},
            { dict:"anim@mp_player_intcelebrationfemale@knuckle_crunch", name:"knuckle_crunch", title:"Разминать костяшки", group:"Анимации спорта:"},
            { dict:"amb@world_human_jog_standing@male@base", name:"base", title:"Разминка на месте", group:"Анимации спорта:"},
            { dict:"amb@world_human_jog@male@idle_a", name:"idle_c", title:"Пробежка с разминкой", group:"Анимации спорта:"},
            { dict:"missfam5_yoga", name:"b4_fail_to_start", title:"Йога Б4 фейл", group:"Анимации спорта:"},
            { dict:"missfam5_yoga", name:"b4_pose", title:"Йога Б4", group:"Анимации спорта:"},
            { dict:"mini@triathlon", name:"idle_a", title:"Разминка 1", group:"Анимации спорта:"},  
            { dict:"mini@triathlon", name:"idle_b", title:"Разминка 2", group:"Анимации спорта:"},
            { dict:"mini@triathlon", name:"idle_c", title:"Разминка 3", group:"Анимации спорта:"},
            { dict:"mini@triathlon", name:"idle_d", title:"Разминка 4", group:"Анимации спорта:"},
            { dict:"mini@triathlon", name:"idle_e", title:"Разминка 5", group:"Анимации спорта:"},
            { dict:"mini@triathlon", name:"idle_f", title:"Разминка 6", group:"Анимации спорта:"},
            { dict:"anim@sports@ballgame@handball@", name:"ball_rstop_l", title:"Прыгнуть вперёд", group:"Анимации спорта:"},
            { dict:"amb@world_human_push_ups@male@base", name:"base", title:"Отжимания", group:"Анимации спорта:"},
            { dict:"amb@world_human_muscle_free_weights@male@barbell@base", name:"base", title:"Тягать штангу", group:"Анимации спорта:"},
            { dict:"amb@world_human_muscle_flex@arms_at_side@idle_a", name:"idle_c", title:"Мускулы", group:"Анимации спорта:"},
        
            //{ dict:"timetable@amanda@ig_9", name:"ig_9_base_amanda", title:"Руки на талию", group:"Анимации на месте:"},
            { dict:"anim@miss@low@fin@vagos@", name:"idle_ped06", title:"Руки за спиной", group:"Анимации на месте:"},
            { dict:"anim@heists@prison_heiststation@cop_reactions", name:"cop_a_idle", title:"Стойка копа", group:"Анимации на месте:"},
            { dict:"anim@heists@heist_corona@single_team", name:"single_team_intro_boss", title:"Выслушивать", group:"Анимации на месте:"},
            { dict:"amb@world_human_stand_guard@male@base", name:"base", title:"Стойка охраны", group:"Анимации на месте:"},
            { dict:"amb@world_human_stand_fire@male@base", name:"base", title:"Греться у костра", group:"Анимации на месте:"},
            { dict:"amb@world_human_hang_out_street@female_hold_arm@idle_a", name:"idle_c", title:"Застенчивая", group:"Анимации на месте:"},
            { dict:"misscarsteal4@toilet", name:"desperate_toilet_idle_a", title:"Нужда", group:"Анимации на месте:"},
            { dict:"missah_2_ext_altleadinout", name:"hack_loop", title:"У компьютера", group:"Анимации на месте:"},
            { dict:"mini@strip_club@idles@bouncer@base", name:"base", title:"Охрана", group:"Анимации на месте:"},
            { dict:"anim@mp_player_intupperface_palm", name:"idle_a_fp", title:"Рука лицо", group:"Анимации на месте:"},
            { dict:"anim@mp_player_intcelebrationfemale@raining_cash", name:"raining_cash", title:"Раскидывать деньги ", group:"Анимации на месте:"},
            { dict:"amb@world_human_drug_dealer_hard@male@idle_b", name:"idle_d", title:"Барыга", group:"Анимации на месте:"},
            { dict:"amb@world_human_cheering@male_a", name:"base", title:"Хлопать", group:"Анимации на месте:"},
            { dict:"amb@world_human_bum_freeway@male@base", name:"base", title:"С табличкой", group:"Анимации на месте:"},
            { dict:"amb@world_human_bum_wash@male@high@idle_a", name:"idle_c", title:"Мыться в озере 1", group:"Анимации на месте:"},
            { dict:"amb@world_human_bum_wash@male@high@idle_a", name:"idle_b", title:"Мыться в озере 2", group:"Анимации на месте:"},
            { dict:"amb@world_human_bum_wash@male@high@idle_a", name:"idle_a", title:"Мыться в озере 3", group:"Анимации на месте:"},
            { dict:"amb@world_human_bum_wash@male@low@base", name:"base", title:"Мыться в озере 4", group:"Анимации на месте:"},
            { dict:"amb@world_human_bum_standing@depressed@base", name:"base", title:"Стойка бомжа", group:"Анимации на месте:"},
        
            //{ dict:"anim@mp_player_intupperrock", name:"enter", title:"Рок", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intupperfinger", name:"enter", title:"Факи", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationmale@dock", name:"dock", title:"Проникновение", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationmale@bro_love", name:"bro_love", title:"Братская любовь", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationmale@air_shagging", name:"air_shagging", title:"Унижать", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationfemale@thumb_on_ears", name:"thumb_on_ears", title:"Дразнить", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationfemale@peace", name:"peace", title:"Пис", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationfemale@no_way", name:"no_way", title:"Грозить пальцем", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationfemale@blow_kiss", name:"blow_kiss", title:"Воздушные поцелуи", group:"Анимации - дразнилки:"},
            { dict:"switch@trevor@jerking_off", name:"trev_jerking_off_loop", title:"Фапать", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intselfiethe_bird", name:"idle_a", title:"Фак", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intincaryou_locobodhi@ds@", name:"idle_a_fp", title:"Сумасшедший", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intincarwankbodhi@ps@", name:"idle_a", title:"Трясти рукой", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intincarthumbs_upstd@ds@", name:"idle_a", title:"Класс", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intincarnose_pickbodhi@ds@", name:"idle_a", title:"Ковырять в носу", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intincarfingerbodhi@ds@", name:"idle_a", title:"Паравозик", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationpaired@f_f_sarcastic", name:"sarcastic_right", title:"Приклониться 1", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationpaired@m_m_sarcastic", name:"sarcastic_left", title:"Приклониться 2", group:"Анимации - дразнилки:"},
            { dict:"anim@mp_player_intcelebrationmale@wank", name:"wank", title:"Ловите!", group:"Анимации - дразнилки:"},
        
            //{ dict:"amb@code_human_wander_texting@male@base", name:"static", title:"В планшете", group:"Анимации для гаджетов:"},
        
            //{ dict:"mp_suicide", name:"pistol", title:"Застрелиться", group:"Анимации суицидов:"},
            { dict:"mp_suicide", name:"pill", title:"Съесть таблетку", group:"Анимации суицидов:"},
        
            //{ dict:"random@arrests", name:"idle_2_hands_up", title:"Поднять руки", group:"Анимации копов:"},
            { dict:"anim@mp_player_intincarsalutestd@ds@", name:"idle_a", title:"Отдать честь", group:"Анимации копов:"},
            { dict:"amb@world_human_cop_idles@female@idle_b", name:"idle_e", title:"Сложить руки", group:"Анимации копов:"},
            { dict:"amb@world_human_cop_idles@female@idle_b", name:"idle_d", title:"Руки на поясе", group:"Анимации копов:"},
            { dict:"amb@medic@standing@kneel@base", name:"base", title:"Осматривать", group:"Анимации копов:"},
            { dict:"amb@medic@standing@kneel@enter", name:"enter", title:"Полный осмотр ", group:"Анимации копов:"},
            { dict:"amb@medic@standing@timeofdeath@base", name:"base", title:"Блокнот 1", group:"Анимации копов:"},
            { dict:"amb@medic@standing@timeofdeath@enter", name:"enter", title:"Блокнот 2", group:"Анимации копов:"},
        
            //{ dict:"missfbi3_party_b", name:"walk_inside_male2", title:"Облокотиться на плечо", group:"Анимации отношений:"},
            { dict:"missfbi3_party_b", name:"walk_to_balcony_male2", title:"Обнять", group:"Анимации отношений:"},
        
            //{ dict:"mini@repair", name:"fixing_a_ped", title:"Чинить 1", group:"Анимации механиков:"},
            { dict:"mini@repair", name:"fixing_a_player", title:"Чинить 2", group:"Анимации механиков:"},
            { dict:"amb@world_human_maid_clean@", name:"idle_c", title:"Протирать 1", group:"Анимации механиков:"},
            { dict:"amb@world_human_maid_clean@", name:"idle_d", title:"Протирать 2", group:"Анимации механиков:"},
            { dict:"amb@world_human_maid_clean@", name:"idle_e", title:"Протирать 3", group:"Анимации механиков:"},
        
            //{ dict:"amb@world_human_musician@bongos@male@base", name:"base", title:"Бонго", group:"Анимации музыки:"},
            { dict:"amb@world_human_musician@guitar@male@base", name:"base", title:"Гитара 1", group:"Анимации музыки:"},
            { dict:"amb@world_human_musician@guitar@male@idle_a", name:"idle_c", title:"Гитара 2", group:"Анимации музыки:"},
            { dict:"amb@world_human_musician@guitar@male@idle_a", name:"idle_b", title:"Гитара 3", group:"Анимации музыки:"}        
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
            // console.log(element,element.length); 
            let count = element.length / divisor;
            count = Math.ceil(count);
            // console.log(count);
            let currentIndex = 0;
            $(element).each(function(index,item)
            {
                item.id = index;
                if(index == 0)
                {
                    menu.countsArr[currentIndex] = [];
                }
                menu.countsArr[currentIndex].push(item);                
                // console.log(currentIndex);
                let checkIndex = index+1;
                if(checkIndex % divisor == 0 && index != 0)
                {
                    currentIndex++;
                    menu.countsArr[currentIndex] = [];
                }
            });            
            // console.log(menu.countsArr,currentIndex);
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
                    // console.log($(`.map-settings .active`));
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
                    this.informShow = false;
                    switch (this.passShow) {
                        case true:
                            this.passShow = false;
                            break;
                        case false: 
                            this.passShow = true;                            
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'informShow' || $(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
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
                    this.informShow = false;
                    switch (this.skillsShow) {
                        case true:
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'informShow' || $(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                                {
                                    $(item).fadeIn(500); 
                                }
                            });
                            this.skillsShow = false;
                            break;
                        case false: 
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'informShow' || $(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
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
                    this.informShow = false;
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
                this.informShow = false;
                switch (this.mapSettingsShow) {
                    case true:                        
                       $('.categorie-title').each(function(index,item){
                           if($(item).attr('data-id') == 'informShow' || $(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                           {
                               $(item).fadeIn(500); 
                           }
                        });
                        this.mapSettingsShow = false;
                        break;
                    case false: 
                        $('.categorie-title').each(function(index,item){
                           if($(item).attr('data-id') == 'informShow' || $(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
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
                    this.informShow = false;
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
                    this.informShow = false;
                    $('.report-wrap textarea').val('');
                    $('.report-btn').removeClass('disabled');
                    switch (this.reportShow) {
                        case true:
                            this.reportShow = false;
                            break;
                        case false: 
                            this.reportShow = true;                            
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'informShow' || $(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
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
                    this.informShow = false;
                    switch (this.animateShow) {
                        case true:
                            this.animateShow = false;
                            break;
                        case false: 
                            this.animateShow = true;                            
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'informShow' || $(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'keySettingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
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
                    this.informShow = false;
                    switch (this.keySettingsShow) {
                        case true:
                            this.keySettingsShow = false;
                            break;
                        case false: 
                            this.keySettingsShow = true;                            
                            $('.categorie-title').each(function(index,item){
                                if($(item).attr('data-id') == 'informShow' || $(item).attr('data-id') == 'settingsShow' || $(item).attr('data-id') == 'mapSettingsShow' || $(item).attr('data-id') == 'settingsAnimShow')
                                {
                                    $(item).fadeIn(500); 
                                }
                            });
                            break;
                    }
                    break;
                    case 'informShow':
                    this.passShow = false;
                    this.settingsShow = false;
                    this.reportShow = false;
                    this.skillsShow = false;
                    this.animateSettingsShow = false;
                    animCircle.settingsAnimShow = false;
                    this.mapSettingsShow = false;
                    this.animateShow = false;
                    this.keySettingsShow = false;
                    switch (this.informShow) {
                        case true:
                            this.informShow = false;
                            $('.mask').fadeOut();
                            break;
                        case false: 
                            this.informShow = true;   
                            $('.mask').fadeIn(); 
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
            // console.log(currentKey);
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
                // console.log(this.actionList);
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
            // console.log(this.gpsFilterArr);
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
                        // console.log(index,'if');
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
$(document).ready(function(){
    groupAnim('animation-1');
    groupAnim('animation-2');
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
            // console.log(e.keyCode);
            $('.getKeyCode-wrap .save').removeClass('saveText__active');
            $('.getKeyCode-wrap .currentKey').attr('data-key',e.keyCode).text(menu.getKeyTitle(e.keyCode));
        }
    };
    $('.report-btn').on('click',function(){
        if(!$(this).hasClass('disabled'))
        {
            let currentText = $('.report-wrap textarea').val();
            // console.log(currentText);
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
    $('.inform-wrap .buttons-block .button').on('click',function(){
        let id = this.id;
        $('.inform-wrap .inner-content').animate({scrollTop:0}, '500');
        if(id == 'playerMenu')
        {
            $('.inform-wrap .inner-content img').attr('src','img/info/player-menu.jpg');
        }
        if(id == 'circleMenu')
        {
            $('.inform-wrap .inner-content img').attr('src','img/info/circle-menu.jpg');
        }
    });
    $('.inform-wrap .close-but, .mask').on('click',function(){
        menu.informShow = false;
        $('.mask').fadeOut();
    });
    $('.button-wrapper .button').on('click',function(){
        if(!$(this).hasClass('active'))
        {
            let id = this.id;
            $('.inform-wrap .notice-screen .active, .inform-wrap .button-wrapper .active').removeClass('active');
            $(this).addClass('active');
            $(`.inform-wrap .notice-screen #${id}-wrapper`).addClass('active').animate({scrollTop:0},500);
            $('.inform-wrap .notice-title').text($(this).text());
        }
    });
    function fadeIn()
    {
        $('.passport-wrap').fadeIn();
    }
    function fadeOut()
    {
        $('.passport-wrap').fadeOut();
    }
    function groupAnim(wrapper)
    {
        let animDivList = $(`.${wrapper} .animation-name`),
            firstGroup = `<div class="anim-group-toogle" data-group="${$(animDivList[0]).attr('data-group')}"><span>${$(animDivList[0]).attr('data-group')}</span><i class="fas fa-arrow-down"></i></div>
                          <div data-group="${$(animDivList[0]).attr('data-group')}" class="anim-group"></div>`;
        $(`.${wrapper} .animation-wrap`).append(firstGroup);
        animDivList.each(function(index,item){
            let currentGroup = $(`.${wrapper} .anim-group[data-group="${$(item).attr('data-group')}"]`);
            if(currentGroup.length > 0)
            {
                console.log($(item).attr('data-group'), 'if')
                $(item).appendTo(currentGroup);
            }
            else
            {
                console.log($(item).attr('data-group'), 'else')
                let template = `<div class="anim-group-toogle" data-group="${$(item).attr('data-group')}"><span>${$(item).attr('data-group')}</span><i class="fas fa-arrow-down"></i></div>
                                <div data-group="${$(item).attr('data-group')}" class="anim-group">${item.outerHTML}</div>`;
                $(this).parent().append(template);
                $(item).remove();
            }            
        });
        initAnimGroup();
    }
    function initAnimGroup()
    {
        $('.anim-group-toogle').off().on('click',function(){
            let group = $(this).next();
            if(!$(group).is(':visible'))
            {   
                group.slideDown();
            }
            else
            {
                group.slideUp();
            }
        });
    }
});