const menu = document.querySelector(".top-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menu.classList.add("shrink");
  } else {
    menu.classList.remove("shrink");
  }
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

function redirectToServices(){
  window.location.href = "pages/services.html"
}

function redirectToServicesFromPages(){
  window.location.href = "../pages/services.html"
}


// Animations

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach((element) => {
  observer.observe(element);
});
