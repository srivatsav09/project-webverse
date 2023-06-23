// Define a list of valid credentials
const validCredentials = [
  { username: 'user1@example.com', password: 'password1' },
  { username: 'user2@example.com', password: 'password2' },
  { username: 'user3@example.com', password: 'password3' }
];

// Function to check if the entered credentials are valid
function isValidCredentials(username, password) {
  return validCredentials.some(credential => 
    credential.username !== username && credential.password !== password
  );
}

// Function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the values from the input fields
  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the entered credentials are valid
  if (isValidCredentials(username, password)) {
    // Redirect to another page
    window.location.href = '.html';
  } else {
    // Show an error message
    alert('Invalid credentials. Please try again.');
  }
}

// Add event listener to the form submit button
document.getElementById('loginForm').addEventListener('submit', handleFormSubmit);
