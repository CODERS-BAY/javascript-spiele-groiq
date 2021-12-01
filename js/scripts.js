
let attemptsLeft;
let winningCondition;

let target;
let guess;
let toleranceFactor;

// abstract-ish functions

function abstractFunctionError() {
    console.log("Error: called unimplemented abstract function");
}

function initializeGameVars() {
    abstractFunctionError();
}

function isWinningCondition() {
    abstractFunctionError();
    return false;
}

function setVarsPerRound() {
    abstractFunctionError();
}

// toggling visibility 

function toggleVisibility(pointInWorkflow) {
    for (let newElement of document.getElementsByClassName('startsWith' + pointInWorkflow)) {
        newElement.classList.remove('hidden');
    }
    for (let oldElement of document.getElementsByClassName('endsWith' + pointInWorkflow)) {
        oldElement.classList.add('hidden');
    }
}

// end of game

function endOfGame(gameResultMessage) {
    gameResultScreen.innerHTML = gameResultMessage;
    toggleVisibility('GameResult');
}

let winningMessage;
let noAttemptsLeftMessage = "Sorry, no attempts left.";

function isWinningCondition() {
    return (Math.abs(target - guess) <= toleranceFactor);
}

function checkForEndOfGame() {
    if (isWinningCondition()) {
        endOfGame(winningMessage)
    } else if (attemptsLeft == 0) {
        endOfGame(noAttemptsLeftMessage);
    }
}

// game rounds

standardGameRound = function() {
    attemptsLeft--;
    attemptsLeftDisplay.innerHTML = attemptsLeft;
    setVarsPerRound();
    checkForEndOfGame();
};

firstRound = function() {
    toggleVisibility('RoundResult');
    gameRound = standardGameRound;
    gameRound();
};

// start / restart game

function gameStart() {
    initializeGameVars();
    attemptsLeft = totalAttemptsInput.value;
    attemptsLeftDisplay.innerHTML = attemptsLeft;

    gameRound = firstRound;

    toggleVisibility('GameInit');
}

function moveToGameSetup() {
    // reset attempt count and other vars here if wished
    toggleVisibility('GameSetup');
}

moveToGameSetup();

// log end of initialization
console.log("finished js initialization.");
