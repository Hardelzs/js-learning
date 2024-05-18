Step 3 (JavaScript Code):

Finally, we need to create a function in JavaScript to sets up a simple quiz game. Let's go through the code step by step:


The code defines an array called quizData that contains multiple objects. Each object represents a question in the quiz and has properties such as question (the question itself), options (an array of answer options), and answer (the correct answer).


The code then defines variables to store references to various elements in the HTML document, such as the quizContainer, resultContainer, submitButton, retryButton, and showAnswerButton. These elements are identified using their respective IDs.


Two variables, currentQuestion and score, are initialized to keep track of the current question being displayed and the player's score, respectively. Additionally, an array called incorrectAnswers is created to store any incorrect answers provided by the player.


The code includes a function called shuffleArray, which takes an array as input and shuffles its elements randomly. This function is used to randomize the order of answer options for each question.


The displayQuestion function is defined to render the current question and its answer options on the page. It retrieves the question data from the quizData array based on the currentQuestion index. It creates HTML elements dynamically to display the question and options, and appends them to the quizContainer.


The checkAnswer function is responsible for validating the player's answer. It retrieves the selected option using a CSS selector, checks if an option is selected, compares the selected answer with the correct answer from quizData, and increments the score or adds the question to the incorrectAnswers array accordingly. It then updates the currentQuestion index, clears the selected option, and either displays the next question or the result if there are no more questions.


The displayResult function is called when all the questions have been answered. It hides the quiz container and submit button, and shows the retry and show answer buttons. It displays the player's score and the number of questions in the resultContainer.


The retryQuiz function is called when the player clicks the retry button. It resets the currentQuestion, score, and incorrectAnswers to their initial values, displays the quiz container and submit button, and hides the retry and show answer buttons. It also clears the result container and calls displayQuestion to start the quiz again.


The showAnswer function is called when the player clicks the show answer button. It hides the quiz container, submit button, and show answer button. It generates HTML to display the player's score and lists all the incorrect answers with the corresponding correct answers.


Event listeners are attached to the submit, retry, and show answer buttons, which call their respective functions when clicked.


Finally, the displayQuestion function is called initially to start the quiz by displaying the first question.


Create a JavaScript file with the name of script.js and paste the given codes into your JavaScript file and make sure it's linked properly to your HTML document, so that the scripts are executed on the page. Remember, you’ve to create a file with .js extension.

const quizData