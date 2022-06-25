

const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem('todos'));
// if statement to execute addTodo() for item being added
if(todos) {
    todos.forEach(todo => addTodo(todo))
}
//Prevent the default action of the form from being executed, but runs the addToDo function
form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => { //event listener for completed task
            todoEl.classList.toggle('completed')
            updateLS()
        }) 

        todoEl.addEventListener('contextmenu', (e) => { //to remove
            e.preventDefault()

            todoEl.remove()
            updateLS()
        }) 

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}
// To update the list and store to local storage
function updateLS() {
    todoEl = document.querySelectorAll('li')

    const todos = []

    todoEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}
// Add new item with button
function addItem(){
    var li = document.createElement("LI");  
    var input = document.getElementById("input");
    li.innerHTML = input.value;
    input.value = "";

    document.getElementById("faves").appendChild(li);
}

// Clear all items

const clearBtn = document.getElementById('cleanBtn');
clearBtn.addEventListener('click', ()=> {
    localStorage.clear();

    window.location.reload();
})


// Sort items


// const sortLS = document.getElementById('sortLS');
// todoEl.addEventListener("click", () => {
//     todos.sort((a, b) => {
//     let fa = a.item.toLowerCase(),
//         fb = b.item.toLowerCase();
//       if (fa < fb) {
//         return -1;
//       }
//       if (fa > fb) {
//         return 1;
//       }
//       return 0;
//     });
//     showData();
// });



function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("todos");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("LI");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        console.log(b[i].innerHTML);
      }
    }
  }




// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("");
  //declaration
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("");
  //declaration
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("theUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  //Delete btn
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};
function secondElement() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("theUL");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      console.log(b[i].innerHTML);
    }
  }
}

