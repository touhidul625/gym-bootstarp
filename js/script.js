$(function(){
 'use strict'
 //slick start
$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows:false,
    dots:true,
  });
  //venobox stare
  $('.venobox').venobox(); 
  // psd 
// test part start
  $('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows:false,
    dots:true,
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
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });
  //counter up js
  $('.counter').counterUp();
  //client part start

  $('.client_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
    centerMode:true,
    centerPadding:false,
    nextArrow:'<i class="fas fa-chevron-right nxt_arrw"></i>',
    prevArrow:'<i class="fas fa-chevron-left prv_arrw"></i>',
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
        breakpoint: 575.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
     
    ]
    
  });

  

});