// LOGIN FORM VALIDATION

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if(email === "" || password === ""){
            alert("Please fill all fields");
        }
        else{
            alert("Login Successful");
        }

    });

}



// REGISTER FORM VALIDATION

const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(event){

        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        if(fullName === "" || email === "" || password === ""){
            alert("Please fill all fields");
        }
        else if(password.length < 6){
            alert("Password must be at least 6 characters");
        }
        else{
            alert("Registration Successful");
        }

    });

}
