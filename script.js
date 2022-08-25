'use strict'

function Book(title, author, pages, readAlready) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readAlready = readAlready;
  // this.info = function () {
  //   let readStatus = "read already";
  //   if (!readAlready) {
  //     readStatus = "not read yet"
  //   };
  //   return `${title} by ${author}, ${pages} pages, ${readStatus}`;
  // }
}

Book.prototype.info = function () {
  let readStatus = "read already";
  if (!this.readAlready) {
    readStatus = "not read yet";
  };
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
}


function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function addBookBtnHandler(newBook) {
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