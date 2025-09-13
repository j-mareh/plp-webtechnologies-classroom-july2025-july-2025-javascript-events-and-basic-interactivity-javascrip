// Part 1: Event Handling
const showMessageBtn = document.getElementById("showMessageBtn");
const message = document.getElementById("message");

showMessageBtn.addEventListener("click", () => {
  message.textContent = "Button clicked!  JavaScript event handling works!";
});


// Part 2: Interactive Elements

// Light/Dark Mode Toggle
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// Collapsible FAQ
const faqToggle = document.querySelector(".faq-toggle");
const faq = document.querySelector(".faq");
faqToggle.addEventListener("click", () => {
  faq.classList.toggle("open");
});

// -----------------------------
// Part 3: Form Validation
// -----------------------------
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission until validation passes

  // Grab values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMsg = document.getElementById("formSuccess");

  let valid = true;

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Password validation (min 6 chars)
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = " Form submitted successfully!";
    form.reset();
  }
});
