document.addEventListener("click", function(event) {
  if (event.target.classList.contains("navbar-toggler-icon")) {
    document.querySelector(".menu").classList.toggle("show");
  } else if (event.target.classList.contains("nav-link")) {
    document.querySelector(".menu").classList.remove("show");
  }
});
