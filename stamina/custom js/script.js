AOS.init();

hljs.initHighlightingOnLoad();
new VGNav().toggle();


$('.mSlider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots:true,
    arrows:true,

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
    // arrows
    // prevArrow: '<span class="slider1_prev_arrow"><i class="fas fa-angle-left text-white mx-2 my-5"></i></span>',
    // nextArrow: '<span class="slider1_next_arrow"><i class="fas fa-angle-right text-white mx-2 my-5"></i></span>',
  });

//   $('.slider1').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots:false,

//     // arrows
//     prevArrow: '<span class="slider2_prev_arrow"><i class="fas fa-angle-left text-white mx-2 my-5"></i></span>',
//     nextArrow: '<span class="slider2_next_arrow"><i class="fas fa-angle-right text-white mx-2 my-5"></i></span>',
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//           arrows:false
//         }
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
      
//     ]
//   });


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


  $(document).ready(function(){
    $(".slick-next").addClass("fa").addClass("fa-angle-right")
    $(".slick-next").css("background-color","transparent").css("opacity",1)
  })