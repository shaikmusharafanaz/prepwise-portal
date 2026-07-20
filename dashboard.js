// Check if user is logged in
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {

    alert("Please login first.");

    window.location.href = "login.html";

}
const user = JSON.parse(localStorage.getItem("user"));

if (user) {

    document.getElementById("welcomeMessage").innerHTML =
        `Welcome Back, ${user.name} 👋`;

    document.getElementById("topProfile").innerHTML =
        `Hello, ${user.name}`;

    document.getElementById("profileName").innerHTML =
        user.name;

    document.getElementById("profileEmail").innerHTML =
        user.email;
}
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    localStorage.removeItem("isLoggedIn");

    alert("Logged out successfully.");

    window.location.href = "login.html";

});
