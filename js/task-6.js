"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const createBoxesButton = document.querySelector("[data-create]");
const destroyBoxesButton = document.querySelector("[data-destroy]");
const outputBoxes = document.querySelector("#boxes");

function rangeCheck(amount) {
  if (amount > 0 && amount < 101) {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  outputBoxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const lastItem = document.createElement("div");
    lastItem.style.width = `${30 + i * 10}px`;
    lastItem.style.height = `${30 + i * 10}px`;
    lastItem.style.background = `${getRandomHexColor()}`;
    outputBoxes.append(lastItem);
    inputNumber.value = "";
  }
}

function destroyBoxes() {
  outputBoxes.innerHTML = "";
}

createBoxesButton.addEventListener("click", () => {
  rangeCheck(inputNumber.value);
});

destroyBoxesButton.addEventListener("click", destroyBoxes);