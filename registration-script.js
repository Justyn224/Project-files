document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // 1. Prevent the page from refreshing immediately
    event.preventDefault();

    // 2. Grab the values from the inputs
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = document.getElementById('age').value;

    // 3. Validation Logic
    
    // Full Name: Must contain at least 2 words
    const nameParts = fullName.split(' ').filter(part => part.length > 0);
    if (nameParts.length < 2) {
        alert("Please enter your full name (at least two names).");
        return;
    }

    // Email Address Format (using Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password: 8 chars, 1 Uppercase, 1 Number, 1 Special Character
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.");
        return;
    }

    // Confirm Password: Must match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Age: Must be 18 or older
    if (age < 18 || age === "") {
        alert("You must be 18 years or older to register.");
        return;
    }

    // 4. Success Message
    alert("Registration Successful! Welcome aboard.");
    // In a real app, this is where you'd send data to a server (or a cloud database).
});