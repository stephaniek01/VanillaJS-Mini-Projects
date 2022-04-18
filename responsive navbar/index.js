const burger = document.getElementsByClassName("burger")[0];
const nav = document.getElementsByClassName("nav-links")[0];
const navlink = [...document.getElementsByClassName("nav-link")];
const line2 = document.querySelector(".line2");

burger.addEventListener("click", function () {
  nav.classList.toggle("active-nav");

  navlink.forEach((link, index) => {
    if (link.style.animation)
        link.style.animation = "";
    else
      link.style.animation = `navLinksFadeIn .2s ease-in forwards ${ index / 5 + .5 }s`;
  });

  burger.classList.toggle("toggle");
});

const app = () => {};

app();
