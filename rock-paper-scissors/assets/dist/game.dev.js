"use strict";

var playerWins = 0;
var computerWins = 0;
var playerSelection = "rock";
var computerSelection = "rock";
document.getElementById("rockBtn").addEventListener("click", rockSelect);
document.getElementById("paperBtn").addEventListener("click", paperSelect);
document.getElementById("scissorsBtn").addEventListener("click", scissorsSelect);
document.getElementById("showResult").innerHTML = "ROUND BEGIN!";

function computerPlay() {
  var plays = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * plays.length);
  result = (random, plays[random]);
  computerSelection = result;
  console.log("computer play called");
  return computerSelection;
}

function playerPlay() {}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("test");
    document.getElementById("showResult").innerHTML = "ROCK VS PAPER - EMBARRASSING DEFEAT!";
    computerWins++;
    document.getElementById("showScore").innerHTML = playerWins + " v " + computerWins;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("test");
    document.getElementById("showResult").innerHTML = "ROCK VS SCISSORS - RIGHTEOUS VICTORY!";
    playerWins++;
    document.getElementById("showScore").innerHTML = playerWins + " v " + computerWins;
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    console.log("test");
    document.getElementById("showResult").innerHTML = "ROCK VS ROCK - WHAT A HARD PLACE!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("test");
    document.getElementById("showResult").innerHTML = "PAPER VS ROCK - RADICAL VICTORY!";
    playerWins++;
    document.getElementById("showScore").innerHTML = playerWins + " v " + computerWins;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("test");
    document.getElementById("showResult").innerHTML = "PAPER VS SCISSORS - CRITICAL FAILURE!";
    computerWins++;
    document.getElementById("showScore").innerHTML = playerWins + " v " + computerWins;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log("test");
    document.getElementById("showResult").innerHTML = "PAPER VS PAPER - THRILLING STANDOFF!";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    console.log("test");
    document.getElementById("showResult").innerHTML = "SCISSORS VS SCISSORS - CUTTING IT CLOSE!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("test");
    document.getElementById("showResult").innerHTML = "SCISSORS VS ROCK - BRUTAL DEFEAT!";
    computerWins++;
    document.getElementById("showScore").innerHTML = playerWins + " v " + computerWins;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("test");
    document.getElementById("showResult").innerHTML = "SCISSORS VS PAPER - MERCILESS VICTORY!";
    playerWins++;
    document.getElementById("showScore").innerHTML = playerWins + " v " + computerWins;
  }

  console.log("test called");
}

function game() {
  console.log("game called");
  computerPlay();
  playRound(playerSelection, computerSelection);
  checkScore();
}

function rockSelect() {
  playerSelection = "rock";
  game();
  return playerSelection;
}

function paperSelect() {
  playerSelection = "paper";
  game();
  return playerSelection;
}

function scissorsSelect() {
  playerSelection = "scissors";
  game();
  return playerSelection;
}

function checkScore() {
  if (playerWins == "5") {
    document.getElementById("showResult").innerHTML = "RADICAL! YOU WON THE CHAMPIONSHIP DUDE!";
    playerWins = "0";
    computerWins = "0";
  } else if (computerWins == "5") {
    document.getElementById("showResult").innerHTML = "BUMMER DUDE! THE COMPUTER BEAT YOU!";
    playerWins = "0";
    computerWins = "0";
  }
}
//# sourceMappingURL=game.dev.js.map
