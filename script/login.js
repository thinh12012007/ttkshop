// lấy ra element của trang
const LoginForm = document.getElementById("loginform");
const userNameelement = document.getElementById("UserName");
const passwordelement = document.getElementById("PassWord");
const emailelement = document.getElementById("email");
const allerterror = document.getElementById("allerterror");
// lắng nghe sự kiện submit form đăng kí tài khoản

LoginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   validate dữ liệu đầu vào

  // Lấy dữ liệu từ local về
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  // Tìm kiếm email và mk người dùng nhập có tồn tại trên local
  const findUser = userLocal.find(
    (user) =>
      user.userName === userNameelement.value &&
      //   user.email === emailelement.value &&
      user.password === passwordelement.value
  );
  if (!findUser) {
    //   Nếu không thì thông báo cho người dùng nhập lại dữ liệu
    allerterror.style.display = "block";
  } else {
    window.location.href = "mainindex.html";
  }
  // lưu thông tin đăng nhập lên local
  localStorage.setItem("userLogin", JSON.stringify(findUser));
});
