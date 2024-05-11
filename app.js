const bill = document.getElementById("bill");
const btn = document.querySelectorAll(".btn");
let btnOutput = 0;
let billOutput = 0;
let customOutput = 0;
let peopleOutput = 0;
let totalBillPer = 0;
const custom = document.getElementById("custom");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const totalPer = document.getElementById("total-per-person");
const resetBtn = document.getElementById("reset");

function btnValue() {
  btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btnOutput = parseFloat(btn.value) / 100;
      totalBtn();
      tipBtn();
    });
  });
}

btnValue();

bill.addEventListener("input", () => {
  billOutput = parseFloat(bill.value);
});

custom.addEventListener("input", () => {
  customOutput = parseFloat(custom.value) / 100;
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
  totalPer.innerText = `$${totalBillPer}`;
}

function totalCustom() {
  let tip = billOutput * customOutput;
  totalBill = billOutput + tip;
  totalBillPer = totalBill / peopleOutput;
  totalPer.innerText = `$${totalBillPer}`;
}

function tipBtn() {
  let totalTip = billOutput * btnOutput;
  let tipCalc = totalTip / peopleOutput;
  tipAmount.innerText = `$${tipCalc}`;
}

function tipCustom() {
  let totalTip = billOutput * customOutput;
  let tipCalc = totalTip / peopleOutput;
  tipAmount.innerText = `$${tipCalc}`;
}

resetBtn.addEventListener("click", () => {
  bill.value = "";
  custom.value = "";
  people.value = "";
  totalPer.innerText = "$0.00";
  tipAmount.innerText = "$0.00";
});
