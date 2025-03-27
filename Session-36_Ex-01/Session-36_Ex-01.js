const nameInputElement = document.querySelector("#nameInput");
const saveBtnElement = document.querySelector("#saveBtn");
const inputElement = document.querySelector(".input");
const outputElement = document.querySelector(".output");
const changeNameElement = document.querySelector("#changeName");
const sayHelloElement = document.querySelector("#sayHello");
const nameLocals = JSON.parse(localStorage.getItem("name")) || [];

const newName = () => {
    inputElement.style.display = "block";
    outputElement.style.display = "none";
    saveBtnElement.addEventListener("click",(event) => {
        event.preventDefault();
        const nameValue = nameInputElement.value.trim();
        nameLocals.push(nameValue);
        localStorage.setItem("name",JSON.stringify(nameLocals))
        renderName();
    })
}

const renderName = () => {
    inputElement.style.display = "none";
    outputElement.style.display = "block";
    sayHelloElement.textContent = `👋 Chào bạn, ${nameLocals[nameLocals.length - 1]}`;
}

if (nameLocals.lenght === 0) {
    newName();
}
else {
    renderName();
    changeNameElement.addEventListener("click", (event) => {
        event.preventDefault();
        newName();
    })
}