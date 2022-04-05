const sketchpad = document.getElementById("sketchpad");

function makeRows(size) {
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add("grid-item");
    sketchpad.appendChild(gridItem);
  }
};

makeRows(16);

let gridSize = '';

function newGrid(){
  gridSize = prompt("Enter grid size", "Enter number up to 100");
  if(gridSize <= 100){
    reset();
    makeRows(gridSize);
  }
}

function reset() {
  sketchpad.innerHTML = ''
}