const btnNav = document.getElementById("btnNav");
const nav = document.getElementById("nav");

btnNav.addEventListener("click", () => {
  btnNav.classList.toggle("active");
  nav.classList.toggle("active");
});
