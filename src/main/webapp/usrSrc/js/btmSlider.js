const swiper = new Swiper('.common-bottom-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1281: {
      slidesPerView: 5,  //브라우저가 1280보다 클 때
      spaceBetween: 10,
    },   

    768: {
      slidesPerView: 3,  //브라우저가 768보다 클 때
      spaceBetween: 10,
    },

    320: {
      slidesPerView: 2,  //브라우저가 320보다 클 때
      spaceBetween: 10,
    },
   
  },

});