"use strict";

let input = document.querySelector("#display");
let btns = document.querySelectorAll("button.number-btn");
let plusBtn = document.querySelector("button.plus-btn");
let equalBtn = document.querySelector("button.equal-btn");

let firstNum = document.querySelector("#primary");
let secondNum = document.querySelector("#secondary");

let entryNums = [];

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    e.preventDefault();

    const btnValue = parseInt(btns[i].value);
    entryNums.push(btnValue);
    const entry1 = entryNums[0];
    const entry2 = entryNums[1];
    firstNum.innerText = `${entry1}`;
    secondNum.innerText = `${entry2}`;

    if (entry1 != 0) {
      const total = entry1 + entry2;
      firstNum.innerText = `${total}`;
    }
  });
}
