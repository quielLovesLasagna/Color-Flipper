"use strict";

// Colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// ---- ELEMENTS ---- //
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// ---- END OF ELEMENTS ---- //

// ---- FUNCTIONS ---- //
// Get random number from 0-3
const getRandomNumber = () => Math.floor(Math.random() * colors.length);

// Change text and background color
const changeTxtAndBgc = () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
};
// ---- END OF FUNCTIONS ---- //

// ---- EVENT HANDLER ---- //
btn.addEventListener("click", changeTxtAndBgc);
// ---- END OF EVENT HANDLER ---- //
