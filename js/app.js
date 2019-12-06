$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggler:visible').click();
});

$('.carousel').carousel({
    interval: 2600
})

$('#redes').tooltip(true);

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoHeight:true,
    autoplay:true,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})

