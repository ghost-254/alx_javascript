// Getting a reference to the form and error message element
const passwordForm = document.getElementById('passwordForm');
const errorElement = document.getElementById('error');

// Function to validate the password strength
function validatePassword(password) {
    // Defining regular expressions for the criteria
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    // Checking if the password meets all the criteria
    if (
        lengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    ) {
        return true;
    }

    return false;
}

// Event listener for form submission
passwordForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Preventing the default form submission behavior
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    if (validatePassword(password)) {
        // If password meets the criteria, allow submission
        errorElement.textContent = '';
        passwordForm.submit();
    } else {
        // If password does not meet the criteria, display an error message
        errorElement.textContent =
            'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    }
});
