let currentSection = 0;

function showSection(index) {
  const sections = document.querySelectorAll('.form-section');
  sections.forEach((section, i) => {
    section.style.display = (i === index) ? 'block' : 'none';
  });
}

function nextSection(event) {
  event.preventDefault();
  const currentSectionElement = document.querySelectorAll('.form-section')[currentSection];
  const inputs = currentSectionElement.querySelectorAll('input[required]');
  let allFilled = true;

  // Check if all required inputs are filled
  inputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
      input.classList.add('border-blue-500'); // Add red border for empty fields
    } else {
      input.classList.remove('border-blue-500'); // Remove red border if filled
    }
  });

  // If in the Basic Details section, check password confirmation
  if (currentSection === 0) {
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (password !== confirmPassword) {
      allFilled = false;
      alert("Passwords do not match.");
      document.getElementById('confirmPassword').classList.add('border-blue-500'); // Add red border to confirm password
    } else {
      document.getElementById('confirmPassword').classList.remove('border-blue-500'); // Remove red border if matched
    }
  }

  if (allFilled) {
    currentSection++;
    showSection(currentSection);
  } else {
    alert('Please fill all required fields.');
  }
}

function submitForm(event) {
  event.preventDefault();
  window.location.href = `confirmation.html?name=${encodeURIComponent(document.getElementById('firstName').value)}&email=${encodeURIComponent(document.getElementById('email').value)}`;
}

window.onload = () => {
  showSection(currentSection);
};