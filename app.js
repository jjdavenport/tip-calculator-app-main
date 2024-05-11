const bill = document.getElementById("bill");
const btn = document.querySelectorAll(".btn");
let btnOutput = null;
let billOutput = null;
let customOutput = null;
let peopleOutput = null;
let totalBillPer = null;
const custom = document.getElementById("custom");
const people = document.getElementById("people");

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
  totalCustom();
  tipCustom();
});

custom.addEventListener("input", () => {
  customOutput = parseFloat(custom.value) / 100;
  tipCustom();
});

people.addEventListener("input", () => {
  peopleOutput = parseFloat(people.value);
  totalCustom();
});

function totalBtn() {
  let tip = billOutput * btnOutput;
  let totalBill = billOutput + tip;
  totalBillPer = totalBill / peopleOutput;
}

function totalCustom() {
  let tip = billOutput * customOutput;
  totalBill = billOutput + tip;
  totalBillPer = totalBill / peopleOutput;
}

function tipBtn() {
  let tip = billOutput * btnOutput;
  totalTip = tip;
}

function tipCustom() {
  let tip = billOutput * customOutput;
  totalTip = tip;
  console.log(totalTip);
}
