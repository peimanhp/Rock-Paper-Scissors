const rock = 0;
const paper = 1;
const scissors = 2;
let palyerScore;
let computerScore;
let playerChoice;
let palyerWins;
let computerWins;

// player choice:
let playerInput = prompt(
  "Enter first letter of your object to play (Between R & P & S)"
);
if (playerInput == "r" || "R") playerChoice = 0;
else if (playerInput == "p" || "P") playerChoice = 1;
else if (playerInput == "s" || "S") playerChoice = 2;
else if (playerInput != "r" || "p" || "s" || "R" || "P" || "S") {
  alert(`Please select a letter between "R" or "P" or "S"`);
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
