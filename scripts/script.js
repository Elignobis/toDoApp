

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



// Sort list

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









