const fileInput = document.getElementById("resumeFile");
const uploadBtn = document.getElementById("uploadBtn");
const message = document.getElementById("message");

uploadBtn.addEventListener("click", function () {

    if (fileInput.files.length === 0) {
        alert("Please select a PDF.");
        return;
    }

    const file = fileInput.files[0];

    localStorage.setItem("resumeName", file.name);

    message.innerHTML = "✅ Resume uploaded successfully!";
    document.getElementById("fileName").innerHTML =
"Uploaded File: " + file.name;
});
