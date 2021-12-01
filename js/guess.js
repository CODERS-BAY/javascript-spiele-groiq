
toleranceFactor = 0;

winningMessage = "You guessed the correct number!";

initializeGameVars = function() {
    target = Math.floor(Math.random() * upperLimitInput.value);
    guessInput.value = 0;
};

guessFeedback = function() {
    if (guess == target) { return "correct"; }
    if (guess < target) { return "too low"; }
    if (guess > target) { return "too high"; }
}

setVarsPerRound = function() {
    guess = guessInput.value;
    guessDisplay.innerHTML = guess;
    guessFeedbackDisplay.innerHTML = guessFeedback();
};

console.log("finished initializing guessing game js.");
