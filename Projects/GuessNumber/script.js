let random = parseInt(Math.random() * 100 + 1)
console.log(random);

const guess = document.querySelector('.guessField')
const submit = document.querySelector('#subt')
const resultPara = document.querySelector('.resultParas')
const allGuess = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const lastRes = document.querySelector('.lastResult')

let prevGuess = []
let total = 1
const playGame = true

const p = document.createElement('p')


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const userInput = parseInt(guess.value)


        validate(userInput)

    })
}

function validate(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid Number')

    }
    if (guess < 1 || guess > 100) {
        alert('please enter a valid number')
    }

    else {

        if (total === 10) {
            lowOrHi.innerHTML = `Game Over Number Was ${random}`
            startOver()
            return
        }
        prevGuess.push(guess)
        total++
        console.log('prev: ', prevGuess);
        allGuess.innerHTML += `${guess}  `
        lastRes.innerHTML = `${11 - total}`
        check(guess)
    }
}

function check(guess) {
    if (guess === random) {
        p.innerHTML = 'Congrats Your Guess is Correct'
        playGame = false

        p.addEventListener('click', function (e) {
            startOver()
        })



    }


    if (guess < random) {
        lowOrHi.innerHTML = `Your Guess is too low`
        clear()
    }

    if (guess > random) {
        lowOrHi.innerHTML = `Your guess is too high`
        clear()
    }

}

function clear() {
    guess.value = ''

}

function startOver() {
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    resultPara.appendChild(p)

    p.addEventListener('click', function (e) {
        startGame()
    })


}

function startGame() {
    guess.value = ''
    prevGuess = []
    total = 1
    allGuess.innerHTML = ''
    p.innerHTML = ''
    lowOrHi.innerHTML = ''
    lastRes.innerHTML = 10
    random = parseInt(Math.random() * 100 + 1)
}



