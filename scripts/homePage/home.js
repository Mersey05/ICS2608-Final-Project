const nav = document.querySelector(".mainNav");
let isScrolling;

window.addEventListener("scroll", () => {
  nav.classList.add("hidden");
  n;

  clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    nav.classList.remove("hidden");
  }, 500);
});

window.addEventListener("mousemove", () => {
  nav.classList.remove("hidden");
});

window.addEventListener("load", () => {
  document.querySelector(".homeCenter").classList.add("animate-center");
  document.querySelector(".left-drawing").classList.add("animate-left");
  document.querySelector(".right-drawing").classList.add("animate-right");
});

const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(entry.target.dataset.animationClass);
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.05,
});

document.querySelectorAll(".animate-on-scroll").forEach((element) => {
  observer.observe(element);
});

// function adjustFacebookWidth() {
//   const fbPageElement = document.querySelector(".fb-page"); // Replace with your actual element selector
//   if (window.innerWidth < 550) {
//     fbPageElement.setAttribute("data-width", "400");
//   }
// }

// // Adjust width on load and on resize
// window.addEventListener("load", adjustFacebookWidth);
// window.addEventListener("resize", adjustFacebookWidth);
