const changeColorElement = document.querySelectorAll(".changeColor");
const containerElement = document.querySelector("#container");
const colorLocals = JSON.parse(localStorage.getItem("colors")) || [0];

const renderData = () => {
    if (colorLocals[0] === 0) {
        containerElement.style.backgroundColor = "red";
    }
    else if (colorLocals[0] === 1) {
        containerElement.style.backgroundColor = "blue";
    }
    else if (colorLocals[0] === 2) {
        containerElement.style.backgroundColor = "yellow";
    }
    else{
        containerElement.style.backgroundColor = "purple";
    }
}
renderData();

changeColorElement.forEach((button,index) => {
    button.addEventListener("click",(event) => {
        event.preventDefault();
        colorLocals[0] = index;
        localStorage.setItem("colors",JSON.stringify(colorLocals))
        renderData();
    })
});