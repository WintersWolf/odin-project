"use strict";

var sketchpad = document.getElementById("sketchpad");

function makeRows(size) {
  sketchpad.style.gridTemplateColumns = "repeat(".concat(size, ", 1fr)");
  sketchpad.style.gridTemplateRows = "repeat(".concat(size, ", 1fr)");

  for (var i = 0; i < size * size; i++) {
    var gridItem = document.createElement('div');
    gridItem.classList.add("grid-item");
    sketchpad.appendChild(gridItem);
  }
}

;
makeRows(16);
var gridSize = '';

function newGrid() {
  gridSize = prompt("Enter grid size", "Enter number up to 100");

  if (gridSize <= 100) {
    reset();
    makeRows(gridSize);
  }
}

function reset() {
  sketchpad.innerHTML = '';
}
//# sourceMappingURL=sketch.dev.js.map
