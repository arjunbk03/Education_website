
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

