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

/*PROGRAMME COMPARE VALUES

    //code will compare between the values of the user and computer.


    // if user choice == computer choice say "it's a tie".
    IF (userChoice == computerChoice) THEN
         console.log("it's a tie",'Computer played ${computerChoice} and you played ${userChoice});


    // else if user choice == paper and computer choice ==rock say "you win".
    ELSE IF (userChoice =="paper" && computerChoice =="rock") THEN
          console.log("You win",'Computer played ${computerChoice} and you played ${userChoice});


    // else if user choice == papper and computer choice ==scissors say "you lose".
    // else if user choice == rock and computer choice ==sissors say "you win".
    // else if user choice == rock and computer choice ==paper say "you lose".
    // else if user choice == scissors and computer choice ==rock say "you lose".
    // else if user choice == scissors and computer choice ==papper say "you win".


END*/




//play a 5 rounds game loop the game 5 times then end it.
//return the value of user score and computer score .
// compare between the score.
// if user score == computer score say " the game is a tie".
// if user score < computer score say " computer won the game".
// if user score > computer score say "you won the game".








