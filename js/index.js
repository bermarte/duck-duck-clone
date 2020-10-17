$(document).ready(function () {
    $('#section-round-scroller-container').hide(1);
    debug = false;
    if ($('#section-round-scroller-container:hidden')) {
        document.getElementsByTagName("html")[0].style.visibility = "visible";
    }
});

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

    /* home scroller */

    $("#round-scroller").click(function (e) {
        var target = $('#monster');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    });

    /*
    section scroller 
    simplified (not perfect)
    needs more work
    */

    sections = ['#monster', '#ghost', '#bathtub', '#alpinist'];
    section = [];

    $(window).scroll(function () {
        const min_scroll = 400;
        const monster_min_scroll = 401;
        const ghost_min_scroll = 1200;
        const bathtub_min_scroll = 2200;
        const alpinist_min_scroll = 2800;
        const max_scroll = 3500;

        if ($(this).scrollTop() < min_scroll || $(this).scrollTop() > max_scroll) {
            $('#section-round-scroller-container').hide(1);
            section = [];
        } else {
            $('#section-round-scroller-container').show(1);
            section = [];
        }


        if ($(this).scrollTop() > monster_min_scroll &&
            $(this).scrollTop() < ghost_min_scroll) {
            if (debug) {
                $('#section-round-scroller').css("background-color", "red");
            }
            section = sections[1];
            console.log('red ' + section);
        }
        if ($(this).scrollTop() > ghost_min_scroll &&
            $(this).scrollTop() < bathtub_min_scroll) {
            if (debug) {
                $('#section-round-scroller').css("background-color", "green");
            }
            section = sections[2];
            console.log(section);
        }
        if ($(this).scrollTop() > bathtub_min_scroll &&
            $(this).scrollTop() < alpinist_min_scroll) {
            if (debug) {
                $('#section-round-scroller').css("background-color", "pink");
            }
            section = sections[3];
            console.log(section);
        }
        if ($(this).scrollTop() > alpinist_min_scroll) {
            if (debug) {
                $('#section-round-scroller').css("background-color", "yellow");
            }
            section = sections[3];
            console.log(section);
        }

    });

    $("#section-round-scroller").click(function (e) {

        var target = $(section);
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    });

});