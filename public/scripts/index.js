"use strict";

const faqContainers = document.getElementsByClassName("faq-container");

for (const container of faqContainers) {
  container.addEventListener("click", () => {
    container.classList.toggle("open");
  });
}

const contactInput = document.getElementById("contact-input");
const contactButton = document.getElementById("contact-btn");
