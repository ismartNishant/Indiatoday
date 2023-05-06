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



document.querySelectorAll('.theme-colors .color').forEach(color =>{
  color.onclick = () => {
      let background = color.style.background;
      document.querySelector(':root').style.setProperty('--bs-danger', background);
      // document.querySelector(':root').style.setProperty('--bs-red',background);
  }
}); 


//--------------------------------for bs5 theme follow below code-----------------------------------------
(function () {
  let lightSwitch = document.getElementById("lightSwitch");
  if (!lightSwitch) {
    return;
  }

  /**
   * @function darkmode
   * @summary: changes the theme to 'dark mode' and save settings to local stroage.
   * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
   */
  function darkMode() {
    document.querySelectorAll(".bg-light").forEach((element) => {
      element.className = element.className.replace(/-light/g, "-dark");
    });

    document.querySelectorAll(".link-dark").forEach((element) => {
      element.className = element.className.replace(/link-dark/, "text-white");
    });

    document.body.classList.add("bg-dark");

    if (document.body.classList.contains("text-dark")) {
      document.body.classList.replace("text-dark", "text-light");
    } else {
      document.body.classList.add("text-light");
    }

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      // add table-dark class to each table
      tables[i].classList.add("table-dark");
    }

    // set light switch input to true
    if (!lightSwitch.checked) {
      lightSwitch.checked = true;
    }
    localStorage.setItem("lightSwitch", "dark");
  }

  /**
   * @function lightmode
   * @summary: changes the theme to 'light mode' and save settings to local stroage.
   */
  function lightMode() {
    document.querySelectorAll(".bg-dark").forEach((element) => {
      element.className = element.className.replace(/-dark/g, "-light");
    });

    document.querySelectorAll(".text-white").forEach((element) => {
      element.className = element.className.replace(/text-white/, "link-dark");
    });

    document.body.classList.add("bg-light");

    if (document.body.classList.contains("text-light")) {
      document.body.classList.replace("text-light", "text-dark");
    } else {
      document.body.classList.add("text-dark");
    }

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains("table-dark")) {
        tables[i].classList.remove("table-dark");
      }
    }

    if (lightSwitch.checked) {
      lightSwitch.checked = false;
    }
    localStorage.setItem("lightSwitch", "light");
  }

  /**
   * @function onToggleMode
   * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
   */
  function onToggleMode() {
    let elem = document.getElementById("mode");
    if (lightSwitch.checked) {
      darkMode();

      if (elem.innerText == "LIGHT MODE") {
        elem.innerText = "DARK MODE";
      }
      else elem.innerText = "LIGHT MODE";
    } else {
      lightMode();
      if (elem.innerText == "LIGHT MODE") {
        elem.innerText = "DARK MODE";
      }
      else elem.innerText = "LIGHT MODE";
    }
  }

  /**
   * @function getSystemDefaultTheme
   * @summary: get system default theme by media query
   */
  function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return "dark";
    }
    return "light";
  }

  function setup() {
    var settings = localStorage.getItem("lightSwitch");
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    if (settings == "dark") {
      lightSwitch.checked = true;
    }

    lightSwitch.addEventListener("change", onToggleMode);
    onToggleMode();
  }

  setup();
})();




