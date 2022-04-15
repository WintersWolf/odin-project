"use strict";

var gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
  tiles: Array.from(document.querySelectorAll('.tile'))
};
var players = {
  turn: 'X',
  p1Wins: 'p1Wins',
  p2Wins: 'p2Wins',
  p1Total: 0,
  p2Total: 0,
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
      gameLogic.endTurn(); //aiController.aiTurn();
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
        players.p1Total++;
        document.getElementById("pone-score").innerHTML = players.p1Total;
        break;

      case players.p2Wins:
        gameLogic.status.innerHTML = 'Player <span class="player2">2</span> Wins';
        players.p2Total++;
        document.getElementById("ptwo-score").innerHTML = players.p2Total;
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
  var modal = document.getElementById("info-players");
  var btn = document.getElementById("set-players");
  var span = document.getElementsByClassName("close")[0];
  var accept = document.getElementById("accept");

  accept.onclick = function () {
    var setplayerone = document.getElementById('pone').value;
    var setplayertwo = document.getElementById('ptwo').value;
    document.getElementById('pone-text').innerHTML = setplayerone;
    document.getElementById('ptwo-text').innerHTML = setplayertwo;
    modal.style.display = "none";
    return false;
  };

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}();

var aiController = {
  aiTurn: function aiTurn() {
    var playboard = gameBoard.board; // finding the ultimate play on the game that favors the computer

    var bestSpot = minimax(playboard, "O"); //loging the results

    console.log("index: " + bestSpot.index);

    function minimax(newBoard, player) {
      var availSpots = emptyIndexies(newBoard);

      if (winning(newBoard, "X")) {
        return {
          score: 10
        };
      } else if (winning(newBoard, "O")) {
        return {
          score: 10
        };
      } else if (availSpots.length === 0) {
        return {
          score: 0
        };
      }

      var moves = [];

      for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == "O") {
          var result = minimax(newBoard, "X");
          move.score = result.score;
        } else {
          var _result = minimax(newBoard, "O");

          move.score = _result.score;
        }

        newBoard[availSpots[i]] = move.index;
        moves.push(move);
      }

      var bestMove;

      if (player === "O") {
        var bestScore = -10000;

        for (var i = 0; i < moves.length; i++) {
          if (moves[i].score < bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      } else {
        var _bestScore = 10000;

        for (var i = 0; i < moves.length; i++) {
          if (moves[i].score < _bestScore) {
            _bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }

      return moves[bestMove];
    }

    function emptyIndexies(playboard) {
      return playboard.filter(function (s) {
        return s != "O" && s != "X";
      });
    }

    function winning(board, player) {
      if (board[0] == player && board[1] == player && board[2] == player || board[3] == player && board[4] == player && board[5] == player || board[6] == player && board[7] == player && board[8] == player || board[0] == player && board[3] == player && board[6] == player || board[1] == player && board[4] == player && board[7] == player || board[2] == player && board[5] == player && board[8] == player || board[0] == player && board[4] == player && board[8] == player || board[2] == player && board[4] == player && board[6] == player) {
        return true;
      } else {
        return false;
      }
    }

    gameLogic.endTurn();
  }
};
//# sourceMappingURL=game.dev.js.map
