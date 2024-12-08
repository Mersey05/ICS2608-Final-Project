const datepicker = document.querySelector(".datepicker");
const yearInput = datepicker.querySelector(".year-input");
const monthInput = datepicker.querySelector(".month-input");
const cancelBtn = datepicker.querySelector(".cancel");
const applyBtn = datepicker.querySelector(".apply");
const nextBtn = datepicker.querySelector(".next");
const prevBtn = datepicker.querySelector(".prev");
const dates = datepicker.querySelector(".dates");

const form = document.querySelector("form");
const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email-address");
const contactInput = document.getElementById("contact-number");
const facebookInput = document.getElementById("facebook-link");
const dateInput = document.querySelector(".date-input");
const timeInput = document.querySelector(".time-input");
const descriptionInput = document.getElementById("description-input");
const otpForm = document.getElementById("otp-form");
const otpInput = document.getElementById("otp-input");

// Define the regex patterns for validation
let namePattern = /^[a-zA-Z\s]+$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let contactPattern = /^\+?[0-9]{10,15}$/;
let facebookPattern =
  /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?]/;
let datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
let timePattern = /^(0[1-9]|1[0-2]):[0-5]\d (AM|PM)$/;
let descriptionPattern = /^.{0,250}$/;
let otpPattern = /\d{4}/;

window.addEventListener("load", () => {
  document
    .querySelector(".product-container img")
    .classList.add("animate-center");
  document
    .querySelector(".get-started-container button")
    .classList.add("animate-center");
  document
    .querySelector(".get-started-container h1")
    .classList.add("animate-left");
  document
    .querySelector(".get-started-container p")
    .classList.add("animate-left");
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

const warningLogos = document.getElementsByClassName("input-warning");
const inputIcons = document.getElementsByClassName("input-icon");

function inputErrorStyle(input, warningLogo, inputIcon, isValid) {
  if (!isValid) {
    warningLogo.removeAttribute("hidden");
    inputIcon.setAttribute("hidden", "true");
    input.classList.add("invalid-input");
  } else {
    inputIcon.removeAttribute("hidden");
    warningLogo.setAttribute("hidden", "true");
    input.classList.remove("invalid-input");
    input.style.border = "none"; // Optional: remove border styling when valid
  }
}

[
  {
    input: nameInput,
    pattern: namePattern,
    warningLogo: warningLogos[0],
    inputIcon: inputIcons[0],
  },
  {
    input: emailInput,
    pattern: emailPattern,
    warningLogo: warningLogos[1],
    inputIcon: inputIcons[1],
  },
  {
    input: contactInput,
    pattern: contactPattern,
    warningLogo: warningLogos[2],
    inputIcon: inputIcons[2],
  },
  {
    input: facebookInput,
    pattern: facebookPattern,
    warningLogo: warningLogos[3],
    inputIcon: inputIcons[3],
  },
  {
    input: dateInput,
    pattern: datePattern,
    warningLogo: warningLogos[4],
    inputIcon: inputIcons[4],
  },
  {
    input: timeInput,
    pattern: timePattern,
    warningLogo: warningLogos[5],
    inputIcon: inputIcons[5],
  },
].forEach(({ input, pattern, warningLogo, inputIcon }) => {
  input.addEventListener("keyup", () => {
    inputErrorStyle(
      input,
      warningLogo,
      inputIcon,
      pattern.test(input.value.trim())
    );
  });
});

const otpPopup = document.querySelector(".otp-container");
const backdrop = document.querySelector(".backdrop");
const goBackButton = document.querySelector("#go-back");

// Function to show the OTP popup and disable background interactions
// Function to show the OTP popup and disable background interactions
function showOtpPopup() {
  otpPopup.style.display = "block"; // Display the popup
  backdrop.style.display = "block"; // Display the backdrop
  document.body.style.overflow = "hidden"; // Disable scrolling

  otpPopup.style.animation = "slideIn 0.3s ease-out forwards"; // Add slide-in animation
  backdrop.style.animation = "fadeIn 0.3s ease-out forwards"; // Add fade-in animation
}

// Function to hide the OTP popup and backdrop with animation
function hideOtpPopup() {
  otpPopup.style.animation = "slideOut 0.3s ease-in forwards"; // Add slide-out animation
  backdrop.style.animation = "fadeOut 0.3s ease-in forwards"; // Add fade-out animation

  // Wait for animations to complete before hiding elements
  otpPopup.addEventListener(
    "animationend",
    () => {
      otpPopup.style.display = "none"; // Hide the popup
    },
    { once: true }
  );

  backdrop.addEventListener(
    "animationend",
    () => {
      backdrop.style.display = "none"; // Hide the backdrop
      document.body.style.overflow = ""; // Re-enable scrolling
    },
    { once: true }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  let isValid = true;
  const errors = [];

  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse.length > 0) {
    errors.push("Captcha not complete.");
    isValid = false;
  }

  // Validation checks
  if (!namePattern.test(nameInput.value.trim())) {
    errors.push("Please enter a valid full name (letters and spaces only).");
    isValid = false;
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    errors.push("Please enter a valid email address.");
    isValid = false;
  }

  if (!contactPattern.test(contactInput.value.trim())) {
    errors.push("Please enter a valid contact number.");
    isValid = false;
  }

  if (
    facebookInput.value.trim() &&
    !facebookPattern.test(facebookInput.value.trim())
  ) {
    errors.push("Please enter a valid Facebook link.");
    isValid = false;
  }

  if (!datePattern.test(dateInput.value.trim())) {
    errors.push("Please enter a valid date in MM/DD/YYYY format.");
    isValid = false;
  }

  if (!timePattern.test(timeInput.value.trim())) {
    errors.push("Please select a valid time in HH:mm AM/PM format.");
    isValid = false;
  }

  if (!descriptionPattern.test(descriptionInput.value.trim())) {
    errors.push("Description must be 250 characters or less.");
    isValid = false;
  }

  if (!isValid) {
    alert("Please fix the following errors:\n\n" + errors.join("\n"));
  } else {
    // Show the OTP pop-up
    showOtpPopup();

    // Submit the form data asynchronously using fetch
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        // Optionally, handle the success (e.g., show a message or log it)
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("An unexpected error occurred. Please try again later.");
      });
  }
});

