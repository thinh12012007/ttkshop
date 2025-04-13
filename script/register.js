// lấy ra element của trang
const registerForm = document.getElementById("registerForm");
const userNameelement = document.getElementById("UserName");
const emailelement = document.getElementById("Email");
const passwordelement = document.getElementById("PassWord");
const repasswordelement = document.getElementById("RePassWord");
// hiển thị lỗi

const userNameerror = document.getElementById("userNameerror");
const userEmailerror = document.getElementById("userEmailerror");
const passworderror = document.getElementById("passworderror");
const rePasswordError = document.getElementById("repassworderror");
// lắng nghe sự kiện submit form đăng kí tài khoản

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// lấy dữ liệu từ localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!userNameelement.value) {
    userNameerror.style.display = "block";
  } else {
    userNameerror.style.display = "none";
  }
  if (!emailelement.value) {
    userEmailerror.style.display = "block";
  } else {
    userEmailerror.style.display = "none";
    if (!validateEmail(emailelement.value)) {
      userEmailerror.style.display = "block";
      userEmailerror.innerHTML = "Email bị sai định dạng !";
    }
  }
  if (!passwordelement.value) {
    passworderror.style.display = "block";
  } else {
    passworderror.style.display = "none";
  }
  if (!repasswordelement.value) {
    rePasswordError.style.display = "block";
  } else {
    rePasswordError.style.display = "none";
  }
  if (passwordelement.value !== repasswordelement.value) {
    // alert("sai roi");
    rePasswordError.style.display = "block";
    rePasswordError.innerHTML = "Mật khẩu không khớp !";
  } else {
    rePasswordError.style.display = "none";
  }

  // gửi dữ liệu lên localstorage
  if (
    userNameelement.value &&
    emailelement.value &&
    passwordelement.value &&
    repasswordelement.value &&
    passwordelement.value === repasswordelement.value &&
    validateEmail(emailelement.value)
  ) {
    // lấy dữ liệu từ form
    const user = {
      userId: Math.ceil(Math.random() * 100000000),
      userName: userNameelement.value,
      email: emailelement.value,
      password: passwordelement.value,
    };

    // push user vào trong mảng local
    userLocal.push(user);
    //  lưu trữ dữ liệu lên local
    localStorage.setItem("users", JSON.stringify(userLocal));
    // chuyển hướng về trang đăng nhập

    setTimeout(function () {
      window.location.href = "login.html";
    }, 1000);
  }
});
