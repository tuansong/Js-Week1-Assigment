
let scoreTable = []
let Player = function (rank, name, score) {
    this.rank = rank;
    this.name = name;
    this.score = score;
}

function guessingGame() {
    let playerName = prompt("What is your name ?");
    let playerScore = 0;
    let randomNumber = Math.floor(Math.random() * 100);
    const previousGuess = [];

    for (let i = 0; i < 10; i++) {
        let turnLeft = 9
        let myNumber = parseInt(prompt("What is your number"));

        while (typeof (myNumber) === "string" || myNumber < 0) {
            alert("That not a valid number please try again");
            myNumber = parseInt(prompt("what is your NUMBER"));
        }

        if (myNumber === randomNumber) {
            alert("Congratulation to you, youre winner!!!!!!!");
            break;
        }
        else if (myNumber < randomNumber) {
            //if ( previousGuess.map(function(e){ e === myNumber})) {
            //	alert(myNumber + " is already guessed");
            //}
            for (let n = 0; n < previousGuess.length; n++) {
                if (previousGuess[n] === myNumber) {
                    alert("Already guessed");
                    myNumber = parseInt(prompt("What is your number"));
                }
            }
            alert("Sorry! Your guess of " + myNumber + " was too low! You have " + (turnLeft - i) + " guesses remaining. Your previous guesses were: " + previousGuess);

        }
        else if (myNumber > randomNumber) {
            // if ( previousGuess.map(function(e){ e === myNumber})) {
            //  	alert(myNumber + " is already guessed");
            // }
            for (let n = 0; n < previousGuess.length; n++) {
                if (previousGuess[n] === myNumber) {
                    alert("Already guessed");
                    myNumber = parseInt(prompt("What is your number"));
                }
            }
            alert("Sorry! Your guess of " + myNumber + " was too high! You have " + (turnLeft - i) + " guesses remaining. Your previous guesses were: " + previousGuess);
        }
        previousGuess.push(myNumber);
        playerScore = i + 100;
    }
    let newPlayer = new Player(1, playerName, playerScore);
    scoreTable.push(newPlayer);
    reset();
}

function printScore() {
    return scoreTable.map(function (p) { return "Rank: " + p.rank + "//" + " Name: " + p.name + "//" + " Score: " + p.score; })
}

function reset() {
    let reset = prompt("Wanna play again ? (Y/N)");
    if (reset === "Y") {
        guessingGame();
    }
    else {
        let time = new Date();
        if (time.getHours() < 21) {
            alert("Have a fun day!!!");
        }
        else if (time.getHours() >= 21) {
            alert("Good night");
        }
    }
}