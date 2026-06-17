const myLibrary = [];

//lemme get this straight:
/*the contructor receives the values, then it stores the values into PROPERTIES */
function Book (title , author, pageNo, readStatus) { //parameter should describe the meaning not type!
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    this.isRead = readStatus; //ure just storing the data, not changing it into a behavior
    this.bookId = crypto.randomUUID();
}

//PARAMETERS: takes a book instance (object)
function addBookToLibrary (BookInstance) {
    myLibrary.push(BookInstance);
}

const Book1 = new Book ("The Secret History", "Donna Tartt", 600 , true);
const Book2 = new Book ("The Invention of Morel", "Adolfo Bioy Casares" , 120, true);
const Book3 = newBook ("The Kites" , "Romain Gary", 320, false);

const cardContainer = document.getElementById("container");
function displayBook (array) {
    for (const book of array) {
        const card = document.createElement("div");
        const cardText = document.createElement("p");

        //u want to display the PROPERTIES of an obj 
        cardText.textContent = //youre assining one string (with 4 lines) to textContent 
            `Title: ${book.title}
            Author: ${book.author}
            Page Number: ${book.pageNo}
            Read Status: ${book.isRead}`
        //the text content should be each of these books and their attributes

        card.append(cardText);
        cardContainer.append(card);
    }

}


