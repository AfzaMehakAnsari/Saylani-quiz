function login(){
    let username = document.querySelector("#username");
    let greeting = document.querySelector("#greeting");

    document.getElementById("body").style.display = "none";
    document.getElementById("welcome").style.display = "block";

    greeting.innerHTML = `Hi, ${username.value} <img src="assets/wave.png" alt="wave image" width="50px">`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('quiz-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission to avoid page reload
        
        // Define the correct answers
        const correctAnswers = {
            question1: 'div',
            question2: 'alternative-text',
            question3: 'ol',
            question4: 'color',
            question5: 'flexible-layouts',
            question6: 'class-attribute',
            question7: 'var',
            question8: 'log-data',
            question9: 'function',
            question10: 'double-equals'
        };

        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;

        // Iterate through each question
        for (let question in correctAnswers) {
            // Get selected answer
            const selectedAnswer = form.querySelector(`input[name="${question}"]:checked`);
            
            // Check if answer is correct
            if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
                score++;
            }
        }

        // Determine message based on score
        let message;
        if (score >= 9) {
            message = "Excellent!";
        } else if (score >= 7) {
            message = "Great job!";
        } else if (score >= 5) {
            message = "Good job!";
        } else {
            message = "Keep trying!";
        }

        // Show the result and hide the quiz container
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("result").style.display = "block";

        // Update the score container with the score and message
        document.getElementById("score-container").innerText = `Your total score is ${score}/${totalQuestions}\n${message}`;
    });
});
