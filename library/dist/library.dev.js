"use strict";

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
  addition = new Book("Dans Adventure", "Daniel Winters", 250, "No");
  myLibrary.push(addition);
}

function Display() {
  var globalCounter = 0;
  var tbody = document.getElementById('tbody');

  for (var i = 0; i < Object.keys(myLibrary).length; i++) {
    var tr = "<tr>";
    tr += "<td>" + myLibrary[i].title + "</td>" + "<td>" + myLibrary[i].author.toString() + "</td>" + "<td>" + myLibrary[i].pages.toString() + "</td>" + "<td>" + myLibrary[i].read.toString() + "</td></tr>";
    tbody.innerHTML += tr;
  }
}

addBookToLibrary();
Display();
//# sourceMappingURL=library.dev.js.map
