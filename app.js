//book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//ui constructor
function UI(){

}
//add book to list
UI.prototype.addBookList = function(book){
  const list = document.getElementById('book-list');
  
  //create tr element
  const row = document.createElement('tr');

  //insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  
  `
  list.appendChild(row)
  document.getElementById('title').value = ""
  document.getElementById('author').value = ""
  document.getElementById('isbn').value = ""
}

//show alert
UI.prototype.showAlert = function(message, className){
//create div
const div = document.createElement('div');

//add classes
div.className = `alert ${className}`;
//add text
div.appendChild(document.createTextNode(message));
//get parent
const container = document.querySelector('.container');
const form = document.querySelector('#book-form');

container.insertBefore(div,form);

//set timeout
setTimeout(function(){
    document.querySelector('.alert').remove();
},3000);

}

//delete book
//  UI.prototype.deleteBook(target){
//    if(target.className === 'delete'){    
//           target.parentElement.parentElement.remove();
//    }
//  }


//clear fields
UI.prototype.clearFields = function(){

}

//event listeners for add book
document.getElementById('book-form').addEventListener('submit', 
function(e){
    //get form values
const title = document.getElementById('title').value,
       author = document.getElementById('author').value,
       isbn = document.getElementById('isbn').value

 //instantiate book
const book = new Book(title, author, isbn);

//instantiate ui
const ui = new UI()

//validate
if(title === "" || author === '' || isbn === ""){
//error alert
ui.showAlert('Please fill in all fields','error')
}else{
//ADDbOOK
ui.addBookList(book);
//show success
ui.showAlert('Book added!', 'success')

//clear fields
ui.clearFields()
}


e.preventDefault();
})


//event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    e.preventDefault();
})
