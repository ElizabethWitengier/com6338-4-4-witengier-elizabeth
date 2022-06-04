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
]

var game = document.getElementsByClassName('.game')
var wordstoguess = document.getElementById('word-to-guess')
var previousWord = document.getElementById('previous-word')
var incorrectLetters = document.getElementById('incorrect-letters')
var guessesRemaining = document.getElementById('remaining-guesses')
var score = document.getElementsByClassName('.score')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')

var correct = 0
var incorrect = 0

document.onkeyup = function(e) {
  console.log(e.key)
}