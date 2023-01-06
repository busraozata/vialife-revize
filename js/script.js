$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".header-inner").addClass("sticky");
  } else {
    $(".header-inner").removeClass("sticky");
  }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView:2,
      spaceBetween: 50,
    },
  },
});
/* ------------------------------------------------------------- */

$(".mega-menu .sub-item .dropdown-item").on("mouseover", function () {
    var imgPath = $(this).attr("data-image");
  
    $(".mega-menu .img-wrapper img").attr("src", imgPath);
  });
  /* ------------------------------------------------------------- */