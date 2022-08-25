'use strict'

function Book(title, author, pages, readAlready) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readAlready = readAlready;

}

Book.prototype.info = function () {
  let readStatus = "read already";
  if (!this.readAlready) {
    readStatus = "not read yet";
  };
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
}


function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function addBookBtnHandler() {
  let newBookTitle = prompt("Write the title of the book:");
  let newBookAuthor = prompt("Write the author of the book:");
  let newBookPages = +prompt("Write the number of pages of the book:");
  let newBookReadAlready = confirm("Click'OK' if you have already read this book.");
  let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookReadAlready);
  newBook.prototype = Object.create(Book.prototype);


  let cardContainer = document.createElement('div');
  cardContainer.classList.add('flex-container');
  let bookInfoDisplay = document.createElement('p');
  bookInfoDisplay.textContent = newBook.info();
  cardContainer.appendChild(bookInfoDisplay);
  bookCardsContainer.appendChild(cardContainer);
  addBookToLibrary(newBook);
}


let myLibrary = [];
let ensayoSobreLaCeguera = new Book("Ensayo sobre la Ceguera", "Jose Saramago", 295, true);
const addBookBtn = document.querySelector('#add-book-btn');
const bookCardsContainer = document.querySelector('div.bookshelves');
addBookBtn.addEventListener('click', addBookBtnHandler);

ensayoSobreLaCeguera.prototype = Object.create(Book.prototype);