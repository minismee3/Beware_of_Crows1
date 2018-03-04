$('#myCarousel').each(function() {
    $(this).carousel({
        interval: false
    });
});

$(window).scroll(function (event) {
            var y = $(this).scrollTop(); //set position from top in pixels
            if (y >= 675) {
                $('.navbar').addClass('resized');
            } else {
                $('.navbar').removeClass('resized');
            }
        });
