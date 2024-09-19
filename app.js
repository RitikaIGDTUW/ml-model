// JavaScript code to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the entered values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Placeholder login verification (can be replaced with real backend validation)
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        // Close the modal after successful login
        var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.hide();
        // Redirect or perform any other post-login actions
    } else {
        alert("Invalid credentials.");
    }
});

// JavaScript code to handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the entered values
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPassword = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (signupEmail === "" || signupPassword === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (signupPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Placeholder signup verification (can be replaced with real backend validation)
    alert("Signup successful!");
    // Close the signup modal after successful signup
    var signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
    signupModal.hide();
    // Redirect or perform any other post-signup actions
});
