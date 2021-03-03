AOS.init();

hljs.initHighlightingOnLoad();
new VGNav().toggle();


$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    
    // arrows
    prevArrow: '<span class="slider1_prev_arrow"><i class="fas fa-angle-left text-white mx-2 my-5"></i></span>',
    nextArrow: '<span class="slider1_next_arrow"><i class="fas fa-angle-right text-white mx-2 my-5"></i></span>',
  });

  $('.slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots:false,

    // arrows
    prevArrow: '<span class="slider2_prev_arrow"><i class="fas fa-angle-left text-dark fa-2x mx-2"></i></span>',
    nextArrow: '<span class="slider2_next_arrow"><i class="fas fa-angle-right text-dark fa-2x mx-2"></i></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      
    ]
  });


  $("#backtop").click(function(){
    $("body,html").animate({
      scrollTop:0
    },1600)
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 150){
      $("#backtop").css("visibility","visible")
    }
    else{
      $("#backtop").css("visibility","hidden")
    }
  })