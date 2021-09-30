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

  $('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    dots:true,
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
    
  });

});