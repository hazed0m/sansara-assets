$('.cash, .card').on('click',function(){
    let clothesPrice = $('.buy-buttons .price span')[0].textContent;
    if(clothesPrice != 0)
    {
        $('#buy').removeClass('disabled');
    }
	$(this).each(function(index, item){
		if($(item).hasClass('active'))
		{
			$(item).removeClass('active');			
			$(item).find('i').removeClass('fas').addClass('far');
		}
		else
		{
			$('.cash, .card').each(function(index, item){
				if($(item).hasClass('active'))
				{
					$(item).removeClass('active');			
					$(item).find('i').removeClass('fas').addClass('far');
				}
			});
			$(item).addClass('active');
			$(item).find('i').removeClass('far').addClass('fas');
		}		
	});
});
$('#buy').on('click',function(){
    if(!$(this).hasClass('disabled'))
    {
        let mechanicalPrice = parseInt($('.buy-buttons .price span')[0].textContent);
        let cashService = $('.radio-block .active')[0].classList[0];
        let output = JSON.stringify(generateJsonOutput());
        $(this).addClass('disabled');
        modsRefresh();   
        if(mechanicalPrice != 0)
        {
            console.log("mechanicalBuyButton", cashService, mechanicalPrice, output);
            mp.trigger("mechanicalBuyButton", cashService, mechanicalPrice, output);
        }
    }
});
$('#cancel, #pass').on('click',function(){
	$(this).parents().find('.information').fadeOut();
});
$('.btn.exit').on('click',function(){
	// $('.container').fadeOut();
    mp.trigger("mechanicalExit");
});
const modsList = [      
    { name: 'spoilers',translatedName: 'спойлер',id:'0'},
    { name: 'frontBumper',translatedName: 'передний бампер',id:'1'},
    { name: 'rearBumper',translatedName: 'задний бампер',id:'2'},
    { name: 'sideSkirt',translatedName: 'юбка',id:'3'},
    // { name: 'exhaust',translatedName: 'выхлопная труба',id:'4'},
    // { name: 'frame',translatedName: 'рама',id:'5'},
    { name: 'grille',translatedName: 'решетка радиатора',id:'6'},
    { name: 'hood',translatedName: 'капот',id:'7'},
    { name: 'fender',translatedName: 'левое крыло',id:'8'},
    { name: 'rightFender',translatedName: 'правое крыло',id:'9'},
    { name: 'roof',translatedName: 'крыша',id:'10'},
    // { name: 'engine',translatedName: 'двигатель',id:'11'},
    // { name: 'brakes',translatedName: 'тормозные колодки',id:'12'},
    // { name: 'transmission',translatedName: 'трансмиссия',id:'13'},
    // { name: 'horns',translatedName: 'сигнал',id:'14'},
    { name: 'suspension',translatedName: 'подвеска',id:'15'},
    // { name: 'armor',translatedName: 'броня',id:'16'},
    // { name: 'turbo',translatedName: 'турбо',id:'18'},
    // { name: 'xenon',translatedName: 'ксенон',id:'22'},
    { name: 'frontWheels',translatedName: 'диски',id:'23'},
    { name: 'backWheels',translatedName: 'задние диски',id:'24'},
    // { name: 'plateholders',translatedName: 'держатели пластин',id:'25'},
    // { name: 'vanityPlates',translatedName: 'номерной знак',id:'26'},
    { name: 'trimDesign',translatedName: 'отделка салона',id:'27'},
    // { name: 'ornaments',translatedName: 'принт',id:'28'},
    // { name: 'dashboard',translatedName: 'панель',id:'29'},
    { name: 'dialDesign',translatedName: 'дизайн спидометра',id:'30'},
    // { name: 'doorSpeaker',translatedName: 'дверной динамик',id:'31'},
    { name: 'seats',translatedName: 'сиденья',id:'32'},
    { name: 'steeringWheel',translatedName: 'руль',id:'33'},
    // { name: 'shiftLever',translatedName: 'коробка передач',id:'34'},
    // { name: 'plaques',translatedName: 'диски',id:'35'},
    { name: 'speakers',translatedName: 'динамики',id:'36'},
    { name: 'trunk',translatedName: 'багажник',id:'37'},
    // { name: 'hydraulics',translatedName: 'гидроусилитель',id:'38'},
    // { name: 'engineBlock',translatedName: 'двигатель',id:'39'},
    // { name: 'airfilter',translatedName: 'воздушные фильтры',id:'40'},
    // { name: 'struts',translatedName: 'распорка',id:'41'},
    // { name: 'archCover',translatedName: 'арочное покрытие',id:'42'},
    // { name: 'aerials',translatedName: 'антенна',id:'43'},
    { name: 'trim',translatedName: 'отделка',id:'44'},
    { name: 'tank',translatedName: 'бак',id:'45'},
    { name: 'windows',translatedName: 'окна',id:'46'},
    // { name: 'unknown',translatedName: 'неизвестно',id:'47'},
    // { name: 'livery',translatedName: 'отраска',id:'48'},
    { name: 'windowTint',translatedName: 'тонировка',id:'55'},
    // { name: 'plate',translatedName: 'цвет дисков',id:'62'},
    { name: 'colour1',translatedName: 'основной цвет',id:'66'},
    { name: 'colour2',translatedName: 'дополнительный цвет',id:'67'},
    { name: 'dashboardColor',translatedName: 'цвет панели',id:'74'},
    { name: 'trimColor',translatedName: 'цвет салона',id:'75'}
    ],
    colorsList = [
        { id:134, name:'Pure White', hex:'#ffffff',rgb:'255, 255, 255'},
        { id:132, name:'Worn White', hex:'#fffffb',rgb:'255, 255, 251'},
        { id:111, name:'Metallic White', hex:'#fffff6',rgb:'255, 255, 246'},
        { id:88, name:'Metallic Taxi Yellow', hex:'#ffcf20',rgb:'255, 207, 32'},
        { id:42, name:'Matte Yellow', hex:'#ffc91f',rgb:'255, 201, 31'},
        { id:136, name:'Salmon pink', hex:'#fdd6cd',rgb:'253, 214, 205'},
        { id:131, name:'Matte White', hex:'#fcf9f1',rgb:'252, 249, 241'},
        { id:89, name:'Metallic Race Yellow', hex:'#fbe212',rgb:'251, 226, 18'},
        { id:124, name:'Worn Light Orange', hex:'#f9a458',rgb:'249, 164, 88'},
        { id:130, name:'Worn Orange', hex:'#f8b658',rgb:'248, 182, 88'},
        { id:107, name:'Metallic Cream', hex:'#f7edd5',rgb:'247, 237, 213'},
        { id:38, name:'Metallic Orange', hex:'#f78616',rgb:'247, 134, 22'},
        { id:138, name:'Orange', hex:'#f6ae20',rgb:'246, 174, 32'},
        { id:123, name:'Worn Orange', hex:'#f2ad2e',rgb:'242, 173, 46'},
        { id:41, name:'Matte Orange', hex:'#f27d20',rgb:'242, 125, 32'},
        { id:135, name:'Hot Pink', hex:'#f21f99',rgb:'242, 31, 153'},
        { id:126, name:'Worn Taxi Yellow', hex:'#f1cc40',rgb:'241, 204, 64'},
        { id:112, name:'Metallic Frost White', hex:'#eaeaea',rgb:'234, 234, 234'},
        { id:121, name:'Worn Off White', hex:'#eae6de',rgb:'234, 230, 222'},
        { id:91, name:'Metallic Yellow Bird', hex:'#e0e13d',rgb:'224, 225, 61'},
        { id:122, name:'Util Off White', hex:'#dfddd0',rgb:'223, 221, 208'},
        { id:106, name:'Metallic Sun Bleeched Sand', hex:'#dfd5b2',rgb:'223, 213, 178'},
        { id:137, name:'Metallic Vermillion Pink', hex:'#df5891',rgb:'223, 88, 145'},
        { id:44, name:'Util Bright Red', hex:'#de0f18',rgb:'222, 15, 24'},
        { id:28, name:'Metallic Torino Red', hex:'#da1918',rgb:'218, 25, 24'},
        { id:67, name:'Metallic Diamond Blue', hex:'#d6e7f1',rgb:'214, 231, 241'},
        { id:36, name:'Metallic Sunrise Orange', hex:'#d44a17',rgb:'212, 74, 23'},
        { id:24, name:'Worn Silver', hex:'#d3d3d3',rgb:'211, 211, 211'},
        { id:39, name:'Matte Red', hex:'#cf1f21',rgb:'207, 31, 33'},
        { id:154, name:'Matte Desert Tan', hex:'#c3b492',rgb:'195, 180, 146'},
        { id:5, name:'Metallic Blue Silver', hex:'#c2c4c6',rgb:'194, 196, 198'},
        { id:37, name:'Metallic Classic Gold', hex:'#c2944f',rgb:'194, 148, 79'},
        { id:27, name:'Metallic Red', hex:'#c00e1a',rgb:'192, 14, 26'},
        { id:105, name:'Metallic Beach Sand', hex:'#bfae7b',rgb:'191, 174, 123'},
        { id:129, name:'Matte Brown', hex:'#bcac8f',rgb:'188, 172, 143'},
        { id:150, name:'Metallic Lava Red', hex:'#bc1917',rgb:'188, 25, 23'},
        { id:25, name:'Worn Blue Silver', hex:'#b7bfca',rgb:'183, 191, 202'},
        { id:29, name:'Metallic Formula Red', hex:'#b6111b',rgb:'182, 17, 27'},
        { id:35, name:'Metallic Candy Red', hex:'#b60f25',rgb:'182, 15, 37'},
        { id:110, name:'Util Light Brown', hex:'#b5a079',rgb:'181, 160, 121'},
        { id:47, name:'Worn Golden Red', hex:'#b16c51',rgb:'177, 108, 81'},
        { id:139, name:'Green', hex:'#b0ee6e',rgb:'176, 238, 110'},
        { id:113, name:'Worn Honey Beige', hex:'#b0ab94',rgb:'176, 171, 148'},
        { id:157, name:'Epsilon Blue', hex:'#afd6e4',rgb:'175, 214, 228'},
        { id:99, name:'Metallic Straw Beige', hex:'#ac9975',rgb:'172, 153, 117'},
        { id:46, name:'Worn Red', hex:'#a94744',rgb:'169, 71, 68'},
        { id:30, name:'Metallic Blaze Red', hex:'#a51e23',rgb:'165, 30, 35'},
        { id:102, name:'Metallic Beechwood', hex:'#a4965f',rgb:'164, 150, 95'},
        { id:23, name:'Worn Silver Grey', hex:'#a0a199',rgb:'160, 161, 153'},
        { id:144, name:'hunter green', hex:'#9f9e8a',rgb:'159, 158, 138'},
        { id:43, name:'Util Red', hex:'#9c1016',rgb:'156, 16, 22'},
        { id:119, name:'Brushed Aluminium', hex:'#9ba0a8',rgb:'155, 160, 168'},
        { id:93, name:'Metallic Champagne', hex:'#9b8c78',rgb:'155, 140, 120'},
        { id:4, name:'Metallic Silver', hex:'#999da0',rgb:'153, 157, 160'},
        { id:92, name:'Metallic Lime', hex:'#98d223',rgb:'152, 210, 35'},
        { id:6, name:'Metallic Steel Gray', hex:'#979a97',rgb:'151, 154, 151'},
        { id:90, name:'Metallic Bronze', hex:'#916532',rgb:'145, 101, 50'},
        { id:45, name:'Util Garnet Red', hex:'#8f1e17',rgb:'143, 30, 23'},
        { id:32, name:'Metallic Garnet Red', hex:'#8e1b1f',rgb:'142, 27, 31'},
        { id:18, name:'Util Silver', hex:'#8c9095',rgb:'140, 144, 149'},
        { id:125, name:'Metallic Securicor Green', hex:'#83c566',rgb:'131, 197, 102'},
        { id:133, name:'Worn Olive Army Green', hex:'#81844c',rgb:'129, 132, 76'},
        { id:156, name:'DEFAULT ALLOY COLO', hex:'#81827f',rgb:'129, 130, 127'},
        { id:159, name:'Brushed Gold',hex:'#7f6a48',rgb:'127, 106, 72'},
        { id:31, name:'Metallic Graceful Red',hex:'#7b1a22',rgb:'123, 26, 34'},
        { id:153, name:'Matte Desert Brown',hex:'#7a6c55',rgb:'122, 108, 85'},
        { id:158, name:'Pure Gold',hex:'#7a6440',rgb:'122, 100, 64'},
        { id:109, name:'Util Medium Brown',hex:'#785f33',rgb:'120, 95, 51'},
        { id:26, name:'Worn Shadow Silver',hex:'#778794',rgb:'119, 135, 148'},
        { id:98, name:'Metallic Light Brown',hex:'#775c3e',rgb:'119, 92, 62'},
        { id:68, name:'Metallic Surf Blue',hex:'#76afbe',rgb:'118, 175, 190'},
        { id:104, name:'Metallic Choco Orange',hex:'#752b19',rgb:'117, 43, 25'},
        { id:87, name:'Worn Light blue',hex:'#74b5d8',rgb:'116, 181, 216'},
        { id:40, name:'Matte Dark Red',hex:'#732021',rgb:'115, 32, 33'},
        { id:116, name:'Worn straw beige',hex:'#726c57',rgb:'114, 108, 87'},
        { id:33, name:'Metallic Desert Red',hex:'#6f1818',rgb:'111, 24, 24'},
        { id:74, name:'Metallic Bright Blue',hex:'#6ea3c6',rgb:'110, 163, 198'},
        { id:100, name:'Metallic Moss Brown',hex:'#6c6b4b',rgb:'108, 107, 75'},
        { id:148, name:'Matte Purple',hex:'#6b1f7b',rgb:'107, 31, 123'},
        { id:117, name:'Brushed Steel',hex:'#6a747c',rgb:'106, 116, 124'},
        { id:152, name:'Matte Olive Drab',hex:'#696748',rgb:'105, 103, 72'},
        { id:55, name:'Matte Lime Green',hex:'#66b81f',rgb:'102, 184, 31'},
        { id:60, name:'Worn Sea Wash',hex:'#65867f',rgb:'101, 134, 127'},
        { id:97, name:'Metallic Golden Brown',hex:'#653f23',rgb:'101, 63, 35'},
        { id:65, name:'Metallic Mariner Blue',hex:'#637ba7',rgb:'99, 123, 167'},
        { id:7, name:'Metallic Shadow Silver',hex:'#637380',rgb:'99, 115, 128'},
        { id:8, name:'Metallic Stone Silver',hex:'#63625c',rgb:'99, 98, 92'},
        { id:145, name:'Metallic Purple',hex:'#621276',rgb:'98, 18, 118'},
        { id:78, name:'Util Sea Foam Blue',hex:'#608592',rgb:'96, 133, 146'},
        { id:155, name:'Matte Foilage Green',hex:'#5a6352',rgb:'90, 99, 82'},
        { id:120, name:'Chrome',hex:'#5870a1',rgb:'88, 112, 161'},
        { id:86, name:'Worn Blue',hex:'#58688e',rgb:'88, 104, 142'},
        { id:14, name:'Matte Light Grey',hex:'#515554',rgb:'81, 85, 84'},
        { id:20, name:'Util Shadow Silver',hex:'#506272',rgb:'80, 98, 114'},
        { id:94, name:'Metallic Pueblo Beige',hex:'#503218',rgb:'80, 50, 24'},
        { id:128, name:'Matte Green',hex:'#4e6443',rgb:'78, 100, 67'},
        { id:127, name:'police car blue',hex:'#4cc3da',rgb:'76, 195, 218'},
        { id:85, name:'Worn Dark blue',hex:'#4c5f81',rgb:'76, 95, 129'},
        { id:34, name:'Metallic Cabernet Red',hex:'#49111d',rgb:'73, 17, 29'},
        { id:64, name:'Metallic Blue',hex:'#47578f',rgb:'71, 87, 143'},
        { id:95, name:'Metallic Dark Ivory',hex:'#473f2b',rgb:'71, 63, 43'},
        { id:103, name:'Metallic Dark Beechwood',hex:'#46231a',rgb:'70, 35, 26'},
        { id:59, name:'Worn Green',hex:'#45594b',rgb:'69, 89, 75'},
        { id:3, name:'Metallic Dark Silver',hex:'#454b4f',rgb:'69, 75, 79'},
        { id:114, name:'Worn Brown',hex:'#453831',rgb:'69, 56, 49'},
        { id:10, name:'Metallic Gun Metal',hex:'#444e54',rgb:'68, 78, 84'},
        { id:80, name:'Util Maui Blue Poly',hex:'#4271e1',rgb:'66, 113, 225'},
        { id:101, name:'Metallic Biston Brown',hex:'#402e2b',rgb:'64, 46, 43'},
        { id:9, name:'Metallic M idnight Silver',hex:'#3c3f47',rgb:'60, 63, 71'},
        { id:81, name:'Util Bright Blue',hex:'#3b39e0',rgb:'59, 57, 224'},
        { id:108, name:'Util Brown',hex:'#3a2a1b',rgb:'58, 42, 27'},
        { id:66, name:'Metallic Harbor Blue',hex:'#394762',rgb:'57, 71, 98'},
        { id:19, name:'Util Gun Metal',hex:'#39434d',rgb:'57, 67, 77'},
        { id:48, name:'Worn Dark Red',hex:'#371c25',rgb:'55, 28, 37'},
        { id:22, name:'Worn Graphite',hex:'#363a3f',rgb:'54, 58, 63'},
        { id:118, name:'Brushed Black steel',hex:'#354158',rgb:'53, 65, 88'},
        { id:69, name:'Metallic Nautical Blue',hex:'#345e72',rgb:'52, 94, 114'},
        { id:17, name:'Util Dark silver',hex:'#333a3c',rgb:'51, 58, 60'},
        { id:2, name:'Metallic Black Steal',hex:'#32383d',rgb:'50, 56, 61'},
        { id:52, name:'Metallic Olive Green',hex:'#31423f',rgb:'49, 66, 63'},
        { id:63, name:'Metallic Saxony Blue',hex:'#304c7e',rgb:'48, 76, 126'},
        { id:71, name:'Metallic Purple Blue',hex:'#2f2d52',rgb:'47, 45, 82'},
        { id:58, name:'Worn Dark Green',hex:'#2d423f',rgb:'45, 66, 63'},
        { id:151, name:'Matte Forest Green',hex:'#2d362a',rgb:'45, 54, 42'},
        { id:115, name:'Worn Dark Brown',hex:'#2a282b',rgb:'42, 40, 43'},
        { id:72, name:'Metallic Spinnaker Blue',hex:'#282c4d',rgb:'40, 44, 77'},
        { id:77, name:'Util Blue',hex:'#275190',rgb:'39, 81, 144'},
        { id:13, name:'Matte Gray',hex:'#26282a',rgb:'38, 40, 42'},
        { id:83, name:'Matte Blue',hex:'#253aa7',rgb:'37, 58, 167'},
        { id:79, name:'Util Lightning blue',hex:'#2446a8',rgb:'36, 70, 168'},
        { id:73, name:'Metallic Ultra Blue',hex:'#2354a1',rgb:'35, 84, 161'},
        { id:62, name:'Metallic Dark Blue',hex:'#233155',rgb:'35, 49, 85'},
        { id:56, name:'Util Dark Green',hex:'#22383e',rgb:'34, 56, 62'},
        { id:61, name:'Metallic M idnight Blue',hex:'#222e46',rgb:'34, 46, 70'},
        { id:96, name:'Metallic Choco Brown',hex:'#221b19',rgb:'34, 27, 25'},
        { id:82, name:'Matte Dark Blue',hex:'#1f2852',rgb:'31, 40, 82'},
        { id:16, name:'Util Black Poly',hex:'#1e2429',rgb:'30, 36, 41'},
        { id:21, name:'Worn Black',hex:'#1e232f',rgb:'30, 35, 47'},
        { id:149, name:'Matte Dark Purple',hex:'#1e1d22',rgb:'30, 29, 34'},
        { id:57, name:'Util Green',hex:'#1d5a3f',rgb:'29, 90, 63'},
        { id:11, name:'Metallic Anthracite Grey',hex:'#1d2129',rgb:'29, 33, 41'},
        { id:84, name:'Matte M idnight Blue',hex:'#1c3551',rgb:'28, 53, 81'},
        { id:1, name:'Metallic Graphite Black',hex:'#1c1d21',rgb:'28, 29, 33'},
        { id:54, name:'Metallic Gasoline Blue Green',hex:'#1b6770',rgb:'27, 103, 112'},
        { id:76, name:'Util M idnight Blue',hex:'#1b203e',rgb:'27, 32, 62'},
        { id:53, name:'Metallic Green',hex:'#155c2d',rgb:'21, 92, 45'},
        { id:15, name:'Util Black',hex:'#151921',rgb:'21, 25, 33'},
        { id:49, name:'Metallic Dark Green',hex:'#132428',rgb:'19, 36, 40'},
        { id:12, name:'Matte Black',hex:'#13181f',rgb:'19, 24, 31'},
        { id:51, name:'Metallic Sea Green',hex:'#12383c',rgb:'18, 56, 60'},
        { id:50, name:'Metallic Racing Green',hex:'#122e2b',rgb:'18, 46, 43'},
        { id:75, name:'Util Dark Blue',hex:'#112552',rgb:'17, 37, 82'},
        { id:147, name:'MODSHOP BLACK1',hex:'#11141a',rgb:'17, 20, 26'},
        { id:143, name:'Metallic Black Red',hex:'#0e0d14',rgb:'14, 13, 20'},
        { id:0, name:'Metallic Black',hex:'#0d1116',rgb:'13, 17, 22'},
        { id:142, name:'Metallic Black Purple',hex:'#0c0d18',rgb:'12, 13, 24'},
        { id:70, name:'Metallic Bright Blue',hex:'#0b9cf1',rgb:'11, 156, 241'},
        { id:146, name:'Metaillic V Dark Blue',hex:'#0b1421',rgb:'11, 20, 33'},
        { id:141, name:'Mettalic Black Blue',hex:'#0a0c17',rgb:'10, 12, 23'},
        { id:140, name:'Blue',hex:'#08e9fa',rgb:'8, 233, 250'}
];
function pushMechanicalShop(json)
{
    var itemList = JSON.parse(json);
    $(itemList).each(function(index,item){      
        let obj = 
        {
            id: item.id,
            price: item.price,
            count: parseInt(item.count)
        }
        var colorCount = JSON.parse(JSON.stringify(obj.count));
        if(colorCount != 0)
        {
            obj.count = [];
            for (i=1;i<=colorCount;i++)
            {
                obj.count.push(i);
            }   
        }
        $(modsList).each(function(index,classEl){
            if(obj.id == classEl.id)
            {
                obj.name = classEl.name;
                obj.translatedName = classEl.translatedName;
                modsArr.push(obj);
            }
        });        
    }); 
    modsInit();
    modsInitialize();
};
function modsInit()
{
    $('.main-block .wrapper').empty();
    $(modsArr).each(function(index,item){
        console.log(item);
        let template = ``;
        if(item.id != 66 && item.id != 67)
        {
            template = `
                <div class="mod-item" id="${item.name}">
                    <div class="remove-but">Снять</div>
                    <div class="title-wrap">
                        <i class="fas fa-chevron-left"></i>
                    <div class="title" data-index="${index}" data-item="0" data-price="0">${item.translatedName}</div>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>`;
        }
        else
        {
            template = `
                <div class="mod-item" id="${item.name}">
                    <div class="title-wrap">
                        <div class="title" data-index="${index}" data-item="0" data-price="0" style="background:transparent; font-size:20px;">${item.translatedName}</div>
                        <div class="current-color"></div>
                    </div>
                    <div class="color-list" data-id="${item.id}">Открыть палитру</div>
                </div>`;
        }
        $('.main-block .wrapper').append(template);
    });
}
function modsRefresh()
{
    modsInit();
    modsInitialize();
    countPrice();
};

