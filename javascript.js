var correct_word = [];
var correctLetter = null;
var gameWord = [];
var letterPlayerGuessed = null;
var gameIsFinished = false;
var correctGuess = 10;
var alreadyUsedLetters = [];
var arrayWords = [
"frog",
"jump",
"moon",
"lean",
];

 

 


      var wordIndex = Math.floor(Math.random() * arrayWords.length);

      gameWord = arrayWords[wordIndex];

     

      if (correctGuess < 10) {
          document.getElementById("message").innerHTML = ("Sorry you lost. Press any  letter key to play again.");
      }
   
      document.getElementById("message").innerHTML = ("To begin playing Hangman, guess the letters of a computer generated word by pressing any letter key on the keypad.");
       
      while ( onkeyup ) {
          function getLetter() {
              userLetter = event.charcode;
              return userLetter;
          }
      }

      function checkLetter(getLetter) {
          if (getLetter < 65 || getLetter > 122) {
              document.getMessageById("message").innerHTML = ("The key that you enetered isn't a letter. Pease try again by striking a letter key to enter your guess");
          }
      }

      function getLetterToString(getLetter) {
          var userLetterString = string.fromcharcode;
          return userLetterString;
      }

      var ind = 0;

      while (ind < alreadyUsedLetter.length) {
          if (userLetterString === alreadyUsedLetter[ind]) {
              document.getElementById("message").innerHTML = ("Please enter another letter, this one has already been played");
            }
      }
      
      while (i < gameWord.length) {
          gameWord = gameWord.split("");
          if ( gameWord[i] === userLetterString || gameWord[i].toUpperCase() === userLetterString ) {
              //(correctWord[i] === gameWord[i])
              correctGuess ++;
              alreadyUsedLetter.pushgameWord[i];
            } else if (i === (gameWord.length - 1) && i !== gameWord[i]) {
                correctGuess --;
            } else if ((i === gameWord.length-1) && (gameWord.join("") === correctWord)) {
                gameScore ++;
                var answer = createElement('<div>');
                answer = innerHTML = correctWord;
                exisitingDiv.appendchild(answer);
                document.getElementById("message").innerHTML = ("Congratulations - your score is" + gameScore);
            }
        }
        gameIsFinished = true;


