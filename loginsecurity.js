const signupForm = document.querySelector('#jollibeeLoginForm');

const togglePasswordButton = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#passwordInput');

togglePasswordButton.addEventListener('click', function () {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePasswordButton.textContent = 'see'; 
    } else {
        passwordField.type = 'password';
        togglePasswordButton.textContent = 'hidden';
    }
});

const passwordInput = document.querySelector('#passwordInput');
const reqLength = document.querySelector('#reqLength');
const reqNumber = document.querySelector('#reqNumber');
const reqSymbol = document.querySelector('#reqSymbol');

passwordInput.addEventListener('input', function() {
    const value = passwordInput.value;

    if (value.length >= 8) {
        reqLength.className = 'valid';
        reqLength.textContent = 'At least 8 characters long';
    } else {
        reqLength.className = 'invalid';
        reqLength.textContent = 'At least 8 characters long';
    }

    if (/[0-9]/.test(value)) {
        reqNumber.className = 'valid';
        reqNumber.textContent = 'Contains at least 1 number';
    } else {
        reqNumber.className = 'invalid';
        reqNumber.textContent = 'Contains at least 1 number';
    }

    if (/[!@#$%^&*]/.test(value)) {
        reqSymbol.className = 'valid';
        reqSymbol.textContent = 'Contains at least 1 special symbol';
    } else {
        reqSymbol.className = 'invalid';
        reqSymbol.textContent = 'Contains at least 1 special symbol';
    }
});