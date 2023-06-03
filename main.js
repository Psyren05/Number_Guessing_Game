// Declare variables
const heading = document.getElementById('heading');
const guessInput = document.getElementById('your-guess');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');

// RNG
let getRandomNumber = Math.floor(Math.random() * 10) + 1;

// Logic //

// If answer is correct or wrong
function checkGuess() {
    const userGuess = Number(guessInput.value);
    if(userGuess === getRandomNumber){
        heading.innerText = 'Correct!';
        heading.style.color = 'green';
    } else {
        heading.innerText = 'Wrong! Try again!';
        heading.style.color = 'red';
    }
}

// Reset game
function resetGame() {
    guessInput.value = "";
    heading.innerText = 'Guess a number!';
    heading.style.color = 'black';
    getRandomNumber = Math.floor(Math.random() * 5) + 1;
}

// Click functionality
submitBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);




