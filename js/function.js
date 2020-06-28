"use strict";
//
$(document).ready(function() {
    //вкл меню
    $('.header_burger ').click(function() {
        $('.header_burger,.header_menu-mob').toggleClass('active');
        $('body').toggleClass('lock')
    });
    //активация окна из меню
    $('.mob_contact button').click(function() {
        $('.modal-pop').toggleClass('active');
        $('.header_burger,.header_menu-mob').removeClass('active');
    });
    //закрытие по кнопки X 
    $('.close').click(function() {
        $('.modal-pop').removeClass('active');
        $('.modal-ok').toggleClas('active');
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