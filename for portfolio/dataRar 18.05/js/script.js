
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 6,
        spaceBetween: 21,
        freeModeMinimumVelocity: 0.1,
        freeModeMomentumBounceRatio: 0.1,
        grabCursor: true,
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


      const reviewsSwiper = new Swiper('.reviews-container',{
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 21,
        freeModeMinimumVelocity: 0.1,
        freeModeMomentumBounceRatio: 0.1,
        grabCursor: true,
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
