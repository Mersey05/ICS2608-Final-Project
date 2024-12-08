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
  document.querySelector(".successful-bg").classList.add("animate-center");
});

// const currentID = localStorage.getItem("eventID")
//   ? parseInt(localStorage.getItem("eventID"), 10)
//   : 1000;

// // Increment the Event ID and save it back to localStorage
// const newID = currentID + 1;
// localStorage.setItem("eventID", newID);

// // Display the new Event ID in the booking ID element
// document.addEventListener("DOMContentLoaded", () => {
//   const bookingIdElement = document.getElementById("booking-id");
//   if (bookingIdElement) {
//     bookingIdElement.textContent = `Booking ID: ${newID}`;
//   }
// });
