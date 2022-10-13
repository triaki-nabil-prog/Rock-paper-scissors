// Programme name <Rock paper Scissors>



let buttonSelection = document.querySelectorAll('button');
buttonSelection.forEach(button => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice(button);
        let winner = playRound(userChoice,computerChoice);
        let div = document.querySelector('div');
        div.textContent = `computer choice ; ${computerChoice} : ${winner}`;

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
function playRound(userChoice,computerChoice) {
    

    let roundWinner;

    // if user choice == computer choice say "it's a tie".
    if (userChoice == computerChoice) roundWinner = "it's a tie";
    // else if user choice == paper and computer choice ==rock say "you win".
    else if (userChoice == "paper" && computerChoice == "rock") {
        roundWinner = "you win! paper beat rock";

    }
    // else if user choice == paper and computer choice ==scissors say "you lose".
    else if (userChoice == "paper" && computerChoice == "scissors") {
        roundWinner = "you lose! scissors beat paper";

    }
    // else if user choice == rock and computer choice ==sissors say "you win".
    else if (userChoice == "rock" && computerChoice == "scissors") {
        roundWinner = "you win! rock beat scissors";

    }
    // else if user choice == rock and computer choice ==paper say "you lose".
    else if (userChoice == "rock" && computerChoice == "paper") {
        roundWinner = "you lose! paper beat rock";

    }
    // else if user choice == scissors and computer choice ==rock say "you lose".
    else if (userChoice == "scissors" && computerChoice == "rock") {
        roundWinner = "you lose! rock beat scissors";

    }
    // else if user choice == scissors and computer choice ==paper say "you win".
    else if (userChoice == "scissors" && computerChoice == "paper") {
        roundWinner = "you win! scissors beat paper";

    }
    else console.log("no winner");

    return roundWinner;
}



