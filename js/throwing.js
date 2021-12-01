
let fallingSpeed;

let speed;
let angle;

winningMessage = "You hit the client!";

initializeGameVars = function() {
    target = Math.round(Math.random() * 90 + 10);
    targetDistance.innerHTML = target;

    toleranceFactor = toleranceFactorInput.value;
    fallingSpeed = planetSelection.value;
    console.log(fallingSpeed);
    planet.innerHTML = planetSelection.querySelector("[selected]").innerHTML;

    speedInput.value = 0;
    angleInput.value = 0;
};

setVarsPerRound = function() {
    speed = speedInput.value;
    angle = angleInput.value;
    guess = ((speed * speed) * Math.sin(Math.PI * angle / 90)) / fallingSpeed;
    guess = Math.round(guess);
    throwingDistanceDisplay.innerHTML = guess;
}

console.log("finished initializing throwing game js.");
