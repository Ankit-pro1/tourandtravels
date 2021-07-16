$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:30,
        loop:false,
        nav: true,
        dots: false,
        autoplay:true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            800:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:false
            }
        }
       });
});