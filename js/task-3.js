"use strict";
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const outputContent = event.currentTarget.value.trim();
  if (outputContent !== "") {
    output.textContent = outputContent;
  } else {
    output.textContent = "Anonymous";
  }
});