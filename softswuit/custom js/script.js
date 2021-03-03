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
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  // centerPadding: '60px',
  focusOnSelect: true, 
  arrows:true,

  prevArrow: '<span class="slidernav_prev_arrow"><i class="fas fa-angle-left text-dark fa-2x"></i></span>',
  nextArrow: '<span class="slidernav_next_arrow"><i class="fas fa-angle-right text-dark fa-2x"></i></span>',

  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      
    ]
});
$(function(){
  $('.count-num').rCounter();
});
$('.heroSlider').slick({
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

 
  $('.portfolio ul li a.one').click(function(event){
    event.preventDefault()
    $(this).addClass('active')
    $('.portfolio ul li a.two').removeClass('active')
    $('.portfolio ul li a.three').removeClass('active')
    $('.portfolio ul li a.four').removeClass('active')
    $('.portfolio ul li a.five').removeClass('active')


    $('.portfolio .feature').show(200)
    $('.portfolio .web').show(200)
    $('.portfolio .logo').show(200)
    $('.portfolio .brochure').show(200)
    $('.portfolio .banner').show(200)
  })
  $('.portfolio ul li a.two').click(function(event){
    event.preventDefault()
    $(this).addClass('active')
    $('.portfolio ul li a.one').removeClass('active')
    $('.portfolio ul li a.three').removeClass('active')
    $('.portfolio ul li a.four').removeClass('active')
    $('.portfolio ul li a.five').removeClass('active')

    $('.portfolio .feature').hide(200)
    $('.portfolio .web').show(200)
    $('.portfolio .logo').hide(200)
    $('.portfolio .brochure').hide(200)
    $('.portfolio .banner').hide(200)
  })
  $('.portfolio ul li a.three').click(function(event){
    event.preventDefault()
    $(this).addClass('active')
    $('.portfolio ul li a.two').removeClass('active')
    $('.portfolio ul li a.one').removeClass('active')
    $('.portfolio ul li a.four').removeClass('active')
    $('.portfolio ul li a.five').removeClass('active')

    $('.portfolio .feature').hide(200)
    $('.portfolio .web').hide(200)
    $('.portfolio .logo').show(200)
    $('.portfolio .brochure').hide(200)
    $('.portfolio .banner').hide(200)
  })
  $('.portfolio ul li a.four').click(function(event){
    event.preventDefault()
    $(this).addClass('active')
    $('.portfolio ul li a.two').removeClass('active')
    $('.portfolio ul li a.three').removeClass('active')
    $('.portfolio ul li a.one').removeClass('active')
    $('.portfolio ul li a.five').removeClass('active')

    $('.portfolio .feature').hide(200)
    $('.portfolio .web').hide(200)
    $('.portfolio .logo').hide(200)
    $('.portfolio .brochure').show(200)
    $('.portfolio .banner').hide(200)
  })
  $('.portfolio ul li a.five').click(function(event){
    event.preventDefault()
    $(this).addClass('active')
    $('.portfolio ul li a.two').removeClass('active')
    $('.portfolio ul li a.three').removeClass('active')
    $('.portfolio ul li a.four').removeClass('active')
    $('.portfolio ul li a.one').removeClass('active')

    $('.portfolio .feature').hide(200)
    $('.portfolio .web').hide(200)
    $('.portfolio .logo').hide(200)
    $('.portfolio .brochure').hide(200)
    $('.portfolio .banner').show(200)
  })

  $('.faqCard').mouseenter(function(){
    $(this,'.faqCard').css("transform","scale(1.01)")
    // $(this,'faqCard .fa.fa-circle.d-inline').css("color","#e23578")
  })
  $('.faqCard').mouseleave(function(){
    $(this,'.faqCard').css("transform","scale(1)")
    // $('.fa.fa-circle.d-inline').css("color","#f1faff")
  })

  // $(document).ready(function(){
  //   $('.message').hide()
  //   $('.neworder').hide()
  //   $('.manageorder').hide()
  // })
  // $('.menulink1').click(function(event){
  //   event.preventDefault()
  //   $('.menulink1').addClass('active')
  //   $('.menulink2').removeClass('active')
  //   $('.menulink3').removeClass('active')
  //   $('.menulink4').removeClass('active')

  //   $('.projects').show()
  //   $('.message').hide()
  //   $('.neworder').hide()
  //   $('.manageorder').hide()

  //   $('.menulink1 i').css('color',"#E23578")
  //   $('.menulink2 i').css('color',"#232323")
  //   $('.menulink3 i').css('color',"#232323")
  //   $('.menulink4 i').css('color',"#232323")
    
  // })

  // $('.menulink2').click(function(event){
  //   event.preventDefault()
  //   $('.menulink1').removeClass('active')
  //   $('.menulink2').addClass('active')
  //   $('.menulink3').removeClass('active')
  //   $('.menulink4').removeClass('active')

  //   $('.projects').hide()
  //   $('.message').show()
  //   $('.neworder').hide()
  //   $('.manageorder').hide()

  //   $('.menulink1 i').css('color',"#232323")
  //   $('.menulink2 i').css('color',"#E23578")
  //   $('.menulink3 i').css('color',"#232323")
  //   $('.menulink4 i').css('color',"#232323")
  // })

  // $('.menulink3').click(function(event){
  //   event.preventDefault()
  //   $('.menulink1').removeClass('active')
  //   $('.menulink2').removeClass('active')
  //   $('.menulink3').addClass('active')
  //   $('.menulink4').removeClass('active')

  //   $('.projects').hide()
  //   $('.message').hide()
  //   $('.neworder').show()
  //   $('.manageorder').hide()

  //   $('.menulink1 i').css('color',"#232323")
  //   $('.menulink2 i').css('color',"#232323")
  //   $('.menulink3 i').css('color',"#E23578")
  //   $('.menulink4 i').css('color',"#232323")
  // })

  // $('.menulink4').click(function(event){
  //   event.preventDefault()
  //   $('.menulink1').removeClass('active')
  //   $('.menulink2').removeClass('active')
  //   $('.menulink3').removeClass('active')
  //   $('.menulink4').addClass('active')

  //   $('.projects').hide()
  //   $('.message').hide()
  //   $('.neworder').hide()
  //   $('.manageorder').show()

  //   $('.menulink1 i').css('color',"#232323")
  //   $('.menulink2 i').css('color',"#232323")
  //   $('.menulink3 i').css('color',"#232323")
  //   $('.menulink4 i').css('color',"#E23578")
  // })