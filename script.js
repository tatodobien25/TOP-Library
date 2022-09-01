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
  return `"${this.title}" by ${this.author}, ${this.pages} pages, ${readStatus}.`;
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
  addBookToLibrary(newBook);
  removeAllChildNodes(bookshelf);
  myLibrary.forEach(createBookCard);

}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createBookCard(Book) {
  let cardContainer = document.createElement('div');
  cardContainer.classList.add('flex-container');
  cardContainer.classList.add('book-card');
  let bookInfoDisplay = document.createElement('p');
  bookInfoDisplay.classList.add('book-info');
  bookInfoDisplay.textContent = Book.info();

  let removeButton = document.createElement('button');
  removeButton.classList.add('remove-btn')
  removeButton.innerText = 'Remove from library';
  cardContainer.appendChild(bookInfoDisplay);
  cardContainer.appendChild(removeButton);
  removeButton.addEventListener('click', removeBtnHandler);
  bookshelf.appendChild(cardContainer);
}

function addBookPrototype(bookObject) {
  bookObject.prototype = Object.create(Book.prototype);
}

function removeBtnHandler(e) {
  console.log(this.parentElement);
  // console.log(e);
  // console.log('hello');

}

let myLibrary = [];
const addBookBtn = document.querySelector('#add-book-btn');
const bookshelf = document.querySelector('div.bookshelf');
addBookBtn.addEventListener('click', addBookBtnHandler);


// the next books are for initially populate the library array
const ensayoSobreLaCeguera = new Book("Ensayo sobre la Ceguera", "Jose Saramago", 295, true);
const phantomOfTheOpera = new Book("The Phantom Of The Opera", "Gaston Leroux", 145, true);
const andThenThereWereNone = new Book("And Then there Were None", "Agatha Christie", 272, true);
const laVidaQueSeVa = new Book("La Vida Que Se Va", "Vicente Lenero", 100, true);
const laTregua = new Book("La Tregua", "Mario Benedetti", 300, true);

const exampleLibrary = [ensayoSobreLaCeguera, phantomOfTheOpera, andThenThereWereNone, laVidaQueSeVa, laTregua];
exampleLibrary.forEach(addBookPrototype);
exampleLibrary.forEach(addBookToLibrary);