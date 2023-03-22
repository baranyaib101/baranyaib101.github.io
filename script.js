const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const checkbox_nav = document.querySelector(".navigation__checkbox");
const navlinkArray = document.querySelectorAll(".navigation__link");

navlinkArray.forEach((elem) =>
  elem.addEventListener("click", function () {
    checkbox_nav.checked = false;
  })
);

const checkbox_bc = document.querySelector(".businesscard__checkbox");
const bclinkArray = document.querySelectorAll(".businesscard__link");

bclinkArray.forEach((elem) =>
  elem.addEventListener("click", function () {
    checkbox_bc.checked = false;
  })
);

checkbox_nav.addEventListener("click", function () {
  if ((checkbox_nav.checked === true) & (checkbox_bc.checked === true)) {
    checkbox_bc.checked = false;
  }
});

checkbox_bc.addEventListener("click", function () {
  if ((checkbox_bc.checked === true) & (checkbox_nav.checked === true)) {
    checkbox_nav.checked = false;
  }
});
