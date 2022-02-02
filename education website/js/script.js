const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: 'slide', 
    followFinger: 	true, 
    // loopedSlides: 4, 
    slidesPerView: 4,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: 'slide', 
    followFinger: 	true, 
    // loopedSlides: 4, 
    slidesPerView: 4.5,

    grabCursor: true,
   
  
  });

  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: 'slide', 
    followFinger: 	true, 
    // loopedSlides: 4, 
    slidesPerView: 4,

    grabCursor: true,


    breakpoints: {
      425:{
        spaceBetween: 5,
      },

      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
    
  
  });
  const swiper4 = new Swiper('.swiper4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: 'slide', 
    followFinger: 	true, 
    // loopedSlides: 4, 
    slidesPerView: 4,

    grabCursor: true,
   
    
  
  });
  const swiper5 = new Swiper('.swiper5', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: 'slide', 
    followFinger: 	true, 
    // loopedSlides: 4, 
    slidesPerView: 4,

    grabCursor: true,
   
    
  
  });
  const swiper6 = new Swiper('.swiper6', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: 'slide', 
    followFinger: 	true, 
    // loopedSlides: 4, 
    slidesPerView: 4,

    grabCursor: true,
   
    
  
  });
  const swiper7 = new Swiper('.swiper7', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: 'slide', 
    followFinger: 	true, 
    // loopedSlides: 4, 
    slidesPerView: 1,

    grabCursor: true,
   
    pagination: {
      el: '.swiper-pagination',
    },
  
  });

  var firstView = document.getElementsByClassName('Kinder'), count;
  for (count = 0; count < firstView.length; count++){
    firstView[count].style.display = 'block';
  }



  function openSchool(evt, schoolName) {
    // Declare all variables
    var i, tabcontent, tablist__item, tabId;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablist__item" and remove the class "active"
    tablist__item = document.getElementsByClassName("tablist__item");
    for (i = 0; i < tablist__item.length; i++) {
      tablist__item[i].className = tablist__item[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    
   
    tabId = document.getElementsByClassName(schoolName);
    for (i = 0; i < tabId.length; i++) {
      tabId[i].style.display = 'block';
    }
    evt.currentTarget.className += " active";
  }

