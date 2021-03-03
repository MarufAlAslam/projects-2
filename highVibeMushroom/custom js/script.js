// AOS.init();


hljs.initHighlightingOnLoad();
new VGNav().toggle();

$(function(){
  $('.count-num').rCounter();
});

$("#cartbtn").click(function(event){
  event.preventDefault()
  $(".tray").toggle(200)
})
$('.slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: false,
    // autoplaySpeed: 4000,
    fade:true,
    dots:false,
    arrows:false,
    
    // arrows
    // prevArrow: '<span class="slider1_prev_arrow"><i class="fas fa-angle-left text-white mx-2 my-5"></i></span>',
    // nextArrow: '<span class="slider1_next_arrow"><i class="fas fa-angle-right text-white mx-2 my-5"></i></span>',
  });

  

  var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "||";
    $(".content h1").hide(100);
    $(".content p").hide(100);
    $(".content .btn-primary").hide(100);
  } else {
    video.pause();
    btn.innerHTML = '<img src="img/play.png" class="img-fluid" alt="">';
    $(".content h1").show(100);
    $(".content p").show(100);
    $(".content .btn-primary").show(100);
  }
}





  $('.slider1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,

    // arrows
    // prevArrow: '<span class="slider2_prev_arrow"><i class="fas fa-angle-left text-white mx-2 my-5"></i></span>',
    // nextArrow: '<span class="slider2_next_arrow"><i class="fas fa-angle-right text-white mx-2 my-5"></i></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      
    ]
  });
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true, 
  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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

$('.slider-related').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:false,
  arrows:true,

  // arrows
  prevArrow: '<span class="slider2_prev_arrow"><i class="fas fa-arrow-left text-dark"></i></span>',
  nextArrow: '<span class="slider2_next_arrow"><i class="fas fa-arrow-right text-dark"></i></span>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:true
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
// $(".collapsebtn ").click(function(){
//   $(".collapsedown").css("transform","rotate(180deg)")
// },function(){
//   $(".collapsedown").css("transform","rotate(-180deg)")
// })
var rotated = false;
// $(".collapsedown").css({
//   "right":"42px",
//   "top":"10px"
// })
$(".collapsebtn").click(function() {
  if (!rotated) {
    $(this).find(".collapsedown").css({
      "transform": "rotate(180deg)",
      "right":"20px",
      "top":"10px"
    });
  } else {
    $(this).find(".collapsedown").css({
      "transform": "rotate(0deg)"
    });
  }
  // right: 18px;
// top: 10px;
  // Toggle the flag
  rotated = !rotated;
});
function plus(){
  // var val = number(document.getElementById("my_field").value);
  // 
  document.getElementById('my_field').stepUp();
}

function minus(){
  // var val = number(document.getElementById("my_field").value);
  // 
  document.getElementById('my_field').stepDown();
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

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

//   jQuery(document).ready(function($) {
//     $('.counter').counterUp({
//         delay: 10,
//         time: 1000
//     });
// });

$(function(){
  $(".vg-nav ul li a").on('click', function(){
    $("html, body").animate({
      scrollTop:$($.attr(this,'href')).offset().top
    },500)
  })
})


$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});


