document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector('input[name="Email"]');
  const submitButton = document.getElementById("submit-button");

  function toggleButtonVisibility() {
    if (emailInput.value.trim() !== "") {
      submitButton.classList.add("visible"); // Add the visible class
    } else {
      submitButton.classList.remove("visible"); // Remove the visible class
    }
  }

  // Add event listeners to all input fields
  emailInput.addEventListener("input", toggleButtonVisibility);
});
