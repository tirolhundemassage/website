jQuery(document).ready(function($) {
    $('.reviews-carousel').slick({
        slidesToShow: 3, // Show 3 cards at a time
        slidesToScroll: 1, // Scroll one card at a time
        autoplay: true, // Enable automatic switching
        autoplaySpeed: 3000, // Switch every 3 seconds
        dots: true, // Show navigation dots
        arrows: true, // Show navigation arrows
        centerMode: false, // Disable center mode for consistent sizing
        variableWidth: false, // Ensure all slides have the same width
        responsive: [
            {
                breakpoint: 1030, // For large screens
                settings: {
                    slidesToShow: 2, // Show 2 cards at a time
                    slidesToScroll: 1, // Scroll one card at a time
                }
            },
            {
                breakpoint: 768, // For small tablets
                settings: {
                    slidesToShow: 1, // Show 1 card at a time
                    slidesToScroll: 1, // Scroll one card at a time
                }
            }
        ]
    });
});