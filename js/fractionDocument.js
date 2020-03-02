let docInfo = '';
let doc = JSON.stringify({
        Name: 'Velis',
        Fraction:'global',
        Title:'Принятие закона об Амнистии идиотов после отягощенного судилища',
        Text:`Далеко-далеко за словесными горами в стране гласных и согласных 
        живут рыбные тексты. Вдали от всех живут они в буквенных домах 
        на берегу Семантика большого языкового океана. 
        Маленький ручеек Даль журчит по всей стране и обеспечивает ее 
        всеми необходимыми правилами. Эта парадигматическая страна, 
        в которой жаренные члены предложения залетают прямо в рот. 
        Даже всемогущая пунктуация не имеет власти над рыбными текстами, 
        ведущими безорфографичный образ жизни. Однажды одна маленькая
            строчка рыбного текста по имени Lorem ipsum решила выйти в
            большой мир грамматики. Великий Оксмокс предупреждал ее о 
        злых запятых, диких знаках вопроса и коварных точках с запятой, но 
        текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, 
        подпоясал инициал за пояс и пустился в дорогу. Взобравшись на 
        первую вершину курсивных гор, бросил он последний взгляд назад, 
        на силуэт своего родного города Буквоград, на заголовок деревни 
        Алфавит и на подзаголовок своего переулка Строчка. Грустный 
        риторический вопрос скатился по его щеке и он продолжил
            свой путь. По дороге встретил текст рукопись. Она предупредила его:
            «В моей стране все переписывается по несколько раз. 
        Единственное, что от меня осталось, это приставка «и». 
        Возвращайся ты лучше в свою безопасную страну». 
        Не послушавшись рукописи, наш текст продолжил свой путь. 
        Вскоре ему повстречался коварный составитель рекламных текстов, 
        напоивший его языком и речью и заманивший в свое агенство,
        которое использовало его снова и снова в своих проектах.
        По дороге встретил текст рукопись. Она предупредила его:
            «В моей стране все переписывается по несколько раз. 
        Единственное, что от меня осталось, это приставка «и». 
        Возвращайся ты лучше в свою безопасную страну». 
        Не послушавшись рукописи, наш текст продолжил свой путь. 
        Вскоре ему повстречался коварный составитель рекламных текстов, 
        напоивший его языком и речью и заманивший в свое агенство,
        которое использовало его снова и снова в своих проектах.`,
        SignsList:[
            'Александрополус [Авастиноргеонов]',
            'Александрополус GOVERMENT',
            'Александрополус EMS',
            'Александрополус Авастиноргеонов',
            'Александрополус Авастиноргеонов',
            'Александрополус LSPD'
        ]
    }),
    docEmpty = JSON.stringify({
        Fraction:'global',
        Name: 'Velis',
        Title:'Принятие закона об Амнистии идиотов после отягощенного судилища',
        Text:`Далеко-далеко за словесными горами в стране гласных и согласных 
        живут рыбные тексты. Вдали от всех живут они в буквенных домах 
        на берегу Семантика большого языкового океана. 
        Маленький ручеек Даль журчит по всей стране и обеспечивает ее 
        всеми необходимыми правилами. Эта парадигматическая страна, 
        в которой жаренные члены предложения залетают прямо в рот. 
        Даже всемогущая пунктуация не имеет власти над рыбными текстами, 
        ведущими безорфографичный образ жизни. Однажды одна маленькая
            строчка рыбного текста по имени Lorem ipsum решила выйти в
            большой мир грамматики. Великий Оксмокс предупреждал ее о 
        злых запятых, диких знаках вопроса и коварных точках с запятой, но 
        текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, 
        подпоясал инициал за пояс и пустился в дорогу. Взобравшись на 
        первую вершину курсивных гор, бросил он последний взгляд назад, 
        на силуэт своего родного города Буквоград, на заголовок деревни 
        Алфавит и на подзаголовок своего переулка Строчка. Грустный 
        риторический вопрос скатился по его щеке и он продолжил
            свой путь. По дороге встретил текст рукопись. Она предупредила его:
            «В моей стране все переписывается по несколько раз. 
        Единственное, что от меня осталось, это приставка «и». 
        Возвращайся ты лучше в свою безопасную страну». 
        Не послушавшись рукописи, наш текст продолжил свой путь. 
        Вскоре ему повстречался коварный составитель рекламных текстов, 
        напоивший его языком и речью и заманивший в свое агенство,
        которое использовало его снова и снова в своих проектах.
        По дороге встретил текст рукопись. Она предупредила его:
            «В моей стране все переписывается по несколько раз. 
        Единственное, что от меня осталось, это приставка «и». 
        Возвращайся ты лучше в свою безопасную страну». 
        Не послушавшись рукописи, наш текст продолжил свой путь. 
        Вскоре ему повстречался коварный составитель рекламных текстов, 
        напоивший его языком и речью и заманивший в свое агенство,
        которое использовало его снова и снова в своих проектах.`,
        SignsList:[]
    });
