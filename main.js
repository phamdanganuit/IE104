document.addEventListener("DOMContentLoaded", () => {
  // Đăng nhập
  const loginSubmit = document.getElementById("submit-login");
  if (loginSubmit) {
    loginSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Lấy danh sách tài khoản từ Local Storage
      const accounts = JSON.parse(localStorage.getItem("accounts")) || {};

      if (accounts[username] && accounts[username] === password) {
        localStorage.setItem("loggedInUser", username); // Lưu trạng thái đăng nhập
        window.location.href = "index.html"; // Quay lại trang chính
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    });
  }

  // Đăng ký
  const registerSubmit = document.getElementById("submit-register");
  if (registerSubmit) {
    registerSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      const username = document.getElementById("register-username").value;
      const password = document.getElementById("register-password").value;

      // Lấy danh sách tài khoản từ Local Storage
      let accounts = JSON.parse(localStorage.getItem("accounts")) || {};

      if (accounts[username]) {
        alert("Tên đăng nhập đã tồn tại!");
      } else {
        // Lưu tài khoản mới
        accounts[username] = password;
        localStorage.setItem("accounts", JSON.stringify(accounts));
        alert("Đăng ký thành công! Hãy đăng nhập.");
        window.location.href = "login.html"; // Quay lại trang đăng nhập
      }
    });
  }
  console.log(localStorage)
  // Hiển thị avatar trên trang chính
  const loginButton = document.getElementById("login-button");
  const userAvatar = document.getElementById("user-avatar");
  const userNameDisplay = document.getElementById("user-name");
  const logoutButton = document.getElementById("logout-button");

  const savedUser = localStorage.getItem("loggedInUser");
  if (savedUser) {
    showAvatar(savedUser);
  } else if (loginButton) {
    loginButton.addEventListener("click", () => {
      window.location.href = "login.html"; // Chuyển tới trang login
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser"); // Xóa trạng thái đăng nhập
      window.location.href = "index.html"; 
    });
  }

  function showAvatar(username) {
    if (userNameDisplay) {
      userNameDisplay.textContent = username;
    }
    if (userAvatar) {
      userAvatar.classList.remove("hidden");
    }
    if (loginButton) {
      loginButton.classList.add("hidden");
    }
    if (userAvatar) {
      userAvatar.addEventListener("click", () => {
        window.location.href = "profile.html"; // Chuyển hướng đến trang profile.html
      });
  }}
  

});
