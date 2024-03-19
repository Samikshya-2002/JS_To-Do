function addTask() 
{

    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") 
    {
        alert("Please enter a task!");
        return;
    }

    var l = document.createElement("dl"); //list is cretaed
    var task = document.createElement("span");//inline element
    task.textContent = taskInput.value;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("_button");
    deleteBtn.onclick = function() 
    {
        l.remove();
    };

    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("_button");

    editBtn.onclick = function() 
       {
              var oldtask=task.textContent;
              var newtext = prompt("edit task input",oldtask);
              if(newtext !== null && newtext.trim() !== "") 
              {
                task.textContent= newtext.trim();   
              };
        };


    l.appendChild(task);
    l.appendChild(deleteBtn);
    l.appendChild(editBtn);
    taskList.appendChild(l);

    taskInput.value = "";
}