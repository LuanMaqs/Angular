 let taskInput = document.getElementById('new-task');
 let addButton = document.getElementsByTagName('button')[0];
 let incompleteTaskHolder = document.getElementById ('incomplete-task');
 let completeTaskHolder = document.getElementById ('complete-tasks');


 let createNewTask= function (taskString) {
     let listItem = document.createElement("li");
     let checkBox = document.createElement("input")
     let label = document.createElement("label")
    let editInput = document.createElement("input")
    let editButton = document.createElement("button");
     let deleteButton = document.createElement("button");
  label.innerText = taskString
    checkBox.type = "checkbox";
    editInput.type = "text";
    
    
    
    editButton.innerText = "Edit";
     editButton.className = "edit";
    deleteButton.innerText = "Delete";
   deleteButton.className = "delete";

    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(editInput)
    listItem.appendChild(editButton)
   listItem.appendChild(deleteButton)
     return listItem;

 }

 let addTask = function () {
    console.log("Edit Task...");
     console.log("Change 'edit' to 'save'");


     let listItem = this.parentNode; 

     let editInput = listItem.querySelector('input[type=text]')
     let label = listItem.querySelector("label");
     let containsClass = listItem.classList.contains("editMode");

     if(containsClass) {
        label.innerText = editInput.value
     }else {
         editInput.value = label.innerText
    }
     listItem.classList.toggle("editMode")
 }

 let deleteTask = function () {
     console.log("Delete task...")

    let listItem = this.parentNode
     let ul = listItem.parentNode
     ul.removeChild(listItem)
 }


 let taskComplete = function() {
    console.log("Complete task...")

    let listItem = this.parentNode;
    completeTaskHolder.appendChild(listItem)
     bindTaskEvents(listItem, taskIncomplete);
 }

 let taskIncomplete = function () {
     console.log("Incomplete task")

     let listItem = this.parentNode
     incompleteTaskHolder.appendChild(listItem)
     bindTaskEvents(listItem, taskComplete)
 }


 addButton.onclick = addTask;
addButton.addEventListener ("click", addTask);

 let bindTaskEvents = function () {
    console.log("bind list item events");

    let checkBox = taskListItem.querySelector("input[type=checkbox]");
     let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");


     editButton.onclick = editTask;
     deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
 }


 for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
    
     bindTaskEvents(incompleteTaskHolder.children[i], taskComplete);

}

 for (let i = 0; i < completedTasksHolder.children.length; i++) {
    
     bindTaskEvents(completeTaskHolder.children[i], taskIncomplete);
}



