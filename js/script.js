const themeToggleButton = document.getElementById("theme-toggle");
const contactForm = document.querySelector(".contact-form");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you! Your message has been received.");
  contactForm.reset();
});