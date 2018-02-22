var gameWord;
var allowedGuesses;
var userGuesses;
var correctGuesses = [];
var alreadyUsedLetters = [];
var wordElement = document.getElementById('word');
var lettersGuessedElement = document.getElementById('lettersGuessed');
var lettercountelement = document.getElementById('lettercount')

function initializeGame() {
    var arrayWords = [
        "frog",
        "jump",
        "moon",
        "lean",
    ]


    allowedGuesses = 10;
    alreadyGuessedLetters = [];
    correctGuesses = [];

    var wordIndex = Math.floor(Math.random() * arrayWords.length);
    gameWord = arrayWords[wordIndex];

    for (var i = 0; i < gameWord.length; i++) {
        correctGuesses.push('_');
    }
    wordElement.innerHTML = correctGuesses.join('');
    console.log(gameWord)
}
document.getElementById("message").innerHTML = ("To begin playing Hnagman, guess the letters of a computer generated word by pressing any key");

function updateGuesses(letterGuessed) {
    console.log(letterGuessed);
    // allowedGuesses--;
    lettercountelement.innerHTML = allowedGuesses;


    if (alreadyUsedLettters.indexOf(letterGuessed) === -1) {
        for (var i = 0; i < gameWord.length; i++) {
            console.log("hi")
            if (gameWord[i] === letterGuessed) {
                correctGuesses[i] = letterGuessed;
            }
        }
        wordElement.innerHTML = correctGuesses.join('');

        // push guessedLetter in to alreadyUsedLetters

        // Check to see if guessedLetter isn't inside of correctGuesses array (use indexOf again)
            // if yes, decrement guessesLeft and write that to the DOM
        
        // Check to see if guessesLeft === 0
            // if yes, you lose, increment losses and write it to the dom
        
        // Check for win (if correctGuesses.join('') === pickedWord)
            // if yes, you win!

    } else {
        alert('You already used that letter, try again');
    }

}

document.onkeyup = function (event) {
    var letterGuessed = event.key;
    updateGuesses(letterGuessed);
    // checkWin();
};

initializeGame();
