const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    //autoplay
    autoplay:{
        delay:2000,
        pauseOnMouseEnter: true,
    },

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickable: true,
    },
  
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

  });