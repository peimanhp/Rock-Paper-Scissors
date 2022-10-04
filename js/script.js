let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let li;
let roundNum = 1;

// scroll on load
window.onload = setTimeout(scrollY, 1000);
function scrollY() {
  window.scroll({
    top: 435,
    behavior: "smooth",
  });
}

// player choice:
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

// computer choice:
const comRockBtn = document.getElementById("rock_com");
const comPaperBtn = document.getElementById("paper_com");
const comScissorsBtn = document.getElementById("scissors_com");

function computerPlay() {
  let randomPlay = Math.floor(Math.random() * 3);
  if (randomPlay == 0) {
    comRockBtn.style.backgroundColor = "red";
    setTimeout(() => {
      comRockBtn.style.backgroundColor = "#ffb607";
      comRockBtn.classList.add("animation");
    }, 50);
    return "ROCK";
  } else if (randomPlay == 2) {
    comPaperBtn.style.backgroundColor = "red";
    setTimeout(() => {
      comPaperBtn.style.backgroundColor = "#ffb607";
      comPaperBtn.classList.add("animation");
    }, 50);
    return "PAPER";
  } else {
    comScissorsBtn.style.backgroundColor = "red";
    setTimeout(() => {
      comScissorsBtn.style.backgroundColor = "#ffb607";
      comScissorsBtn.classList.add("animation");
    }, 50);
    return "SCISSORS";
  }
}

// grab score board elements
const playerScoreBoard = document.getElementById("player-score");
const computerScoreBoard = document.getElementById("computer-score");

// lets play!
function playGame(playerChoice, computerChoice) {
  // remove scale on PC buttons
  comRockBtn.classList.remove("animation");
  comPaperBtn.classList.remove("animation");
  comScissorsBtn.classList.remove("animation");

  // remove red color of score borads
  playerScoreBoard.classList.remove("red-color");
  computerScoreBoard.classList.remove("red-color");

  // player & computer choices
  playerChoice = this.querySelector("h4").textContent;
  computerChoice = computerPlay();

  let changePlayerScore = playerScore;
  let changeComputerScore = computerScore;

  if (
    //ties
    (playerChoice == "ROCK" && computerChoice == "ROCK") ||
    (playerChoice == "PAPER" && computerChoice == "PAPER") ||
    (playerChoice == "SCISSORS" && computerChoice == "SCISSORS")
  ) {
    playerScore++;
    computerScore++;
    // set tie log
    li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `Round ${roundNum}: it's tie
  ${playerChoice} ties with ${computerChoice}`
      )
    );
  } else if (
    // computer wins
    (playerChoice == "ROCK" && computerChoice == "PAPER") ||
    (playerChoice == "PAPER" && computerChoice == "SCISSORS") ||
    (playerChoice == "SCISSORS" && computerChoice == "ROCK")
  ) {
    computerScore++;
    // set lost log
    li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `Round ${roundNum}: You lost!
  ${playerChoice} is beaten by ${computerChoice}`
      )
    );
  } else if (
    // player wins
    (playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
    (playerChoice == "PAPER" && computerChoice == "ROCK") ||
    (playerChoice == "SCISSORS" && computerChoice == "PAPER")
  ) {
    playerScore++;
    // set won log
    li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `Round ${roundNum}: You Won!
  ${playerChoice} beats ${computerChoice}`
      )
    );
  }
  // show scores on player & computer board
  playerScoreBoard.textContent = `Score: ${playerScore}`;
  computerScoreBoard.textContent = `Score: ${computerScore}`;

  // scores colors change to red
  if (changePlayerScore != playerScore) {
    playerScoreBoard.classList.add("red-color");
  }
  if (changeComputerScore != computerScore) {
    computerScoreBoard.classList.add("red-color");
  }

  // game logs
  let ul = document.querySelector(".logs");
  ul.appendChild(li);
  roundNum++;

  // Final winner
  const modal = document.getElementById("modal_container");
  const winner = document.getElementById("win_message");
  const playAgain = document.getElementById("play_again");
  if (playerScore == 5 && computerScore == 5) {
    winner.innerHTML = `WOW! IT'S TIE!!`;
    modal.classList.add("show");
    scrollToZero();
  } else if (playerScore == 5) {
    winner.innerHTML = "YOU WON!";
    modal.classList.add("show");
    scrollToZero();
  } else if (computerScore == 5) {
    winner.innerHTML = "YOU LOST!";
    modal.classList.add("show");
    scrollToZero();
  }
  // button for reload game
  playAgain.addEventListener("click", () => {
    window.location.reload(true);
  });
}

function scrollToZero() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

// set footer content
const footer = document.querySelector(".footer");
let date = new Date();
let year = date.getFullYear();
footer.textContent = `Copyright © ${year} Peiman Hosseini`;
