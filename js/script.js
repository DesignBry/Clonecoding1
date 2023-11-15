$(function(){
    // KOR
    $('header nav div a').click(function(e){
        e.preventDefault()
        $('header nav div p').toggleClass('active')
    })

    // header scroll
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.top-banner, aside, header nav').css({
                top : 'calc(0% - 30px)',
            })
        }else if($(this).scrollTop() === 0){
            $('.top-banner, aside, header nav').css({
                top : '0%'
            })
        }else{
            console.log($(this).scrollTop())
        }
    })

    // aside accordion
    $('aside> ul > li').hover(function(){
        $(this).find('ul').stop().slideToggle()
        // $(this).next().slidedown().siblings('aside ul li .sub').slideUp()
    })
})