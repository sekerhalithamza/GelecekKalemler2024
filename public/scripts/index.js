"use strict";

const faqContainers = document.getElementsByClassName("faq-container");

for (const container of faqContainers) {
  container.addEventListener("click", () => {
    container.classList.toggle("open");
  });
}

const contactInput = document.getElementById("contact-input");
const contactButton = document.getElementById("contact-btn");

const upBtn = document.getElementById("upBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    upBtn.style.display = "grid";
  } else {
    upBtn.style.display = "none";
  }
});

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
