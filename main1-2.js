"use strict";
// const toDoForm = document.getElementById("to-do");
// const toDoInput = document.getElementById("to-do-input");
// const toDoOutput = document.getElementById("to-do-list");
// const tasks = [];
// const renderTask = () => {
//   toDoOutput.innerHTML = "";
//   toDoOutput.innerHTML = tasks
//     .map((item) => {
//       return `<li data-id = "${item.id}" class = '${item.done ? "done" : ""}'>
//       <input type="checkbox" class = "to-do-check" ${item.done ? "checked" : ""}>
//       <p>${item.text}</p>
//       <button type="button" class = "delete">delete</button>
//     </li>`;
//     })
//     .join(" ");
// };
// toDoForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const text = toDoInput.value.trim();
//   if (text == "") return;
//   const toDo = {
//     id: Date.now(),
//     text,
//     done: false,
//   };
//   tasks.push(toDo);
//   renderTask(tasks);
//   toDoInput.value = "";
// });
// //checkbox
// const toggleDone = (e) => {
//   if (!e.target.classList.contains("to-do-check")) return;
//   const id = Number(e.target.closest("li").dataset.id);
//   const task = tasks.find((task) => task.id === id);
//   task.done = !task.done;
//   renderTask();
// };
// const deleteTask = (e) => {
//   if (!e.target.classList.contains("delete")) return;
//   const id = Number(e.target.closest("li").dataset.id);
//   const index = tasks.findIndex((task) => task.id === id);
//   if(index != -1){
//     tasks.splice(index, 1)
//   }
//   renderTask()
// };
// toDoOutput.addEventListener("change", toggleDone);
// toDoOutput.addEventListener("click", deleteTask);
