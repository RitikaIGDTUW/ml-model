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





document.getElementById("abuseForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    
    // Convert form data to a plain object
    let data = {
        ageGroup: formData.get('ageGroup'),
        maritalStatus: formData.get('maritalStatus'),
        employmentStatus: formData.get('employmentStatus'),
        physicalHarm1: formData.get('physicalHarm1'),
        controlFeeling: formData.get('controlFeeling'),
        sexualAdvances: formData.get('sexualAdvances'),
        financeControl: formData.get('financeControl'),
        onlineHarassment: formData.get('onlineHarassment'),
        workplaceHarassment: formData.get('workplaceHarassment'),
        partnerThreat: formData.get('partnerThreat'),
        stalking: formData.get('stalking')
        // Add all other necessary fields here
    };

    fetch("/predict", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Access the abuse type returned by the backend
        let abuseType = data.abuseType;
        
        // Show result element on the page
        let resultElement = document.getElementById("result");
        resultElement.style.display = "block";
        
        // Display abuse type
        document.getElementById("abuseType").textContent = `You are facing: ${abuseType}`;
        
        // Show recommended steps based on the abuse type
        let recommendedSteps = getStepsForAbuse(abuseType);
        document.getElementById("recommendedSteps").textContent = recommendedSteps;
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally show a user-friendly error message
        let resultElement = document.getElementById("result");
        resultElement.style.display = "block";
        document.getElementById("abuseType").textContent = "An error occurred. Please try again.";
        document.getElementById("recommendedSteps").textContent = "";
    });

});

// Function to return recommended steps based on abuse type
function getStepsForAbuse(abuseType) {
    let steps = "";
    switch (abuseType) {
        case "Physical":
            steps = "1. Contact a domestic abuse hotline. 2. Seek medical attention if necessary. 3. Consider reaching out to authorities.";
            break;
        case "Emotional":
            steps = "1. Seek counseling. 2. Reach out to trusted friends or family. 3. Consider creating a safety plan.";
            break;
        case "Cyber":
            steps = "1. Report the abuse to the platform. 2. Document all interactions. 3. Seek legal advice if necessary.";
            break;
        case "Sexual":
            steps = "1. Contact a sexual assault hotline. 2. Seek medical help. 3. Report the incident to authorities.";
            break;
        case "Financial":
            steps = "1. Contact a financial advisor or legal aid. 2. Consider separating your finances. 3. Seek support from a local shelter.";
            break;
        default:
            steps = "No abuse detected. Stay safe and reach out if needed.";
            break;
    }
    return steps;
}


