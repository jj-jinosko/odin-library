// Default books

class Book {
  constructor(title, author, quote, read){
    this.title = title;
    this.author = author;
    this.quote = quote;
    this.read = read;
  }
}


const book2 = new Book(
  "Braiding Sweetgrass",
  "Robin Wall-Kimmerer",
  "Action on behalf of life transforms. Because the relationship between self and the world is reciprocal, it is not a question of first getting enlightened or saved and then acting. As we work to heal the earth, the earth heals us.",
  true
);

const book3 = new Book(
  "Snow Crash",
  "Neal Stephenson",
  "See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places,",
  "true"
);

// , They were trying to save their souls- and who but a fool could fail to see that all that was the matter with their souls was that they had not been able to get a decent existence for their bodies?
const book1 = new Book(
  "The Jungle",
  "Upton Sinclair",
  "There is one kind of prison where the man is behind bars, and everything that he desires is outside; and there is another kind where the things are behind the bars, and the man is outside.",
  true
);
// Dune, Hitchhiker's guide, our mathematical universe,
// nathaniel hawthorne (birthmark),
// Brave New World,
// "A Clockwork Orange", "Anthony Burgess", "Goodness is something chosen. When a man cannot choose he ceases to be a man."
// "Candide", "Voltaire",
// "Atomic Habits", "James Clear",

const surprise1 = {
  title: "The Andromeda Strain ",
  author: "Michael Crichton",
  quote:
    "The rock, for its part, is not even aware of our existence because we are alive for only a brief instant of its lifespan. To it, we are like flashes in the dark.",
  read: false,
};

const surprise2 = new Book(
  "Flatland, A Romance of Many Dimensions",
  "Edwin A. Abbott",
  "Distress not yourself if you cannot at first understand the deeper mysteries of Spaceland. By degrees they will dawn upon you.",
  "true"
);

const surprise3 = new Book(
  "The Metamorphosis",
  "Franz Kafka",
  "Was he an animal, that music could move him so? He felt as if the way to the unknown nourishment he longed for were coming to light.",
  true
);

// , Where you tend a rose my lad, a thistle cannot grow.
const surprise4 = new Book(
  "The Secret Garden",
  "Frances Hodgson Burnett",
  "At first people refuse to believe that a strange new thing can be done, then they begin to hope it can be done, then they see it can be done--then it is done and all the world wonders why it was not done centuries ago.",
  "true"
);

// Candide
//"Let us cultivate our garden."
// Secret griefs are more cruel than public calamities.,
// It is demonstrable," said he, "that things cannot be otherwise than as they are; for as all things have been created for some end, they must necessarily be created for the best end. Observe, for instance, the nose is formed for spectacles, therefore we wear spectacles. The legs are visibly designed for stockings, accordingly we wear stockings. Stones were made to be hewn and to construct castles, therefore My Lord has a magnificent castle; for the greatest baron in the province ought to be the best lodged. Swine were intended to be eaten, therefore we eat pork all the year round: and they, who assert that everything is right, do not express themselves correctly; they should say that everything is best.",

const surprise5 = new Book(
  "Candide",
  "Voltaire",
  `It is demonstrable," said he, "that things cannot be otherwise than as they are; for as all things have been created for some end, they must necessarily be created for the best end. Observe, for instance, the nose is formed for spectacles, therefore we wear spectacles. 
    The legs are visibly designed for stockings, accordingly we wear stockings. 
    Stones were made to be hewn and to construct castles...
    and they, who assert that everything is right, do not express themselves correctly; 
    they should say that everything is best.`,
  "true"
);
const mySurpriseLibrary = [
  surprise1,
  surprise2,
  surprise3,
  surprise4,
  surprise5,
];

const myLibrary = [];
const bookshelf = document.querySelector(".bookshelf");

function addBook(newBook) {
  myLibrary.push(newBook);
}

function addSurprise() {
  let surpriseBook;
  console.log("length", mySurpriseLibrary.length);
  if (mySurpriseLibrary.length > 0) {
    let surpriseNum = Math.floor(Math.random() * mySurpriseLibrary.length);
    surpriseBook = mySurpriseLibrary[surpriseNum];
    console.log(surpriseBook.title);
    mySurpriseLibrary.splice(surpriseNum, 1);
    console.log(mySurpriseLibrary);
  } else {
    surpriseBook = null; //No more suprises =,[
    console.log("No more surprises left =,[");
  }
  return surpriseBook;
}

// function deleteBook(book) {
//     myLibrary.pop(book);
//     //are you sure? modal
// }

myLibrary.push(book1, book2, book3);
// console.log(myLibrary)

