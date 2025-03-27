const usernameElement = document.querySelector("#usernameInput")
const passwordElement = document.querySelector("#passwordInput")
const formElement = document.querySelector("#form")
const remindMe = document.querySelector("#remindInput")
const userLocals = JSON.parse(localStorage.getItem("users")) || [];
const remindLocal = JSON.parse(localStorage.getItem("remind")) || []
formElement.addEventListener("submit",(event) => {
    event.preventDefault();
    const usernameValue = usernameElement.value.trim();
    const passwordValue = passwordElement.value.trim();
    if (usernameValue.length === 0 || passwordValue.length === 0) {
        alert("Hãy nhập tên tài khoản và mật khẩu trước")
        return
    }
    const user = userLocals.find((user) => user.username === usernameValue && user.password === passwordValue);
    if (!user) {
        alert("Tên tài khoản hoặc mật khẩu không chính xác")
        return;
    }
    if (remindMe.checked){
        remindLocal[0] = 1
        localStorage.setItem("remind",JSON.stringify(remindLocal))
    }
    else if(!remindMe.checked){
        remindLocal[0] = 0
        localStorage.setItem("remind",JSON.stringify(remindLocal))
    }
    alert("Đăng nhập thành công!");
    window.location.href = "../home/index.html"
});