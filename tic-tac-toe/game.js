let GameBoard = (function() {
  'use strict';
  let board = [];

  function Board(topLeft, topMiddle, topRight, midLeft, midMiddle, midRight, botLeft, botMiddle, botRight) {
    this.topLeft = topLeft
    this.topMiddle = topMiddle
    this.topRight = topRight
    this.midLeft = midLeft
    this.midMiddle = midMiddle
    this.midRight = midRight
    this.botLeft = botLeft
    this.botMiddle = botMiddle
    this.botRight = botRight
  }

  function createBoard(){
    let create = new Board("X", "X", "X", "O", "X", "O", "O", "O", "X");
    board.push(create);
    return false;
  }

  function display(){
    let play = document.getElementById('play');
    for (var i = 0; i < Object.keys(board).length; i++) {
      var tr = "<tr>";
      tr += '<td>' + board[i].topLeft + '</td><td>' + board[i].topMiddle  + '</td><td>' + board[i].topRight +  '</td></tr>' +
      '<tr><td>' + board[i].midLeft + '</td><td>' + board[i].midMiddle  + '</td><td>' + board[i].midRight +  '</td></tr>' +
      '<tr><td>' + board[i].botLeft + '</td><td>' + board[i].botMiddle  + '</td><td>' + board[i].botRight +  '</td></tr>';
      play.innerHTML += tr;
    }
  }

  createBoard();
  display();

})();

let Players = (function() {
  'use strict';
  let modal = document.getElementById("info-players");
  let btn = document.getElementById("set-players");
  let span = document.getElementsByClassName("close")[0];
  let accept = document.getElementById("accept");
  

  function Player(name, marker){
    this.name = name;
    this.marker = marker;
  
  }

  accept.onclick = function() {
    let setplayerone = document.getElementById('pone').value;
    let setplayertwo = document.getElementById('ptwo').value;
    let playerone = new Player(setplayerone, "X");
    let playertwo = new Player(setplayertwo, "O");
    
    document.getElementById('pone-text').innerHTML = setplayerone;
    document.getElementById('ptwo-text').innerHTML = setplayertwo;
    return false;
  }

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
 
})();




let Game = (function() {
  'use strict';
  
  let turn = 0;
  

  

  
})();





