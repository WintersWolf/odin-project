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

var Players = function () {
  'use strict';

  var modal = document.getElementById("info-players");
  var btn = document.getElementById("set-players");
  var span = document.getElementsByClassName("close")[0];
  var accept = document.getElementById("accept");

  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }

  accept.onclick = function () {
    var setplayerone = document.getElementById('pone').value;
    var setplayertwo = document.getElementById('ptwo').value;
    var playerone = new Player(setplayerone, "X");
    var playertwo = new Player(setplayertwo, "O");
    document.getElementById('pone-text').innerHTML = setplayerone;
    document.getElementById('ptwo-text').innerHTML = setplayertwo;
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

var Game = function () {
  'use strict';

  var turn = 0;
}();
//# sourceMappingURL=game.dev.js.map
