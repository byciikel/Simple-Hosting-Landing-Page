$(document).ready(function(){
  new fullScroll({
    mainElement: 'main',
    displayDots: true,
    dotsPosition: 'left',
    animateTime: 0.7,
    animateFunction: 'ease'
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