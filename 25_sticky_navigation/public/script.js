const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  window.scrollY > nav.offsetHeight + 150
    ? nav.classList.add("active")
    : nav.classList.remove("active");
}
