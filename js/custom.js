var width = screen.width;
$(document).ready(function(){
    if (width < 980)
        runMobile();
    else
        runDesp();
});
var runMobile = function() {
    $('#menu').parent().addClass('open');
    $('#menu').on('click', 'li', function() {
        $(this).find('ul').slideToggle('open');
    });
};
var runDesp = function() {
};


