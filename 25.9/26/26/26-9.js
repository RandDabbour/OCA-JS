// Select the form element
const formElement = document.getElementById('registrationForm');

// Create and add the Username label
const labelUsername = document.createElement('label');
labelUsername.htmlFor = 'username';
labelUsername.textContent = 'Username: ';
formElement.insertBefore(labelUsername, document.getElementById('username'));

// Create and add the Password label
const labelPassword = document.createElement('label');
labelPassword.htmlFor = 'password';
labelPassword.textContent = 'Password: ';
formElement.insertBefore(labelPassword, document.getElementById('password'));

// Create and add the Confirm Password label
const labelConfirmPassword = document.createElement('label');
labelConfirmPassword.htmlFor = 'confirmPassword';
labelConfirmPassword.textContent = 'Confirm Password: ';
formElement.insertBefore(labelConfirmPassword, document.getElementById('confirmPassword'));

// Validate the form on submit
formElement.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Hide error messages initially
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';

    let isValid = true;

    // Validate Username
    const inputUsername = document.getElementById('username');
    if (inputUsername.value.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        document.getElementById('usernameError').style.display = 'inline'; // Show error
        isValid = false;
    }

    // Validate Password
    const inputPassword = document.getElementById('password');
    if (inputPassword.value.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        document.getElementById('passwordError').style.display = 'inline'; // Show error
        isValid = false;
    }

    // Validate Confirm Password
    const inputConfirmPassword = document.getElementById('confirmPassword');
    if (inputConfirmPassword.value.trim() === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm password is required';
        document.getElementById('confirmPasswordError').style.display = 'inline'; // Show error
        isValid = false;
    }

    // Check if passwords match
    if (inputPassword.value !== inputConfirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'inline'; // Show error
        isValid = false; 
    }

    // If the form is valid, notify the user of successful registration
    if (isValid) {
        alert('Registration successful!');
    }
});

// Enable/Disable submit button based on field validation
function validateFormFields() {
    const inputUsernameValue = document.getElementById('username').value.trim();
    const inputPasswordValue = document.getElementById('password').value.trim();
    const inputConfirmPasswordValue = document.getElementById('confirmPassword').value.trim();

    document.getElementById('submitBtn').disabled = !(inputUsernameValue && inputPasswordValue && inputConfirmPasswordValue);
}

// Add event listeners to all fields to check validity in real-time
document.getElementById('username').addEventListener('input', validateFormFields);
document.getElementById('password').addEventListener('input', validateFormFields);
document.getElementById('confirmPassword').addEventListener('input', validateFormFields);

// Add real-time required field validation for Username
document.getElementById('username').addEventListener('blur', function () {
    const usernameValue = document.getElementById('username').value.trim();
    if (usernameValue === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        document.getElementById('usernameError').style.display = 'inline'; // Show error
    } else {
        document.getElementById('usernameError').textContent = '';
        document.getElementById('usernameError').style.display = 'none'; // Hide error
    }
});

// Add real-time required field validation for Password
document.getElementById('password').addEventListener('blur', function () {
    const passwordValue = document.getElementById('password').value.trim();
    if (passwordValue === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        document.getElementById('passwordError').style.display = 'inline'; // Show error
    } else {
        document.getElementById('passwordError').textContent = '';
        document.getElementById('passwordError').style.display = 'none'; // Hide error
    }
});

// Add real-time required field validation for Confirm Password
document.getElementById('confirmPassword').addEventListener('blur', function () {
    const confirmPasswordValue = document.getElementById('confirmPassword').value.trim();
    if (confirmPasswordValue === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm password is required';
        document.getElementById('confirmPasswordError').style.display = 'inline'; // Show error
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
        document.getElementById('confirmPasswordError').style.display = 'none'; // Hide error
    }
});
