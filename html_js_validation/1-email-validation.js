// Getting a reference to the form and error message element
const emailForm = document.getElementById('emailForm');
const errorElement = document.getElementById('error');

// Function to validate the email format
function validateEmail(email) {
    // Defining a regular expression for a standard email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Checking if the email matches the regular expression
    return emailRegex.test(email);
}

// Event listener for form submission
emailForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Preventing the default form submission behavior
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (validateEmail(email)) {
        // If email format is correct, allow submission
        errorElement.textContent = '';
        emailForm.submit();
    } else {
        // If email format is incorrect, display an error message
        errorElement.textContent = 'Please enter a valid email address.';
    }
});
