const toggleBtn = document.getElementById("btn-toggle");
const mobileMenu = document.getElementById("navbar-menu");
const body = document.getElementById("home");

toggleBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  body.classList.toggle("active");
  toggleBtn.classList.toggle("animate");
});
