"use strict";

let input = document.querySelector("#display");
let btns = document.querySelectorAll("button.number-btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    e.preventDefault();

    const btnValue = btns[i].value;
    input.innerText = `${btnValue}`;
  });
}
