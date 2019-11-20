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

function generateEditButton(listItem) {
  const editButton = document.createElement("button");
  const editButtonText = document.createTextNode("Edit");
  editButton.appendChild(editButtonText);
  listItem.append(editButton);
  return editButton;
}

function generateDeleteButton(listItem) {
  const deleteButton = document.createElement("button");
  const deleteButtonText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonText);
  listItem.append(deleteButton);
  deleteButton.addEventListener("click", function(event) {
    listItem.remove();
    reloadTasksInOrder();
    event.preventDefault();
  });
}

function editButtonListener(editButton, description, duration) {
  let editHTML = `    
    <form class="edit-task-form" action="#" method="post">
      <input type="text" class="edit-task-description" name="edit-task-description" placeholder="description" value = ${description}>
      <input type="text" class="edit-task-duration" name="edit-task-duration" placeholder="duration in minutes" value = ${duration}>
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
        alert("Failed to edit task. Please try again.");
        target.classList.add(oldEditDropDown);
        target.innerText = `${oldEditDescription} - ${oldEditDuration} minutes`;
        const editButton = generateEditButton(target);
        editButtonListener(editButton, oldEditDescription, oldEditDuration)
        generateDeleteButton(target);
        taskList.appendChild(target);
        reloadTasksInOrder();
      } else {
        target.classList.add(editDropDown.value);
        target.innerText = `${editDescription.value} - ${editDuration.value} minutes`;
        const editButton = generateEditButton(target);
        editButtonListener(editButton, editDescription.value, editDuration.value);
        generateDeleteButton(target);
        taskList.appendChild(target);
        reloadTasksInOrder();
        event.preventDefault();
      };
    });  
  });
};

submitForm.addEventListener("submit", function(event) {
  if (taskDescription.value === "" || taskDuration.value === "" || dropDown.value === "") {
    alert("Failed to submit task. Please try again.");
    submitForm.reset();
    reloadTasksInOrder();
    event.preventDefault();
  } else {
    let listItem = document.createElement("li");
    listItem.classList.add(dropDown.value);
    listItem.innerText = `${taskDescription.value} - ${taskDuration.value} minutes`;
    const editButton = generateEditButton(listItem);
    editButtonListener(editButton, taskDescription.value, taskDuration.value);
    generateDeleteButton(listItem);
    taskList.appendChild(listItem);
    submitForm.reset();
    reloadTasksInOrder();
    event.preventDefault();
  };
});

deleteButton.addEventListener("click", deleteTasks);