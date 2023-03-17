const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const checkbox = document.querySelector(".navigation__checkbox");
const navlinkArray = document.querySelectorAll(".navigation__link");

navlinkArray.forEach((elem) =>
  elem.addEventListener("click", function () {
    checkbox.checked = false;
  })
);
