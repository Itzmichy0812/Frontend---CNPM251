document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Redirect sang HCMUT_SSO với tham số redirect=appchinh
    const ssoUrl = "http://localhost:5500/Service/HCMUT_SSO/frontend/login.html?redirect=appchinh";
    window.location.href = ssoUrl;
  });

  // Khi quay lại từ SSO, kiểm tra trạng thái đăng nhập ở backend app chính
  async function checkSSOStatus() {
    try {
      const res = await fetch("http://localhost:3000/api/sso/status", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();

      if (data.success) {
        console.log(" User đã đăng nhập:", data);

        // Lưu role và token vào localStorage
        localStorage.setItem("role", data.role);
        localStorage.setItem("token", data.token);

        // Kiểm tra role và điều hướng
        if (data.role === "student") {
          window.location.href = "../html/Mentee/home.html";
        } else if (data.role === "teacher") {
          window.location.href = "../html/Tutor/home.html";
        }

      } else {
        console.log(" Chưa có user đăng nhập qua SSO");
      }
    } catch (err) {
      console.error("Lỗi khi gọi API /api/sso/status:", err);
    }
  }

  // Gọi checkSSOStatus ngay khi load trang
  checkSSOStatus();
});