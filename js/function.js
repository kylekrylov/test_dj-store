"use strict";
//
$(document).ready(function() {
    $('.header_burger ').click(function(menuburger) {
        $('.header_burger,.header_menu-mob').toggleClass('active');
        $('body').toggleClass('lock')
            // $('.content').toggleClass('opacity')

    });
    $('.header_menu a,').click(function(remove) {
        $('.header_burger,.header_menu-mob,').removeClass('active');
        $('body').removeClass('lock')
            // $('.content').removeClass('opacity')
    });

});
$(document).ready(function() {
    $('.mob_contact button').click(function(modal) {
        $('.header_burger,.header_menu-mob,.modal-pop').toggleClass('active');
        // $('.content').removeClass('opacity')
    });

});
$(document).ready(function() {
    $('.block-slider_left_buttons button').click(function(m) {
        $('.modal-pop').toggleClass('active');
    });
    $('.close').click(function() {
        $('.modal-pop').removeClass('active');
        $('body').removeClass('lock')
    });
});


$(document).ready(function() {
    $('.block-slider_right_block').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,
        // variableWidth: true
    });

});