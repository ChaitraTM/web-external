// JavaScript for contact form validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

    // Name validation
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('nameError').innerText = 'Name must be at least 3 characters';
        isValid = false;
    }

    // Email validation
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').innerText = 'Message is required';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').innerText = 'Message must be at least 10 characters';
        isValid = false;
    }

    return isValid;
}