goBackButton.addEventListener("click", (e) => {
  e.preventDefault();
  hideOtpPopup();
});

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

let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();

// show datepicker
dateInput.addEventListener("click", () => {
  datepicker.hidden = false;
});

// hide datepicker
cancelBtn.addEventListener("click", () => {
  datepicker.hidden = true;
});

// handle apply button click event
applyBtn.addEventListener("click", () => {
  // set the selected date to date input
  dateInput.value = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // hide datepicker
  datepicker.hidden = true;
});

// handle next month nav
nextBtn.addEventListener("click", () => {
  if (month === 11) year++;
  month = (month + 1) % 12;
  displayDates();
});

// handle prev month nav
prevBtn.addEventListener("click", () => {
  if (month === 0) year--;
  month = (month - 1 + 12) % 12;
  displayDates();
});

// handle month input change event
monthInput.addEventListener("change", () => {
  month = monthInput.selectedIndex;
  displayDates();
});

// handle year input change event
yearInput.addEventListener("change", () => {
  year = yearInput.value;
  displayDates();
});

const updateYearMonth = () => {
  monthInput.selectedIndex = month;
  yearInput.value = year;
};

const handleDateClick = (e) => {
  const button = e.target;

  // remove the 'selected' class from other buttons
  const selected = dates.querySelector(".selected");
  selected && selected.classList.remove("selected");

  // add the 'selected' class to current button
  button.classList.add("selected");

  // set the selected date
  selectedDate = new Date(year, month, parseInt(button.textContent));
};

// render the dates in the calendar interface
const displayDates = () => {
  // update year & month whenever the dates are updated
  updateYearMonth();

  // clear the dates
  dates.innerHTML = "";

  //* display the last week of previous month

  // get the last date of previous month
  const lastOfPrevMonth = new Date(year, month, 0);

  for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
    const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
    const button = createButton(text, true, -1);
    button.setAttribute("type", "button");

    dates.appendChild(button);
  }

  //* display the current month

  // get the last date of the month
  const lastOfMOnth = new Date(year, month + 1, 0);

  for (let i = 1; i <= lastOfMOnth.getDate(); i++) {
    const button = createButton(i, false);
    button.setAttribute("type", "button");

    button.addEventListener("click", handleDateClick);
    dates.appendChild(button);
  }

  //* display the first week of next month

  const firstOfNextMonth = new Date(year, month + 1, 1);

  for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
    const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;

    const button = createButton(text, true, 1);
    button.setAttribute("type", "button");
    dates.appendChild(button);
  }
};

const createButton = (text, isDisabled = false, type = 0) => {
  const currentDate = new Date();

  // determine the date to compare based on the button type
  let comparisonDate = new Date(year, month + type, text);

  // check if the current button is the date today
  const isToday =
    currentDate.getDate() === text &&
    currentDate.getFullYear() === year &&
    currentDate.getMonth() === month;

  // check if the current button is selected
  const selected = selectedDate.getTime() === comparisonDate.getTime();

  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = isDisabled;
  button.classList.toggle("today", isToday && !isDisabled);
  button.classList.toggle("selected", selected);
  return button;
};

displayDates();

const timePicker = document.querySelector(".time-picker");
const hourInput = timePicker.querySelector(".hour-input");
const minuteInput = timePicker.querySelector(".minute-input");
const periodToggle = timePicker.querySelector(".period-toggle");
const cancelTimeBtn = timePicker.querySelector(".cancel-time");
const applyTimeBtn = timePicker.querySelector(".apply-time");

timeInput.addEventListener("click", () => {
  timePicker.hidden = false;
});

cancelTimeBtn.addEventListener("click", () => {
  timePicker.hidden = true;
});

applyTimeBtn.addEventListener("click", () => {
  const selectedHour = hourInput.value.padStart(2, "0");
  const selectedMinute = minuteInput.value.padStart(2, "0");
  const selectedPeriod = periodToggle.textContent;

  timeInput.value = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
  timePicker.hidden = true;
});

periodToggle.addEventListener("click", () => {
  periodToggle.textContent = periodToggle.textContent === "AM" ? "PM" : "AM";
});

minuteInput.addEventListener("input", () => {
  let minute = parseInt(minuteInput.value);
  if (minute < 0) minuteInput.value = "0";
  if (minute > 59) minuteInput.value = "59";
});

const textarea = document.getElementById("description-input");
const charCount = document.getElementById("char-counter");
const maxLength = textarea.getAttribute("maxlength");

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  charCount.textContent = `${currentLength}/${maxLength}`;
});

const otpMessage = document.getElementById("otp-message");

otpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const otpValue = otpInput.value.trim();
  otpMessage.style.visibility = "hidden";

  if (otpPattern.test(otpValue)) {
    window.location.href = "successful-booking.html";
  } else {
    displayInvalidOtpMessage();
  }
});

function displayInvalidOtpMessage() {
  otpMessage.textContent = "Invalid OTP. Please enter a 4-digit number.";
  otpMessage.style.color = "red";
  otpMessage.style.visibility = "visible";
}
