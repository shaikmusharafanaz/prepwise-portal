const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get user from Local Storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user exists
    if (storedUser === null) {
        alert("No account found. Please register first.");
        return;
    }

    // Validate credentials
    if (email === storedUser.email && password === storedUser.password) {

        alert("Login Successful!");
        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }

});
