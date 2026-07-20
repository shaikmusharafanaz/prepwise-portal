const questions = [

{
    title: "Question 1",

    question: "What is the difference between JDK, JRE and JVM?",

    answer: "JDK (Java Development Kit) is used to develop Java applications. JRE (Java Runtime Environment) provides the libraries and environment to run Java applications. JVM (Java Virtual Machine) executes Java bytecode and makes Java platform-independent."
},

{
    title: "Question 2",

    question: "What is Object-Oriented Programming (OOP)?",

    answer: "Object-Oriented Programming (OOP) is a programming paradigm that organizes software using objects and classes. It improves code reusability, maintainability, and scalability."
},

{
    title: "Question 3",

    question: "What are the four pillars of OOP?",

    answer: "The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction. These concepts help build secure, reusable, and flexible software."
},

{
    title: "Question 4",

    question: "What is the difference between method overloading and method overriding?",

    answer: "Method Overloading means creating multiple methods with the same name but different parameters within the same class. Method Overriding means a subclass provides its own implementation of a method already defined in its parent class."
},

{
    title: "Question 5",

    question: "What is an Interface in Java?",

    answer: "An Interface is a blueprint of a class. It contains abstract methods and constants. A class implements an interface to provide implementations for its methods. Java supports multiple inheritance through interfaces."
},

{
    title: "Question 6",

    question: "What is an Abstract Class?",

    answer: "An Abstract Class is a class that cannot be instantiated. It can contain both abstract methods (without implementation) and concrete methods (with implementation). It is used to provide a common base for related classes."
},

{
    title: "Question 7",

    question: "What is Exception Handling in Java?",

    answer: "Exception Handling is a mechanism used to handle runtime errors and prevent program termination. It uses try, catch, finally, throw, and throws keywords."
},

{
    title: "Question 8",

    question: "What is Multithreading?",

    answer: "Multithreading is the process of executing multiple threads simultaneously within a program. It improves application performance and allows multiple tasks to run concurrently."
},

{
    title: "Question 9",

    question: "What is a Constructor?",

    answer: "A Constructor is a special method that is automatically called when an object is created. It initializes the object's data. A constructor has the same name as the class and does not have a return type."
},

{
    title: "Question 10",

    question: "Why is Java Platform Independent?",

    answer: "Java is platform independent because Java source code is compiled into bytecode, which runs on the JVM. Since the JVM is available for different operating systems, the same Java program can run on Windows, Linux, and macOS without modification."
}

];
let currentQuestion = 0;
let completedQuestions=0;

const title = document.getElementById("questionTitle");
const question = document.getElementById("questionText");
const answer = document.getElementById("answerText");
const answerBox = document.getElementById("answerBox");
const answerBtn = document.getElementById("answerBtn");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

function loadQuestion() {

    title.innerHTML = questions[currentQuestion].title;

    question.innerHTML = questions[currentQuestion].question;

    answer.innerHTML = questions[currentQuestion].answer;

    answerBox.style.display = "none";

    answerBtn.innerHTML = "Show Answer";
}

loadQuestion();
function updateProgress() {

    let percentage = (completedQuestions / questions.length) * 100;

    progressFill.style.width = percentage + "%";

    progressText.innerHTML =
        completedQuestions + " of " + questions.length +
        " Completed (" + percentage + "%)";
}

document.getElementById("nextBtn").addEventListener("click", function () {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

});

document.getElementById("prevBtn").addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

});
// Show / Hide Answer
answerBtn.addEventListener("click", function () {

    if (answerBox.style.display === "none") {

        answerBox.style.display = "block";
        answerBtn.innerHTML = "Hide Answer";

    } else {

        answerBox.style.display = "none";
        answerBtn.innerHTML = "Show Answer";

    }

});

document.getElementById("completeBtn").addEventListener("click", function () {

    if (completedQuestions < questions.length) {

        completedQuestions++;

        // Save progress
        localStorage.setItem("completedQuestions", completedQuestions);

        updateProgress();

        alert("Question marked as completed!");

    }

});
