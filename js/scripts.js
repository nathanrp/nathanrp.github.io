function darkMode() {
    var element = document.body;
    element.classList.toggle('dark');
}

$( document ).ready(function() {
    console.log('ready');
    var navH = $('.gallery figure:first-child').height();

    $(window).scroll(function (event) {
        console.log(navH);
        var scroll = $(window).scrollTop();
        if (scroll>=navH) {
            $('.totop').addClass('show');
        } else {
            $('.totop').removeClass('show');
        }
    });

    $('.totop').click(function(){
        $('html, body').animate({
            scrollTop: 0
          }, 220);
    });

});