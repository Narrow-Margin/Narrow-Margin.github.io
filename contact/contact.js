document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector('input[name="Name"]');
  const emailInput = document.querySelector('input[name="Email"]');
  const messageInput = document.querySelector('textarea[name="Message"]');
  const submitButton = document.getElementById("submit-button");

  function toggleButtonVisibility() {
    if (
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      messageInput.value.trim() !== ""
    ) {
      submitButton.classList.add("visible"); // Add the visible class
    } else {
      submitButton.classList.remove("visible"); // Remove the visible class
    }
  }

  // Add event listeners to all input fields
  nameInput.addEventListener("input", toggleButtonVisibility);
  emailInput.addEventListener("input", toggleButtonVisibility);
  messageInput.addEventListener("input", toggleButtonVisibility);
});

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("textarea");

  function updatePlaceholder() {
    if (window.innerWidth < 500) {
      textarea.placeholder = "Enter your message here...";
    } else {
      textarea.placeholder = ""; // Remove placeholder for larger viewports
    }
  }

  // Run on page load
  updatePlaceholder();

  // Update on window resize
  window.addEventListener("resize", updatePlaceholder);
});
