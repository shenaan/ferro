$(document).ready(function () {

    $('#btn-mob').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('active');

        $('.header-nav').toggleClass('active');
        $('.header-sublist').toggleClass('hidden');
    });

    $(document).on('click',function(e){
        if(!$(e.target).closest('#btn-mob,.header-nav').length) {
            $('#btn-mob,.header-nav').removeClass('active');
        }
    });

    new WOW().init();

   $('.main-slider').on('init', function(event, slick){
        $('.main-slider .h1').hide();
        $('.slick-active .h1').show().addClass('zoomIn');
    });

    $('.main-slider').on('afterChange', function(event, slick, currentSlide){
        $('.slick-active .h1').show(500);
        $('.slick-active .h1').addClass('animated zoomIn');
    });

    $('.main-slider').on('beforeChange', function(event, slick, currentSlide){
        $('.slick-active .h1').removeClass('animated zoomIn');
        $('.slick-active .h1').hide();
    });

    $('.main-slider').slick({
        dots: true,
        arrows: false,
        fade: true
    });

    setTimeout(function(){

        $('.chart-holder-bar').each(function(i){

            var $bar = $(this);
            setTimeout(function(){
                $bar.css('width', $bar.attr('data-percent'));
            }, i*100);
        });
    }, 1000);

   $('.photogallery-slider').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $('.development-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $('.news-slider').slick({
        dots: true,
        arrows: false
    });

    $('#development-page-slider').slick({
        dots: true,
        arrows: false
    });

    $('.gallery-slider').slick({
        dots: false,
        arrows: true
    });

});

