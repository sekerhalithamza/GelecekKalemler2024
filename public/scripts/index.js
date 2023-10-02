"use strict";

const containers = document.getElementsByClassName("faq-container");

for (const container of containers) {
  container.addEventListener("click", () => {
    container.classList.toggle("open");
  });
}
