// Programme name <Rock paper Scissors>

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



/* function name <game>

     //play a 5 rounds game loop the game 5 times then end it.

 initial gameRound = 1;
         userScore = 0;
         computerScore = 0;

    WHILE (gameRounds <= 5) do

         computerSelection = call function getComputerChocie();
         userSelection = call function getUserChoice();
         LET {Winner, user, computer} = call function playRound(userSelection, computerSelection);
         console.log(`round number ${gameRounds}: ${Winner}`);
         gameRounds = gameRounds + 1;

         IF user == true THEN 
            userScore++;
         ELSE if computer = true THEN
            computerScore++;
         END
    END
 
  //return the value of user score and computer score .
  consol.log(`your score is ${userScore}`);
  consol.log(`computer score is ${computerScore}`);

  // compare between the score.
  IF (userScore == computerScore) THEN
      PRINT you won the game
  ELSE IF (userScore <= computerScore) THEN
      PRINT you lost the game
  ELSE 
      PRINT you won the game
   END

END*/







