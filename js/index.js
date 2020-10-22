$(function(){
    $('.ban figure').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    
    $('.slick-next').hide();
    $('.slick-prev').hide();
    
    
    var mq = window.matchMedia("screen and (max-width:480px)");

    mq.addListener(res);

    function res(e) {
        if (e.matches) {
            $('.ban1').attr('src', 'img/ban1.png');

            $('.ban2').attr('src', 'img/ban2.png');
           
            var txt = $('.review figcaption').eq(0).text();
                    
        }
    }
    
    res(mq);
});