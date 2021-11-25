

  const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 21,
    freeModeMinimumVelocity: 0.1,
    freeModeMomentumBounceRatio: 0.1,
    preloadImages: true,
    resistance: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,

    },
    
    
  });






  const swiperSlider = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:4,
    // centeredSlides: true,

    spaceBetween: 21,
    freeModeMinimumVelocity: 0.1,
    freeModeMomentumBounceRatio: 0.1,
    preloadImages: true,
    resistance: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true,
    },
    
    
  });