function pushFractionDocument(elem)
{
    $('.container').empty();
    docInfo = JSON.parse(elem);
    let fractionTitle = docInfo.Fraction == 'police' ? '<div class="title">Police Department</div>': '' || docInfo.Fraction == 'medical' ? '<div class="title">Emergency Services</div>': '',
        signsList = '',
        template = '';
    if(docInfo.SignsList.length == 0)
    {
        template = `
        <div class="${docInfo.Fraction}-wrapper" id="${docInfo.Fraction}">        
            <div class="button" id="closeDocument">Закрыть документ</div>     
            <div class="title-wrapper">
                <div class="title">State</div>
                <div class="big-title">San Andreas</div>
                ${fractionTitle}
            </div>
            <div class="text-wrapper">
                <div class="big-title">
                    <input type="text" placeholder="Введите заголовок документа" value="${docInfo.Title}">                
                </div>
                <div class="text">
                    <textarea maxlength="2000" placeholder="Введите текст документа">${docInfo.Text}</textarea>                    
                </div>
            </div>  
            <div class="sign-wrapper">
                <div class="button" id="signDocument">Подписать документ</div>           
            </div>
        </div>`;
    }
    else
    {
        $(docInfo.SignsList).each(function(index,item){
            let status = '';
            if(item.includes('[') || item.includes(']') || item.includes('GOVERNMENT') || item.includes('LSPD') || item.includes('EMS'))
            {
                status = 'default';
            }
            let signItem = ` 
                    <div class="sign-item ${status}">
                        <div class="sign">${item}</div>
                    </div>`;
            signsList += signItem;
        });
        template = `
        <div class="${docInfo.Fraction}-wrapper">            
            <div class="button" id="closeDocument">Закрыть документ</div>  
            <div class="title-wrapper">
                <div class="title">State</div>
                <div class="big-title">San Andreas</div>
                ${fractionTitle}
            </div>
            <div class="text-wrapper">
                <div class="big-title">${docInfo.Title}</div>
                <div class="text">
                    ${docInfo.Text}
                </div>
            </div>  
            <div class="sign-wrapper">
                <div class="inner-wrapper">
                    ${signsList}
                </div>  
                <div class="button" id="signDocument">Подписать документ</div>           
            </div>
        </div>`;
    }    
    $('.container').append(template);
    $('.text-wrapper textarea').keyup(function(){
        this.value = this.value.replace(/[^А-ЯЁа-яё!,.?:0-9 ]/g, '');
    });
    $('.container .sign-wrapper #signDocument').on('click',function(){
        if($('.container .text-wrapper input').length != 0 && $('.container .text-wrapper textarea').length != 0)
        {
            let title = $('.container .text-wrapper input').val(),
                text = $('.container .text-wrapper textarea').val(),
                name = docInfo.Name,
                type = docInfo.Fraction;
            if(title.length != 0 && text.length != 0)
            {
                $(this).fadeOut();
                console.log('signDocument',type,name,title,text);
                mp.trigger('signDocument',type,name,title,text);
            }
            else
            {
                $(this).css('box-shadow','0 0 10px red');
                setTimeout(() => {
                    $(this).css('box-shadow','0 0 10px transparent');
                },500);
            }            
        }
        else
        {
            let title = docInfo.Title,
                name = docInfo.Name,
                text = docInfo.Text,
                type = docInfo.Fraction;
            console.log('signDocument',type,name,title,text);
            mp.trigger('signDocument',type,name,title,text);
        }
    });
    $('.container #closeDocument').on('click',function(){
        if(docInfo.SignsList.length == 0)
        {
            let title = $('.container .text-wrapper input').val(),
                name = docInfo.Name,
                text = $('.container .text-wrapper textarea').val();
            console.log(name,title,text);
            mp.trigger('closeDocument',name,title,text);
        }        
        else
        {
            let title = docInfo.Title,
                name = docInfo.Name,
                text = docInfo.Text;
            console.log(name,title,text);
            mp.trigger('closeDocument',name,title,text);
        }
    });
}
