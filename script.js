// Default books 

function Book(title, author, quote, read) {
  this.title = title;
  this.author = author;
  this.quote = quote;
  this.read = read;
}

// const book1 = new Book(
//     "Island of the Blue Dolphins",
//     "Scott O'Dell",
//     "TBD",
//     true,
// );

const book1 = new Book(
    "Braiding Sweetgrass", 
    "Robin Wall-Kimmerer",
    "Action on behalf of life transforms. Because the relationship between self and the world is reciprocal, it is not a question of first getting enlightened or saved and then acting. As we work to heal the earth, the earth heals us.",
    true,
)

const book2 = {
    title: "The Andromeda Strain ",
    author: "Micahel Crichton",
    quote: "The rock, for its part, is not even aware of our existence because we are alive for only a brief instant of its lifespan. To it, we are like flashes in the dark.",
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
        let book = document.createElement("div");
        let bookTitle = document.createElement("div");
        let bookAuthor = document.createElement("div");
        let bookQuote = document.createElement("div");
        let bookRead = document.createElement("div");

        book.setAttribute("class", "book");
        bookTitle.setAttribute("class", "title");
        bookAuthor.setAttribute("class", "author");
        bookQuote.setAttribute("class", "quote");
        bookRead.setAttribute("class", "read");

        bookshelf.prepend(book); // make new book the first one displayed after the input form
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookQuote);
        book.appendChild(bookRead);
        
        bookTitle.innerText = myLibrary[bookNum].title;
        bookAuthor.innerText = myLibrary[bookNum].author;
        bookQuote.innerText = myLibrary[bookNum].quote;
        bookRead.innerText = myLibrary[bookNum].read;
}

// load existing books when window opens
window.addEventListener("load", () => {
    console.log("page load to display existing library books")
    for (i = 0; i < myLibrary.length; i++){
        displayBook(i);
    }
  });

// make new book and add to library

function makeBook(){
    // let newBook = document.getElementById("newTitle");
    let newTitle = document.getElementById("newTitle").value;
    let newAuthor = document.getElementById("newAuthor").value;
    let newQuote = document.getElementById("newQuote").value;
    let newRead = document.getElementById("newRead").value;
    let newBook = new Book(
        newTitle,
        newAuthor,
        newQuote,
        newRead,
    )
    return newBook;
}

const addBookBtn = document.querySelector(".addBookBtn");
addBookBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent submit button from reloading pg bc no data is actually getting back to server
    addBookToLibrary(makeBook());
    displayBook(myLibrary.length - 1);
    document.getElementById("bookForm").reset();
})

// test button

const testButton = document.querySelector(".pushMe");
testButton.addEventListener("click", () => { 
    addBookToLibrary(book3);
    displayBook(myLibrary.length - 1);
});


