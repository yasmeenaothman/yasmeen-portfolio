// Selectors
const menu = document.querySelector(".nav-list");
const sendButton = document.querySelector("#submit");
const contactForm = document.querySelector(".contact-form");

// Toggle Menu Function
function toggleMenu() {
  menu.classList.toggle("show");
}

// Close menu on item click
document.querySelectorAll(".nav-list li").forEach((listItem) => {
  listItem.addEventListener("click", () => {
    if (menu.classList.contains("show")) menu.classList.remove("show"); // to check if the menu open?
  });
});

// The Initialization for the library  happen after its loaded to be able use in the rest of your code.
initEmailJS();

// Initialize EmailJS library
const initEmailJS = () => {
  emailjs.init("ivEkyIH76jrxvbl6Q");
};

// Contact Form Submission
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendButton.disabled = true;
  sendButton.value = "sending....";

  // sendForm connects your HTML form to the template you created in EmailJS
  emailjs
    .sendForm("service_yyvl8bd", "template_ka5arpj", contactForm)
    .then(() => {
      alert("Message sent successfully!");
      resetSendButton();
      contactForm.reset();
    })
    .catch((error) => {
      alert("There was an error sending the message. Please try again.");
      resetSendButton();
      console.error(`Error: ${error}`);
    });
});

// Function to Reset Send Button
function resetSendButton() {
  sendButton.disabled = false;
  sendButton.value = "Send";
}
