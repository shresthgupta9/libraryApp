const myLibrary = [];

// object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// reading from myLibrary array and displaying in .items container
function displayBook() {
    const items = document.querySelector(".items");
    items.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const item = document.createElement("div");
        item.classList.add("item");

        const title = document.createElement("p");
        title.innerHTML = `<strong>Title: </strong> ${myLibrary[i].title}`;
        item.appendChild(title);

        const author = document.createElement("p");
        author.innerHTML = `<strong>Author: </strong> ${myLibrary[i].author}`;
        item.appendChild(author);

        const pages = document.createElement("p");
        pages.innerHTML = `<strong>Pages: </strong> ${myLibrary[i].pages}`;
        item.appendChild(pages);

        const read = document.createElement("p");
        read.innerHTML = `<strong>Have read: </strong> ${myLibrary[i].read}`;
        item.appendChild(read);

        const delBtn = document.createElement("button");
        delBtn.classList.add("delete");
        delBtn.value = i;
        delBtn.innerHTML = `Delete`;
        item.appendChild(delBtn);

        items.appendChild(item);
    }
};

// adding book to myLibrary
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook();
};

// deleting book from myLibrary
function deleteBookFromLibrary(event) {
    if (event.target.classList.value === "delete") {
        let index = event.target.value;
        myLibrary.splice(index, 1);
        displayBook();
    }
};

// form pop-up show
const add = document.querySelector("#addBtn");
add.addEventListener("click", () => {
    const popUp = document.querySelector(".popup");
    popUp.style.display = "flex";
});

// form pop-up close
const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", () => {
    const popUp = document.querySelector(".popup");
    popUp.style.display = "none";
});

// add book event listener
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector(`input[name="read"]:checked`).value;
    addBookToLibrary(title, author, pages, read);
});

// delete book event listener
const itemsContainer = document.querySelector(".items");
itemsContainer.addEventListener("click", deleteBookFromLibrary);