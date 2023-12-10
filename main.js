const library = document.querySelector('.library');
const newBookBtn = document.querySelector('.newBookBtn');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('.closeBtn');
const sendBtn = document.querySelector('.sendBtn');
const form = document.querySelector('form');

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  let titleInput = document.querySelector('#title').value;
  let authorInput = document.querySelector('#author').value;
  let pagesInput = document.querySelector('#pages').value;
  let readInput = document.querySelector('#isRead').checked;
  myLibrary.push(new Book(titleInput, authorInput, pagesInput, readInput));
  console.log(myLibrary);
}

function displayBooks() {
  for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
    leftDiv = document.createElement('div');
    leftDiv.classList.add('leftDiv');

    rightDiv = document.createElement('div');
    rightDiv.classList.add('rightDiv');
    bookLi = document.createElement('li');

    bookLi.setAttribute('id', `${myLibrary.indexOf(myLibrary[i])}`);

    title = document.createElement('p');
    title.classList.add('title');
    title.textContent = myLibrary[i].title;

    author = document.createElement('p');
    author.classList.add('author');
    author.textContent = 'Made by: ' + myLibrary[i].author;

    pages = document.createElement('p');
    pages.classList.add('pages');
    pages.textContent = myLibrary[i].pages + ' pages';

    isRead = document.createElement('button');
    isRead.classList.add('isReadBtn');
    isRead.classList.add('material-icons');
    if (myLibrary[i].isRead === true) {
      isRead.classList.add('checked');
    }
    isRead.textContent = 'check';

    deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.classList.add('material-icons');
    deleteBtn.textContent = 'delete';

    leftDiv.appendChild(title);
    leftDiv.appendChild(author);
    leftDiv.appendChild(pages);
    rightDiv.appendChild(isRead);
    rightDiv.appendChild(deleteBtn);
    bookLi.appendChild(leftDiv);
    bookLi.appendChild(rightDiv);
    library.appendChild(bookLi);
  }
}

newBookBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
  dialog.preventDefault();
});

sendBtn.addEventListener('click', (e) => {
  const inputs = document.querySelectorAll('input');
  let invalid = 0;
  e.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if (i != 3 && !inputs[i].checkValidity()) invalid += 1;
  }
  if (invalid === 0) {
    addBookToLibrary();
    displayBooks();
    dialog.close();
  }
});

document.addEventListener('click', function (e) {
  const deleteBtn = e.target.closest('.deleteBtn');
  if (deleteBtn) {
    const index = myLibrary[e.target.parentNode.id];
    myLibrary.splice(index, 1);
    e.target.parentElement.parentElement.remove();
  }

  const isReadBtn = e.target.closest('.isReadBtn');
  if (isReadBtn) {
    if (e.target.classList.contains('checked')) {
      e.target.classList.remove('checked');
    } else {
      e.target.classList.add('checked');
    }
  }
});
