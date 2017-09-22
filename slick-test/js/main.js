/**
 * Created by Artiom on 01.04.2016.
 */

(function ($) {
    $(function () {
        $('.some-slider').slick({
            fade: true
        });

        $('.some-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var oldSlide = $(slick.$slides[currentSlide]);
            var newSlide = $(slick.$slides[nextSlide]);

            oldSlide.addClass('slick-prev');
            oldSlide.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                oldSlide.removeClass('slick-prev');
            });
        });
    })
})(jQuery);
