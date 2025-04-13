// lấy dữ liệu trên local
const userLogin = JSON.parse(localStorage.getItem("userLogin")) || null;
const userLoginelement = document.getElementById("userLogin");
const emailLoginelement = document.getElementById("emailLogin");

const infor = document.getElementById("infor");
const inforemail = document.getElementById("inforemail");

if (userLogin) {
  infor.style.display = "block";
  userLoginelement.innerHTML = userLogin.userName;
  inforemail.style.display = "block";
  emailLoginelement.innerHTML = userLogin.email;
} else {
  infor.style.display = "block";
  userLoginelement.innerHTML = `<span style="color: yellow; font-size: 16px;font-weight : 600;">Chưa có</span>`;
}
