document.querySelector('.enter').addEventListener('click', getNum)

// var start = document.getElementById('startButton')
var restart = document.getElementById('restartButton')
var h1 = document.querySelector('h1')
var randomNumber = randomFn(0, 10)
var inputNum = document.querySelector('input')
var guess = document.querySelector('.guess')

function getNum (n) {
  n = Number(inputNum.value)
  if (n > randomNumber) {
    h1.style.color = 'blue'
    // n = prompt("your guess is too big, try something smaller")
  } else if (n < randomNumber) {
    h1.style.color = 'red'
    // n = prompt("your guess is too small, try something bigger")
  } else if (n === randomNumber) {
    h1.style.color = 'green'
    confirm("that's right! let's try again!") // how to refresh?
    guess.style.visibility = 'hidden'
    restart.style.visibility = 'visible'
    // start.style.visibility = 'hidden'
    restart.addEventListener('click', playAgain)
  }
} // anyway to return a number and a function?
console.log(randomNumber)
function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function playAgain () {
  location.reload()
}
// problem here is that we are comparing undefined(inputNum) with number(randomNumber). How do we make inputNum into a number?
 // function isAnswerCorrect (inputNum, randomNumber) {
 //   if (inputNum > randomNumber) {
 //     h1.style.color = 'blue'
 //   } else if (inputNum < randomNumber) {
 //     h1.style.color = 'red'
 //   } else {
 //     h1.style.color = 'green'
 //   }
 // }
