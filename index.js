let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 400,
    },
    390: {
      slidesPerView: 2,
      spaceBetween: 350,
    },
    411: {
      slidesPerView: 2,
      spaceBetween: 350,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 130,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 200,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 680,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 330,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 570,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  autoHeight: true,
  slidesPerView: "auto",
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    centeredSlides: true,
  },
  // Enable debugger
  debugger: true,
});

var swiper3 = new Swiper(".mySwiper3", {
  autoHeight: true,
  slidesPerView: "auto",
  grabCursor: true,

  // pagination: {
  //   el: ".swiper-pagination3",
  //   clickable: true,

  // },
  breakpoints: {
    centeredSlides: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  // Enable debugger
  debugger: true,
});

var swiper4 = new Swiper(".mySwiper4", {
  autoHeight: true,
  slidesPerView: "auto",
  grabCursor: true,

  // pagination: {
  //   el: ".swiper-pagination3",
  //   clickable: true,

  // },
  breakpoints: {
    centeredSlides: true,
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
  // Enable debugger
  debugger: true,
});

const slider = document.querySelector(".top-nav");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

// to hide and show left div



if ($(window).width() <= 912) {
  $(document).ready(function () {
    $("#close").click(function () {
      $(".left-div").hide();
    });
    $(".my-menu").click(function () {
      $(".left-div").show();
    });
    $(document).mouseup(function (e) {
      var container = $(".left-div");

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  });
}
