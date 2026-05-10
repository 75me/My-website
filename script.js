/* =========================
   FORM VALIDATION
========================= */
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let valid = true;

    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
});


/* =========================
   QUIZ FUNCTION
========================= */
function checkAnswer(answer) {
    let result = document.getElementById("quizResult");

    if (answer === "correct") {
        result.innerText = "Correct!";
        result.style.color = "green";
    } else {
        result.innerText = "Wrong answer!";
        result.style.color = "red";
    }
}