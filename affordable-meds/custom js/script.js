$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:false,
  arrows:true,

  // arrows
    prevArrow: '<img src="img/prev.png" class="img-fluid prev" alt="">',
    nextArrow: '<img src="img/next.png" class="img-fluid next" alt="">',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
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

$('.TestimonialSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow: '<img src="img/prev.png" class="img-fluid prev" alt="">',
    nextArrow: '<img src="img/next.png" class="img-fluid next" alt="">',
  });
  $('.modalSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    arrows:true,
  });
  hljs.initHighlightingOnLoad();
  new VGNav().toggle();

  $("#accordionbtn1").click(function(){
    $("#accordionbtn1").css("background-color","#FFC107")
    $("#accordionbtn2").css("background-color","#FFFFFF")
    $("#accordionbtn3").css("background-color","#FFFFFF")
    $("#accordionbtn4").css("background-color","#FFFFFF")
    $("#accordionbtn5").css("background-color","#FFFFFF")

    $("#accordionbtn1").removeClass("text-dark").addClass("text-white")
    $("#accordionbtn2").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn3").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn4").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn5").removeClass("text-white").addClass("text-dark")

    $("#accordionicon1").removeClass("fa-plus").addClass("fa-minus");
    $("#accordionicon2").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon3").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon4").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon5").removeClass("fa-minus").addClass("fa-plus");

    $("#accordionicon1").removeClass("text-dark").addClass("text-white")
    $("#accordionicon2").removeClass("text-white").addClass("text-dark")
    $("#accordionicon3").removeClass("text-white").addClass("text-dark")
    $("#accordionicon4").removeClass("text-white").addClass("text-dark")
    $("#accordionicon5").removeClass("text-white").addClass("text-dark")
  });
  $("#accordionbtn2").click(function(){
    $("#accordionbtn1").css("background-color","#FFFFFF")
    $("#accordionbtn2").css("background-color","#FFC107")
    $("#accordionbtn3").css("background-color","#FFFFFF")
    $("#accordionbtn4").css("background-color","#FFFFFF")
    $("#accordionbtn5").css("background-color","#FFFFFF")

    $("#accordionbtn1").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn2").removeClass("text-dark").addClass("text-white")
    $("#accordionbtn3").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn4").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn5").removeClass("text-white").addClass("text-dark")

    $("#accordionicon1").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon2").removeClass("fa-plus").addClass("fa-minus");
    $("#accordionicon3").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon4").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon5").removeClass("fa-minus").addClass("fa-plus");

    $("#accordionicon1").removeClass("text-white").addClass("text-dark")
    $("#accordionicon2").removeClass("text-dark").addClass("text-white")
    $("#accordionicon3").removeClass("text-white").addClass("text-dark")
    $("#accordionicon4").removeClass("text-white").addClass("text-dark")
    $("#accordionicon5").removeClass("text-white").addClass("text-dark")
  });
  $("#accordionbtn3").click(function(){
    $("#accordionbtn1").css("background-color","#FFFFFF")
    $("#accordionbtn2").css("background-color","#FFFFFF")
    $("#accordionbtn3").css("background-color","#FFC107")
    $("#accordionbtn4").css("background-color","#FFFFFF")
    $("#accordionbtn5").css("background-color","#FFFFFF")

    $("#accordionbtn1").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn2").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn3").removeClass("text-dark").addClass("text-white")
    $("#accordionbtn4").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn5").removeClass("text-white").addClass("text-dark")

    $("#accordionicon1").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon2").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon3").removeClass("fa-plus").addClass("fa-minus");
    $("#accordionicon4").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon5").removeClass("fa-minus").addClass("fa-plus");

    $("#accordionicon1").removeClass("text-white").addClass("text-dark")
    $("#accordionicon2").removeClass("text-white").addClass("text-dark")
    $("#accordionicon3").removeClass("text-dark").addClass("text-white")
    $("#accordionicon4").removeClass("text-white").addClass("text-dark")
    $("#accordionicon5").removeClass("text-white").addClass("text-dark")
  });
  $("#accordionbtn4").click(function(){
    $("#accordionbtn1").css("background-color","#FFFFFF")
    $("#accordionbtn2").css("background-color","#FFFFFF")
    $("#accordionbtn3").css("background-color","#FFFFFF")
    $("#accordionbtn4").css("background-color","#FFC107")
    $("#accordionbtn5").css("background-color","#FFFFFF")

    $("#accordionbtn1").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn2").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn3").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn4").removeClass("text-dark").addClass("text-white")
    $("#accordionbtn5").removeClass("text-white").addClass("text-dark")

    $("#accordionicon1").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon2").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon3").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon4").removeClass("fa-plus").addClass("fa-minus");
    $("#accordionicon5").removeClass("fa-minus").addClass("fa-plus");

    $("#accordionicon1").removeClass("text-white").addClass("text-dark")
    $("#accordionicon2").removeClass("text-white").addClass("text-dark")
    $("#accordionicon3").removeClass("text-white").addClass("text-dark")
    $("#accordionicon4").removeClass("text-dark").addClass("text-white")
    $("#accordionicon5").removeClass("text-white").addClass("text-dark")
  });
  $("#accordionbtn5").click(function(){
    $("#accordionbtn1").css("background-color","#FFFFFF")
    $("#accordionbtn2").css("background-color","#FFFFFF")
    $("#accordionbtn3").css("background-color","#FFFFFF")
    $("#accordionbtn4").css("background-color","#FFFFFF")
    $("#accordionbtn5").css("background-color","#FFC107")

    $("#accordionbtn1").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn2").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn3").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn4").removeClass("text-white").addClass("text-dark")
    $("#accordionbtn5").removeClass("text-dark").addClass("text-white")

    $("#accordionicon1").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon2").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon3").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon4").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon5").removeClass("fa-plus").addClass("fa-minus");

    $("#accordionicon1").removeClass("text-white").addClass("text-dark")
    $("#accordionicon2").removeClass("text-white").addClass("text-dark")
    $("#accordionicon3").removeClass("text-white").addClass("text-dark")
    $("#accordionicon4").removeClass("text-white").addClass("text-dark")
    $("#accordionicon5").removeClass("text-dark").addClass("text-white")
  });