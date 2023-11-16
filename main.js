const library = document.querySelector(".library")
const newBookBtn = document.querySelector(".newBookBtn")
const dialog = document.querySelector("dialog")
const closeBtn = document.querySelector(".closeBtn")
const sendBtn = document.querySelector(".sendBtn")
const form = document.querySelector("form");

const myLibrary = [
    
];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let titleInput = document.querySelector("#title").value;
    let authorInput = document.querySelector("#author").value;
    let pagesInput = document.querySelector("#pages").value;
    let readInput = document.querySelector("#read").value;
    myLibrary.push(new Book(titleInput, authorInput, pagesInput, readInput));
    console.log(myLibrary)
}

function displayBooks(){
    for(let i = myLibrary.length - 1; i < myLibrary.length; i++){
        bookLi = document.createElement("li");
        bookLi.setAttribute("id", `${myLibrary.indexOf(myLibrary[i])}`)
        title = document.createElement("p");
        title.textContent = myLibrary[i].title;
        author = document.createElement("p");
        author.textContent = myLibrary[i].author;
        pages = document.createElement("p");
        pages.textContent = myLibrary[i].pages;
        read = document.createElement("p");
        read.textContent = myLibrary[i].read;
        deleteBtn = document.createElement("button")
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.textContent = "DELETE"

        bookLi.appendChild(title);
        bookLi.appendChild(author);
        bookLi.appendChild(pages);
        bookLi.appendChild(read);
        bookLi.appendChild(deleteBtn)
        library.appendChild(bookLi);
    }
}


newBookBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeBtn.addEventListener("click", () => {
    dialog.close();
    dialog.preventDefault();
})

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayBooks();
    dialog.close();
})

document.addEventListener("click", function(e){
    const target = e.target.closest(".deleteBtn")
    if(target){
        const index = myLibrary[e.target.parentNode.id]
        myLibrary.splice(index, 1)
        e.target.parentElement.remove();
    }
})

