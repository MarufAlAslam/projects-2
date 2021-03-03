$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:false,
    arrows:true,
    prevArrow: '<button class="btn btn-prev"> <img src="img/arrow-left.png" class="img-fluid w-50" alt=""></button>',
    nextArrow: '<button class="btn btn-next"> <img src="img/arrow-right.png" class="img-fluid w-50" alt=""></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
  });


  $('.teamSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    arrows:true,
    prevArrow: '<button class="btn btn-prev-team"> <i class="fa fa-arrow-left"></i> </button>',
    nextArrow: '<button class="btn btn-next-team"> <i class="fa fa-arrow-right"></i> </button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
  });

  $('.testimoniaSlidedr').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:false,
    arrows:true,
    prevArrow: '<button class="btn btn-prev-team"> <i class="fa fa-arrow-left"></i> </button>',
    nextArrow: '<button class="btn btn-next-team"> <i class="fa fa-arrow-right"></i> </button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
  });



  $('.middleSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    // prevArrow: '<button class="btn btn-prev-team"> <i class="fa fa-arrow-left"></i> </button>',
    // nextArrow: '<button class="btn btn-next-team"> <i class="fa fa-arrow-right"></i> </button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
  });

  $('.btn-odd1').click(function(){
    $('.testimonial-1').hide(50)
    $('.testimonial-2').show(50)
    console.log("odd")
  })

  $('.btn-even1').click(function(){
    $('.testimonial-1').show(50)
    $('.testimonial-2').hide(50)
    console.log("even")
  })
  $('.btn-odd2').click(function(){
    $('.testimonial-1').hide(50)
    $('.testimonial-2').show(50)
    console.log("odd")
  })

  $('.btn-even2').click(function(){
    $('.testimonial-1').show(50)
    $('.testimonial-2').hide(50)
    console.log("even")
  })
  $('.btn-odd3').click(function(){
    $('.testimonial-1').hide(50)
    $('.testimonial-2').show(50)
    console.log("odd")
  })

  $('.btn-even3').click(function(){
    $('.testimonial-1').show(50)
    $('.testimonial-2').hide(50)
    console.log("even")
  })
  $('.btn-odd4').click(function(){
    $('.testimonial-1').hide(50)
    $('.testimonial-2').show(50)
    console.log("odd")
  })

 