document.addEventListener("DOMContentLoaded", function () {
  const profileIcon = document.querySelector(".profile-icon");
  const profilePanel = document.createElement("div");

  // Tạo bảng thông tin
  profilePanel.classList.add("profile-panel");
  profilePanel.innerHTML = `
    <div class="panel-header">
        <strong>[tên sinh viên]</strong><br>
        <span>Vai trò - Mentee</span>
    </div>
    <ul class="panel-menu">
        <li><a href="#" id="progress">Tiến độ học tập</a></li>
        <li><a href="#" id="history">Lịch sử đăng ký học tập</a></li>
        <li><a href="#" id="register">Đăng ký chương trình</a></li>
        <li><a href="#" id="notifications">Thông báo</a></li>
        <li><a href="#" id="messages">Tin nhắn</a></li>
        <li><a href="#" id="profile">Thông tin cá nhân</a></li>
        <li><a href="#" id="settings">Cài đặt tài khoản</a></li>
        <li><a href="#" id="logout">Đăng xuất</a></li>
    </ul>
  `;

  document.body.appendChild(profilePanel);


  profilePanel.style.display = "none";

  profileIcon.addEventListener("click", function () {
    profilePanel.style.display =
      profilePanel.style.display === "none" ? "block" : "none";
  });
});