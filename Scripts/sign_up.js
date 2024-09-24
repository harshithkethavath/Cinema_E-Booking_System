let currentSection = 0;

function showSection(index) {
  const sections = document.querySelectorAll('.form-section');
  
  sections.forEach((section, i) => {
    if (i === index) {
      section.style.display = 'block'; // Shows the current section
    } else {
      section.style.display = 'none';  // Hids the others sectins
    }
  });
}

function nextSection(event) {
  event.preventDefault();
  const currentSectionElement = document.querySelectorAll('.form-section')[currentSection];
  const inputs = currentSectionElement.querySelectorAll('input[required]');
  let allFilled = true;

  // Checking if all required inputs fields are filled
  inputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
      input.classList.add('border-blue-500'); // Ads blue border for empty fields
    } else {
      input.classList.remove('border-blue-500'); // Remove s blue border if filled
    }
  });

  if (currentSection === 0) {
    const pass = document.getElementById('password').value.trim();
    const conPass = document.getElementById('confirmPassword').value.trim();

    if (pass !== conPass) {
      allFilled = false;
      alert("Passwords do not match.");
      document.getElementById('confirmPassword').classList.add('border-blue-500'); // Add s blue border to confirm password
    } else {
      document.getElementById('confirmPassword').classList.remove('border-blue-500'); // Removes blue border if matched
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
  window.location.href = `confirmation.html?
    name=${
    encodeURIComponent(document.getElementById('firstName').value)}
    &email=${
    encodeURIComponent(document.getElementById('email').value)}`;
}

window.onload = () => {
  showSection(currentSection);
};