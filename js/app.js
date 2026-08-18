const menu = document.getElementById("top-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menu.classList.add("shrink");
  } else {
    menu.classList.remove("shrink");
  }
});
