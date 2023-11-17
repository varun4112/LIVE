var nav = document.querySelector(`.navcont`);
console.log(nav);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("nav-active");
    console.log("dark");
  } else {
    nav.classList.remove("nav-active");
    console.log("light");
  }
});
