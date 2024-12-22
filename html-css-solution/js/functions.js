jQuery(document).ready(function(){

    $(".popular-course-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        // prevArrow: $('.descopera .prev-btn'),
        // nextArrow: $('.descopera .next-btn'),
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint:1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
           
        ]
    })



});