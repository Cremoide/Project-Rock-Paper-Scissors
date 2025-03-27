// Since this is the first JavaScript project being built from scratch, it’s important to remember the wise words from the Problem Solving lesson. For each step in this project, be sure to do the following

// Plan or pseudocode your solution:
// SET a random number to COMPUTE the user's INPUT.
// Ask user for an INPUT (paper, rock or scissors).
// Check the INPUT and COMPUTE it for an OUTPUT.
// PRINT the OUTPUT with the results.

// Write the code.
console.log("Hi Dev! Welcome to the game.");

// Declare the round counter variable
var roundsPlayed = 0;

// Declare the players score variables
var computerScore = 0;
var humanScore = 0;

// Logic to ge via button for each round
let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", function (e) {
  let humanSelection = e.target.id;

  switch (humanSelection) {
    case "rock":
      console.log("You chose: " + humanSelection);
      playRound(humanSelection, getComputerChoice());
      break;
    case "paper":
      console.log("You chose: " + humanSelection);
      playRound(humanSelection, getComputerChoice());
      break;
    case "scissors":
      console.log("You chose: " + humanSelection);
      playRound(humanSelection, getComputerChoice());
      break;
  }

  // Updates score after playRound
  const scoreDiv = document.querySelector("#scoreDiv");

  document.getElementById(
    "score"
  ).textContent = `Machine:  ${computerScore} Human: ${humanScore}`;

  scoreDiv.appendChild(score);

  ////////////////////////////////////////////////////////////
  console.log("Machine:", computerScore, "Human:", humanScore);
});

// Logic to get the computer choice (WORKING)
function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  let a = rps[Math.floor(Math.random() * rps.length)];
  console.log("Machine says:", a);
  return a;
}

// Write the logic to play the entire game (NOT IN USE YET)
// function playGame() {
//   roundsPlayed++;
//   console.log("Round:", roundsPlayed);
// }

function displayResults() {
  const resultsDiv = document.querySelector("#resultsDiv");

  document.getElementById("result").textContent = "It's a tie! Try again...";

  resultsDiv.appendChild(result);
}

// Logic to play a single round
function playRound(humanSelection, computerSelection) {
  if (humanSelection == "rock" && computerSelection == "rock") {
    const resultsDiv = document.querySelector("#resultsDiv");
    document.getElementById("result").textContent = "It's a tie! Try again...";
    resultsDiv.appendChild(result);
    return;
  } else if (humanSelection == "paper" && computerSelection == "paper") {
    const resultsDiv = document.querySelector("#resultsDiv");
    document.getElementById("result").textContent = "It's a tie! Try again...";
    resultsDiv.appendChild(result);
    return;
  } else if (humanSelection == "scissors" && computerSelection == "scissors") {
    const resultsDiv = document.querySelector("#resultsDiv");
    document.getElementById("result").textContent = "It's a tie! Try again...";
    resultsDiv.appendChild(result);
    return;
  } else if (humanSelection == "rock" && computerSelection == "paper") {
    const resultsDiv = document.querySelector("#resultsDiv");
    document.getElementById("result").textContent = "You loose this round!";
    resultsDiv.appendChild(result);
    return computerScore++;
  } else if (humanSelection == "paper" && computerSelection == "scissors") {
    const resultsDiv = document.querySelector("#resultsDiv");
    document.getElementById("result").textContent = "You loose this round!";
    resultsDiv.appendChild(result);
    return computerScore++;
  } else if (humanSelection == "scissors" && computerSelection == "rock") {
    const resultsDiv = document.querySelector("#resultsDiv");
    document.getElementById("result").textContent = "You loose this round!";
    resultsDiv.appendChild(result);
    return computerScore++;
  } else if (computerSelection == "rock" && humanSelection == "paper") {
    const resultsDiv = document.querySelector("#resultsDiv");
    document.getElementById("result").textContent = "You win this round!";
    resultsDiv.appendChild(result);
    return humanScore++;
  } else if (computerSelection == "paper" && humanSelection == "scissors") {
    const resultsDiv = document.querySelector("#resultsDiv");
    document.getElementById("result").textContent = "You win this round!";
    resultsDiv.appendChild(result);
    return humanScore++;
  } else if (computerSelection == "scissors" && humanSelection == "rock") {
    const resultsDiv = document.querySelector("#resultsDiv");
    document.getElementById("result").textContent = "You win this round!";
    resultsDiv.appendChild(result);
    return humanScore++;
  }
}

// if ((roundsPlayed == 5)) {
//   if (computerScore > humanScore) {
//     console.log("Machine wins.");
//     console.log("FINAL SCORE: Machine:", computerScore, "Human:", humanScore);
//     alert("Machine wins! Press F5 to play again...");
//   } else if (humanScore > computerScore) {
//     console.log("Human win.");
//     console.log("FINAL SCORE: Machine:", computerScore, "Human:", humanScore);
//     alert("You win! Press F5 to play again...");
//   }
// } else {
//   playGame();
// }

// Test your code to make sure it works.
