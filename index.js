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

$(document).ready(function () {
  $("#close").click(function () {
    $(".left-div").hide();
  });
  $(".my-menu").click(function () {
    $(".left-div").show();
  });
});
