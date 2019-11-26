document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const tasksList = document.getElementById('tasks');
const form = document.getElementById('create-task-form');

form.addEventListener('click', function(event){
  event.preventDefault();
  if (event.target.id === 'submit') {
    let newToDo = document.getElementById('new-task-description');
    tasksList.innerHTML += `<li>${newToDo.value}</li>`
    form.reset();
  }
})