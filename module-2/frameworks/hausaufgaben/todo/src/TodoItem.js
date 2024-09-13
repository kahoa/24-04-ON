import React from 'react'

function TodoItem({key, todo, toggleCompleted, deleteTodo}){
    return(
        <li style={{
            listStyleType: 'none', 
            textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
            {/* Das todo element enthält einen text, eine checkbox und einen löschbutton
            Die letzteren beiden haben als onClick attribut die an die komponente übergebenen Funktionen
            toggleCompleted und deleteTodo als Aufruf mit der entsprechenden id */}
            <span>{todo.text}</span>
            <input type='checkbox' onClick={() => toggleCompleted(todo.id)}/>
            <button onClick={() => deleteTodo(todo.id)}>Löschen</button>
        </li>
    )
}

export default TodoItem