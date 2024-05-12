const bill = document.getElementById("bill");
const btn = document.querySelectorAll(".btn");
let btnOutput = 0;
let billOutput = 0;
let customOutput = 0;
let peopleOutput = 0;
let totalBillPer = 0;
let btnClicked = false;
const custom = document.getElementById("custom");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const totalPer = document.getElementById("total-per-person");
const resetBtn = document.getElementById("reset");
const btnDefault = document.querySelectorAll(`button[value="15"]`);

btn.forEach((button) => {
  button.addEventListener("click", () => {
    btn.forEach((btn) => {
      btn.classList.remove("btn-active");
    });
    custom.value = "";
    button.classList.add("btn-active");
    btnOutput = parseFloat(button.value) / 100;
    totalBtn();
    tipBtn();
  });
});

bill.addEventListener("input", () => {
  if (people.value === "") {
    people.classList.add("error");
  }
  billOutput = parseFloat(bill.value);
  totalBtn();
  tipBtn();
  totalCustom();
  tipCustom();
});

custom.addEventListener("input", () => {
  if (custom.value >= 1) {
    btn.forEach((btn) => {
      btn.classList.remove("btn-active");
    });
  }
  customOutput = parseFloat(custom.value) / 100;
  totalBtn();
  tipBtn();
  totalCustom();
  tipCustom();
});

people.addEventListener("input", () => {
  peopleOutput = parseFloat(people.value);
  totalCustom();
  tipCustom();
});

function totalBtn() {
  let tip = billOutput * btnOutput;
  let totalBill = billOutput + tip;
  totalBillPer = totalBill / peopleOutput;
  totalPer.innerText = `$${totalBillPer.toFixed(2)}`;
}

function totalCustom() {
  let tip = billOutput * customOutput;
  totalBill = billOutput + tip;
  totalBillPer = totalBill / peopleOutput;
  totalPer.innerText = `$${totalBillPer.toFixed(2)}`;
}

function tipBtn() {
  let totalTip = billOutput * btnOutput;
  let tipCalc = totalTip / peopleOutput;
  tipAmount.innerText = `$${tipCalc.toFixed(2)}`;
}

function tipCustom() {
  let totalTip = billOutput * customOutput;
  let tipCalc = totalTip / peopleOutput;
  tipAmount.innerText = `$${tipCalc.toFixed(2)}`;
}

resetBtn.addEventListener("click", () => {
  btn.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
  people.classList.remove("error");
  bill.value = "";
  custom.value = "";
  people.value = "";
  btnOutput = 0;
  billOutput = 0;
  customOutput = 0;
  peopleOutput = 1;
  totalBillPer = 0;
  btnClicked = false;
  totalPer.innerText = "$0.00";
  tipAmount.innerText = "$0.00";
});

function defaultBtn() {
  btnDefault.forEach((btn) => {
    btn.classList.toggle("btn-active");
  });
  bill.value = 142.55;
  people.value = 5;
  billOutput = 142.55;
  btnOutput = 0.15;
  peopleOutput = 5;
  totalBtn();
  tipBtn();
}

defaultBtn();
