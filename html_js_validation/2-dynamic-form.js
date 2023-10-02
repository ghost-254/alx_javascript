// Getting references to the form elements
const dynamicForm = document.getElementById('dynamicForm');
const numFieldsSelect = document.getElementById('numFields');
const inputContainer = document.getElementById('inputContainer');

// Function to generate dynamic input fields
function generateInputFields(numFields) {
    inputContainer.innerHTML = ''; // Clearing any existing fields

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = `field${i}`;
        inputField.placeholder = `Field ${i}`;
        inputContainer.appendChild(inputField);
    }
}

// Event listener for dropdown change
numFieldsSelect.addEventListener('change', function () {
    const selectedValue = parseInt(numFieldsSelect.value, 10);
    generateInputFields(selectedValue);
});

// Function to validate the form before submission
function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieving the dynamically generated input fields
    const inputFields = inputContainer.querySelectorAll('input');

    // Checking if any field is empty
    let allFieldsFilled = true;
    inputFields.forEach(function (field) {
        if (field.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    if (allFieldsFilled) {
        dynamicForm.submit(); // Submitting the form if all fields are filled
    } else {
        alert('Please fill in all fields'); // Displaying an error message
    }
}

// Event listener for form submission
dynamicForm.addEventListener('submit', validateForm);
