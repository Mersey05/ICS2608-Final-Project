const nav = document.querySelector(".mainNav");
let isScrolling;

window.addEventListener("scroll", () => {
  nav.classList.add("hidden"); n

  clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    nav.classList.remove("hidden");
  }, 500);
});

window.addEventListener("mousemove", () => {
  nav.classList.remove("hidden"); 
});
