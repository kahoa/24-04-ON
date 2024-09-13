import './App.css';
import React, { useState } from 'react';
import TodoItem from './TodoItem';

function App() {

  // State variablen:
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  // Der filter kann 3 zustände haben: 'all', 'completed', 'uncompleted'
  const [filter, setFilter] = useState('all')

  // Todos hinzufügen:
  const addTodo = () => {
    if (!inputValue == ''){
      const newTodo = {
        id: Date.now(), // Einzigartige id
        text: inputValue,
        completed: false
      }
      setTodos([...todos, newTodo]) // Hänge an bestehende todo Liste das neue Todo item
      setInputValue('')
    }
  }

  // Setze Todos auf "erledigt"
  const toggleCompleted = (id) => {
    setTodos(
      todos.map(todo => {
        // if then else, aber in kurzform: "if ? then : else"
       return (todo.id === id ? {...todo, completed: !todo.completed} : todo)
      })
    )
  }

  // todos löschen
  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  // Erstelle eine variante von todos, die nur die gefilterte liste darstellt:
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed
    if (filter === 'uncompleted') return !todo.completed
    return true
  })

  return (
    <div className="App">
      <h1>Todo Liste</h1>


      {/* Filter Buttons: */}
      <div>
        <button onClick={() => setFilter('all')}>Alle</button>
        <button onClick={() => setFilter('completed')}>Erledigt</button>
        <button onClick={() => setFilter('uncompleted')}>Unerledigt</button>
      </div>

      {/*Input und Button: */}
      <input 
        type="text"
        placeholder="Neue Aufgabe hinzufügen"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Hinzufügen</button>

      {/*Darstellung der Todo Liste: */}
      <ul>
        {filteredTodos.map(todo => {
          return (<TodoItem 
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}/>)
        })}
      </ul>

    </div>
  );
}

export default App;
