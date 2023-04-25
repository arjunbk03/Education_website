
// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");
};

// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function
themeButton.addEventListener("click", toggleDarkMode);

// Petition sign-now form:

let count = 0; // Initialize the count variable outside the function

const addSignature = () => {
  const nameInput = document.querySelector('#sign-petition [name="name"]');
  const hometownInput = document.querySelector('#sign-petition [name="hometown"]');
  const emailInput = document.querySelector('#sign-petition [name="email"]');

  const name = nameInput.value;
  const hometown = hometownInput.value;
  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;

  const signatures = document.querySelector('.signatures');
  signatures.appendChild(newSignature);

  count = count + 1; // Update the count variable
  const counter = document.getElementById('counter');
  counter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`; // Update the counter element's text content
};



const validateForm = () => {
  let containsErrors = false

  let petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length-1; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    email.classList.add('error');
    containsErrors = true;
  } else {
    email.classList.remove('error');
    
  }

  if (!containsErrors) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    containsErrors = false;
  }
};

document.getElementById("sign-now-button").addEventListener("click", (event) => {
    event.preventDefault();
  validateForm();
});


let animation = {
  revealDistance: 150,
  initialOpacity:0,
  transitionDelay:0,
  transitionDuration: "2s",
  transitionProperty:"all",
  transitionTimingFunction:"ease"
}


// Select every element with the class revealable
const revealableContainers = document.querySelectorAll('.revealable');

// Create the reveal function
function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      // Add the active class to the revealableContainer's classlist
      revealableContainers[i].classList.add('active');
    } else {
      // Remove the active class from the revealableContainer's classlist
      revealableContainers[i].classList.remove('active');
    }
  }
}

// Add the reveal function as an event listener to the window with the type of event as 'scroll'
window.addEventListener('scroll', reveal);

//stretch project for week 8
const reduceMotionButton = document.getElementById('reduce-motion-button');
reduceMotionButton.addEventListener('click', reduceMotion);

function reduceMotion() {
  // Change the properties of the animation object
  animation.transitionDuration = '0s'; // Set the transition duration to 0 seconds
  animation.revealDistance = 0; // Set the animation distance to 0 pixels
  animation.opacity = 1; // Set the final opacity to 1

  // Loop through the revealableContainers
  for (let i = 0; i < revealableContainers.length; i++) {
    // Update the style of each revealableContainer using the values stored in the animation object
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.opacity = animation.opacity;
    revealableContainers[i].style.transform = `translateY(${animation.revealDistance}px)`;
  }
}

