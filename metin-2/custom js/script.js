$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
    dots:true,
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
var count1 = 0
var count2 = 1
var count3 = 0
var count4 = 0
  $("#headingOne button").click(function(){
    $("#headingOne button").css("color","#0CC984")
    $("#headingTwo button").css("color","#000")
    $("#headingThree button").css("color","#000")
    $("#headingFour button").css("color","#000")
    count1++
    if(count1%2==0){
      $("#headingOne button").css("color","#000")
    }
    else{
      $("#headingOne button").css("color","#0CC984")
    }
  });
  $("#headingTwo").click(function(){
    $("#headingOne button").css("color","#000")
    $("#headingTwo button").css("color","#0CC984")
    $("#headingThree button").css("color","#000")
    $("#headingFour button").css("color","#000")
    count2++
    if(count2%2==0){
      $("#headingTwo button").css("color","#000")
    }
    else{
      $("#headingTwo button").css("color","#0CC984")
    }
  });
  $("#headingThree").click(function(){
    $("#headingOne button").css("color","#000")
    $("#headingTwo button").css("color","#000")
    $("#headingThree button").css("color","#0CC984")
    $("#headingFour button").css("color","#000")
    count3++
    if(count3%2==0){
      $("#headingThree button").css("color","#000")
    }
    else{
      $("#headingThree button").css("color","#0CC984")
    }
  });
  $("#headingFour").click(function(){
    $("#headingOne button").css("color","#000")
    $("#headingTwo button").css("color","#000")
    $("#headingThree button").css("color","#000")
    $("#headingFour button").css("color","#0CC984")
    count4++
    if(count4%4==0){
      $("#headingFour button").css("color","#000")
    }
    else{
      $("#headingFour button").css("color","#0CC984")
    }
  });
 