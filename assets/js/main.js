
$(' .owl_1').owlCarousel({
    loop:false,
    margin:2,	
	responsiveClass:true,autoplayHoverPause:false,
	// autoplay:false,
	//  slideSpeed: 400,
    //   paginationSpeed: 400,
	//  autoplayTimeout:3000,
    responsive:{
        0:{
            items:3,
            nav:true,
			  loop:false
        },
        600:{
            items:3,
            nav:true,
			  loop:false
        },
        1000:{
            items:7,
            nav:true,
            loop:false
        }
    }
})

// $(document) .ready(function(){
// var li =  $(".owl-item li ");
// $(".owl-item li").click(function(){
// li.removeClass('active');

//  gsap.fromTo('.blur',{ opacity: 0,filter: "blur(5px)"}, {filter: "blur(0px)", transformOrigin:"center center", opacity: 1, y: 0, duration: 2, ease: 'power3.inOut', stagger:0.2, },"-=0.4");

// });
// });
var li =  $(".owl-item li ");
$(".owl-item li").click(function(){
    li.removeClass('active');
    
     gsap.fromTo('.blur',{filter: "blur(5px)",opacity: 0.3,}, {filter: "blur(0px)", opacity:1 ,duration: 2, ease: Power1.easeIn, stagger:0.2, },"-=0.4");
    
    });
// header sec

