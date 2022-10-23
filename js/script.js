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
    function animation() {
      var run = anime.timeline({});
      run
        .add({
          targets: comRockBtn,          
          scale: {
            delay: 500,
            value: 1.2,
          },
          backgroundColor: ["#ff0000", "#fcb900"],
          duration: 1000,
          easing: "easeInOutBack",
        })
        .add({
          targets: comRockBtn,
          scale: {
            value: 1,
          },
          backgroundColor: ["#fcb900", "##FFCA2C"],
          duration: 1000,
          easing: "easeInOutBack",          
        });
    }
    animation();
    return "ROCK";
  } else if (randomPlay == 2) {
    function animation() {
      var run = anime.timeline({});
      run
        .add({
          targets: comPaperBtn,          
          scale: {
            delay: 500,
            value: 1.2,
          },
          backgroundColor: ["#ff0000", "#fcb900"],
          duration: 1000,
          easing: "easeInOutBack",
        })
        .add({
          targets: comPaperBtn,          
          scale: {
            value: 1,
          },
          backgroundColor: ["#fcb900", "##FFCA2C"],
          duration: 1000,
          easing: "easeInOutBack",
        });
    }
    animation();
    return "PAPER";
  } else {
    function animation() {
      var run = anime.timeline({});
      run
        .add({
          targets: comScissorsBtn,          
          scale: {
            delay: 500,
            value: 1.2,
          },
          backgroundColor: ["#ff0000", "#fcb900"],
          duration: 1000,
          easing: "easeInOutBack",
        })
        .add({
          targets: comScissorsBtn,
          scale: {
            value: 1,
          },
          backgroundColor: ["#fcb900", "##FFCA2C"],
          duration: 1000,
          easing: "easeInOutBack",
        });
    }
    animation();
    return "SCISSORS";
  }
}

// grab score board elements
const playerScoreBoard = document.getElementById("player-score");
const computerScoreBoard = document.getElementById("computer-score");

// lets play!
function playGame(playerChoice, computerChoice) {
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
    setTimeout(() => {
      playerScoreBoard.classList.remove("red-color");
    }, 500);
  }
  if (changeComputerScore != computerScore) {
    computerScoreBoard.classList.add("red-color");
    setTimeout(() => {
      computerScoreBoard.classList.remove("red-color");
    }, 500);
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
    setTimeout(() => {
      winner.innerHTML = `WOW! IT'S TIE!!`;
      modal.classList.add("show");
      scrollToZero();
    }, 2500);
  } else if (playerScore == 5) {
    setTimeout(() => {
      winner.innerHTML = "YOU WON!";
      modal.classList.add("show");
      scrollToZero();
    }, 2500);    
  } else if (computerScore == 5) {
    setTimeout(() => {
      winner.innerHTML = "YOU LOST!";
      modal.classList.add("show");
      scrollToZero();
    }, 2500);      
  }
  // button for reload game
  playAgain.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = `Score: ${playerScore}`;
    computerScoreBoard.textContent = `Score: ${computerScore}`;
    roundNum = 1;
    modal.classList.remove("show");
    playerScoreBoard.classList.remove("red-color");
    ul.innerHTML = "";
    scrollY();
    // window.location.reload(true);
  });
}

// scroll to top at the end of game
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
