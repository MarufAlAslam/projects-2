hljs.initHighlightingOnLoad();
new VGNav().toggle();


$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    prevArrow: '<span class="slider1_prev_arrow"><i class="fas fa-angle-left text-dark m-2"></i></span>',
    nextArrow: '<span class="slider1_next_arrow"><i class="fas fa-angle-right text-dark m-2"></i></span>',
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
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      
    ]
    
    // arrows
  
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
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      
    ]
  });


  $("#catbtn1").click(function(){
    $("#cat1").show("1500")
    $("#cat2").show("1500")
    $("#cat3").show("1500")
    $("#cat4").show("1500")
    $("#cat5").show("1500")
    $("#cat6").show("1500")
    $("#cat7").show("1500")
    $("#cat8").show("1500")
  });

  $("#catbtn2").click(function(){
    $("#cat1").hide("1500")
    $("#cat2").show("1500")
    $("#cat3").hide("1500")
    $("#cat4").hide("1500")
    $("#cat5").show("1500")
    $("#cat6").hide("1500")
    $("#cat7").show("1500")
    $("#cat8").hide("1500")
  });

  $("#catbtn3").click(function(){
    $("#cat1").show("1500")
    $("#cat2").hide("1500")
    $("#cat3").hide("1500")
    $("#cat4").show("1500")
    $("#cat5").show("1500")
    $("#cat6").hide("1500")
    $("#cat7").show("1500")
    $("#cat8").hide("1500")
  });

  $("#catbtn4").click(function(){
    $("#cat1").hide("1500")
    $("#cat2").show("1500")
    $("#cat3").hide("1500")
    $("#cat4").show("1500")
    $("#cat5").hide("1500")
    $("#cat6").show("1500")
    $("#cat7").hide("1500")
    $("#cat8").show("1500")
  });

  $("#catbtn5").click(function(){
    $("#cat1").show("1500")
    $("#cat2").show("1500")
    $("#cat3").hide("1500")
    $("#cat4").hide("1500")
    $("#cat5").show("1500")
    $("#cat6").show("1500")
    $("#cat7").hide("1500")
    $("#cat8").hide("1500")
  });

  $("#catbtn6").click(function(){
    $("#cat1").show("1500")
    $("#cat2").hide("1500")
    $("#cat3").hide("1500")
    $("#cat4").hide("1500")
    $("#cat5").hide("1500")
    $("#cat6").hide("1500")
    $("#cat7").show("1500")
    $("#cat8").hide("1500")
  });