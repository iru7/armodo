$(function() {
    $('.slider_main').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    $('.slider_partners').slick({
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          }
        ]
    });

    $('.slider_products').slick({
        mobileFirst: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, //displaying img and half next
        arrows:false,
        responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows:true,
            }
          }
        ]
    });
    $('.slider_news').slick({
        mobileFirst: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
    });
});

//slider na properties vertical i ustawia karuzele pionowo!

//mega push (jquery) - do menu a później

//translate Y

//flex-direction:column; obczzaj to

//box model