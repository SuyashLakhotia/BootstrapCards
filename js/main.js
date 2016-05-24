$(function () {
    // Init WOW.js
    wow = new WOW({
        mobile: false,
        live: false
    });
    wow.init();

    // Init Bootstrap Scrollspy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 120
    });

    // Collapse navbar on scroll.
    $(window).scroll(function () {
        if ($('.navbar-default').offset().top > 20) {
            $('.navbar-default').addClass('top-nav-collapse');
        } else {
            $('.navbar-default').removeClass('top-nav-collapse');
        }
    });

    // Collapse responsive navbar on navbar item click.
    $('.navbar-nav li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Page scrolling animation.
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 110)
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});