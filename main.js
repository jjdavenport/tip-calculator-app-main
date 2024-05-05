const reset = document.getElementById("reset");
const tipA = document.getElementById("tip-amount");
const totalP = document.getElementById("total-per-person");
const btn = document.querySelectorAll(".btn");
const bill = document.getElementById("bill");
const custom = document.getElementById("custom");
const people = document.getElementById("people");
const billValue = document.getElementById("bill").value;
const customValue = document.getElementById("custom").value;
const peopleValue = document.getElementById("people").value;
let otherActive = null;
const btn5 = 5;

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.classList.toggle("btn-active");

    if (otherActive && otherActive !== e.target) {
      otherActive.classList.remove("btn-active");
      custom.value = "";
    }
    otherActive = e.target;
  });
});

custom.addEventListener("input", () => {
  btn.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
});

reset.addEventListener("click", () => {
  btn.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
  bill.value = "";
  custom.value = "";
  people.value = "";
  tipA.innerText = "$0.00";
  totalP.innerText = "$0.00";
});

function tip() {}

function total() {
  let totalBill = bill / people;
  totalP.innerText = `$${totalBill}`;
}

function tipAmount() {
  let tipValue = bill / people;
  tipA.innerText = `$${tipValue}`;
}

bill.addEventListener("input", () => {
  total();
  tipAmount();
});

people.addEventListener("input", () => {
  total();
  tipAmount();
});
