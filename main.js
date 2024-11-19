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
  console.log(localStorage);
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
    }
  }
  // sidebar.js

  const sidebarHTML = `
<div class="sidebar">
  <div class="ovr sidebar__home" data-page="home">
    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="40px" viewBox="0 0 576 512">
      <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
    </svg>
  </div>
  <div class="ovr sidebar__shop" data-page="shop">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="40px" viewBox="0 0 448 512">
      <path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
    </svg>
  </div>
  <div class="ovr sidebar__book-mark" data-page="bookmark">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="40px" viewBox="0 0 448 512">
      <path d="M448 360V24C448 10.744 437.254 0 424 0H352V191.971C352 205.385 336.48 212.846 326.004 204.463L272 160.002L217.996 204.463C207.52 212.846 192 205.385 192 191.971V0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 461.582 441.273 452.936 432 449.615V382.385C441.273 379.064 448 370.416 448 360ZM384 448H96C78.328 448 64 433.672 64 416C64 398.326 78.328 384 96 384H384V448Z"/>
    </svg>
  </div>
  <div class="ovr sidebar__chat" data-page="chat">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="40px" viewBox="0 0 640 512">
      <path d="M416 256.004V63.994C416 28.748 387.25 0 352 0H64C28.75 0 0 28.748 0 63.994V256.004C0 291.25 28.75 320 64 320L96 320.018V374.264C96 382.262 105.125 386.887 111.5 382.139L194.25 320.018L352 319.875C387.25 320 416 291.25 416 256.004ZM576 128H448V256C448 308.871 404.875 351.992 352 351.992H256V383.969C256 419.215 284.75 447.963 320 447.963H445.75L528.5 510.082C534.875 514.832 544 510.207 544 502.209V447.963H576C611.25 447.963 640 419.215 640 383.969V191.994C640 156.748 611.25 128 576 128Z"/>
    </svg>
  </div>
</div>
`;

  function loadSidebar() {
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer) {
      sidebarContainer.innerHTML = sidebarHTML;
    }
  }

  function toggleActiveIcon(event) {
    // Lấy tất cả các icon
    const allIcons = document.querySelectorAll(".ovr");

    // Loại bỏ trạng thái active khỏi tất cả các icon
    allIcons.forEach((icon) => {
      icon.classList.remove("active");
    });

    // Thêm trạng thái active vào icon được chọn
    event.currentTarget.classList.add("active");

    // Lưu trang hiện tại vào localStorage
    const page = event.currentTarget.getAttribute("data-page");
    localStorage.setItem("activePage", page);

    // Điều hướng tới trang tương ứng
    switch (page) {
      case "home":
        window.location.href = "index.html";
        break;
      case "shop":
        window.location.href = "shop.html";
        break;
      case "chat":
        window.location.href = "chat.html";
        break;
      case "bookmark":
        window.location.href = "bookmark.html";
        break;

      default:
        break;
    }
  }

  function addSidebarEventListeners() {
    const icons = document.querySelectorAll(".ovr");
    icons.forEach((icon) => {
      icon.addEventListener("click", toggleActiveIcon);
    });
  }

  function setActivePage() {
    // Kiểm tra trạng thái activePage trong localStorage và áp dụng class "active" cho icon tương ứng
    const activePage = localStorage.getItem("activePage");

    if (activePage) {
      const activeIcon = document.querySelector(`[data-page="${activePage}"]`);
      if (activeIcon) {
        activeIcon.classList.add("active");
      }
    }
  }

  // Gọi hàm khi trang tải
  window.onload = function () {
    loadSidebar();
    addSidebarEventListeners();
    setActivePage(); // Đặt trạng thái "active" cho icon khi trang tải
  };
});
