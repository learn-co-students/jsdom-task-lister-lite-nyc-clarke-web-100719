const submitForm = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");
const taskDescription = document.getElementById("new-task-description");
const taskDuration = document.getElementById("new-task-duration");
const deleteButton = document.getElementById("delete-button")
const dropDown = document.querySelector("form .dropdown");

document.addEventListener("DOMContentLoaded", () => {
  
});



function deleteTasks() {
  taskList.innerHTML = "";
}

function reloadTasksInOrder() {
  let listItems = taskList.querySelectorAll('li');
  let highPriority = [];
   listItems.forEach(function(listItem){
    if (listItem.classList.contains('red')) {
      highPriority.push(listItem);
    }
  });
  let mediumPriority = [];
   listItems.forEach(function(listItem){
    if (listItem.classList.contains('yellow')) {
      mediumPriority.push(listItem);
    }
  });
  let lowPriority = [];
   listItems.forEach(function(listItem){
    if (listItem.classList.contains('green')) {
      lowPriority.push(listItem);
    }
  });
  deleteTasks();
  
  for (const colorItem of highPriority) {
    taskList.appendChild(colorItem);
  }
  for (const colorItem of mediumPriority) {
    taskList.appendChild(colorItem);
  }
  for (const colorItem of lowPriority) {
    taskList.appendChild(colorItem);
  }


  // let mediumPriority = listItems.filter(function(listItem){
  //   listItem.classList.includes('yellow')
  // });
  // let lowPriority = listItems.filter(function(listItem){
  //   listItem.classList.includes('green')
  // });
}

function generateEditButton() {
  const editButton = document.createElement("button");
  const editButtonText = document.createTextNode("Edit");
  editButton.appendChild(editButtonText);
  editButton.setAttribute("id", document.querySelector("#new-task-description").value);
  return editButton;
}

function editButtonListener(editButton, description, duration) {
  let editHTML = `    <form class="edit-task-form" action="#" method="post">
  <input type="text" class="edit-task-description" name="edit-task-description" placeholder="description" value = ${description} >
  <input type="text" class="edit-task-duration" name="edit-task-duration" placeholder="duration in minutes" value = ${duration} >
    <select class="edit-dropdown" >
    <option value="">Select something</option>
        <option value="red">High Priority</option>
    <option value="yellow">Medium Priority</option>
  <option value="green">Low Priority</option>
  </select>
  <input type="submit" value="Update task">
    </form>
  `
  const target = editButton.parentElement;
  editButton.addEventListener("click", function(event){
    let oldEditDropDown = target.classList[0];  
    target.classList.remove('red', 'yellow', 'green');
    target.innerHTML = editHTML;
    let oldEditDescription = target.querySelector(".edit-task-description").value;
    let oldEditDuration = target.querySelector(".edit-task-duration").value;
    const editSubmit = target.querySelector(".edit-task-form");
    editSubmit.addEventListener("submit", function(event) {
      let editDescription = target.querySelector(".edit-task-description");
      let editDuration = target.querySelector(".edit-task-duration");
      let editDropDown = target.querySelector(".edit-dropdown");  
      if (editDescription.value === "" || editDuration.value === "" || editDropDown.value === "") {
        alert("get ouuut");
        target.classList.add(oldEditDropDown);
        target.innerText = `${oldEditDescription} - ${oldEditDuration} minutes`;
        const editButton = generateEditButton();
        target.append(editButton);
        editButtonListener(editButton, oldEditDescription, oldEditDuration)
        reloadTasksInOrder();
      } else {
        target.classList.add(editDropDown.value);
        target.innerText = `${editDescription.value} - ${editDuration.value} minutes`;
        const editButton = generateEditButton();
        target.append(editButton);
        editButtonListener(editButton, editDescription.value, editDuration.value)
        submitForm.reset();
        reloadTasksInOrder();
        event.preventDefault();
      }
    });  

  });
}

submitForm.addEventListener("submit", function(event) {
  if (taskDescription.value === "" || taskDuration.value === "" || dropDown.value === "") {
    alert("get ouuut")
  } else {
    let listItem = document.createElement("li");
    listItem.classList.add(dropDown.value);
    listItem.innerText = `${taskDescription.value} - ${taskDuration.value} minutes`;
    const editButton = generateEditButton();
    listItem.append(editButton);
    taskList.appendChild(listItem);
    editButtonListener(editButton, taskDescription.value, taskDuration.value)
    submitForm.reset();
    reloadTasksInOrder();
    event.preventDefault();
  }
});

deleteButton.addEventListener("click", deleteTasks);