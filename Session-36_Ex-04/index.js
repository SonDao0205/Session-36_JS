const changeModeElement = document.querySelector(".dark-mode-toggle")
const titleElement = document.querySelector(".title")
const navbarElement = document.querySelector(".navbar")
const productCardElement = document.querySelectorAll(".product-card")
const bodyElement = document.querySelector("body")
const buttonELement = document.querySelectorAll(".buy-btn")
const productNameElement = document.querySelectorAll(".product-name")
const changeModeLocals = JSON.parse(localStorage.getItem("changeMode")) || [0];

const renderData = () => {
    if (changeModeLocals[0] === 0) {
        titleElement.style.color = titleElement.style.color === "white" ? "black" : "white"
        for (const element of productCardElement) {
            element.style.backgroundColor = element.style.backgroundColor === "rgb(45, 45, 45)" ? "white" : "rgb(45, 45, 45)"
        }
        for (const element of productNameElement) {
            element.style.color = element.style.color === "white" ? "black" : "white"
        }
        for (const element of buttonELement) {
            element.style.background = element.style.background === "rgb(230, 126, 35)" ? "rgb(52, 152, 219)" : "rgb(230, 126, 35)"
        }
        navbarElement.style.backgroundColor = navbarElement.style.backgroundColor === "rgb(45, 45, 45)" ? "white" : "rgb(45, 45, 45)"
        bodyElement.style.backgroundColor = bodyElement.style.backgroundColor === "black" ? "#f5f5f5" : "black"
    }
}

renderData()

changeModeElement.addEventListener("click", () => {
    titleElement.style.color = titleElement.style.color === "white" ? "black" : "white"
    for (const element of productCardElement) {
        element.style.backgroundColor = element.style.backgroundColor === "rgb(45, 45, 45)" ? "white" : "rgb(45, 45, 45)"
    }
    for (const element of productNameElement) {
        element.style.color = element.style.color === "white" ? "black" : "white"
    }
    for (const element of buttonELement) {
        element.style.background = element.style.background === "rgb(230, 126, 35)" ? "rgb(52, 152, 219)" : "rgb(230, 126, 35)"
    }
    navbarElement.style.backgroundColor = navbarElement.style.backgroundColor === "rgb(45, 45, 45)" ? "white" : "rgb(45, 45, 45)"
    bodyElement.style.backgroundColor = bodyElement.style.backgroundColor === "black" ? "white" : "black"
    changeModeLocals[0] = changeModeLocals[0] === 0 ? 1 : 0
    localStorage.setItem("changeMode", JSON.stringify(changeModeLocals))
})

