 var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
];
  
var currentWord = [];
var answerWord = [];
var pastLetters = [];
var lettersReset = "";
var i;
var guessesLeft = 10;

//math function to randomly pick a word from the wordbank
var answer = words[Math.floor(Math.random() * words.length)];

//variable that counts the number of guesses left
document.getElementById("remaining-guesses").innerHTML = guessesLeft;

//variable that counts the number of wins
var wins = 0;
document.getElementById("wins").innerHTML = wins;

//variable that counts the number of losses
var losses = 0;
document.getElementById("losses").innerHTML = losses;

//loop that creates empty spaces for the words
for (i = 0; i < answer.length; i++) {
  currentWord.push("_");
}
document.getElementById("word-to-guess").innerHTML = currentWord.join(" ");

//evaluate the position of a letter in the word
function wordLetters(letter) {
  var letterPos = new Array();
  for (i = 0; i < answer.length; i++) {
    if (answer[i] === letter)
      letterPos.push(i);
  }
  return letterPos;
}

//return letters that arent guessed still
function lettersToGuess() {
  var i;
  var toGuess = 0;
  for (i in currentWord) {
    if (currentWord[i] === "_")
      toGuess++;
  }
  return toGuess;
}

//function to capture user input
document.onkeyup = function(event) {
  var letter = event.key.toLowerCase();
  var lettersGuessed = letter;
  var i;
  var letterPos = wordLetters(lettersGuessed);
}

 //comparing letter guessed with the current word
 if (letterPos.length) {
  for (i = 0; i < letterPos.length; i++) {
    currentWord[letterPos[i]] = lettersGuessed;
  }
  document.getElementById("word-to-guess").innerHTML = currentWord.join(" ");
} else {
  //if letter has already been seen don't do it again
  if (!pastLetters.includes(letter)) {
    pastLetters.push(letter);
    document.getElementById("incorrect-letters").innerHTML += lettersGuessed + " ";
    guessesLeft--;
    document.getElementById("remaining-guesses").innerHTML = guessesLeft;
}

//user correctly guesses word the game is reset
if (lettersToGuess() == 0) {
  guessesLeft = 10;
  document.getElementById("remaining-guesses").innerHTML = guessesLeft;

  document.getElementById("incorrect-letters").innerHTML = lettersReset;

  answer = wordAnswers[Math.floor(Math.random() * wordAnswers.length)];

  currentWord = [];
  pastLetters = [];
  for (i = 0; i < answer.length; i++) {
    currentWord.push("_");
  }
  document.getElementById("word-to-guess").innerHTML = currentWord.join(" ");

  wins++;
  document.getElementById("wins").innerHTML = wins;
}

//resets game if out of guesses
if (guessesLeft === 0) {
  guessesLeft = 10;
  document.getElementById("remaining-guesses").innerHTML = guessesLeft;
  document.getElementById("incorrect-letters").innerHTML = lettersReset;

  answer = words[Math.floor(Math.random() * words.length)];

  currentWord = [];
  pastLetters = [];
  for (i = 0; i < answer.length; i++) {
    currentWord.push("_");
  }
  document.getElementById("word-to-guess").innerHTML = currentWord.join(" ");

  losses++;
  document.getElementById("losses").innerHTML = wins;
}
}