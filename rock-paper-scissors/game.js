let playerWins = 0;
let computerWins = 0;

function computerPlay(){
  const plays = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * plays.length);
  result = (random, plays[random]);
  return result;
}

function playerPlay(){
  choice = prompt("Rock, Paper or Scissors?").toLowerCase();
  console.log(choice);
  return choice;
}

function playRound(playerSelection, computerSelection){
  if( playerSelection == "rock" && computerSelection == "paper"){
    console.log("Rock vs Paper - you lose!");
    computerWins++;
  } else if (playerSelection == "rock" && computerSelection == "scissors"){
    console.log("Rock vs Scissors - you win!");
    playersWins++;
  } else if (playerSelection == "rock" && computerSelection == "rock"){
    console.log("Rock vs Rock - it's a draw!");
  } else if (playerSelection == "paper" && computerSelection == "rock"){
    console.log("Paper vs Rock - you win!");
    playersWins++;
  } else if (playerSelection == "paper" && computerSelection == "scissors"){
    console.log("Paper vs Scissors - you lose!");
    computerWins++;
  } else if (playerSelection == "paper" && computerSelection == "paper"){
    console.log("Paper vs Paper - it's a draw!");
  } else if (playerSelection == "scissors" && computerSelection == "scissors"){
    console.log("Scissors vs Scissors - it's a draw!");
  } else if (playerSelection == "scissors" && computerSelection == "rock"){
    console.log("Scissors vs Rock - you lose!");
    computerWins++;
  } else if (playerSelection == "scissors" && computerSelection == "paper"){
    console.log("Scissors vs Paper - you win!");
    playersWins++;
  }
}

function game(){
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
 }

 if(playerWins > computerWins){
   console.log("Congratulations, you won!");
 } else if (playerWins < computerWins){
   console.log("You suck! You lost!");
 } else {
   console.log("Wow! A draw!");
 }
  
  
}

game();