"use strict";

var GameBoard = function () {
  'use strict';

  var board = [];

  function Board(topLeft, topMiddle, topRight, midLeft, midMiddle, midRight, botLeft, botMiddle, botRight) {
    this.topLeft = topLeft;
    this.topMiddle = topMiddle;
    this.topRight = topRight;
    this.midLeft = midLeft;
    this.midMiddle = midMiddle;
    this.midRight = midRight;
    this.botLeft = botLeft;
    this.botMiddle = botMiddle;
    this.botRight = botRight;
  }

  function createBoard() {
    var create = new Board("X", "X", "X", "O", "X", "O", "O", "O", "X");
    board.push(create);
    return false;
  }

  function display() {
    var play = document.getElementById('play');

    for (var i = 0; i < Object.keys(board).length; i++) {
      var tr = "<tr>";
      tr += '<td>' + board[i].topLeft + '</td><td>' + board[i].topMiddle + '</td><td>' + board[i].topRight + '</td></tr>' + '<tr><td>' + board[i].midLeft + '</td><td>' + board[i].midMiddle + '</td><td>' + board[i].midRight + '</td></tr>' + '<tr><td>' + board[i].botLeft + '</td><td>' + board[i].botMiddle + '</td><td>' + board[i].botRight + '</td></tr>';
      play.innerHTML += tr;
    }
  }

  createBoard();
  display();
}();
//# sourceMappingURL=game.dev.js.map
