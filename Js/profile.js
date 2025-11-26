document.addEventListener("DOMContentLoaded", async function () {
  const accessToken = localStorage.getItem("token");

  if (!accessToken) {
    alert("Bạn chưa đăng nhập.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Không thể lấy thông tin hồ sơ");
    }

    const profileData = await response.json();

    // Gán dữ liệu vào HTML
    for (const key in profileData) {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = profileData[key];
      }
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu hồ sơ:", error);
    alert("Đã xảy ra lỗi khi tải thông tin cá nhân.");
  }
});