// Toggle popup when login button is clicked
document.getElementById("login-button").addEventListener("click", function() {
    const popup = document.getElementById("login-popup");
    popup.classList.toggle("active-popup");
});

// Close the popup when clicked outside the form
document.getElementById("login-popup").addEventListener("click", function(event) {
    if (event.target === this) {
        this.classList.remove("active-popup");
    }
});

//login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Get email and password from user
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
   
    // Validate email and password
    if (email === "webprogsem1@gmail.com" && password === "12345678") {
        alert("Login successful!");
        // Close popup
        document.getElementById("login-popup").classList.remove("active-popup");
        // Redirect to ProductPage.html
        window.location.href = "ProductPage.html";
    } else {
        alert("Login unsuccessful! Try Again");
    }
});

