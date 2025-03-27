const usernameElement = document.querySelector("#usernameInput")
const passwordElement = document.querySelector("#passwordInput")
const formElement = document.querySelector("#form")
const userLocals = JSON.parse(localStorage.getItem("users")) || [];

const validatePassword = (passwordValue) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    return passwordRegex.test(passwordValue);
}

formElement.addEventListener("submit",(event) => {
    event.preventDefault();
    const usernameValue = usernameElement.value.trim();
    const passwordValue = passwordElement.value.trim();
    if (usernameValue.length === 0 || passwordValue.length === 0) {
        alert("Hãy nhập tên tài khoản và mật khẩu trước")
        return
    }
    if (!validatePassword(passwordValue)) {
        alert("Mật khẩu không hợp lệ")
        return
    }
    if (userLocals.some(user => user.username === usernameValue)) {
        alert("Tài khoản đã tồn tại")
        return
    }
    const newUser = {
        username: usernameValue,
        password: passwordValue
    }
    userLocals.push(newUser)
    localStorage.setItem("users", JSON.stringify(userLocals))
    alert("Đăng ký thành công")
    usernameElement.value = ""
    passwordElement.value = ""
    window.location.href = "../login/index.html"
})