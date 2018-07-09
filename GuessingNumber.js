
let scoreTable = []
let Player = function (rank, name, score) {
    this.name = name;
    this.score = score;
    this.rank = rank;
}

function guessingGame() {
    let playerName = prompt("What is your name ?");
    let playerScore;
    let randomNumber = Math.floor(Math.random() * 100);
    const previousGuess = [];
    let score = 1000

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
        let helpString;

        if (myNumber < randomNumber) {
            helpString = " too low! ";
        } else {
            helpString = " too high! ";
        }
        for (let n = 0; n < previousGuess.length; n++) {
            if (previousGuess[n] === myNumber) {
                alert("Already guessed");
                myNumber = parseInt(prompt("What is your number"));
            }
        }
        alert(`Sorry! Your guess of ${myNumber} was ${helpString}`)
        //alert("Sorry! Your guess of " + myNumber + " was " + helpString + "You have " + (turnLeft - i) + " guesses remaining. Your previous guesses were: " + previousGuess);
        previousGuess.push(myNumber);
        playerScore = score - 100*i;    
        }
    
    let newPlayer = new Player(null, playerName, playerScore);
    scoreTable.push(newPlayer);
    ranking();
    printScore();
    reset();
}

    // Now sort the table, so the highest score is at the top.



function ranking() {
    scoreTable = scoreTable.sort(function(a, b){return a.score - b.score});
    for (let i = 0; i < scoreTable.length; i++) {
        scoreTable[0].rank = i+1;
    }
}

function printScore() {
    console.log(scoreTable.map(function (p) { return "Rank: " + p.rank + "//" + " Name: " + p.name + "//" + " Score: " + p.score; }));
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

guessingGame();