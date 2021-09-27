(function ($) { "use strict";
	
	$(window).scroll(function(){
	  var sticky = $('#header'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 100) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});


/**========GET BID FOR IT SETUP========**/
    $('#getbid_it_slide').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
/**========WHAT CLIENTS SAY========**/
    $('#tastimonalst_slide').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$("#scroller").simplyScroll({
  speed: 1
});

/**========Scroll animation========**/
 new WOW().init();

})(jQuery);