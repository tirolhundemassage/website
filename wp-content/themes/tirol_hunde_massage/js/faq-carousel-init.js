jQuery(document).ready(function ($) {
    $('.slick-carousel').slick({
        slidesToShow: 5, // Show 5 posts at a time
        slidesToScroll: 1, // Scroll one post at a time
        autoplay: true, // Enable automatic switching
        autoplaySpeed: 3000, // Switch every 3 seconds
        dots: false, // Show navigation dots
        arrows: true, // Show navigation arrows
        centerPadding: '30px', // Add space between cards
        responsive: [
            {
                breakpoint: 1030, // For large screens
                settings: {
                    slidesToShow: 3, // Show 3 posts at a time
                }
            },
            {
                breakpoint: 768, // For small tablets
                settings: {
                    slidesToShow: 2, // Show 1 post at a time
                }
            },
            {
                breakpoint: 480, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 post at a time
                }
            }
        ]
    });
});
