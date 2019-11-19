document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const addNewTask = document.getElementById('new-task-description')
  //form listener for submit button
  form.addEventListener('submit', function(event){
    event.preventDefault();
    tasks.innerHTML += `<li>${addNewTask.value}<button data-description=${addNewTask.value}>X</button> </li>`
    addNewTask.value = ""
    //delete a task
    // const allButtons = document.querySelector('#tasks').querySelectorAll('button')
    // allButtons.forEach(function(button, index) {
    // button.addEventListener('click', function(event){
    // document.querySelector('#tasks').querySelectorAll('li')[index].remove()
  //   })
  // })
  }, false);
  //how to delete a list without nesting it
  let list  = document.getElementById("list")
  list.addEventListener('click', function(e){
    let button = e.target
    if (e.target.value="X") {
      button.parentElement.remove()
    }
  })
});
