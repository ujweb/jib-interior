(function(){
    $('.hamburger').on('click', function() {
        $('header, .opening-index, header nav').toggleClass('opened');
    });
}());