(function () {
  let btn = document.getElementById("hamburger_menu");

  function sticky() {
    let bar = document.getElementById("sticky_nav");
    let pm = document.getElementById("header");

    if (window.innerWidth >= 767) {
      if (window.scrollY >= 95) {
        bar.classList.add("active");
      } else {
        bar.classList.remove("active");
      }
    } else {
      if (window.scrollY >= 10) {
        pm.classList.add("active");
      } else {
        pm.classList.remove("active");
      }
    }
  }

  function toggleMenu() {
    const menu = document.getElementById("main_menu");
    const nav = document.getElementById("hamburger_menu");
    const body = document.getElementById("body");

    if (!menu.classList.contains("active")) {
      body.classList.add("scroll-lock");
      menu.classList.add("active");
      nav.classList.add("active");
      btn.setAttribute("aria-expanded", "true");
    } else {
      body.classList.remove("scroll-lock");
      menu.classList.remove("active");
      nav.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    }
  }

  btn.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", sticky);
})();
