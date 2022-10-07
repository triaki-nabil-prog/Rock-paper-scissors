// Programme name <Rock paper Scissors>

let gameWinner=game();
console.log(gameWinner);

// The computer will choose between rock paper scissors randomly.
function getComputerChoice() {

    let randomSelection = Math.floor(Math.random() * 2) + 1;
    let computerSelection = "0";
    if (randomSelection == 0) computerSelection = "rock";
    else if (randomSelection == 1) computerSelection = "paper";
    else if (randomSelection == 2) computerSelection = "scissors";
    else computerSelection = "have not decided yet";
    return computerSelection;
}

//the user will inpute his chocie of rock paper scissors.
function getUserChoice() {

    noSelection = false;
    //CASE user enter wrong value 
    while (noSelection == false) {
        let userSelection = prompt("choose between rock, paper or scissors");
        // make function case-insensitive user can input rock, ROCK , rOCK.
        userSelectionInsensitive = userSelection.toLowerCase();
        //CASE user enter wrong value 
        if (userSelectionInsensitive == "rock" || userSelectionInsensitive == "paper" || userSelectionInsensitive == "scissors")
            noSelection = true;
        else console.log("wrong value");
    }
    
    return userSelectionInsensitive;
}

//code will compare between the values of the user and computer and select this rounds winner.
function playRound(userChoice, computerChoice) {

    let roundWinner;
    let userRound = false;
    let computerRound = false;

    // if user choice == computer choice say "it's a tie".
    if (userChoice == computerChoice) roundWinner = "it's a tie";
    // else if user choice == paper and computer choice ==rock say "you win".
    else if (userChoice == "paper" && computerChoice == "rock") {
        roundWinner = "you win! paper beat rock";
        userRound = true;
        computerRound = false;
    }
    // else if user choice == paper and computer choice ==scissors say "you lose".
    else if (userChoice == "paper" && computerChoice == "scissors") {
        roundWinner = "you lose! scissors beat paper";
        userRound = false;
        computerRound = true;
    }
    // else if user choice == rock and computer choice ==sissors say "you win".
    else if (userChoice == "rock" && computerChoice == "scissors") {
        roundWinner = "you win! rock beat scissors";
        userRound = true;
        computerRound = false;
    }
    // else if user choice == rock and computer choice ==paper say "you lose".
    else if (userChoice == "rock" && computerChoice == "paper") {
        roundWinner = "you lose! paper beat rock";
        userRound = false;
        computerRound = true;
    }
    // else if user choice == scissors and computer choice ==rock say "you lose".
    else if (userChoice == "scissors" && computerChoice == "rock") {
        roundWinner = "you lose! rock beat scissors";
        userRound = false;
        computerRound = true;
    }
    // else if user choice == scissors and computer choice ==paper say "you win".
    else if (userChoice == "scissors" && computerChoice == "paper") {
        roundWinner = "you win! scissors beat paper";
        userRound = true;
        computerRound = false;
    }
    else console.log("no winner");

    return [roundWinner, userRound, computerRound];
}

//play a 5 rounds game loop the game 5 times then end it.
function game() {
    
    let gameRound = 1;
    let userScore = 0;
    let computerScore = 0;
    let gameroundswinner = "0";

    while (gameRound <= 5) {
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();
        let [winner, user, computer] = playRound(userChoice, computerChoice);
        console.log(`round number ${gameRound}: computer played ${computerChoice} , ${winner}`);
        if (user == true) userScore++;
        else if (computer == true) computerScore++;
        gameRound++;
    }
    //return the value of user score and computer score .
    // compare between the score to decide a  game winner.
    if (userScore == computerScore) gameRoundsWinner = "the five rounds is a TIE";
    else if (userScore < computerScore) gameRoundsWinner = "you lost the  five rounds game";
    else if (userScore > computerScore) gameRoundsWinner = "you won the five rounds game";

    return gameRoundsWinner;
}



