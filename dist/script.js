"use strict";

let input = document.querySelector("#display");
let btns = document.querySelectorAll("button.number-btn");
let plusBtn = document.querySelector("button.plus-btn");
let equalBtn = document.querySelector("button.equal-btn");

let firstNum = document.querySelector("#primary");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    e.preventDefault();

    const btnValue = parseInt(btns[i].value);
    const total = btnValue;
    firstNum.innerText = `${total}`;
  });
}
