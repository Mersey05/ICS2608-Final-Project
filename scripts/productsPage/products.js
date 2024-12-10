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

let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.carousel-slides');
  const totalItems = slides.children.length;
  const maxSlide = totalItems - 3.2;
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide > maxSlide) {
    currentSlide = maxSlide;
  }

  slides.style.transform = `translateX(-${currentSlide * (100 / 3)}%)`;
}

  const button = document