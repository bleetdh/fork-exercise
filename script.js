document.getElementById('startButton').addEventListener('click', guessedNum)

// update the h1 to say higher or lower
// or if the number guess is correct, we change the body color

var randomNumber = randomFn(0, 10)
var isCorrect = false
var gameOver = true
var h1 = document.querySelector('h1')
var number

function guessedNum (input) {
  input = prompt('Please key in a number')
  guessedNum = parseInt(input)

  askForANumber()
}
// fn that generates randomNum
// min and max always whole number
// random number between min and max (exclusive)
function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// fn that checks numbers with the random number
function askForANumber (guessedNum, randomNumber) {
  if (guessedNum > randomNumber) {
    h1.style.color = 'red'
  } else if (guessedNum < randomNumber) {
    h1.style.color = 'white'
  } else if (guessedNum === randomNumber) {
    h1.style.color = 'green'
    // gameOver = true
  }
  // checkForGameover()
}

function newGame () {
  // setting randomNumber to 5 for easy checking
  askForANumber(guessedNum, 5)
}

function checkForGameover () {
  if (gameOver) {
    alert("That's right!")
  } else {
    gameOver = false
    var guessNum = prompt('Please key in a number')
    var guessedNum = parseInt(guessNum)
        // bugs?!
    askForANumber(guessedNum, 5)
  }
}

if (!gameOver) {
  newGame()
}
