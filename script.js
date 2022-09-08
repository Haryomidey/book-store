

const ulItems = document.querySelector("ul");
const listItem = document.querySelector("li");
const deleteBtn = document.querySelectorAll(".delete");
const inputBox = document.querySelector(".add-input");
const searchInput = document.querySelector(".search-input");
const addBook = document.querySelector(".add-book");
const hideBook = document.querySelector(".checkbox"),
check = document.querySelector(".check");

searchInput.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();
    const books = document.getElementsByTagName("li");
    Array.from(books).forEach(function (book) {
        const bookTitle = book.firstElementChild.textContent;
        if (bookTitle.toLowerCase().indexOf(term) != -1) {
            book.style.display = "flex";
        }
        else {
            book.style.display = "none";
        }
    })
})

ulItems.addEventListener("click", (e) => {
    if (e.target.className === "delete") {
        const li = e.target.parentElement;
        li.remove();
    }
})

//Hide Books

hideBook.addEventListener("click", (e) => {
    check.classList.toggle("active");
    ulItems.classList.toggle("ul-active");
})

//Add Books

addBook.addEventListener("click", (e) => {
    if (inputBox.value === "") {
        return false;
    }
    else {
        newLi = document.createElement("li");
        newBookTitle = document.createElement("span");
        newDeleteBtn = document.createElement("span");
        ulItems.appendChild(newLi);
        newLi.appendChild(newBookTitle);
        newLi.appendChild(newDeleteBtn);

        newBookTitle.setAttribute("class", "book-name");
        newDeleteBtn.setAttribute("class", "delete");

        newBookTitle.textContent = inputBox.value;
        newDeleteBtn.textContent = "Delete";

        inputBox.value = "";

    }
});