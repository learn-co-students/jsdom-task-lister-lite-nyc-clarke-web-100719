document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let formField = document.querySelector('#new-task-description')
let form = document.querySelector("#create-task-form")

//sort of capture listener on input field
function updatedField() {
  let input = document.querySelector('#new-task-description').value;
  return input;
}

// adds things to toDo list
function addToDo(toDo) {
  let list = document.querySelector('#tasks');
  list.innerHTML += `<li> ${toDo} </li>`
}

//need an event listening that does our addToDo function on submit
//maybe works?
form.addEventListener('submit', function (event) {
  event.preventDefault();
  addToDo(updatedField());
})