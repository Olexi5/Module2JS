"use strict";
//1
// const btn = document.querySelector("#click");
// const countSpan = document.querySelector("#count");
// let count = 0;
// btn.addEventListener(
//   "click",
//   _.throttle(() => {
//     count += 1;
//     countSpan.textContent = count;
//   }, 1000)
// );

//2
// const users = [
//   "Анна",
//   "Олег",
//   "Ірина",
//   "Максим",
//   "Катерина",
//   "Андрій",
//   "Марія",
// ];
// const list = document.querySelector("#list")
// const search = document.querySelector("#search");
// search.addEventListener("input", _.debounce(findUser, 400))
// function findUser(){
//     const value  = search.value.toLowerCase().trim()
//     const filtered = users.filter(user => user.toLowerCase().includes(value))
//     list.innerHTML = "";
//     console.log(filtered)
//     filtered.forEach(user =>{
//         const li = document.createElement("li")
//         li.textContent = user
//         list.append(li);
//     })
// }

//3
// const output = document.querySelector(".output");
// function updateSize() {
//   output.textContent = `width : ${innerWidth} px, height : ${innerHeight}px`;
// }
// window.addEventListener("resize", _.throttle(updateSize, 400));

//4
// const words = document.querySelector("#words");
// const characters = document.querySelector("#characters");
// const area = document.querySelector("#area");
// area.addEventListener("input", _.debounce(count, 300));
// function count() {
//   const value = area.value;
//   characters.textContent = `Character count : ${value.length}`;
//   words.textContent = `Word count : ${value.trim() === "" ? 0 : value.split(" ").length}`;
// }

//5
const input = document.querySelector("#input")
const output = document.querySelector("#output");
input.addEventListener("input", _.debounce(check, 100))
function check(){
    const value = input.value
    const length = value.length>=8? 'Є 8 символів' : "Нема 8 символів"
    const number = /\d/.test(value) ? 'Є число' : "Нема числа"
    const bigLetter = /[A-Z]/.test(value)? 'Є велика літера' : "Нема великої літери"
    output.textContent = `${length}, ${number}, ${bigLetter}`
}