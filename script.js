'use strict'

function Book(title, author, pages, readAlready) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readAlready = readAlready;
}

Book.prototype.info = function () {

  return `"${this.title}" by ${this.author}, ${this.pages} pages.`;
}

Book.prototype.readStatus = function () {
  let status = "read already";
  if (!this.readAlready) {
    status = "not read yet";
  };
  return status;
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

function createBookCard(bookObject) {
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('flex-container');
  cardDiv.classList.add('book-card');

  let bookInfoDisplay = document.createElement('p');
  bookInfoDisplay.classList.add('book-info');
  bookInfoDisplay.textContent = bookObject.info();

  let removeButton = document.createElement('button');
  removeButton.classList.add('remove-btn')
  removeButton.innerText = 'Remove from library';

  let readStatusButton = document.createElement('button');
  readStatusButton.classList.add('read-status-btn')
  readStatusButton.innerText = bookObject.readStatus()

  cardDiv.appendChild(bookInfoDisplay);
  cardDiv.appendChild(removeButton);
  cardDiv.appendChild(readStatusButton);
  //here is the 'data-attribute' first used! .setAttribute
  cardDiv.setAttribute('data-index', myLibrary.indexOf(bookObject));
  removeButton.addEventListener('click', removeBtnHandler);
  readStatusButton.addEventListener('click', readStatusBtnHandler);
  bookshelf.appendChild(cardDiv);
}

function addBookBtnHandler() {
  let newBookTitle = prompt("Write the title of the book:");
  let newBookAuthor = prompt("Write the author of the book:");
  let newBookPages = +prompt("Write the number of pages of the book:");
  let newBookReadAlready = confirm("Click'OK' if you have already read this book.");
  let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookReadAlready);
  newBook.prototype = Object.create(Book.prototype);
  //the line below, is a simple array.push
  addBookToLibrary(newBook);
  removeAllChildNodes(bookshelf);
  myLibrary.forEach(createBookCard);
}

function readStatusBtnHandler() {
  let book1 = myLibrary[this.parentElement.getAttribute('data-index')];
  book1.readAlready = !book1.readAlready;
  this.textContent = book1.readStatus();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function addBookPrototype(bookObject) {
  bookObject.prototype = Object.create(Book.prototype);
}

function removeBtnHandler(e) {
  let borrado = myLibrary.splice(this.parentElement.getAttribute('data-index'), 1);
  removeAllChildNodes(bookshelf);
  myLibrary.forEach(createBookCard);
  console.log(borrado);
  console.log(myLibrary);
  myLibrary.forEach(librito => console.log(myLibrary.indexOf(librito)));
}

let myLibrary = [];
const addBookBtn = document.querySelector('#add-book-btn');
const bookshelf = document.querySelector('div.bookshelf');
addBookBtn.addEventListener('click', addBookBtnHandler);