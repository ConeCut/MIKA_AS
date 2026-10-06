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

const faqQuestions = document.querySelectorAll(".question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faq = question.parentElement;

    faq.classList.toggle("open");
  });
});

selection_step = document.querySelectorAll(".selection_step");

let current_step = 0;

selection_button = document.querySelectorAll(".selection_button");

selection_button.forEach((button) => {
  button.addEventListener("click", () => {
    selection_button.forEach((button) => {
      button.classList.remove("selected");
    })
    button.classList.toggle("selected");
  })
})

next_step_btn = document.querySelectorAll(".neste_steg");

error = document.querySelector(".error");

next_step_btn.forEach((next_button) => {
  next_button.addEventListener("click", () => {

    const selected = document.querySelector(".selection_button.selected");

    if (selected) {
      error.textContent = "";

      if (current_step < selection_step.length - 1) {
        selection_step[current_step].classList.remove("current");

        current_step++;

        selection_step[current_step].classList.add("current");

        if (current_step === 2) {
          next_button.textContent = "Send inn";
        }
      }
      else {
        //TODO: form was sent, re-do/re-shape form to make a message appear "Form sent"
      }
    }
    else {
      error.textContent = "Du må velge et alternativ";
    }
  })
})
