"use strict";
// //debounce - postpones the execution until the event has ended (input, search, server request)
// const firstInput = document.getElementById("first-input");
// firstInput.addEventListener("input", _.debounce((e)=>console.log(e.target.value), 1000))
// //throttle - called once in a certain period of time(scroll, mouse, resize)
// window.addEventListener("scroll", _.throttle(()=>console.log('scrolled'), 10000))

//1
// const secondInput = document.getElementById("secInput")
// const output = document.querySelector(".output")
// secondInput.addEventListener("input", _.throttle((e)=>{
//     output.textContent = e.target.value
// }, 500))

//2
// const thirdInput = document.getElementById("thirdInput")
// thirdInput.addEventListener("input", _.debounce((e)=>{

// }))

//3
// document.addEventListener("mousemove", _.debounce(()=>console.log("moved"), 100))

//4
// const graph = document.getElementById("graph");
// const point = document.getElementById("point");
// const coor = document.getElementById("coor");
// graph.addEventListener(
//   "mousemove",
//   _.throttle((e) => mouseListener(e), 100),
// );
// function mouseListener(e) {
//   const rect = graph.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;
//   point.setAttribute("cx", x)
//   point.setAttribute("cy", y);
//   coor.textContent = `x: ${x}, y: ${y}`
// }

//5
// const fourInput = document.getElementById("four-input")
// const fourOutnput = document.getElementById("four-output");
// fourInput.addEventListener("input", _.debounce((e)=>{
// fourOutnput.textContent = `Congratulations, ${e.target.value}`
// }, 500))