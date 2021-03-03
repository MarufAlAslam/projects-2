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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,

    // arrows
    prevArrow: '<span class="slider2_prev_arrow"><i class="fas fa-angle-left text-white mx-2 my-5"></i></span>',
    nextArrow: '<span class="slider2_next_arrow"><i class="fas fa-angle-right text-white mx-2 my-5"></i></span>',
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