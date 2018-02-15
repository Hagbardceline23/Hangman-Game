var correct_word = [];
var correctLetter = null;
var gameWord = null;
var letterPlayerGuessed = null;
var gameIsFinished = false;
var arrayWords = [
"frog",
"jump",
"moon",
"lean",
];

   while gameIsFinished === false {
       var wordIndex = math.floor(math.random() * array_words.length);

       gameWord = array_words[wordIndex];

       document.getElementById(message).innerHTML = "To begin playing Hangman, guess the letters of a computer generated word by pressing any letter key on the keypad."
        
       function getLetter() {
           userLetter = event.keycode;
           return userLetter;
       }

       function checkLetter(getLetter) {

           if (getLetter < 65) || (getLetter > 90)

           document.getMessageById("message").innerHTML = ("The key that you enetered isn't a letter. Pease try again by striking a letter key to enter your guess");

       }

       function getLetterToString(getLetter) {
           var userLetterString = string.fromKeyCode;
           return userLetterString;
       }

       var ind = 0;

       while (ind < alreadyUsedLetter.length) {

        if (userLetterString === alreadyUsedLetter[ind])
        document.getElementById("message").innerHTML = ("Please enter another letter, this one has already been played");

       }

while (i < gameWord.length) {
    gameWord = gameWord.split("");
    if (gameWord[i] = userLetterString)
    (correctWord[i] === gameWord[i])
    correctGuess ++;
    alreadyUsedLetter.pushgameWord[i];
    elseif 
    (i = gameWord.length -1) && (i !== gameWord[i])
       correctGuess --;
       elseif
       (i === gameWord.length-1) && (gameWord.join("") === correctWord)
       gameScore ++;
       document.getElementById("message").innerHTML =("Congratulations - your score is" + gameScore);

   }
}