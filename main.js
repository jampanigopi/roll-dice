var p1Score = 0;
var p2Score = 0;
var currentPlayerTurn = 'P1';
var target = Math.floor(Math.random() * (31 - 8 + 1) + 8);

document.getElementById('result').innerHTML = `<b>Player 1's Turn Now</b>`;
document.getElementById(`2`).disabled = true;
document.getElementById(
    'target'
).innerHTML = `<h3>Target Score: ${target} </h3>`;
document.getElementById(
    'ps1'
).innerHTML = `<h3>Player 1 Score : ${p1Score} </h3>`;
document.getElementById(
    'ps2'
).innerHTML = `<h3>Player 2 Score : ${p2Score} </h3>`;

var dice = {
    sides: 6,
    roll: function() {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
};

const printResult = () => {
    if (currentPlayerTurn == 'P1') {
        document.getElementById(
            'result'
        ).innerHTML = `<b>Player 1's Turn Now</b>`;
    } else {
        document.getElementById(
            'result'
        ).innerHTML = `<b>Player 2's Turn Now</b>`;
    }
};

function printNumber(number, pid) {
    var placeholder = document.getElementById(`placeholder${pid}`);
    placeholder.innerHTML = number;
}

const relaunch = () => {
    window.location.reload();
};

const gameOver = () => {
    if (p1Score >= target) {
        document.getElementById('result').innerHTML = `<b>Player 1 Wins!</b>`;
        document.getElementById(`1`).disabled = true;
        document.getElementById(`2`).disabled = true;
        document.getElementById(
            'relaunch'
        ).innerHTML = `<button onClick="relaunch()">Restart</button>`;
    } else if (p2Score >= target) {
        document.getElementById('result').innerHTML = `<b>Player 2 Wins!</b>`;
        document.getElementById(`1`).disabled = true;
        document.getElementById(`2`).disabled = true;
        document.getElementById(
            'relaunch'
        ).innerHTML = `<button onClick="relaunch()">Restart</button>`;
    }
};

const checkTurn = (id) => {
    if (currentPlayerTurn == 'P1' && id == '1') {
        var result = dice.roll();
        p1Score += result;
        console.log(p1Score);
        currentPlayerTurn = 'P2';
        document.getElementById(`${id}`).disabled = true;
        document.getElementById(`2`).disabled = false;
        document.getElementById(
            'ps1'
        ).innerHTML = `<h3>Player 1 Score : ${p1Score} </h3>`;
    } else {
        var result = dice.roll();
        p2Score += result;
        console.log(p2Score);
        currentPlayerTurn = 'P1';
        document.getElementById(`${id}`).disabled = true;
        document.getElementById(`1`).disabled = false;
        document.getElementById(
            'ps2'
        ).innerHTML = `<h3>Player 2 Score : ${p2Score} </h3>`;
    }

    printNumber(result, id);
    printResult();
    const pn = setTimeout(() => {
        printNumber('', id);
    }, 600);
    gameOver();
};

const handle = (id) => {
    checkTurn(id);
};