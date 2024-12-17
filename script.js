
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
document.getElementById('chatbot').addEventListener('click', function() {
  window.location.href = 'https://gbotpython-app-py.onrender.com/';
});

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});