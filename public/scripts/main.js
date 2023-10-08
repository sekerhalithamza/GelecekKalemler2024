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
