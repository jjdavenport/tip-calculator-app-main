const btn5 = document.getElementById("btn5");
const btn10 = document.getElementById("btn10");
const btn15 = document.getElementById("btn15");
const btn25 = document.getElementById("btn25");
const btn50 = document.getElementById("btn50");
const reset = document.getElementById("reset");
const custom = document.getElementById("custom");

btn5.addEventListener("click", () => {
  console.log("click5");
});

btn10.addEventListener("click", () => {
  console.log("click10");
});

btn15.addEventListener("click", () => {
  console.log("click15");
});

btn25.addEventListener("click", () => {
  console.log("click25");
});

btn50.addEventListener("click", () => {
  console.log("click50");
});

reset.addEventListener("click", () => {
  console.log("reset");
});

custom.addEventListener("input", () => {
  console.log("custom");
});
