[Setup: JestJS with React](https://github.com/TechstarterGmbH/24-04-ON/blob/main/module-2/tests/jestjs-counter.md)

### 1. Erstellen der Todo-Komponente

Erstelle zunächst die Komponente `TodoApp.jsx`, die es ermöglicht, Todo-Aufgaben hinzuzufügen und zu löschen.

#### `src/components/TodoApp.jsx`

```jsx
import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input 
        type="text" 
        placeholder="Add a new task" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### 2. Einbinden der `TodoApp`-Komponente in `App.jsx`

In der `src/App.jsx` Datei binde die `TodoApp`-Komponente ein:

```jsx
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
```

### 3. Schreiben eines Tests für die Todo-App

Erstelle eine Testdatei `src/components/TodoApp.test.jsx` und füge diesen Inhalt hinzu. Wir werden hier testen, ob:
- Ein neues Todo erfolgreich hinzugefügt wird.
- Ein Todo erfolgreich gelöscht werden kann.

#### `src/components/TodoApp.test.jsx`

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

describe('TodoApp Component', () => {
  test('should allow users to add a new todo', () => {
    render(<TodoApp />);
    
    // Simuliere das Eingeben einer Aufgabe
    const inputElement = screen.getByPlaceholderText(/Add a new task/i);
    fireEvent.change(inputElement, { target: { value: 'Learn Jest' } });
    
    // Simuliere den Klick auf "Add Todo"-Button
    const addButtonElement = screen.getByText(/Add Todo/i);
    fireEvent.click(addButtonElement);
    
    // Überprüfen, ob das neue Todo auf dem Bildschirm erscheint
    const todoElement = screen.getByText(/Learn Jest/i);
    expect(todoElement).toBeInTheDocument();
  });

  test('should allow users to delete a todo', () => {
    render(<TodoApp />);
    
    // Füge eine Aufgabe hinzu
    const inputElement = screen.getByPlaceholderText(/Add a new task/i);
    fireEvent.change(inputElement, { target: { value: 'Learn Testing' } });
    const addButtonElement = screen.getByText(/Add Todo/i);
    fireEvent.click(addButtonElement);
    
    // Überprüfen, ob das Todo auf dem Bildschirm erscheint
    const todoElement = screen.getByText(/Learn Testing/i);
    expect(todoElement).toBeInTheDocument();

    // Simuliere das Löschen des Todos
    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);
    
    // Überprüfen, ob das Todo gelöscht wurde
    expect(todoElement).not.toBeInTheDocument();
  });
});
```

### 4. Erklären der Testlogik

#### **1. Test: Hinzufügen einer neuen Aufgabe**

```javascript
test('should allow users to add a new todo', () => {
  render(<TodoApp />);
  
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  fireEvent.change(inputElement, { target: { value: 'Learn Jest' } });
  
  const addButtonElement = screen.getByText(/Add Todo/i);
  fireEvent.click(addButtonElement);
  
  const todoElement = screen.getByText(/Learn Jest/i);
  expect(todoElement).toBeInTheDocument();
});
```

- **render(<TodoApp />)**: Die `TodoApp` wird in der Testumgebung gerendert.
- **`getByPlaceholderText(/Add a new task/i)`**: Wir suchen nach dem Input-Feld, das den Platzhalter „Add a new task“ hat.
- **`fireEvent.change(inputElement, { target: { value: 'Learn Jest' } })`**: Simuliert das Tippen in das Input-Feld und setzt den Wert auf „Learn Jest“.
- **`fireEvent.click(addButtonElement)`**: Simuliert den Klick auf den Button „Add Todo“, um das neue Todo hinzuzufügen.
- **`getByText(/Learn Jest/i)`**: Überprüft, ob das neue Todo „Learn Jest“ in der Liste der Todos angezeigt wird.
- **`expect(todoElement).toBeInTheDocument()`**: Bestätigt, dass das neue Todo im DOM vorhanden ist.

#### **2. Test: Löschen einer Aufgabe**

```javascript
test('should allow users to delete a todo', () => {
  render(<TodoApp />);
  
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  fireEvent.change(inputElement, { target: { value: 'Learn Testing' } });
  const addButtonElement = screen.getByText(/Add Todo/i);
  fireEvent.click(addButtonElement);
  
  const todoElement = screen.getByText(/Learn Testing/i);
  expect(todoElement).toBeInTheDocument();
  
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);
  
  expect(todoElement).not.toBeInTheDocument();
});
```

- **render(<TodoApp />)**: Wiederum rendern wir die `TodoApp`.
- **`fireEvent.change()`** und **`fireEvent.click()`**: Simuliert das Hinzufügen eines Todos mit dem Text „Learn Testing“.
- **`getByText(/Learn Testing/i)`**: Sucht das Todo mit dem Text „Learn Testing“.
- **`fireEvent.click(deleteButton)`**: Simuliert den Klick auf den "Delete"-Button neben dem Todo.
- **`expect(todoElement).not.toBeInTheDocument()`**: Überprüft, dass das Todo nach dem Klick auf den "Delete"-Button nicht mehr im DOM existiert.

### 5. Ausführen der Tests

In deiner `package.json` kannst du das Test-Skript hinzufügen, falls du es noch nicht getan hast:

```json
"scripts": {
  "test": "jest"
}
```

Dann kannst du die Tests ausführen mit:

```bash
npm run test
```

### Aufgabe für den Schüler:

Erstelle eine **Todo-App** mit den oben genannten Funktionen und schreibe die folgenden Tests:
- Teste, ob ein Todo erfolgreich zur Liste hinzugefügt wird.
- Teste, ob ein Todo aus der Liste entfernt werden kann.

Die Aufgabe soll helfen, grundlegende Interaktionen wie das Hinzufügen und Entfernen von Elementen in einer React-Komponente zu testen.
