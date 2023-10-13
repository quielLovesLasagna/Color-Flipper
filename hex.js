"use strict";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Hex format: #f15025 - 6 values.

// ---- ELEMENTS ---- //
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// ---- END OF  ELEMENTS ---- //

// ---- FUNCTIONS ---- //
// Get random number from 0 - 15
const getRandomNumber = () => Math.floor(Math.random() * hex.length);

// Get hex color by looping through hex array
let hexColor;
const loopHex = () => {
  hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
};

// Change text and background color
const changeTxtAndBgc = () => {
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
};
// ---- END OF FUNCTIONS ---- //

// ---- EVENT HANDLER ---- //
btn.addEventListener("click", () => {
  loopHex();
  changeTxtAndBgc();
});
// ---- END OF EVENT HANDLER ---- //
