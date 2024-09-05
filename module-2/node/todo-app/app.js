function addTodo(todo) {
    const ul = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = todo;
    ul.appendChild(li);
}

document.getElementById("addButton").addEventListener('click', () => {
    const todoInput = document.getElementById("todoInput")
    const todoText = todoInput.value

    if (todoText) {
        addTodo(todoText);
        todoInput.value = '';
    }
})

