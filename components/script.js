const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function displayBook() {
    const items = document.querySelector(".items");
    items.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const item = document.createElement("div");
        item.classList.add("item");

        const title = document.createElement("p");
        title.innerHTML = `<p><strong>Title: </strong> ${myLibrary[i].title}</p>`;
        item.appendChild(title);

        const author = document.createElement("p");
        author.innerHTML = `<p><strong>Author: </strong> ${myLibrary[i].author}</p>`;
        item.appendChild(author);

        const pages = document.createElement("p");
        pages.innerHTML = `<p><strong>Pages: </strong> ${myLibrary[i].pages}</p>`;
        item.appendChild(pages);

        const read = document.createElement("p");
        read.innerHTML = `<p><strong>Have read: </strong> ${myLibrary[i].read}</p>`;
        item.appendChild(read);

        items.appendChild(item);
    }
};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook();
};

const add = document.querySelector("#addBtn");
add.addEventListener("click", () => {
    const popUp = document.querySelector(".popup");
    popUp.style.display = "flex";
});

const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", () => {
    const popUp = document.querySelector(".popup");
    popUp.style.display = "none";
});

const form = document.querySelector("form");
const submitBtn = document.querySelector("#submitBtn");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector(`input[name="read"]:checked`).value;
    addBookToLibrary(title, author, pages, read);
})


// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "no");