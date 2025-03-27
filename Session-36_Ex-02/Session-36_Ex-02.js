const likeButtonElement = document.querySelectorAll(".likeButton")
const likeTextElement = document.querySelectorAll(".like")
const countLocals = JSON.parse(localStorage.getItem("count")) || [0,0,0];


const renderData = () => {
    likeTextElement[0].textContent = `❤️ ${countLocals[0]} lượt thích`;
    likeTextElement[1].textContent = `❤️ ${countLocals[1]} lượt thích`;
    likeTextElement[2].textContent = `❤️ ${countLocals[2]} lượt thích`;
}
renderData();

likeButtonElement.forEach((button,index) => {
    button.addEventListener("click" , (event) => {
        event.preventDefault();
        countLocals[index] += 1;
        likeTextElement[index].textContent = `❤️ ${countLocals[index]} lượt thích`;
        localStorage.setItem("count", JSON.stringify(countLocals));
    })
})