// display book
function displayBook(bookNum) {
  let book = document.createElement("div");
  let bookTitle = document.createElement("div");
  let bookAuthor = document.createElement("div");
  let bookQuote = document.createElement("div");
  let bookRead = document.createElement("button");
  let deleteBookBtn = document.createElement("button");
  let modal = document.createElement("div");
  // let closeModal = document.createElement("span");
  let modalText = document.createElement("div");
  let confirmDeleteBtn = document.createElement("button");
  let cancelModalBtn = document.createElement("button");

  // book.setAttribute("class", "test");
  book.setAttribute("class", "book");
  book.setAttribute("id", bookNum);
  bookTitle.setAttribute("class", "title");
  bookAuthor.setAttribute("class", "author");
  bookQuote.setAttribute("class", "quote");
  bookRead.setAttribute("class", "read");
//   deleteBookBtn.setAttribute("class", "deleteBookBtn fa fa-trash");
  deleteBookBtn.setAttribute("class", "deleteBookBtn material-symbols-outlined");

  modal.setAttribute("class", "modal");
  // closeModal.setAttribute("class", "closeModal");
  modalText.setAttribute("class", "modalText");
  confirmDeleteBtn.setAttribute("class", "confirmDeleteBtn");
  cancelModalBtn.setAttribute("class", "cancelModalBtn");

  bookshelf.prepend(book); // make new book the first one displayed after the input form
  book.appendChild(bookTitle);
  book.appendChild(bookAuthor);
  book.appendChild(bookQuote);
  book.appendChild(bookRead);
  book.appendChild(deleteBookBtn);
  book.appendChild(modal);
  // modal.appendChild(closeModal);
  modal.appendChild(modalText);
  modal.appendChild(cancelModalBtn);
  modal.appendChild(confirmDeleteBtn);

  bookTitle.innerText = myLibrary[bookNum].title;
  bookAuthor.innerText = myLibrary[bookNum].author;
  bookQuote.innerText = myLibrary[bookNum].quote;
  bookRead.innerText = myLibrary[bookNum].read;
  deleteBookBtn.innerText = "delete";

  // modal.innerText = "modal"; //this overwrites appended children
  modal.style.display = "none";
  // closeModal.innerText = "x";
  modalText.innerText = "Are you sure you want to delete this book?";
  cancelModalBtn.innerText = "CANCEL";
  confirmDeleteBtn.innerText = "DELETE";

  bookRead.addEventListener("click", (event) => {
    // true/false was converted to string
    if (bookRead.innerText == "false") {
      bookRead.innerText = "true";
    } else {
      bookRead.innerText = "false";
    }
  });

  // closeModal.innerText = "x";
  cancelModalBtn.addEventListener("click", (event) => {
    // hide modal
    console.log("event.target.parentNode", event.target.parentNode);
    event.target.parentNode.style.display = "none";
    // display delete button again
    console.log(
      "find deleteBook btn",
      event.target.parentNode.parentNode.querySelector(".deleteBookBtn")
    );
    event.target.parentNode.parentNode.querySelector(
      ".deleteBookBtn"
    ).style.display = "inline-block";
  });

  confirmDeleteBtn.addEventListener("click", (event) => {
    console.log(
      "event.target.parentNode.parentNode.id",
      event.target.parentNode.parentNode.id
    );

    event.target.parentNode.parentNode.style.display = "none";
    myLibrary.splice(`${event.target.parentNode.id}, 1`);
  });

  deleteBookBtn.addEventListener("click", (event) => {
    // hide the deleteBookBtn element
    event.target.style.display = "none";
    // display the modal element
    console.log(
      "event.target.parentNode.lastChild",
      event.target.parentNode.lastChild
    );
    event.target.parentNode.lastChild.style.display = "block";
  });

  // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //     if (event.target != modal && modal.style.display != "none") {

  // modal.style.display = "none";
  //     }
  // }
}

// load existing books when window opens
window.addEventListener("load", () => {
  console.log("page load to display existing library books");
  for (i = 0; i < myLibrary.length; i++) {
    displayBook(i);
  }
});

// make new book
function makeBook() {
  let newTitle = document.getElementById("newTitle").value;
  let newAuthor = document.getElementById("newAuthor").value;
  let newQuote = document.getElementById("newQuote").value;
  let newRead = document.getElementById("newRead").value;
  let newBook = new Book(newTitle, newAuthor, newQuote, newRead);
  return newBook;
}

// enable add book button
const addBookBtn = document.querySelector(".addBookBtn");
addBookBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent submit button from reloading pg bc no data is actually getting back to server
  // preventDefault seems to mess up required property
  // add check to prevent repeat books, bookExistsCheck()
  addBook(makeBook());
  displayBook(myLibrary.length - 1);
  document.getElementById("bookForm").reset();
});

// surpriseMe button
const surpriseMeBtn = document.querySelector(".surpriseMeBtn");
surpriseMeBtn.addEventListener("click", () => {
  let surpriseBook = addSurprise();
  if (surpriseBook != null) {
    //probably not the most error proof way to do this
    addBook(surpriseBook);
    displayBook(myLibrary.length - 1);
  } else {
    alert("No more surprises =,[");
  }
});
