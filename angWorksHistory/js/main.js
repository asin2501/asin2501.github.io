(function ($) {
    $(function () {
        initAnchors();
    });

    function initAnchors() {
        var $body = $('html, body');
        $('.js-anchor').click(function () {
            var href = $(this).attr('href');
            var $target = $(href);
            var posY = $target.offset().top;
            var time = (posY) / 4;
            // console.log(time);

            $body.animate({'scrollTop': posY}, time);
            return false;
        });
    }
})(jQuery);