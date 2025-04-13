// lấy ra element của trang
const registerForm = document.getElementById("registerForm");
const passwordoldelement = document.getElementById("PassWordold");
const passwordelement = document.getElementById("PassWord");

const repasswordelement = document.getElementById("RePassWord");
// hiển thị lỗi

// const userNameerror = document.getElementById("userNamerror");

const passwordolderror = document.getElementById("passwordolderror");

const passworderror = document.getElementById("passworderror");
const passwordwrong = document.getElementById("passwordwrong");

const rePasswordError = document.getElementById("repassworderror");

const userLogin = JSON.parse(localStorage.getItem("userLogin")) || null;
let users = JSON.parse(localStorage.getItem("users")) || [];

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!passwordoldelement.value) {
    passwordolderror.style.display = "block";
  } else {
    passwordolderror.style.display = "none";
    if (userLogin.password !== passwordoldelement.value) {
      passwordwrong.style.display = "block";
    } else {
      passwordwrong.style.display = "none";
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
    passwordoldelement.value &&
    passwordelement.value &&
    repasswordelement.value &&
    passwordelement.value === repasswordelement.value &&
    userLogin.password === passwordoldelement.value
  ) {
    // Ghi đè lại userLogin vào localStorage
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
    const index = users.findIndex(
      (user) => user.username === userLogin.username
    );
    if (index !== -1) {
      users[index].password = repasswordelement.value;

      // Ghi lại users vào localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // Cập nhật lại userLogin từ mảng (để đồng bộ)
      localStorage.setItem("userLogin", JSON.stringify(users[index]));
    }
    setTimeout(function () {
      window.location.href = "thaydoimatkhauthanhcong.html";
    }, 1000);
  }
});
