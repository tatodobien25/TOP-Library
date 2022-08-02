'use strict'

function Book(title, author, pages, readAlready) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readAlready = readAlready;
  this.info = function () {
    let readStatus = "read already";
    if (!readAlready) {
      readStatus = "not read yet"
    };
    return `${title} by ${author}, ${pages} pages, ${readStatus}`;
  }
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function addBookBtnHandler(e) {
  let cardContainer = document.createElement('div');
  cardContainer.classList.add('flex-container');
  let bookInfoDisplay = document.createElement('p');
  bookInfoDisplay.textContent = ensayoSobreLaCeguera.info();
  cardContainer.appendChild(bookInfoDisplay);
  bookCardsContainer.appendChild(cardContainer);

}


let myLibrary = [];
const ensayoSobreLaCeguera = new Book("Ensayo sobre la Ceguera", "Jose Saramago", 295, true);
const addBookBtn = document.querySelector('#add-book-btn');
const bookCardsContainer = document.querySelector('div.bookshelves');
addBookBtn.addEventListener('click', addBookBtnHandler);
console.log(ensayoSobreLaCeguera.info())