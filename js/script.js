$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".header-inner").addClass("sticky");
  } else {
    $(".header-inner").removeClass("sticky");
  }
});

$(document).ready(function () {
  $(".services_toggle").click(function () {
    $(".services-menu").animate({ width: "toggle" });
    $(".list").delay("200").fadeToggle("slow");
  });
});

$(".change-lang").click(function () {
  $(".lang-list").toggleClass("active");
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiperBlog", {
  spaceBetween: 50,
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
});

var swiper = new Swiper(".mySwiperServices", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1700: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
var swiper = new Swiper(".mySwiperDoctors", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
var swiper = new Swiper(".mySwiperGallery", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

$("#preloader")
  .delay(1000)
  .fadeOut("slow", function () {
    $(this).remove();
  });

/* ------------------------------------------------------------- */

$(".mega-menu .sub-item .dropdown-item").on("mouseover", function () {
  var imgPath = $(this).attr("data-image");

  $(".mega-menu .img-wrapper img").attr("src", imgPath);
});
/* ------------------------------------------------------------- */
let dropdowns = document.querySelectorAll(".dropdown-toggle");
dropdowns.forEach((dd) => {
  dd.addEventListener("click", function (e) {
    var el = this.nextElementSibling;
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
});
