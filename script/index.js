// lấy dữ liệu trên local
const userLogin = JSON.parse(localStorage.getItem("userLogin")) || null;
const userLoginelement = document.getElementById("userLogin");
const infor = document.getElementById("infor");

if (userLogin) {
  infor.style.display = "block";
  // Chèn thẻ <a> chứa tên người dùng
  userLoginelement.innerHTML = `<a href="/taikhoan.html" style="color : yellow;font-size: 18px;font-weight : 600;">${userLogin.userName}</a>`;
} else {
  infor.style.display = "block";
  userLoginelement.innerHTML = `<span style="color: yellow; font-size: 16px;font-weight : 600;">Chưa có</span>`;
}
