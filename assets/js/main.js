
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
    
    //  gsap.fromTo('.blur',{filter: "blur(5px)",opacity: 0.3,}, {filter: "blur(0px)", opacity:1 ,duration: 2, ease: " back.out( 1)", stagger:0.2, },"-=0.4");
    
    });
// header sec

function valueChanged() {
    if($('#cbox3').is(":checked"))   
      $(".second").show(),
      $(".fir").hide(),
      gsap.fromTo('.progress .A',2,{opacity: 0.3,width:0}, {width:"100%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.B',2,{opacity: 0.3,width:0}, {width:"80%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.C',2,{opacity: 0.3,width:0}, {width:"90%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.D',2,{opacity: 0.3,width:0}, {width:"60%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.E',2,{opacity: 0.3,width:0}, {width:"100%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.F',2,{opacity: 0.3,width:0}, {width:"60%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.G',2,{opacity: 0.3,width:0}, {width:"80%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.H',2,{opacity: 0.3,width:0}, {width:"90%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.I',2,{opacity: 0.3,width:0}, {width:"50%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.J',2,{opacity: 0.3,width:0}, {width:"60%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.K',2,{opacity: 0.3,width:0}, {width:"80%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
      gsap.fromTo('.L',2,{opacity: 0.3,width:0}, {width:"50%", opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7"),
       gsap.fromTo('.second',{opacity: 0.3,}, { opacity:1 ,duration: 0.5, ease: " back.out( 1)", stagger:0.2, },"-=0.7");
    else
    $(".second").hide(),
    $(".fir").show();
    gsap.fromTo('.fir',{opacity: 0.3,}, { opacity:1 ,duration: 0.5, ease: "Power1.easein", stagger:0.2, },"-=0.7");
  };