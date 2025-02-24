// Since this is the first JavaScript project being built from scratch, it’s important to remember the wise words from the Problem Solving lesson. For each step in this project, be sure to do the following

// Plan or pseudocode your solution:
// SET a random number to COMPUTE the user's INPUT.
// Ask user for an INPUT (paper, rock or scissors).
// Check the INPUT and COMPUTE it for an OUTPUT.
// PRINT the OUTPUT with the results.

// Write the code.
function getComputerChoice(){
    let a = Math.floor(Math.random() * 3)
    if (a < 1) {
        a = "rock"
    }
    if (a == 1) {
        a = "paper"
    }
    if (a > 1) {
        a = "scissors"
    }
    console.log(a)
}

console.log(getComputerChoice())    

// function getHumanChoice(){
//     let b = Math.floor(Math.random() * 3) + 1;
//     console.log(b)
// }

// console.log(getHumanChoice())

// Test your code to make sure it works.