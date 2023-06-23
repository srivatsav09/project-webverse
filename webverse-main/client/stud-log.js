// Get form elements
const form = document.querySelector('#');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const programInput = document.getElementById('program');
const semesterInput = document.getElementById('semester');
const hostelTypeInput = document.getElementById('hostel-type');
const passwordInput = document.getElementById('password');

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // prevent form from submitting
  const newRegistration = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    address: addressInput.value,
    program: programInput.value,
    semester: semesterInput.value,
    hostelType: hostelTypeInput.value,
    password: passwordInput.value
  };
  
  console.log(newRegistration); // log new registration object to the console
  
  // You can further process the newRegistration object here (e.g. save it to a database)


}

// Add event listener to the form submit button
//form.addEventListener('submit', submitForm);
