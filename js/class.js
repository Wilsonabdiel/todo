document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("tasks");
    const addButton = document.getElementById("add");
    const taskTitleInput = document.getElementById("textInput");
    const dueDateInput = document.getElementById("dateInput");
    const descriptionInput = document.getElementById("textarea");

    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskTitle = taskTitleInput.value;
        const dueDate = dueDateInput.value;
        const description = descriptionInput.value;

        if (taskTitle.trim() === "") {
            alert("Please enter a task title.");
            return;
        }

        const taskItem = document.createElement("div");
        taskItem.className = "task-item mb-3";

        const taskInfo = document.createElement("div");
        taskInfo.className = "task-info";
        taskInfo.innerHTML = `
            <h6>${taskTitle}</h6>
            <p><strong>Due Date:</strong> ${dueDate}</p>
            <p><strong>Description:</strong> ${description}</p>
        `;

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);

        taskItem.appendChild(taskInfo);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        // Clear input fields
        taskTitleInput.value = "";
        dueDateInput.value = "";
        descriptionInput.value = "";

        // Close the modal
        try {
            const modal = new bootstrap.Modal(document.getElementById("form"));
            modal.hide();
        } catch (error) {
            console.error("Error closing modal:", error);
        }
    }

    function deleteTask(event) {
        const taskItem = event.target.closest(".task-item");
        if (taskItem) {
            taskList.removeChild(taskItem);
        }
    }
});
