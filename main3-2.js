"use strict";
// const cards = document.querySelectorAll(".card");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((ent) => {
//       if (ent.isIntersecting) {
//         ent.target.classList.add("active");
//       }
//     });
//   },
//   { threshold: 0.5 },
// );
// cards.forEach((card) => observer.observe(card));

// const lessons = document.querySelectorAll(".lesson")
// const observer = new IntersectionObserver((entries, observer)=>{
// entries.forEach(ent=>{
//     if(ent.isIntersecting){
//         ent.target.textContent += "✅";
//         observer.unobserve(ent.target)
//     }
// })
// }, {threshold:0.5})
// lessons.forEach(lesson=>observer.observe(lesson))

// const cards = document.querySelectorAll(".card");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((ent) => {
//       if (ent.isIntersecting) {
//         ent.target.classList.add("big");
//         ent.target.textContent += "✅";
//         observer.unobserve(ent.target)
//       }
//     });
//   },
//   { threshold: 0.5 },
// );
// cards.forEach((card) => observer.observe(card));

const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((ent) => {
      if (ent.isIntersecting) {
        ent.target.classList.add("change");
        ent.target.querySelector("img").src =
          ent.target.querySelector("img").dataset.src
        for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
          ent.target.querySelector("p").textContent += "⭐";
        }
        observer.unobserve(ent.target);
      }
    });
  },
  { threshold: 0.8 },
);
cards.forEach((card) => observer.observe(card));
