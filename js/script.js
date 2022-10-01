const rock = 0;
const paper = 1;
const scissors = 2;
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

// player choice:
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

// computer choice:
function computerPlay() {
  let randomPlay = Math.floor(Math.random() * 3);
  if (randomPlay == 0) return "ROCK";
  else if (randomPlay == 2) return "PAPER";
  else return "SCISSORS";
}

// lets play!
function playGame(playerChoice, computerChoice) {
  playerChoice = this.querySelector("h4").textContent;
  console.log(`Your choice: ${playerChoice}`);
  computerChoice = computerPlay();
  console.log(`Computer choice: ${computerChoice}`);
  if (playerChoice == 'ROCK' && computerChoice == 'ROCK') {
    console.log(`it's tie
  Rock ties with rock`);
    alert(`it's tie
  Rock ties with rock
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 'ROCK' && computerChoice == 'PAPER') {
    computerScore++;
    console.log(`You lost!
  Rock is beaten by Paper`);
    alert(`You lost!
  Rock is beaten by Paper
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS') {
    playerScore++;
    console.log(`You Won!
  Rock beats scissors`);
    alert(`You Won!
  Rock beats scissors
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 'PAPER' && computerChoice == 'ROCK') {
    playerScore++;
    console.log(`You Won!
  Paper beats rock`);
    alert(`You Won!
  Paper beats rock
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 'PAPER' && computerChoice == 'PAPER') {
    console.log(`it's tie
  Paper ties with Paper`);
    alert(`it's tie
  Paper ties with Paper
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == 'PAPER' && computerChoice == 'SCISSORS') {
    computerScore++;
    console.log(`You lost!
  Paper is beaten by scissors`);
    alert(`You lost!
  Paper is beaten by scissors
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
    computerScore++;
    console.log(`You lost!
  Scissors is beaten by rock`);
    alert(`You lost!
  Scissors is beaten by rock
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
    playerScore++;
    console.log(`You Won!
  Scissors beats paper`);
    alert(`You Won!
  Scissors beats paper
  Player: ${playerScore}
  Computer: ${computerScore}`);
  } else if (playerChoice == "SCISSORS" && computerChoice == "SCISSORS") {
    console.log(`it's tie
  Scissors ties with scissors`);
    alert(`it's tie
  Scissors ties with scissors
  Player: ${playerScore}
  Computer: ${computerScore}`);
  }
}

// Final winner
if (playerScore == 5) {
  alert("You won the game!");
  console.log("You won the game!");
} else if (computerScore == 5) {
  alert("You lost the game!");
  console.log("You lost the game!");
}