const finalArray = ["#f2ad2e","#c2944f","#b16c51","#a94744","#bc1917","#da1918","#d44a17","#f27d20","#8f1e17","#6f1818","#752b19","#653f23","#473f2b","#3a2a1b","#503218","#453831","#402e2b","#46231a","#221b19","#2d362a","#4e6443","#5a6352","#81827f","#81844c","#6c6b4b","#696748","#63625c","#726c57","#7a6c55","#7f6a48","#7a6440","#785f33","#775c3e","#916532","#9b8c78","#a4965f","#ac9975","#b5a079","#bcac8f","#c3b492","#bfae7b","#b0ab94","#9f9e8a","#a0a199","#b0ee6e","#98d223","#66b81f","#83c566","#979a97","#d6e7f1","#afd6e4","#c2c4c6","#b7bfca","#9ba0a8","#999da0","#8c9095","#778794","#6a747c","#637380","#608592","#637ba7","#5870a1","#58688e","#4c5f81","#506272","#47578f","#4271e1","#3b39e0","#253aa7","#2446a8","#2354a1","#275190","#304c7e","#394762","#354158","#3c3f47","#282c4d","#2f2d52","#1e1d22","#0e0d14","#0c0d18","#0a0c17","#112552","#1c3551","#222e46","#233155","#1f2852","#1b203e","#1c1d21","#1e232f","#1d2129","#11141a","#151921","#13181f","#0b1421","#0d1116","#1e2429","#26282a","#32383d","#363a3f","#39434d","#454b4f","#444e54","#345e72","#1b6770","#122e2b","#12383c","#132428","#22383e","#333a3c","#2d423f","#31423f","#1d5a3f","#155c2d","#45594b","#515554","#65867f","#6ea3c6","#74b5d8","#76afbe","#4cc3da","#0b9cf1","#08e9fa","#6b1f7b","#621276","#2a282b","#371c25","#49111d","#732021","#7b1a22","#8e1b1f","#9c1016","#a51e23","#b60f25","#b6111b","#c00e1a","#cf1f21","#de0f18","#f21f99","#df5891","#fffff6"];

