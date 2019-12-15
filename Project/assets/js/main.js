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


  $(function() {
	
    function ckScrollInit(items, trigger) {
        items.each(function() {
            var ckElement = $(this),
                AnimationClass = ckElement.attr('data-animation'),
                AnimationDelay = ckElement.attr('data-animation-delay');

            ckElement.css({
                '-webkit-animation-delay': AnimationDelay,
                '-moz-animation-delay': AnimationDelay,
                'animation-delay': AnimationDelay,
                opacity: 0
            });

            var ckTrigger = (trigger) ? trigger : ckElement;

            ckTrigger.waypoint(function() {
                ckElement.addClass("animated").css("opacity", "1");
                ckElement.addClass('animated').addClass(AnimationClass);
            }, {
                triggerOnce: true,
                offset: '90%',
            });
        });
    }

    ckScrollInit($('.animation'));
    ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));

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
 $('.student-owl-carousel').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true
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
