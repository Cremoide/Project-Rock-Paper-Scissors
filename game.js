// Since this is the first JavaScript project being built from scratch, it’s important to remember the wise words from the Problem Solving lesson. For each step in this project, be sure to do the following

// Plan or pseudocode your solution:
// SET a random number to COMPUTE the user's INPUT.
// Ask user for an INPUT (paper, rock or scissors).
// Check the INPUT and COMPUTE it for an OUTPUT.
// PRINT the OUTPUT with the results.

// Write the code.
console.log("Hi Dev! Welcome to the game.");
alert(
  "You're now playing rock papper scissors! Win 5 rounds to beat the machine!"
);
// console.log("You're now playing rock papper scissors!");

// Logic to get the computer choice
function getComputerChoice() {
  let a = Math.floor(Math.random() * 3);
  // console.log("Machine says:", a);
  if (a < 1) {
    a = "rock";
  } else if (a == 1) {
    a = "paper";
  } else if (a > 1) {
    a = "scissors";
  }
  console.log("So machines saying:", a);
  return a;
}

// Logic to get the human choice
function getHumanChoice() {
  let b = prompt(
    "Choose between rock, paper or scissors. (Write your bet).",
    "paper"
  ).toLowerCase();
  if (b == "rock") {
    b = "rock";
  } else if (b == "paper") {
    b = "paper";
  } else if (b == "scissors") {
    b = "scissors";
  } else {
    alert("Choose a valid item!");
    getHumanChoice();
  }
  console.log("You say:", b);
  // console.log("So you saying:", b);
  return b;
}

// Write the logic to play the entire game
function playGame() {
  // Declare the players score variables
  var computerScore = 0;
  var humanScore = 0;

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  // Write the logic to play a single round

  function playRound(humanSelection, computerSelection) {
    if (humanSelection == "rock" & computerSelection == "rock") {
      alert("It's a tie! Try again...");
      return;
    } else if (humanSelection == "paper" & computerSelection == "paper") {
      alert("It's a tie! Try again...");
      return;
    } else if (humanSelection == "scissors" & computerSelection == "scissors") {
      alert("It's a tie! Try again...");
      return;
    } else if (humanSelection == "rock" & computerSelection == "paper") {
      alert("You loose this round!");
      return computerScore++;
    } else if (humanSelection == "paper" & computerSelection == "scissors") {
      alert("You loose this round!");
      return computerScore++;
    } else if (humanSelection == "scissors" & computerSelection == "rock") {
      alert("You loose this round!");
      return computerScore++;
    } else if (computerSelection == "rock" & humanSelection == "paper") {
      alert("You win this round!");
      return humanScore++;
    } else if (computerSelection == "paper" & humanSelection == "scissors") {
      alert("You win this round!");
      return humanScore++;
    } else if (computerSelection == "scissors" & humanSelection == "rock") {
      alert("You win this round!");
      return humanScore++;
    }
  }
  playRound(humanSelection, computerSelection);
  console.log("Machine:", computerScore, "Human:", humanScore);
  getComputerChoice();
  getHumanChoice();
  playRound(humanSelection, computerSelection);
  console.log("Machine:", computerScore, "Human:", humanScore);
  getComputerChoice();
  getHumanChoice();
  playRound(humanSelection, computerSelection);
  console.log("Machine:", computerScore, "Human:", humanScore);
  getComputerChoice();
  getHumanChoice();
  playRound(humanSelection, computerSelection);
  console.log("Machine:", computerScore, "Human:", humanScore);
  getComputerChoice();
  getHumanChoice();
  console.log("Machine:", computerScore, "Human:", humanScore);

  if (computerScore == 3) {
    console.log("Machine won.");
    alert("Machine wins! Press F5 to play again...");
  } else if (humanScore == 3) {
    console.log("You won.");
    alert("You win! Press F5 to play again...");
  }
}

// Test your code to make sure it works.
playGame();
