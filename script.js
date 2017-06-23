document.getElementById('startButton').addEventListener('click', getNum)

var h1 = document.querySelector('h1')
var randomNumber = randomFn(0, 100)
var inputNum;

function getNum (n) {
  n = prompt('please key in a number')
  inputNum = parseInt(n)
  if (inputNum > randomNumber) {
    h1.style.color = 'blue'
    // n = prompt("your guess is too big, try something smaller")
  } else if (inputNum < randomNumber) {
    h1.style.color = 'red'
    // n = prompt("your guess is too small, try something bigger")
  } else if (inputNum === randomNumber) {
    h1.style.color = 'green'
    confirm("that's right! let's try again!") //how to refresh?
  }
} // anyway to return a number and a function?
console.log(randomNumber)
function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
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
