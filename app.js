//changing content DOM
const books = document.querySelectorAll("#book-list li.name");

Array.from(books).forEach(function(book){
book.textContent += "(book title)";
});

const bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>Books and more books...</h2>
bookList.innerHTML += "<p>This is how you add HTML</p>";

//Grabbing Parent and Child
console.log("the parent node is:", bookList.parentNode);
console.log("the parent node is:", bookList.parentElement.parentElement);
//console.log(bookList.childNodes);
console.log(bookList.children);

// transversing sibling in DOM

console.log("the next sibling is:", bookList.nextSibling);

console.log("the next sibling element is:", bookList.nextElementSibling);

console.log("the previous sibling is:", bookList.previousSibling);

console.log("the previous element sibling is:", bookList.previousElementSibling);

bookList.previousElementSibling.querySelector("p").innerHTML += "<br/>Too fast to furious!";