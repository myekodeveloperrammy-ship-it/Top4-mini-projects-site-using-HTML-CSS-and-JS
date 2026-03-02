const pushBtn = document.querySelector("#push");

pushBtn.onclick = function () {
  if (document.querySelector("#new-task input").value.length == 0) {
    alert("Please enter a task");
  } else {
    document.querySelector("#tasks").innerHTML += `
        <div class='task'>
            <span id="task-name">
                ${document.querySelector("#new-task input").value}
            </span>
            <button class="delete">-</button>
        <div>
    `;

    var current_task = document.querySelectorAll(".delete");

    for (var i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll(".task");

    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#new-task input").value = "";
  }
};
