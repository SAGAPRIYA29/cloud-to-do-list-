```javascript
var tasks = [];

var input = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");
var taskCount = document.getElementById("taskCount");

addButton.onclick = function () {

    var text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    var task = {
        text: text,
        completed: false
    };

    tasks.push(task);

    input.value = "";

    displayTasks();
};


function displayTasks() {

    taskList.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {

        var task = tasks[i];

        var li = document.createElement("li");

        li.className = "task";

        var checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;


        checkbox.onchange = function () {

            var index = this.getAttribute("data-index");

            tasks[index].completed = this.checked;

            displayTasks();
        };


        checkbox.setAttribute("data-index", i);


        var span = document.createElement("span");

        span.innerText = task.text;


        if (task.completed) {
            span.style.textDecoration = "line-through";
        }


        var deleteButton = document.createElement("button");

        deleteButton.innerText = "Delete";

        deleteButton.onclick = function () {

            var index = this.getAttribute("data-index");

            tasks.splice(index, 1);

            displayTasks();
        };


        deleteButton.setAttribute("data-index", i);


        li.appendChild(checkbox);

        li.appendChild(span);

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }


    if (tasks.length === 0) {

        taskCount.innerText = "No tasks";

    } else {

        taskCount.innerText =
            tasks.length +
            (tasks.length === 1 ? " task" : " tasks");
    }
}


displayTasks();
```


