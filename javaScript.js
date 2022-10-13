// Programme name <Rock paper Scissors>

let buttonSelection = document.querySelectorAll('.play');
buttonSelection.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button);
    });
});

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
function getUserChoice(button) {

    if (button.id == "rock") userSelection = "rock";
    else if (button.id == "paper") userSelection = "paper";
    else if (button.id == "scissors") userSelection = "scissors";

    return userSelection;
}

//code will compare between the values of the user and computer and select this rounds winner.
let userScore = 0;
let computerScore = 0;




function playRound(button) {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice(button);
    let roundWinner;

    if (userChoice == computerChoice) roundWinner = "it's a tie";
    else if (userChoice == "paper" && computerChoice == "rock") {
        roundWinner = "you win! paper beat rock";
        userScore++;
    }
    else if (userChoice == "paper" && computerChoice == "scissors") {
        roundWinner = "you lose! scissors beat paper";
        computerScore++;
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        roundWinner = "you win! rock beat scissors";
        userScore++;
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        roundWinner = "you lose! paper beat rock";
        computerScore++;
    }
    else if (userChoice == "scissors" && computerChoice == "rock") {
        roundWinner = "you lose! rock beat scissors";
        computerScore++;
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        roundWinner = "you win! scissors beat paper";
        userScore++;
    }
    else roundWinner = "no winner";

    let results = document.querySelector('#results');
    results.textContent = `computer choice ; ${computerChoice} : ${roundWinner}`;

    let userScoreDisplay = document.querySelector('#userScoreDisplay');
    userScoreDisplay.textContent = `user Score; ${userScore}`;

    let computerScoreDisplay = document.querySelector('#computerScoreDisplay');
    computerScoreDisplay.textContent = `computer Score;${computerScore} `;

    let winner = document.querySelector('#winner');

    if (userScore == 5) {
        winner.textContent = "THE USER";
        
    }
    else if (computerScore == 5) {
        winner.textContent = "THE COMPUTER";
        
    }
    else if(computerScore > 5 || userScore > 5)resetGame();
    else {
        winner.textContent = "the Winner is !";
    }


    return;
}

let resetg = document.querySelector('#reset');
resetg.addEventListener('click', resetGame);

function resetGame(){
    computerScore = 0;
    userScore = 0;

    let results =document.querySelector('#results');
    results.textContent = "results";
    winner.textContent = "the Winner is !";
    let userScoreDisplay = document.querySelector('#userScoreDisplay');
    userScoreDisplay.textContent = `user Score;`;

    let computerScoreDisplay = document.querySelector('#computerScoreDisplay');
    computerScoreDisplay.textContent = `computer Score;`;

    return;
}

