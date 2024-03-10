let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('#guesses')
const remaining = document.querySelector('.lastResult')
const lorOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let palyGame = true


if(palyGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number ')
    } else if(guess < 1){
        alert('Please enter a more than than 1')   
    } else if(guess > 100){
        alert('Please enter a leaa than 100 ')   
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMassage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMassage(`You guested right`)
        endGame()
    } else if (guess < randomNumber){
        displayMassage(`Number is Tooo low`)
    } else if (guess > randomNumber){
        displayMassage(`Number is Tooo high`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMassage(massage){
    lorOrHi.innerHTML = `<h2>${massage}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute("disalbled", '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p)
    palyGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector1('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        palyGame = true
    })
}
