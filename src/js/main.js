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
        offset: 80
    });

    // Collapse navbar on scroll.
    collapseNavbar();
    $(window).scroll(collapseNavbar);
    function collapseNavbar() {
        if ($('.navbar-transition').offset().top > 20) {
            $('.navbar-transition').addClass('navbar-collapse');
        } else {
            $('.navbar-transition').removeClass('navbar-collapse');
        }
    }

    // Collapse responsive navbar on navbar item click.
    $('.navbar-nav li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Page scrolling animation.
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});