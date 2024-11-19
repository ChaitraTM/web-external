// JavaScript for Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate form fields
    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
    } else {
        // Simulate a successful login
        alert("Login successful!");
        // Redirect or handle successful login here
    }
});
