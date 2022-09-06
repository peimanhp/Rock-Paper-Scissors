const rock = 0;
const paper = 1;
const scissors = 2;
let palyerScore;
let computerScore;
let playerChoice;
let palyerWins;
let computerWins;

// player choice:
let isTrueSelection = 0;
while (isTrueSelection == 0) {    
    let playerInput = prompt(
        "Enter first letter of your object to play (Between R & P & S)"
    );
    if (playerInput == "r" || playerInput == "R") {
        playerChoice = 0;
        isTrueSelection = 1;
    } else if (playerInput == "p" || playerInput == "P") {
        playerChoice = 1;
        isTrueSelection = 1;
    } else if (playerInput == "s" || playerInput == "S") {
        playerChoice = 2;
        isTrueSelection = 1;
    } else {
        alert(`Please select a letter between "R" or "P" or "S"`);
    }
}
console.log(`Player choice: ${playerChoice}`);

// computer choice:
let computerChoice = Math.floor(Math.random() * 3);
console.log(`Computer choice: ${computerChoice}`);

// lets play!
if (playerChoice == 0 && computerChoice == 0) {
  console.log("tie");
  alert("tie");
} else if (playerChoice == 0 && computerChoice == 1) {
  computerScore++;
  console.log("You lost!");
  alert("You lost!");
} else if (playerChoice == 0 && computerChoice == 2) {
  palyerScore++;
  console.log("You Won!");
  alert("You Won!");
} else if (playerChoice == 1 && computerChoice == 0) {
  palyerScore++;
  console.log("You Won!");
  alert("You Won!");
} else if (playerChoice == 1 && computerChoice == 1) {
  console.log("tie");
  alert("tie");
} else if (playerChoice == 1 && computerChoice == 2) {
  computerScore++;
  console.log("You lost!");
  alert("You lost!");
} else if (playerChoice == 2 && computerChoice == 0) {
  computerScore++;
  console.log("You lost!");
  alert("You lost!");
} else if (playerChoice == 2 && computerChoice == 1) {
  palyerScore++;
  console.log("You Won!");
  alert("You Won!");
} else if (playerChoice == 2 && computerChoice == 2) {
  console.log("tie");
  alert("tie");
}
