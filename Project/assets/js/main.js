
	

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

  $(window).scroll(function () {
    if ($("html").scrollTop() >150) {
        $(".navigation").addClass("is-sticky");
    } else {
        $(".navigation").removeClass("is-sticky");
    }
}); 
