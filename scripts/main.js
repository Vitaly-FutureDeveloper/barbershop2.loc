//Сразу удалим класс, который ставиться если нет скриптов
$('.main-nav').removeClass("main-nav--nojs");

//События на кнопку открыть меню
$('.main-nav__toggle').on('click', function(){
    if( $('.main-nav').hasClass('main-nav--closed') ){
        $('.main-nav').removeClass("main-nav--closed");
        $('.main-nav').addClass("main-nav--opened");
    } else {
        $('.main-nav').removeClass("main-nav--opened");
        $('.main-nav').addClass("main-nav--closed");
    }
});
