async function loadTasks() {

    const response = await fetch("/api/tasks");

    const tasks = await response.json();

    displayTasks(tasks);
}


function displayTasks(tasks) {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    let completed = 0;

    tasks.forEach(task => {

        if (task.completed) {
            completed++;
        }

        const li = document.createElement("li");

        li.className = "task";

        li.innerHTML = `
            <div class="task-info">

                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})"
                >

                <span class="${task.completed ? "completed" : ""}">
                    ${task.title}
                </span>

            </div>

            <button
                class="delete-btn"
                onclick="deleteTask(${task.id})"
            >
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });

    document.getElementById("totalTasks").textContent = tasks.length;

    document.getElementById("completedTasks").textContent = completed;

    document.getElementById("pendingTasks").textContent =
        tasks.length - completed;
}


async function addTask() {

    const input = document.getElementById("taskInput");

    const title = input.value.trim();

    if (!title) {
        alert("Please enter a task.");
        return;
    }

    await fetch("/api/tasks", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: title
        })
    });

    input.value = "";

    loadTasks();
}


async function toggleTask(id) {

    await fetch(`/api/tasks/${id}`, {
        method: "PUT"
    });

    loadTasks();
}


async function deleteTask(id) {

    await fetch(`/api/tasks/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}


loadTasks();
