"use strict";

var bookCounter = 0;
var myLibrary = [{
  "title": "Harry Potter and the Philosophers Stone",
  "author": "JK Rowling",
  "pages": 1050,
  "read": "Yes"
}];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  Clear();
  var addtitle = document.getElementById('bookName').value;
  var addauthor = document.getElementById('bookAuthor').value;
  var addpages = document.getElementById('bookPages').value;
  var addread = document.getElementById('bookRead').value;
  var addition = new Book(addtitle, addauthor, addpages, addread);
  myLibrary.push(addition);
  Display();
  return false;
}

function Display() {
  var entries = document.getElementById('entries');

  for (var i = 0; i < Object.keys(myLibrary).length; i++) {
    var tr = "<tr>";
    tr += "<td>" + myLibrary[i].title + "</td>" + "<td>" + myLibrary[i].author.toString() + "</td>" + "<td>" + myLibrary[i].pages.toString() + "</td>" + "<td>" + myLibrary[i].read.toString() + "</td></tr>";
    entries.innerHTML += tr;
    bookCounter++;
  }
}

function Clear() {
  var row = document.getElementById('entries');
  row.innerHTML = '';
}

Display();
console.log(bookCounter); // Display modal on click of button and close when clicking outside of modal or on x

var modal = document.getElementById("myModal");
var btn = document.getElementById("addBtn");
var span = document.getElementsByClassName("close")[0];

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
//# sourceMappingURL=library.dev.js.map
