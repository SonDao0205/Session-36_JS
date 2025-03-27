const pendingTaskElement = document.querySelector("#pendingTasks");
const inProgressElement = document.querySelector("#inProgressTasks");
const doneTaskElement = document.querySelector("#doneTasks");
const inputElement = document.querySelector("#taskName");
const addButtonElement = document.querySelector("#addButton");
let taskLocals = JSON.parse(localStorage.getItem("tasks")) || [];

const renderData = () => {
    pendingTaskElement.innerHTML = "";
    inProgressElement.innerHTML = "";
    doneTaskElement.innerHTML = "";
    // tạo html cho từng cột để sau gán vào
    let pendingHTML = "";
    let inProgressHTML = "";
    let doneHTML = "";

    taskLocals.forEach((task, index) => {
        const taskHTML = `
            <div>
                <p>${task.name}</p>
                ${task.status < 2 ? `<button class="changeMode" data-index="${index}">Chuyển trạng thái</button>` : ""}
            </div>
        `;
        if (task.status === 0) {
            pendingHTML += taskHTML;
        } else if (task.status === 1) {
            inProgressHTML += taskHTML;
        } else {
            doneHTML += taskHTML;
        }
    });

    // gán html vào các cột
    pendingTaskElement.innerHTML = pendingHTML;
    inProgressElement.innerHTML = inProgressHTML;
    doneTaskElement.innerHTML = doneHTML;

    // nút đổi trạng thái
    document.querySelectorAll(".changeMode").forEach((button) => {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            taskLocals[index].status = taskLocals[index].status === 0 ? 1 : taskLocals[index].status === 1 ? 2 : 0;
            localStorage.setItem("tasks", JSON.stringify(taskLocals));
            renderData();
        });
    });
};

renderData();

// thêm việc
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = inputElement.value.trim();
    if (inputValue.length === 0) {
        alert("Vui lòng nhập công việc");
        return;
    }
    const newTask = {
        id: Math.floor(Math.random() * 99),
        name: inputValue,
        status: 0
    };
    taskLocals.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskLocals));
    renderData();
    inputElement.value = "";
});
