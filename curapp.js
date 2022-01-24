const bars = document.querySelector(".bars");
const menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    bars.classList.add("fa-times");
    bars.classList.remove("fa-bars");
  } else {
    bars.classList.remove("fa-times");
    bars.classList.add("fa-bars");
  }
});
