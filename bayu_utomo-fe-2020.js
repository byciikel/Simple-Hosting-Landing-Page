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

  $.getJSON("https://mock-hosting-api.herokuapp.com/db", function(data) {
    $(".card-center").append(`
      <h2>${ data.hosting[1].nama }</h2>
      <p>
        <sup>Rp</sup> <b>${ data.hosting[1].harga }</b><sub>/bln</sub>
      </p>
      <span>
        <b>${ data.hosting[1].ringkasan[0].split(" ")[0] }</b> ${ data.hosting[1].ringkasan[0].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[1].ringkasan[1].split(" ")[0] }</b> ${ data.hosting[1].ringkasan[1].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[1].ringkasan[2].split(" ")[0] }</b> ${ data.hosting[1].ringkasan[2].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[1].ringkasan[3].split(" ")[0] }</b> ${ data.hosting[1].ringkasan[3].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[1].ringkasan[4].split(" ")[0] }</b> ${ data.hosting[1].ringkasan[4].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[1].ringkasan[5].split(" ")[0] }</b> ${ data.hosting[1].ringkasan[5].split(" ")[1] }
      </span>
      <button class="button detail-paket">
        <span>
          Detail Paket
        </span>
      </button>
    `)
    $(".card-left").append(`
      <h2>${ data.hosting[0].nama }</h2>
      <p>
        <sup>Rp</sup> <b>${ data.hosting[0].harga }</b><sub>/bln</sub>
      </p>
      <span>
        <b>${ data.hosting[0].ringkasan[0].split(" ")[0] }</b> ${ data.hosting[0].ringkasan[0].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[0].ringkasan[1].split(" ")[0] }</b> ${ data.hosting[0].ringkasan[1].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[0].ringkasan[2].split(" ")[0] }</b> ${ data.hosting[0].ringkasan[2].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[0].ringkasan[3].split(" ")[0] }</b> ${ data.hosting[0].ringkasan[3].split(" ")[1] }
      </span>
      <button class="button detail-paket animated pulse" style="display: none">
        <span>
          Detail Paket
        </span>
      </button>
    `)
    $(".card-right").append(`
      <h2>${ data.hosting[2].nama }</h2>
      <p>
        <sup>Rp</sup> <b>${ data.hosting[2].harga }</b><sub>/bln</sub>
      </p>
      <span>
        <b>${ data.hosting[2].ringkasan[0].split(" ")[0] }</b> ${ data.hosting[2].ringkasan[0].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[2].ringkasan[1].split(" ")[0] }</b> ${ data.hosting[2].ringkasan[1].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[2].ringkasan[2].split(" ")[0] }</b> ${ data.hosting[2].ringkasan[2].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[2].ringkasan[3].split(" ")[0] }</b> ${ data.hosting[2].ringkasan[3].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[2].ringkasan[4].split(" ")[0] }</b> ${ data.hosting[2].ringkasan[4].split(" ")[1] }
      </span>
      <br/>
      <span>
        <b>${ data.hosting[2].ringkasan[5].split(" ")[0] }</b> ${ data.hosting[2].ringkasan[5].split(" ")[1] }
      </span>
      <button class="button detail-paket animated pulse" style="display: none">
        <span>
          Detail Paket
        </span>
      </button>
    `)
  })
});