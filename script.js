// script.js
let currentIndex = 0;

function showNextMenu() {
  const items = document.querySelectorAll(".menu-item");
  items[currentIndex].style.transform = "translateX(-100%)";
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].style.transform = "translateX(0)";
}

// Tự động chuyển menu mỗi 2 giây
setInterval(showNextMenu, 2000);
