const toggleBtn = document.getElementById("btn-toggle");
const mobileMenu = document.getElementById("navbar-menu");
const body = document.getElementById("home");
const nav = document.getElementById("nav");

toggleBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  body.classList.toggle("active");
  toggleBtn.classList.toggle("animate");
});

function setStickykNav() {
  const stickyNav = nav.offsetTop;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > stickyNav) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }

  console.log(stickyNav);
  console.log(scrollHeight);
}

window.addEventListener("scroll", setStickykNav);
