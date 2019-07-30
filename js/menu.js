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
            { id: -1, title: 'Отсутствует', class: 'slot8', dict: '', name: '', active: false }
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
        skillsShow: false,
        reportShow: false,
        loginSetShow:false,
        animateShow: false,
        selectAnim: false,
        setFastAnimIndex: 0,
        animateSettingsShow: false,
        saveButtonState:false,
        isDisabled: false,
        options: [
            { text: 'Мультипаспорт', value: 'passShow', status: false },
            { text: 'Вызов администрации', value: 'reportShow', status: false },
            { text: 'Эмоции', value: 'animateShow', status: false },
            { text: 'Навыки персонажа', value: 'skillsShow', status: false },
            { text: 'Настройки аккаунта', value: 'settingsShow', status: false},
            { text: 'Настройка быстрых эмоций', value: 'settingsAnimShow', status: false},
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
        autoLogin: 0
    },
    methods: {        
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
                    switch (this.passShow) {
                        case true:
                            this.passShow = false;
                            break;
                        case false: 
                            this.passShow = true;
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
                    switch (this.skillsShow) {
                        case true:
                           $('.categorie-title').each(function(index,item){
                               if($(item).attr('data-id') == 'settingsShow')
                               {
                                   $(item).fadeIn(1000); 
                               }
                            });
                            this.skillsShow = false;
                            break;
                        case false: 
                            $('.categorie-title').each(function(index,item){
                               if($(item).attr('data-id') == 'settingsShow')
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
                    switch (this.settingsShow) {
                        case true:
                            this.settingsShow = false;
                            break;
                        case false: 
                            this.settingsShow = true;
                            break;
                    }
                    break;
                case 'settingsAnimShow':
                    this.passShow = false;
                    this.reportShow = false;
                    this.animateShow = false;
                    this.settingsShow = false;
                    this.skillsShow = false;
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
                    switch (this.reportShow) {
                        case true:
                            this.reportShow = false;
                            break;
                        case false: 
                            this.reportShow = true;
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
                    switch (this.animateShow) {
                        case true:
                            this.animateShow = false;
                            break;
                        case false: 
                            this.animateShow = true;
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
        save (value) {
            this.saveButtonState = true;
            mp.trigger("settingsSave.client", this.autoLogin);
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

