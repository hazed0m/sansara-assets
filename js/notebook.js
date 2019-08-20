$(document).ready(function(){
    $('#sansara-menu').on('click',function(){
        let menu = $('.container .wrapper .sansara-menu');
        if(!menu.is(':visible'))
        {
            $('#police-menu').removeClass('deactivated');
            menu.fadeIn();
            // if(!$('.container .wrapper .police-menu').is(':visible'))
            // {
            // }
        }
        else
        {
            menu.fadeOut();
        }
    });
    $('#police-menu').on('click',function(){
        let menu = $('.container .wrapper .police-menu');
        if(!menu.is(':visible'))
        {
            menu.fadeIn().css('display','flex');
            $(this).addClass('deactivated');
            $(this).parent().fadeOut();
        }
    });
    $('.container .wrapper .police-menu .close-but').on('click',function(){        
        $('.container .wrapper .police-menu').fadeOut();
    });
    $('.police-menu .menu-item').on('click',function(){
        let currentWrapper = this.id;
        $('.wrapper > .active').removeClass('active').fadeOut(200);
        $('.police-menu .menu-item.active').removeClass('active');
        $(this).addClass('active');
        $(`.wrapper .${currentWrapper}`).addClass('active').fadeIn(200).css('display','flex');
    });
    $('.business-wrapper .add-violation .wanted-level .star').hover(
        function()
        {
            if(!$('.business-wrapper .add-violation .wanted-level .star').hasClass('activated'))
            {
                let currentStar = this.id;            
                $('.business-wrapper .wanted-level .star').find('svg path').css({
                    'stroke':'#000',
                    'fill':'#fff'
                });            
                for(i=0; i <= currentStar.substring(1); i++)
                {
                    $(`.business-wrapper .wanted-level .star#s${i}`).find('svg path').css({
                        'stroke':'#ed8a19',
                        'fill':'#ed8a19'
                    });
                }
            }
        }
    );
    $('.container .wantedSearch-wrapper .add-violation .star').hover(
        function()
        {
            if(!$('.container .wantedSearch-wrapper .add-violation .star').hasClass('activated'))
            {
                let currentStar = this.id;            
                $('.wantedSearch-wrapper .add-violation .wanted-level .star').find('svg path').css({
                    'stroke':'#000',
                    'fill':'#fff'
                });            
                for(i=0; i <= currentStar.substring(1); i++)
                {
                    $(`.wantedSearch-wrapper .add-violation .wanted-level .star#s${i}`).find('svg path').css({
                        'stroke':'#ed8a19',
                        'fill':'#ed8a19'
                    });
                }
            }
        }
    );
    $('.business-wrapper .add-violation .wanted-level .star').on('click',function(){
        if(!$('.business-wrapper .add-violation .wanted-level .star').hasClass('activated'))
        {
            $(this).addClass('activated');
        }
        else
        {
            let currentStar = this.id;   
            $('.business-wrapper .add-violation .wanted-level .star.activated').removeClass('activated');
            $('.business-wrapper .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            });  
            for(i=0; i <= currentStar.substring(1); i++)
            {
                $(`.business-wrapper .wanted-level .star#s${i}`).find('svg path').css({
                    'stroke':'#ed8a19',
                    'fill':'#ed8a19'
                });
            }
            $(this).addClass('activated');
        }
    });
    $('.container .wantedSearch-wrapper .add-violation .star').on('click',function(){
        if(!$('.container .wantedSearch-wrapper .add-violation .star').hasClass('activated'))
        {
            $(this).addClass('activated');
        }
        else
        {
            let currentStar = this.id;   
            $('.container .wantedSearch-wrapper .add-violation .star.activated').removeClass('activated');
            $('.wantedSearch-wrapper .add-violation .wanted-level .star').find('svg path').css({
                'stroke':'#000',
                'fill':'#fff'
            });  
            for(i=0; i <= currentStar.substring(1); i++)
            {
                $(`.wantedSearch-wrapper .add-violation .wanted-level .star#s${i}`).find('svg path').css({
                    'stroke':'#ed8a19',
                    'fill':'#ed8a19'
                });
            }
            $(this).addClass('activated');
        }
    });
    $('.container .business-wrapper #add-violation').on('click',function(){        
        $('.container .business-wrapper .add-violation, .container .business-wrapper .mask').fadeIn().css('display','flex');
    });
    $('.container .wantedSearch-wrapper .wanted-content-wrapper #add-violation').on('click',function(){        
        $('.container .mask').css('z-index','999');
        $('.container .wantedSearch-wrapper .add-violation .star.activated').removeClass('activated');
        $('.wantedSearch-wrapper .add-violation .wanted-level .star').find('svg path').css({
            'stroke':'#000',
            'fill':'#fff'
        });  
        $('.container .wantedSearch-wrapper .add-violation, .container .wantedSearch-wrapper .mask').fadeIn().css('display','flex');
    });
    $('.container .business-wrapper .add-violation .close-but').on('click',function(){     
        $('.container .business-wrapper .add-violation, .container .business-wrapper .mask').fadeOut();
    });
    $('.container .wantedSearch-wrapper .close-but').on('click',function(){           
        $('.container .mask').css('z-index','99');        
        $('.container .wantedSearch-wrapper .add-violation').fadeOut();
    });
    $('.container .wantedSearch-wrapper .wanted-content-wrapper .close-but').on('click',function(){     
        $('.container .wantedSearch-wrapper .wanted-content-wrapper, .container .wantedSearch-wrapper .mask').fadeOut();
    });
    $('.container .wantedSearch-wrapper .wanted-item').on('click',function(){
        $('.container .wantedSearch-wrapper .mask,.container .wantedSearch-wrapper .wanted-content-wrapper').fadeIn();
    });
});