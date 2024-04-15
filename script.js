function getComputerChoice() {
  random_index = Math.floor(Math.random() * 3);
  choices = ["rock", "paper", "scissors"];

  return choices[random_index];
}

function playRound(player_selection, computer_selection) {
  result = "";

  if (player_selection === "scissors" && computer_selection === "paper") {
    result = `You Win! ${player_selection} beats ${computer_selection}`;
  } else if (player_selection === "paper" && computer_selection === "rock") {
    result = `You Win! ${player_selection} beats ${computer_selection}`;
  } else if (player_selection === "rock" && computer_selection === "scissors") {
    result = `You Win! ${player_selection} beats ${computer_selection}`;
  } else if (player_selection === computer_selection) {
    result = "Draw!"
  } else {
    result = `You lose! ${computer_selection} beats ${player_selection}`
  }

  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let player = prompt("your choice");
    let computer = getComputerChoice();

    let result = play_round(player, computer);
    console.log(result);
  }
}

game();