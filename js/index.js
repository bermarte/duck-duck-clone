$(function () {
    $("[data-trigger").on("click", function () {
        var target_id = $(this).attr('data-trigger');
        $(target_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
    });

    // close button

    $(".btn-close").click(function (e) {
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("offcanvas-active");

    });

    $("#round-scroller").click(function (e) {
        var target = $('#monster');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    });

});