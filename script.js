const computerChoice = (() => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
})();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 2;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return 0;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return 0;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return 1;
  } else {
    return 0;
  }
}

function game() {
  let playerScore = 0,
    computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("What's your choice? Rock, Paper or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    let result = playRound(playerChoice, computerChoice);
    if (result === 1) {
      console.log(`Player Wins! ${playerChoice} beats ${computerChoice}!`);
      playerScore += 1;
    } else if (result === 0) {
      console.log(`You Lose! ${playerChoice} loses to ${computerChoice}!`);
      computerScore += 1;
    } else {
      console.log("This is a Tie!");
      playerScore += 1;
      computerScore += 1;
    }
  }
  if (playerScore > computerScore) {
    console.log(
      `Player wins! Player Score = ${playerScore} | Computer Score = ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `Computer wins! Player Score = ${playerScore} | Computer Score = ${computerScore}`
    );
  } else {
    console.log(
      `It's a tie! Player Score = ${playerScore} | Computer Score = ${computerScore}`
    );
  }
}

game();
