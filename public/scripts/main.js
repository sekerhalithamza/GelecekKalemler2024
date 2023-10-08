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

const btnNav = document.getElementById("btnNav");
const nav = document.getElementById("nav");

btnNav.addEventListener("click", () => {
  btnNav.classList.toggle("active");
  nav.classList.toggle("active");
});
