// Default books 

function Book(title, author, quote, read) {
  this.title = title;
  this.author = author;
  this.quote = quote;
  this.read = read;
}

const book1 = new Book(
    "Island of the Blue Dolphins",
    "Scott O'Dell",
    "TBD",
    true,
);

const book2 = {
    title: "The Andromeda Strain ",
    author: "Micahel Crichton",
    quote: "TBD",
    read: true,
}

const book3 = new Book(
    "The Jungle",
    "Upton Sinclair",
    "There is one kind of prison where the man is behind bars, and everything that he desires is outside; and there is another kind where the things are behind the bars, and the man is outside., They were trying to save their souls- and who but a fool could fail to see that all that was the matter with their souls was that they had not been able to get a decent existence for their bodies?",
    true,
)

const myLibrary = [];
const bookshelf = document.querySelector(".bookshelf");



function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

myLibrary.push(book1, book2);
// console.log(myLibrary)

// display book
function displayBook(bookNum) {
        console.log("test");
        let book = document.createElement("div");
        bookshelf.appendChild(book);
        book.innerText = myLibrary[bookNum].title;
}

// load existing books when window opens
window.addEventListener("load", () => {
    console.log("page load to display existing library books")
    for (i = 0; i < myLibrary.length; i++){
        displayBook(i);
    }
  });


const testButton = document.querySelector(".pushMe");
testButton.addEventListener("click", () => { 
    addBookToLibrary(book3);
    displayBook(myLibrary.length - 1);
});



