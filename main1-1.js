"use strict";
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const target = document.querySelector(".target");
// parent.addEventListener("click", () => console.log("click on parent"));
// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click on child");
// });
// target.addEventListener("click", () => console.log("click on target"));

// const palette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");
// createBtn();
// function createBtn() {
//   let btns = [];
//   for (let i = 0; i < 60; i++) {
//     const btn = document.createElement("button");
//     const color = randomColor();
//     btn.style.backgroundColor = color;
//     btn.dataset.color = color;
//     btn.classList.add("btn");
//     btn.type = "button";
//     btns.push(btn);
//   }
//   palette.append(...btns);
// }
// function randomColor() {
//   //return `${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}`;
//   return `#${Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0")}${Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0")}${Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0")}`;
// }
// console.log(
//   Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0"),
// );
// palette.addEventListener("click", (e) => {
//   if (e.target.nodeName !== "BUTTON") return;
//   const targetcolor = e.target.dataset.color;
//   output.textContent=`your color: ${targetcolor}`
//   document.body.style.backgroundColor = targetcolor
// });
