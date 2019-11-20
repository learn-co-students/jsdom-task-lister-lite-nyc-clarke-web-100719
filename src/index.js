document.addEventListener("DOMContentLoaded", () => {
  
  
  document.addEventListener('submit', function(event){
    event.preventDefault()
    let entry = document.getElementById('new-task-description')
    let newEntry = document.createElement('li')
    newEntry.innerText = entry.value
    let button = document.createElement('button')
    appendNewEntry(newEntry)
  })

  let appendNewEntry = function(task){
    document.getElementById('tasks').appendChild(task)
  }


});
