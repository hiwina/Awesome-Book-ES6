export const bookList = document.querySelector('#list');
export const addBook = document.querySelector('#add-new');
export const contact = document.querySelector('#contact');
export const addSection = document.querySelector('#adds');
export const contactSection = document.querySelector('#contacts');
export const displayArea = document.querySelector('#lists');

export const onload = () => {
  contactSection.style.display = 'none';
  // addSection.style.display = 'none';
  displayArea.style.display = 'block';
  bookList.classList.add('active');
  contact.classList.remove('active');
  addBook.classList.remove('active');
  // header.style.display = 'block';
};

// window.addEventListener('load', onload);
// window.addEventListener('load', displayDate);
// bookList.addEventListener('click', onload);

// export const addBook.addEventListener('click', () => {
export const addBookToList = () => {
  bookList.classList.remove('active');
  contact.classList.remove('active');
  displayArea.style.display = 'none';
  addSection.style.display = 'flex';
  addBook.classList.add('active');
  displayArea.style.display = 'none';
  // header.style.display = 'none';
};

// contact.addEventListener('click', () => {
export const displayContact = () => {
  addBook.classList.remove('active');
  bookList.classList.remove('active');
  contactSection.style.display = 'flex';
  addSection.style.display = 'none';
  displayArea.style.display = 'none';
  contact.classList.add('active');
  // header.style.display = 'none';
};
