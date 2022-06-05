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
  
var guessesLeft = 10; document.getElementById('remaining-guesses').innerHTML = guessesLeft;  

var previousWord = document.getElementById('previous-word')

var underScore = []; 
 
var inncorrectLetters = Array.prototype.slice.call(document.getElementById('incorrect-letters'));
 
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');

var wins = 0
var losses = 0

document.onkeyup = function (e) {
  // filter keypresses
  var key = e.key.toLowerCase()
  if (chosenWord.indexOf(key) == -1) return
  // pick random word
  var randNum = [Math.floor(Math.random() * words.length)];
  var chosenWord = words[randNum]; document.getElementsById('word-to-guess');
 }
 // generate underscores based on the length of word
 function generateUnderscore() {
  for (let i = 0; i < chosenWord.length; i++) {
    underScore.push('_');
  }
  return underScore;
}
// compare letter to word
if (key === chosenWord) {
    // increment and show correct/incorrect
    wins++
    wins.textContent = wins
} else {
    losses++
    losses.textContent = losses
  }
//show previous word and letter
previousWord.textContent = chosenWord
inncorrectLetters.textContent = inncorrectLetters

