let bookCounter = 0;
let myLibrary = [];

function Book(title, author, pages, read) {
   this.title = title
   this.author = author
   this.pages = pages
   this.read = read
  }

// add new Book to array after clearing the table then generating with new data
function addBookToLibrary(){
  Refresh();
  let addtitle = document.getElementById('bookName').value;
  let addauthor = document.getElementById('bookAuthor').value;
  let addpages = document.getElementById('bookPages').value;
  let addread = document.getElementById('bookRead').value;
  let addition = new Book(addtitle, addauthor, addpages, addread);
  myLibrary.push(addition);
  localStorage.setItem('Book', JSON.stringify(myLibrary));
  Display();
    
    return false;   
  }

// Generate a table from our array
function Display(){
  saveFile = localStorage.getItem('Book');
  myLibrary = JSON.parse(saveFile);
  if(saveFile === null){
    myLibrary = [];
  } else {
    let entries = document.getElementById('entries');
    for (var i = 0; i < Object.keys(myLibrary).length; i++) {
    var tr = "<tr>";
    tr += '<td>' + myLibrary[i].title + '</td>' + '<td>' + myLibrary[i].author.toString() +  '</td>' + '<td>' + myLibrary[i].pages.toString() +  '</td>' + '<td>' + '<button class="button ' + myLibrary[i].read.toString() + '" onClick="readBook(' + i +')">' + myLibrary[i].read.toString() + '</button>' +  '</td>' + '<td>' + '<button class="button" onClick="deleteBook(' + i +')">' + 'Remove</button>' + '</td></tr>';
    entries.innerHTML += tr;
}
}
document.getElementById('bookCount').innerHTML = 'You have ' + i + ' books.';
}

function Refresh(){
  const row = document.getElementById('entries');
  row.innerHTML = '';
}

// Reset table by clearing HTML from it before generating with latest array
function Clear(){
  myLibrary = [];
  const row = document.getElementById('entries');
  row.innerHTML = '';
  localStorage.setItem('Book', JSON.stringify(myLibrary));
}

const deleteBook = (index) => {
  myLibrary.splice(index, 1);
  localStorage.getItem('Book');
  localStorage.setItem('Book', JSON.stringify(myLibrary));
  Refresh();
  Display();
};


const readBook = (index) => {
  if(myLibrary[index].read === "Yes"){
    myLibrary[index].read = "No";
    localStorage.setItem('Book', JSON.stringify(myLibrary));
    Refresh();
    Display();
  } else {
    myLibrary[index].read = "Yes";
    localStorage.setItem('Book', JSON.stringify(myLibrary));
    Refresh();
    Display();
  }
  
}
Display();
console.log(bookCounter);

// Display modal on click of button and close when clicking outside of modal or on x
var modal = document.getElementById("myModal");
var btn = document.getElementById("addBtn");
var clearbtn = document.getElementById("clearBtn");
var span = document.getElementsByClassName("close")[0];

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