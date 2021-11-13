
let score;
let userThrows;
let computerThrows;
let options = ["Rock", "Paper", "Scissors"];

initializeGameVars = function() {
    score = 0;
    setRoundResultDisplay('userThrows', 'questionmark');
    setRoundResultDisplay('computerThrows', 'questionmark');
}

function setRoundResultDisplay(elementStem, newValue) {
    document.getElementById(elementStem + 'Img')
        .setAttribute('src', 'imgs/' + newValue + '.jpg');
    document.getElementById(elementStem + 'Img')
        .setAttribute('alt', newValue);
        document.getElementById(elementStem + 'Display')
        .innerHTML = newValue;
}

setVarsPerRound = function() {
    // userThrows is set in play(), not here
    setRoundResultDisplay('userThrows', options[userThrows]);
    
    computerThrows = Math.floor(Math.random() * 3);
    setRoundResultDisplay('computerThrows', options[computerThrows]);
    
    let roundResult = userThrows - computerThrows;
    roundResult = (((roundResult % 3) + 3) % 3);
    console.log(" user: " + options[userThrows] + ", pc: " + options[computerThrows] + ", result: " + roundResult + ", score: " + score);
    if(roundResult == 0) {
        roundWinnerDisplay.innerHTML = "Draw";
    } else if (roundResult == 1) {
        score++;
        roundWinnerDisplay.innerHTML = "User";
    } else {
        score--;
        roundWinnerDisplay.innerHTML = "Computer";
    }
}

checkForEndOfGame = function() {
    if(attemptsLeft == 0) {
        if(score > 0) {
            gameResultMessage = "You win!";
        } else if (score < 0) {
            gameResultMessage = "Computer wins!";
        } else {
            gameResultMessage = "It's a draw!";
        }
        endOfGame(gameResultMessage);
    }
}

function play(userThrowsP) {
    userThrows = userThrowsP;
    gameRound();
}

console.log("finished initializing rock paper scissors js.");
