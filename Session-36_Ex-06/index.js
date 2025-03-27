const starsElement = document.querySelectorAll(".stars");
const commentInputElement = document.querySelector("#comment-input")
const commentListElement = document.querySelector("#comment-list")
const commentLocals = JSON.parse(localStorage.getItem("comments")) || []
let countStar = 0

starsElement.forEach((star) => {
    star.addEventListener("click", (event) => {
        // star.classList.add("active")
        // countStar = star.dataset.value
        // console.log(starsElement);
        if (countStar <= 5) {
            if (star.classList.contains("active")) {
                star.classList.remove("active")
                countStar--
                console.log(countStar);
            }
            else{
                star.classList.add("active")
                countStar++
                console.log(countStar);
            }    
        }
    })    
});

const renderData = () => {
    commentInputElement.innerHTML = ""
    const htmls = commentLocals.map((comment) => {
        let starHTML = ""
        for (let i = 1; i <= comment.star; i++) {
            starHTML += "★"
        }
        return `
        <li> <span>${starHTML}<span> <b>${comment.content}</b> </li>`
    })
    const convert = htmls.join("")
    commentListElement.innerHTML = convert
}
renderData()

const submitReview = () => {
    if (countStar === 0) {
        alert("Bạn chưa đánh giá sản phẩm")
        return
    }
    const commentValue = commentInputElement.value.trim()
    const newComment = {
        id: Math.floor(Math.random()*99),
        content: commentValue,
        star:countStar
    }
    commentLocals.push(newComment)
    localStorage.setItem("comments",JSON.stringify(commentLocals))
    renderData()
    commentInputElement.value = ""
    for (const star of starsElement) {
        star.classList.remove("active")
    }
    countStar = 0
}
