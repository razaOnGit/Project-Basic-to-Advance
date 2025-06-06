const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-btn');
const totalCount = document.getElementById('total-count');
const completedCount = document.getElementById('completed-count');

// 1 -- initialize todos from localStorage or an empty array

let todos = JSON.parse(localStorage.getItem('todos')) || [];
// 2-- Function to render the todo list // intialize the app
function init(){
    renderTodos();
    updateStats();
     //3-- event listeners
    addButton.addEventListener('click', addTodo);
    newTodoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
}
// 1-- add todo function
function addTodo(){
    const text= newTodoInput.value.trim();
    if(text) {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        todos.push(newTodo);
        saveToLocalStorage();
        renderTodos();
        newTodoInput.value = '';
        newTodoInput.focus();
    }
}
 //2--- toggle todo completion status
 function toggleTodo(id) {
    todos= todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    saveToLocalStorage();
    renderTodos();
    updateStats();
}
//3-- delete todo function
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveToLocalStorage();
    renderTodos();
    updateStats();
}

// 3--- function to render todos
     function renderTodos(){
     if(todos.length===0){
     todoList.innerHTML= `<div class="empty-state">
        <i class="fas fa-clipboard-list"></i>
        <h3> No Task yet</h3>
        <p> Add your first task to get started </p>
     </div> `;
    return;

   }
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item' +(todo.completed ? ' completed' : '');
        todoItem.innerHTML = `
                    <span class="todo-text">${todo.text}</span>
                    <div class="actions">
                        <button class="complete-btn" onclick="toggleTodo(${todo.id})">
                            <i class="fas fa-${todo.completed ? 'undo' : 'check'}"></i>
                        </button>
                        <button class="delete-btn" onclick="deleteTodo(${todo.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div> `;
                
                todoList.appendChild(todoItem);
            });
        }
 // Update statistics
        function updateStats() {
            totalCount.textContent = todos.length;
            const completed = todos.filter(todo => todo.completed).length;
            completedCount.textContent = completed;
        }
        
        // Save todos to localStorage
        function saveToLocalStorage() {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        
        // Initialize the app when the page loads
        window.onload = init;
