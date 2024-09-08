const cases = document.getElementsByClassName('case')
const message = document.getElementById('message')
const playAgain = document.getElementById('playAgain')

var player = "X"
var round = 0
var winner = false

check = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

updateMessage()

for (i=0; i < cases.length; i++) {
    cases[i].addEventListener('click', case_onclick) 
}

playAgain.onclick = function() {
    for (i=0; i<cases.length;i++) {
        cases[i].innerText = ""
        cases[i].style.backgroundColor = "rgb(155, 154, 154)"
    } 
    winner = false
    round = 0
    updateMessage()
}

function verifyWinner() {
    for (i=0; i<check.length; i++) {
        if (cases[check[i][0]].innerText == player && cases[check[i][1]].innerText == player && cases[check[i][2]].innerText == player) {
            cases[check[i][0]].style.backgroundColor = "red"
            cases[check[i][1]].style.backgroundColor = "red"
            cases[check[i][2]].style.backgroundColor = "red"
            winner = true
            return message.innerText = "The winner is : " + player + " at round " + round
        } else {
            if (round == 9 && i == 7) {
                winner = true // -> NOBODY WON
                return message.innerText = "Nobody won this round !"
            }
        }
    }
}

function case_onclick() {
    if (this.innerText.length == 0 && !winner) {
        this.innerHTML = player
        round += 1
        verifyWinner()
        player == "X" ? player = "O" : player = "X"
        if (!winner) updateMessage()
    }
}

function updateMessage() {
    return message.innerText = "It's player " + player + "'s turn."
}