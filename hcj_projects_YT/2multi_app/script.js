const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

const questionEl = document.getElementById('question')
const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
const scoreEl = document.getElementById('score')

let score = JSON.parse(localStorage.getItem('score'))

if (!score) {
    score = 0
}

scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`

const correctAnswer = num1 * num2

formEl.addEventListener('submit', () => {
    const userAns = parseInt(inputEl.value)
    if (userAns === correctAnswer) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
})


// to store the score value in the local storage of browser
function updateLocalStorage(){
    localStorage.setItem('score',JSON.stringify(score))
}
