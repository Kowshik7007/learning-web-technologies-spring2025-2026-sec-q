const form = document.getElementById('registrationForm');
const errorDisplay = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  let errors = [];

  
  const emailInput = document.getElementById('userEmail');
  if (emailInput && !emailInput.checkValidity()) {
    errors.push(emailInput.value.trim() === "" ? "Email is required." : "Invalid email format.");
  }

  const selectedGender = document.querySelector('input[name="gender"]:checked');
  if (!selectedGender) {
    errors.push("At least one gender must be selected.");
  }

  const day = document.getElementById('dd');
  const month = document.getElementById('mm');
  const year = document.getElementById('yyyy');

  if (!day.checkValidity() || !month.checkValidity() || !year.checkValidity()) {
    errors.push("Enter a valid Date (Day: 1-31, Month: 1-12, Year: 1900-2026).");
  }

  if (errors.length > 0) {
    event.preventDefault(); 
    errorDisplay.style.color = "red";
    errorDisplay.innerHTML = errors.join("<br>");
  } else {
    errorDisplay.style.color = "green";
    errorDisplay.textContent = "All validations passed!";
  }
});