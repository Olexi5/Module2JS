"use strict";
//creating an observer
//IntersectionObserver(колбек, допналаштування)
// const images = document.querySelectorAll('[data-src')
// const observer = new IntersectionObserver((entries, observer)=>{
//     entries.forEach(entr=>{
//         if(!entr.isIntersecting) return
//         const img = entr.target
//         img.src = img.dataset.src
//         observer.unobserve(img)
//     })
// },{
//   rootMargin: "50px",
//   treshold: 0.5,
//   root:null
// });
// images.forEach(img=>{
//     observer.observe(img)
// })
// const countP = document.querySelector(".count")
// const boxes = document.querySelectorAll(".box");
// let count=0
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entr) => {
//       if (entr.isIntersecting) {
//         entr.target.classList.add("show");
//         count+=1
//         countP.textContent = count
//       }
//     });
// },
//   {
//     treshold: 0.33,
//   },
// );
// boxes.forEach((box) => {
//   observer.observe(box);
// });

// const cards = document.querySelectorAll(".card")
// const observer = new IntersectionObserver((entries)=>{
// entries.forEach(ent=>{
//     if(ent.isIntersecting){
//         ent.target.style.color = "red"
//     }
// })
// }, {threshold:0.5})
// cards.forEach(card=>observer.observe(card))

// const fruits = document.querySelector(".fruit__list").querySelectorAll("li")
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((ent) => {
//       if (ent.isIntersecting) {
//         ent.target.style.color = "red";
//       }
//       if(!ent.isIntersecting){
//         ent.target.style.color = "black";
//       }
//     });
//   },
//   { threshold: 0.5 },
// );
// fruits.forEach((fruit) => observer.observe(fruit));