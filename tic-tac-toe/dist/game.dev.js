"use strict";

var gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
  tiles: Array.from(document.querySelectorAll('.tile'))
};
var players = {
  turn: 'X',
  p1Wins: 'p1Wins',
  p2Wins: 'p2Wins',
  tie: 'tie',
  displayTurn: document.querySelector('.display-player')
};
var gameLogic = {
  playing: true,
  winCons: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
  canDo: function canDo(tile) {
    if (tile.innerText === 'X' || tile.innerText === 'O') {
      return false;
    }

    return true;
  },
  makeMove: function makeMove(tile, index) {
    if (gameLogic.canDo(tile) && gameLogic.playing) {
      tile.innerText = players.turn;
      tile.classList.add("player".concat(players.turn));
      gameLogic.refresh(index);
      gameLogic.checkWin();
      gameLogic.endTurn();
    }
  },
  endTurn: function endTurn() {
    players.displayTurn.classList.remove("player".concat(players.turn));
    players.turn = players.turn === 'X' ? 'O' : 'X';
    players.displayTurn.innerText = players.turn;
    players.displayTurn.classList.add("player".concat(players.turn));
  },
  checkWin: function checkWin() {
    var endGame = false;

    for (var i = 0; i <= 7; i++) {
      var winCondition = gameLogic.winCons[i];
      var a = gameBoard.board[winCondition[0]];
      var b = gameBoard.board[winCondition[1]];
      var c = gameBoard.board[winCondition[2]];

      if (a === '' || b === '' || c === '') {
        continue;
      }

      if (a === b && b === c) {
        endGame = true;
        break;
      }
    }

    if (endGame) {
      gameLogic.state(players.turn === 'X' ? players.p1Wins : players.p2Wins);
      gameLogic.playing = false;
      return;
    }

    if (!gameBoard.board.includes('')) gameLogic.state(players.tie);
  },
  status: document.querySelector('.status'),
  state: function state(type) {
    switch (type) {
      case players.p1Wins:
        gameLogic.status.innerHTML = 'Player <span class="player1">1</span> Wins';
        break;

      case players.p2Wins:
        gameLogic.status.innerHTML = 'Player <span class="player2">2</span> Wins';
        break;

      case players.tie:
        gameLogic.status.innerText = 'tie';
    }

    gameLogic.status.classList.remove('hide');
  },
  refresh: function refresh(index) {
    gameBoard.board[index] = players.turn;
  },
  resetButton: document.querySelector('#reset'),
  resetBoard: function resetBoard() {
    gameBoard.board = ['', '', '', '', '', '', '', '', ''];
    gameLogic.playing = true;
    gameLogic.status.classList.add('hide');

    if (players.turn === 'O') {
      gameLogic.endTurn();
    }

    gameBoard.tiles.forEach(function (tile) {
      tile.innerText = '';
      tile.classList.remove('player1');
      tile.classList.remove('player2');
    });
  }
};

var listener = function () {
  gameBoard.tiles.forEach(function (tile, index) {
    tile.addEventListener('click', function () {
      return gameLogic.makeMove(tile, index);
    });
  });
  gameLogic.resetButton.addEventListener('click', gameLogic.resetBoard);
}();
//# sourceMappingURL=game.dev.js.map
