const reset = document.getElementById("reset");
const tipA = document.getElementById("tip-amount");
const tipP = document.getElementById("tip-per-person");
const btn = document.querySelectorAll(".btn");
const bill = document.getElementById("bill");
const custom = document.getElementById("custom");
const people = document.getElementById("people");

let otherActive = null;

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.classList.toggle("btn-active");

    if (otherActive && otherActive !== e.target) {
      otherActive.classList.remove("btn-active");
    }
    otherActive = e.target;
  });
});

reset.addEventListener("click", () => {
  btn.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
  bill.value = "";
  custom.value = "";
  people.value = "";
});
