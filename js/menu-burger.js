"use strict";
//
$(document).ready(function() {
    $('.header_burger ').click(function(menuburger) {
        $('.header_burger,.header_menu-mob').toggleClass('active');
        $('body').toggleClass('lock')
            // $('.content').toggleClass('opacity')

    });
    $('.header_menu a').click(function(e) {
        $('.header_burger,.header_menu-mob').removeClass('active');
        $('body').removeClass('lock')
            // $('.content').removeClass('opacity')
    });

});
$(document).ready(function() {
    $('.mob_contact button').click(function(modal) {
        $('.header_burger,.header_menu-mob,.modal-pop').toggleClass('active');
        // $('.content').removeClass('opacity')
    });
    $('.modal-pop button.close,.content').click(function(e) {
        $('.header_burger,.header_menu-mob,.modal-pop').removeClass('active');
        $('body').removeClass('lock')
            // $('.content').removeClass('opacity')
    });

});