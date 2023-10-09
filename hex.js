"use strict";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Hex format: #f15025 - 6 values.

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let hexColor;
const loopHex = () => {
  hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber(0, hex.length - 1)];
  }
};

btn.addEventListener("click", () => {
  loopHex();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
