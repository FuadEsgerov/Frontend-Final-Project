$(window).on('load', function() {
    var preLoder = $("#preloader");
    preLoder.delay(700).fadeOut(500).addClass('loaded');
});

$(window).scroll(function () {
    if ($("html").scrollTop() >150) {
        $(".navigation").addClass("is-sticky");
    } else {
        $(".navigation").removeClass("is-sticky");
    }
}); 
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		autoplay:true,
		smartSpeed:300,
		dots:false,
		items:6
	}
		
	);
  });

$('.content-popup').magnificPopup({
    type: 'inline',
    preloader: true,
    mainClass: 'mfp-zoom'
});

$(document).ready(function() {
    $('.popup-ajax').magnificPopup({
        type: 'ajax',
    });
});

$(document).ready(function() {
    $('.video_popup, .iframe_popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

$('.counter').counterUp({
		time: 1500
    });
    
 // student say corusel
 $('.slider').slick({
    slidesToShow:2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    
});

// Isotope
$(".gallery-item").isotope({
    itemSelector:".item",
    layoutMode:"fitRows"
});
$(".buttons ul li a").click(function(){
    $(".buttons ul li a").removeClass("active");
    $(this).addClass("active");

    var selector =$(this).attr("data-filter");
    $(".gallery-item").isotope({
        filter: selector
    });
    return false;
});


// parallax
$(window).on('load', function() {
    $('.parallax_bg').parallaxBackground();
});
