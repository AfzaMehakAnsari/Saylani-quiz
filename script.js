function quiz() {
    var score = 0;

    // Get the user's selected answers
    var question1 = document.querySelector('input[name="question1"]:checked');
    var question2 = document.querySelector('input[name="question2"]:checked');
    var question3 = document.querySelector('input[name="question3"]:checked');
    var question4 = document.querySelector('input[name="question4"]:checked');
    var question5 = document.querySelector('input[name="question5"]:checked');
    var question6 = document.querySelector('input[name="question6"]:checked');
    var question7 = document.querySelector('input[name="question7"]:checked');
    var question8 = document.querySelector('input[name="question8"]:checked');
    var question9 = document.querySelector('input[name="question9"]:checked');
    var question10 = document.querySelector('input[name="question10"]:checked');

    // Check the answers (make sure to check if the user selected an option)
    if (question1 && question1.value === "var") score++;
    if (question2 && question2.value === "console.log") score++;
    if (question3 && question3.value === "while") score++;
    if (question4 && question4.value === "function") score++;
    if (question5 && question5.value === "this") score++;
    if (question6 && question6.value === "object") score++;
    if (question7 && question7.value === "===") score++;
    if (question8 && question8.value === "undefined") score++;
    if (question9 && question9.value === "const") score++;
    if (question10 && question10.value === "parse") score++;

    // Display score and message
    var message;
    if (score >= 9) {
        message = "Excellent!";
    } else if (score >= 7) {
        message = "Great job!";
    } else if (score >= 5) {
        message = "Good job!";
    } else {
        message = "Keep trying!";
    }

    var scoreContainer = document.getElementById("score-container");
    scoreContainer.innerText = "Your total score is: " + score + "/10.\n" + message;
    scoreContainer.style.display = "block";
    scoreContainer.style.color = "white";

    document.getElementById("thanks-message").style.display = "block";
}
