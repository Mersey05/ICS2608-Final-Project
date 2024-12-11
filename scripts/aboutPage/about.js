// Define a single IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 }); // Adjust threshold based on needs

// Select all elements that need animation
const animatedElements = [
  // About Page Banner
  document.querySelector('.Calle-Mush-Heading'),
  document.querySelector('.Drinks'),
  document.querySelector('.Mushroom-Coffee-Background'),

  // Calle Mush Story Section
  document.querySelector('.Coffee-Leaf'),
  document.querySelector('.Coffee-Cup'),
  document.querySelector('.Our-Story-Group'),

  // Calle Mush Values Section
  document.querySelector('.Values-Header'),
  document.querySelector('.Innovation-Group'),
  document.querySelector('.Health-Safety-Group'),
  document.querySelector('.Customer-Centric-Service-Group'),
  document.querySelector('.Light-Bulb-Icon img'),
  document.querySelector('.Shield-Icon img'),
  document.querySelector('.Handshake-Icon img'),

  // Calle Mush Journey Section
  ...document.querySelectorAll('.Our-Journey-Texts p'),
  ...document.querySelectorAll('.Calle-Mush-Journey img'),

  // Calle Mush Distinct Section
  document.querySelector('.Distinct-Header'),
  ...document.querySelectorAll('.Drinks-Images img'),
  document.querySelector('.Distinct-Text'),

  // Calle Mush Mushroom Section
  ...document.querySelectorAll('.Mushroom-Texts p'),
  document.querySelector('.Calle-Mush-Icon img')
];

// Observe all selected elements
animatedElements.forEach(element => {
  if (element) {
    observer.observe(element);
  }
});


window.addEventListener('scroll', () => {
  const beans = document.querySelector('.Beans-Background img');
  const scrollValue = window.scrollY * 0.9; // Adjust parallax speed
  beans.style.transform = `translateY(${scrollValue}px)`;
});

const mushroomText = document.querySelectorAll('.Mushroom-Coffee-Background p');
mushroomText.forEach((text, index) => {
  setTimeout(() => {
    text.classList.add('visible');
  }, index * 500); // Stagger by 500ms
});


function updateBackgroundImage() {
  const section = document.querySelector('.Calle-Mush-Values');
  const screenWidth = window.innerWidth;

  if (screenWidth <= 431) {
    section.style.backgroundImage = "url('images/Contacts-BG-Texture-Phone.png')";
  } else if (screenWidth <= 600) {
    section.style.backgroundImage = "url('images/Contacts-BG-Texture-iPad.png')";
  } else if (screenWidth <= 1444) {
    section.style.backgroundImage = "url('images/Contacts-BG-Texture-iPad.png')";
  } else {
    section.style.backgroundImage = "url('images/Contacts-BG-Texture (2).png')";
  }
}

// Run on initial load
updateBackgroundImage();

// Listen for window resize events
window.addEventListener('resize', updateBackgroundImage);

  function updateJourneyBackground() {
    const section = document.querySelector('.Calle-Mush-Journey');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 431) {
      section.style.backgroundImage = "url('images/Journey-Background-Phone.png')";
      section.style.height = "262px";
    } else if (screenWidth <= 580) {
      section.style.backgroundImage = "url('images/Journey-Background-Var3.png')";
      section.style.height = "300px";
    } else if (screenWidth <= 772) {
      section.style.backgroundImage = "url('images/Journey-Background-Var2.png')";
      section.style.height = "374.61px";
    } else if (screenWidth <= 860) {
      section.style.backgroundImage = "url('images/Journey-Background-Var1.png')";
      section.style.height = "484.61px";
    } else if (screenWidth <= 1024) {
      section.style.backgroundImage = "url('images/Journey-Background.png')";
      section.style.height = "584.61px";
    } else if (screenWidth <= 1408) {
      section.style.backgroundImage = "url('images/Journey-Background.png')";
      section.style.height = "584.61px";
    } else {
      section.style.backgroundImage = "url('images/Journey-Background.png')";
      section.style.height = "auto"; // Default for larger screens
    }
  }

  // Run on initial load
  updateJourneyBackground();

  // Listen for window resize events
  window.addEventListener('resize', updateJourneyBackground);


  function updateJourneyBackground() {
    const section = document.querySelector('.Calle-Mush-Journey');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 431) {
      section.style.backgroundImage = "url('images/Journey-Background-Phone.png')";
      section.style.height = "262px";
    } else if (screenWidth <= 580) {
      section.style.backgroundImage = "url('images/Journey-Background-Var3.png')";
      section.style.height = "300px";
    } else if (screenWidth <= 772) {
      section.style.backgroundImage = "url('images/Journey-Background-Var2.png')";
      section.style.height = "374.61px";
    } else if (screenWidth <= 860) {
      section.style.backgroundImage = "url('images/Journey-Background-Var1.png')";
      section.style.height = "484.61px";
    } else if (screenWidth <= 1024) {
      section.style.backgroundImage = "url('images/Journey-Background.png')";
      section.style.height = "584.61px";
    } else if (screenWidth <= 1408) {
      section.style.backgroundImage = "url('images/Journey-Background.png')";
      section.style.height = "584.61px";
    } else {
      section.style.backgroundImage = "url('images/Journey-Background.png')";
      section.style.height = "auto"; // Default for larger screens
    }
  }

  // Run on initial load
  updateJourneyBackground();

  // Listen for window resize events
  window.addEventListener('resize', updateJourneyBackground);