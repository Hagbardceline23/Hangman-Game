var word;
var allowedGuesses;
var userGuesses;
var wordElement = document.getElementById('word');
var lettersGuessedElement = document.getElementById('lettersGuessed');

function initializeGame(){
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
  }
wordElement.innerHTML = correctGuesses.join('');
 document.getElementById("message").innerHTML = ("To begin playing Hnagman, guess the letters of a computer generated word by pressing any key");
   function updateGuesses(letter){
       allowedGuesses --;
       letterCount.innerHTML = allowedGuesses;

          for (var i = 0; i < alreadyUsedLetter.length; i++) {
              if (alreadyUsedLettter[i] === letterGuessed) {
                  alert('You already used that letter, try again');
              } 
            }
            for (var i = 0; i < gameWord.length; i++) {
                if (gameWord[i] = letterGuessed) {
                    correctGuess[i] = letterGuessed
                }
            }
                    wordElement.innerHTML = correctGuesses.join('');

                    document.onkeyup = function(event) {
                        var letterGuessed = string.fromCharCode(event.keyCode).toLowerCase();
                        updateGuesses(letterGuessed);
                         checkWin();
                    };

                    initializeGame();
                          

              }
          
   