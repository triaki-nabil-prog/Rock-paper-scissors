// Programme name <Rock paper Scissors>

// The computer will choose between rock paper scissors randomly.

/* function name <getComputerChoice> 
computer will select a randome number between min=1 and max=3.
using  Math.floor(Math.random()*(max-min+1)) + min ;

     IF randomNumber == 1 
          computerChoice = "rock";
    ELSE IF randomeNumber == 2
          computerChoice ="paper";
    ELSE IF randomeNumber == 3
         computerChoice = "scissors";
    ELSE 
         computerChoice = "have not decided yet";
    END
RETURN computerChoice    
END*/



//the user will inpute his chocie of rock paper scissors.

/* function name <getUserChoice>

    userChoice = prompt("choose between rock, paper or scisors");

    // make function case-insensitive user can input rock, ROCK , rOCK.
    userCHocie = userChoice.toLowerCase();

    //CASE user enter wrong value 
    //( loop  this with a while later to keep asking for a new value every time USER input a wrong VALUE)
    

RETURN userChocie
END*/

/*function name <playRound>(userChoice, computerChoice)

      //code will compare between the values of the user and computer.


      // if user choice == computer choice say "it's a tie".
    IF (userChoice == computerChoice) THEN
         roundWinner = "it's a TIE!";


      // else if user choice == paper and computer choice ==rock say "you win".
    ELSE IF (userChoice =="paper" && computerChoice =="rock") THEN
          roundWinner = "you win! paper beat rock"


      // else if user choice == paper and computer choice ==scissors say "you lose".
    ELSE IF (userChoice =="paper" && computerChoice =="scissors") THEN
          roundWinner = "you lose! scissors beat paper"



      // else if user choice == rock and computer choice ==sissors say "you win".
    ELSE IF (userChoice =="rock" && computerChoice =="scissors") THEN
          roundWinner = "you win! rock beat scissors"


      // else if user choice == rock and computer choice ==paper say "you lose".
     ELSE IF (userChoice =="rock" && computerChoice =="paper") THEN
          roundWinner = "you lose! paper beat rock"


    // else if user choice == scissors and computer choice ==rock say "you lose".
    ELSE IF (userChoice =="scissors" && computerChoice =="rock") THEN
          roundWinner = "you lose! rock beat scissors"

      // else if user choice == scissors and computer choice ==paper say "you win".
    ELSE IF (userChoice =="scissors" && computerChoice =="paper") THEN
          roundWinner = "you win! scissors beat paper"
    ELSE console.log("no winner");
    END

    return roundWinner;
END*/



/* function name <game>

     //play a 5 rounds game loop the game 5 times then end it.

 initial gameRound = 1;
         userScore = 0;
         computerScore = 0;

    WHILE (gameRounds <= 5) do

         computerSelection = call function getComputerChocie();
         userSelection = call function getUserChoice();
         Winner = call function playRound(userSelection, computerSelection);
         console.log(`round number ${gameRounds}: ${Winner});
         gameRounds = gameRounds + 1;

         IF user wins THEN 
            userScore++;
         ELSE 
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