$(finalArray).each(function(index,item){
    $(colorsList).each(function(indexEl,itemEl){
        if(itemEl.hex == item)
        {
            $('.color-wrap').append(`<div class="color-block" data-color="${itemEl.hex}" data-index="${itemEl.id}" style="background-color:${item};width:30px;height:30px;"></div>`)
        }
    });
});
let modsArr = [];
function modsInitialize()
{
    $('.title-wrap .fa-chevron-left, .title-wrap .fa-chevron-right').on('click',function(){
        $('#buy').removeClass('disabled');
        var clicker = $(this);  
        var element = $(this).parent().find('.title');
        var currentAttr = $(element).attr('data-item');
        var currentIndex = $(element).attr('data-index');
        var parent = $(element).parent().parent()[0].id;
        if($(clicker).hasClass('fa-chevron-left'))
        {
            if(currentAttr > 0)
            {
                currentAttr--;
            }
            else
            {
                let length = modsArr[currentIndex].count.length - 1;
                currentAttr = length;
            }
            $(element).attr('data-item',currentAttr);
            $(element).attr('data-price',modsArr[currentIndex].price[currentAttr]);
            $(element).attr('data-counted', false);
            $(element).text(modsArr[currentIndex].translatedName +` (${currentAttr})`);
            countPrice();
            console.log(modsArr[currentIndex].id, currentAttr);
            mp.trigger("putMechanical",modsArr[currentIndex].id, currentAttr);
        }
        if($(clicker).hasClass('fa-chevron-right'))
        {
            if(currentAttr < modsArr[currentIndex].count.length - 1)
            {
                currentAttr++;
            }
            else
            {
                currentAttr = 0;
            }
            $(element).attr('data-item',currentAttr);
            $(element).attr('data-price',modsArr[currentIndex].price[currentAttr]);
            $(element).attr('data-counted', false);
            $(element).text(modsArr[currentIndex].translatedName +` (${currentAttr})`);
            countPrice();
            mp.trigger("putMechanical",modsArr[currentIndex].id, currentAttr);
        }    
    });
    $('.mod-item .remove-but').on('click',function(){
        let currentIndex = modsArr[parseInt($(this).parent().find('.title').attr('data-index'))], 
            currentId = currentIndex.id;
        console.log(currentId);
        $(this).parent().find('.title').attr({'data-item':0,'data-price':0});
        countPrice();
        $(this).parent().find('.title').text(currentIndex.name+`(0)`);
        mp.trigger('removeMechanical',currentId);
    });
    $('.mod-item .color-list').on('click',function(index,item){
        $('.color-wrap').fadeIn().css('display','flex');
        $('.color-wrap').attr('data-id',$(this).attr('data-id'));
        var element = $(this).parent().find('.title');
        var currentAttr = $(element).attr('data-item');
        var currentIndex = $(element).attr('data-index');
        $(element).attr('data-item',currentAttr);
        $(element).attr('data-price',modsArr[currentIndex].price[currentAttr]);
        $(element).attr('data-counted', false);
        $('.mask').fadeIn();
    });
    $('.color-wrap .color-block').on('click',function(index,item){
        let currentColor = parseInt($(this).attr('data-index')),
            currentHex = $(this).attr('data-color'),
            currentId = parseInt($('.color-wrap').attr('data-id'));
        console.log(currentColor,currentId);
        $('.color-wrap').fadeOut();
        $(`.color-list[data-id='${currentId}']`).parent().find('.title').attr('data-item',currentColor);
        $(`.color-list[data-id='${currentId}']`).parent().find('.current-color').css('background-color',currentHex);
        console.log($(`.color-list[data-id='${currentId}']`).parent().find('.title-wrap .title'),currentHex);      
        countPrice();
        $('#buy').removeClass('disabled');
        $('.mask').fadeOut();
        mp.trigger("putMechanical",currentId, currentColor);
    });
};
$('.color-wrap .close-but').on('click',function(){
    $('.color-wrap, .mask').fadeOut();
});
function countPrice()
{
    var fullPrice = 0;
    $('.mod-item').each(function(index,item){
        if(!$(item).find('.title').attr('data-counted'));
        {
            $(item).find('.title').attr('data-counted', true);
            let currentPrice = parseInt($(item).find('.title').attr('data-price'));
            fullPrice += currentPrice;
        }
    });
    $('.right-wrap .price span').text(fullPrice);
};
function generateJsonOutput()
{
    var arr = [];
    $('.mod-item').each(function(index,item){     
        let currentIndex = $(item).find('.title').attr('data-index');
        let currentAttr = $(item).find('.title').attr('data-item'); 
        console.log(currentIndex,currentAttr);
        if(currentAttr != 0)
        {
            arr.push({ 
                id:parseInt(modsArr[parseInt(currentIndex)].id), 
                item:parseInt(currentAttr) 
            });
            let length = arr.length-1;
        }      
    });
    console.log('after',arr);
    return arr;
};
// let currentRangeRotate = 0;
// $(function() {
//     $('.rotate input[type="range"]').on('input change', function(e) {
//         let id = e.target.id,
//             val = e.target.value;
//         $(e).val(val).change();
//         switch (id) {
//             case 'cameraHeight':
//                 currentRangeRotate = 0;
//                 break;
//             case 'cameraRotate':
//                 currentRangeRotate = 1;
//                 break;
//         }
//         mp.trigger("cameraMechanical", id, val);
//     });
    
//     $('input[type=range]').rangeslider({
//       polyfill: false,
//       change: function(e) {
//           console.log(e)
//       }
//     });
// });
$('#resetCamera').on('click',function(){
    // let fillWidth = $('.rotate .rangeslider--horizontal').css('width');
    // $('.rotate .rangeslider__fill').css('width', `${parseInt(fillWidth)/2}px`);
    // $('.rotate .rangeslider__handle').css('left', `${(parseInt(fillWidth)/2)-6}px`);
    mp.trigger("mechanicalLookCar");
});
