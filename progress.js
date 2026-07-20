// Total number of interview questions
const totalQuestions = 10;

// Read completed questions from localStorage
let completedQuestions = localStorage.getItem("completedQuestions");

if (completedQuestions === null) {
    completedQuestions = 0;
} else {
    completedQuestions = parseInt(completedQuestions);
}

// Calculate percentage
let percentage = (completedQuestions / totalQuestions) * 100;

// Update progress bar
document.getElementById("overallProgress").style.width = percentage + "%";

// Update progress text
document.getElementById("overallText").innerHTML =
completedQuestions + " of " + totalQuestions +
" Completed (" + percentage + "%)";
