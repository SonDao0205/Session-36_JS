const userLocals = JSON.parse(localStorage.getItem("users")) || [];
const homeElement = document.querySelector("#home")
const logOutElement = document.querySelector("#logOut")
homeElement.innerHTML = `
        <h1>Xin chào , ${userLocals[userLocals.length - 1].username}! </h1>
        <p>Chào mừng bạn đến với hệ thống mini</p>
        <button type="button" onclick = "logOut()" class="btn btn-primary w-100" id="logOut">Đăng xuất</button>`

const logOut = () => {
    window.location.href = "../login/index.html"
}

