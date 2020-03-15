$(document).ready(function(){
  new fullScroll({
    mainElement: 'main',
    displayDots: true,
    dotsPosition: 'left',
    animateTime: 0.7,
    animateFunction: 'ease'
  });

  $(".owl-carousel").owlCarousel({
    nav: true,
    center: true,
    margin: 30,
    loop: true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["<ion-icon name='chevron-back-outline'></ion-icon>", "<ion-icon name='chevron-forward-outline'></ion-icon>"],
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },
        1000:{
            items:3,
        }
    }
  });

  function toggleSidebar(e) {
    $(".hamburger-button").toggleClass("active");

    let isActive = e.currentTarget.className.split(' ')[1] ? true : false

    if (isActive) {
      $(".sidebar").removeClass("move-to-right");
      $(".sidebar").toggleClass("move-to-left");
    } else {
      $(".sidebar").removeClass("move-to-left");
      $(".sidebar").toggleClass("move-to-right");
    }
    console.log(isActive)

    $(".sidebar-item").toggleClass("active");
  }

  $(".hamburger-button").on("click tap", function(e) {
    toggleSidebar(e);
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });
});