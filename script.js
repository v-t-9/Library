const submitBtn = document.getElementById("submit");
const books = document.getElementById("books");
const library = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet"), 
    new Book("Dracula", "Bram Stoker", 419, "Read"), 
    new Book("The Hound of the Baskerville", "Sir Arthur Conan Doyle", 243, "Read"),
    new Book("The Phantom of the Opera", "Gastón Leroux", 368, "Not read yet")

];
  
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`
    };
}

function remove(item){
    item.parentElement.parentElement.remove();
}
function showLibrary(library){
    
    for( let i=0 ; i< library.length; i++){
    
        books.innerHTML+=`
        <div class="div-book" id='book-${i}'>
            <div id="text">
                <p class="title">${library[i].title}</p>
                <p class="author">${library[i].author}</p>
                <p class="pages">Pages : ${library[i].pages}</p>
            </div>
            <div id="buttons">
                <button id="read" class="read-btn" onclick="readButton(this)" type="button"> ${library[i].isRead}</button>
                <button id="remove" onclick="remove(this)" type="button">Remove Book</buttton>
            </div>
        </div>
        `
    }
    const read = document.getElementsByClassName("read-btn");
    arr = Array.from(read)
    for(let i in arr){
        if(arr[i].innerText == "Read"){
            arr[i].style.backgroundColor = "var(--green)";
        }
        else if(arr[i].innerText == "Not read yet"){
            arr[i].style.backgroundColor = "var(--lilac)";
        }
    }


}

function addBook(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let isRead = document.getElementById("is-read").checked;
    if (isRead){
        isRead = "Read"
    }
    else{
        isRead = "Not read yet"
    }
    
    library.push(new Book(title, author, pages, isRead))
    console.log(typeof(parseInt(library[library.length-1])))
    books.innerHTML += ` 
    <div class="div-book" id='book-${library.length-1}'>
        <div id="text">
            <p class="title">${library[library.length-1].title}</p>
            <p class="author"> ${library[library.length-1].author}</p>
            <p class="pages">Pages: ${library[library.length-1].pages}</p>
        </div>
        <div id="buttons">
            <button id="read" class="read-btn" onclick="readButton(this)" type="button" > ${library[library.length-1].isRead}</button>
            <button id="remove" onclick="remove(this)" type="button">Remove Book</buttton>
        </div>
    </div>
    `
    const read = document.getElementsByClassName("read-btn");
    arr = Array.from(read)
    for(let i in arr){
        if(arr[i].innerText == "Read"){
            arr[i].style.backgroundColor = "var(--green)";
        }
        else if(arr[i].innerText == "Not read yet"){
            arr[i].style.backgroundColor = "var(--lilac)";
        }
    }

}
function readButton(item){
    if(item.innerText == "Not read yet"){
        item.innerText = "Read"
        item.style.backgroundColor = "var(--green)";
       
    }
    else if(item.innerText == "Read"){
        item.innerText = "Not read yet"
        item.style.backgroundColor = "var(--lilac)";
    }
    
}


document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault(),
    showLibrary(library)
});
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault(),
    addBook()
});
clearBtn.addEventListener("click", (e)=>{
    deleteInputs()
});




//const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
//console.log(theHobbit.info())