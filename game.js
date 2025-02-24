// Since this is the first JavaScript project being built from scratch, it’s important to remember the wise words from the Problem Solving lesson. For each step in this project, be sure to do the following

// Plan or pseudocode your solution:
// SET a random number to COMPUTE the user's INPUT.
// Ask user for an INPUT (paper, rock or scissors).
// Check the INPUT and COMPUTE it for an OUTPUT.
// PRINT the OUTPUT with the results.

// Write the code.
console.log("Hi Dev!");

// Logic to get the computer choice
function getComputerChoice() {
  let a = Math.floor(Math.random() * 3);
  if (a < 1) {
    a = "rock";
  } else if (a == 1) {
    a = "paper";
  } else if (a > 1) {
    a = "scissors";
  }
  return a;
}

// Logic to get the human choice
alert("You're now playing rock papper scissors!");

function getHumanChoice() {
  let b = prompt(
    "Choose between 1 (Rock), 2 (Papper) or 3 (Scissors).",
    "1 - 3"
  );
  if (b < 1) {
    b = "rock";
  } else if (b == 1) {
    b = "paper";
  } else if (b > 1) {
    b = "scissors";
  }
  return b;
}
getHumanChoice();

// Test your code to make sure it works.

console.log("Machine chose:", getComputerChoice());

console.log("You've chosen:", getHumanChoice());
