import Books from './modules/mainContent.js';
import Date from './modules/date.js';
import * as module from './modules/selector.js';

window.addEventListener('load', Date());

module.contact.addEventListener('click', module.displayContact);
module.addBook.addEventListener('click', module.addBookToList);
module.bookList.addEventListener('click', module.onload);

const form = document.querySelector('#book-form');
const displayArea = document.querySelector('#book-list');

export const title = document.querySelector('#title');
export const author = document.querySelector('#author');
//  eslint-disable-next-line max-len

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (title.value === '' || author.value === '') {
    title.setAttribute('placeholder', 'title');
    author.setAttribute('placeholder', 'author');
  } else {
    displayArea.innerHTML = '';
    const book = new Books();
    book.storeData();
  }
});

const book = new Books();
// eslint-disable-next-line no-unused-vars
const deleteItem = (id) => {
  book.removeBook(id);
};

// window.addEventListener('load', bigBook.displayBooks());
