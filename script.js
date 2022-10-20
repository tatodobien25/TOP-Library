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

  cardDiv.appendChild(bookInfoDisplay);
  cardDiv.appendChild(removeButton);
  //here is the 'data-attribute' first used! .setAttribute
  cardDiv.setAttribute('data-index', myLibrary.indexOf(bookObject));
  removeButton.addEventListener('click', removeBtnHandler);
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
  myLibrary.forEach(librito => console.log(myLibrary.indexOf(librito)));

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
  // console.log(this.parentElement.getAttribute('data-index'));
  // console.log(this.parentElement.firstChild);
  // console.log(this);
  // console.log(this.parentElement);
  // console.log(this.parentElement.parentElement);
  // console.log(e);
  // console.log('hello');
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


// the next books are for initially populate the library array
const ensayoSobreLaCeguera = new Book("Ensayo sobre la Ceguera", "Jose Saramago", 295, true);
const phantomOfTheOpera = new Book("The Phantom Of The Opera", "Gaston Leroux", 145, true);
const andThenThereWereNone = new Book("And Then there Were None", "Agatha Christie", 272, true);
const laVidaQueSeVa = new Book("La Vida Que Se Va", "Vicente Lenero", 100, true);
const laTregua = new Book("La Tregua", "Mario Benedetti", 300, true);

const exampleLibrary = [ensayoSobreLaCeguera, phantomOfTheOpera, andThenThereWereNone, laVidaQueSeVa, laTregua];
exampleLibrary.forEach(addBookPrototype);
exampleLibrary.forEach(addBookToLibrary);