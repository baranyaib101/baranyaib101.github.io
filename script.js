const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// NAVIGATION

const btnNavEl = document.querySelector(".btn-mobile-nav");
const btnbcEl = document.querySelector(".btn-mobile-bc");
const navEl = document.querySelector(".navigation");
const bcEl = document.querySelector(".businesscard");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
  if (bcEl.classList.contains("bc-open")) {
    bcEl.classList.toggle("bc-open");
  }
});

const navlinkArray = document.querySelectorAll(".main-nav-link");

navlinkArray.forEach((elem) =>
  elem.addEventListener("click", function () {
    navEl.classList.toggle("nav-open");
  })
);

// CONTACT INFO

btnbcEl.addEventListener("click", function () {
  bcEl.classList.toggle("bc-open");
  if (navEl.classList.contains("nav-open")) {
    navEl.classList.toggle("nav-open");
  }
});

const bclinkArray = document.querySelectorAll(".businesscard-link");

bclinkArray.forEach((elem) =>
  elem.addEventListener("click", function () {
    bcEl.classList.toggle("bc-open");
  })
);
