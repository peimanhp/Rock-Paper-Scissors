const rock = 0;
const paper = 1;
const scissors = 2;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

while (playerScore != 5 || computerScore != 5) {
  // player choice:
  let isTrueSelection = 0;
  while (isTrueSelection == 0) {
    let playerInput = prompt(
      `Enter first letter of your object to play (R & P & S)`
    );
    if (playerInput.toLowerCase() == "r") {
      playerChoice = 0;
      isTrueSelection = 1;
    } else if (playerInput.toLowerCase() == "p") {
      playerChoice = 1;
      isTrueSelection = 1;
    } else if (playerInput.toLowerCase() == "s") {
      playerChoice = 2;
      isTrueSelection = 1;
    } else if (playerInput.toLowerCase() == "exit") {
      isTrueSelection = 2;
    } else {
      alert(`Please select a letter between "R" or "P" or "S"`);
    }
  }
  console.log(`Player choice: ${playerChoice}`);
  if (isTrueSelection == 2) break; // breaks loops with typing "exit"

  // computer choice:
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(`Computer choice: ${computerChoice}`);

  // lets play!
  if (playerChoice == 0 && computerChoice == 0) {
    console.log(`it's tie
  Rock ties with rock`);
    alert(`it's tie
  Rock ties with rock
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 0 && computerChoice == 1) {
    computerScore++;
    console.log(`You lost!
  Rock is beaten by Paper`);
    alert(`You lost!
  Rock is beaten by Paper
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 0 && computerChoice == 2) {
    playerScore++;
    console.log(`You Won!
  Rock beats scissors`);
    alert(`You Won!
  Rock beats scissors
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 1 && computerChoice == 0) {
    playerScore++;
    console.log(`You Won!
  Paper beats rock`);
    alert(`You Won!
  Paper beats rock
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 1 && computerChoice == 1) {
    console.log(`it's tie
  Paper ties with Paper`);
    alert(`it's tie
  Paper ties with Paper
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 1 && computerChoice == 2) {
    computerScore++;
    console.log(`You lost!
  Paper is beaten by scissors`);
    alert(`You lost!
  Paper is beaten by scissors
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 2 && computerChoice == 0) {
    computerScore++;
    console.log(`You lost!
  Scissors is beaten by rock`);
    alert(`You lost!
  Scissors is beaten by rock
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 2 && computerChoice == 1) {
    playerScore++;
    console.log(`You Won!
  Scissors beats paper`);
    alert(`You Won!
  Scissors beats paper
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 2 && computerChoice == 2) {
    console.log(`it's tie
  Scissors ties with scissors`);
    alert(`it's tie
  Scissors ties with scissors
  Player: ${playerScore}
  Computer: ${computerScore}`);
  }

  // Final winner
  if (playerScore == 5) {
    alert("You won the game!");
    console.log("You won the game!");
    break;
  } else if (computerScore == 5) {
    alert("You lost the game!");
    console.log("You lost the game!");
    break;
  }
}
