const reset = document.getElementById("reset");
const tipA = document.getElementById("tip-amount");
const totalP = document.getElementById("total-per-person");
const btn = document.querySelectorAll(".btn");
const bill = document.getElementById("bill");
const custom = document.getElementById("custom");
const people = document.getElementById("people");
let otherActive = null;
let btnValue = null;
let customValue = null;
let billValue = null;
let peopleValue = null;
let tipValue = null;
let btnClicked = false;
let customValid = true;
let totalValue = null;

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.classList.toggle("btn-active");
    custom.value = "";

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

function value() {
  bill.addEventListener("input", (e) => {
    const billInput = e.target;
    billValue = parseFloat(billInput.value);
    calcTotal();
  });
  btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const btnClick = e.target;
      btnValue = parseFloat(btnClick.value / 100);
      btnClicked = true;
      calcTotal();
    });
  });
  custom.addEventListener("input", (e) => {
    const customInput = e.target;
    customValue = parseFloat(customInput.value / 100);
    customValid = true;
    calcTotal();
  });
  people.addEventListener("input", (e) => {
    const peopleInput = e.target;
    peopleValue = parseFloat(peopleInput.value);
    calcTip();
  });
}

value();

function calcTotal() {
  let billTotal = null;
  if ((btnClicked = true)) {
    billTotal = billValue * btnValue;
    totalValue = billValue + billTotal;
  } else if ((customValid = true)) {
    billTotal = billValue * customValue;
    totalValue = billValue + billTotal;
    console.log(totalValue);
  }
  totalP.innerText = `$${totalValue}`;
}

function calcTip() {
  tipValue = totalValue / peopleValue;
  console.log(tipValue);
  tipA.innerText = `$${tipValue}`;
}
