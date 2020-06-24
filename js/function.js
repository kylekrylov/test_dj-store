"use strict";
//
$(document).ready(function() {
    $('.header_burger ').click(function() {
        $('.header_burger,.header_menu-mob').toggleClass('active');
        // $('body').toggleClass('lock')
        // $('.content').toggleClass('opacity')
    });
});
$(document).ready(function() {
    $('.mob_contact button').click(function() {
        $('.modal-pop').toggleClass('active');
        $('.header_burger,.header_menu-mob').removeClass('active');
    });
    $('.close').click(function() {
        $('.modal-pop').removeClass('active');
    });
    // $('.modal-pop').click(function() {
    //     $('.modal-pop').not('.modal-pop-wraper').removeClass('active');
    // });
});

$(document).ready(function() {
    $('.block-slider_right_block').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,
        // variableWidth: true
    });

});