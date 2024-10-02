### 0. Erstellen einer neuen Vite React App

Führe im Terminal folgenden Befehl aus, um eine neue Vite-React-App zu erstellen:

```bash
git clone https://github.com/tarasowski/jest-react-app
```

Wechsle dann in das neu erstellte Verzeichnis:

```bash
cd jest-react-app
```

Installiere die notwendigen Abhängigkeiten:

```bash
npm install
```


### 1. Erstellen der Login-Komponente

Zuerst erstellen wir eine einfache Login-Komponente, die die Eingaben validiert und anzeigt, ob die Anmeldeinformationen korrekt sind.

#### `src/components/Login.jsx`

```jsx
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials');
      setLoggedIn(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {loggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
    </div>
  );
}
```

### 2. Einbinden der `Login`-Komponente in `App.jsx`

In der `src/App.jsx` Datei binde die `Login`-Komponente ein:

```jsx
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
```

### 3. Testen der Login-Komponente

Schreibe eine Testdatei, um sicherzustellen, dass die Validierung funktioniert und dass der Login-Prozess korrekt ist. Wir werden Folgendes testen:
- Teste, ob bei falschen Anmeldeinformationen eine Fehlermeldung angezeigt wird.
- Teste, ob bei korrekten Anmeldeinformationen die Begrüßung angezeigt wird.

#### `src/components/Login.test.jsx`

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('shows error message with invalid credentials', () => {
    render(<Login />);

    // Simuliere das Eingeben falscher Anmeldeinformationen
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    fireEvent.change(usernameInput, { target: { value: 'wrongUser' } });

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: 'wrongPass' } });

    // Klicke auf den "Login"-Button
    const loginButton = screen.getByText(/Login/i);
    fireEvent.click(loginButton);

    // Überprüfen, ob die Fehlermeldung angezeigt wird
    const errorMessage = screen.getByText(/Invalid credentials/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('logs in successfully with correct credentials', () => {
    render(<Login />);

    // Simuliere das Eingeben der korrekten Anmeldeinformationen
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    fireEvent.change(usernameInput, { target: { value: 'admin' } });

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Klicke auf den "Login"-Button
    const loginButton = screen.getByText(/Login/i);
    fireEvent.click(loginButton);

    // Überprüfen, ob der Begrüßungstext angezeigt wird
    const welcomeMessage = screen.getByText(/Welcome, admin!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
```

### 4. Erklären der Testlogik

#### **1. Test: Fehlermeldung bei ungültigen Anmeldeinformationen**

```javascript
test('shows error message with invalid credentials', () => {
  render(<Login />);

  const usernameInput = screen.getByPlaceholderText(/Username/i);
  fireEvent.change(usernameInput, { target: { value: 'wrongUser' } });

  const passwordInput = screen.getByPlaceholderText(/Password/i);
  fireEvent.change(passwordInput, { target: { value: 'wrongPass' } });

  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton);

  const errorMessage = screen.getByText(/Invalid credentials/i);
  expect(errorMessage).toBeInTheDocument();
});
```

- **render(<Login />)**: Die `Login`-Komponente wird in der Testumgebung gerendert.
- **`fireEvent.change()`**: Wir simulieren die Eingabe falscher Anmeldeinformationen.
- **`fireEvent.click()`**: Simuliert den Klick auf den "Login"-Button.
- **`expect(errorMessage).toBeInTheDocument()`**: Überprüft, ob die Fehlermeldung „Invalid credentials“ im DOM angezeigt wird.

#### **2. Test: Erfolgreicher Login bei korrekten Anmeldeinformationen**

```javascript
test('logs in successfully with correct credentials', () => {
  render(<Login />);

  const usernameInput = screen.getByPlaceholderText(/Username/i);
  fireEvent.change(usernameInput, { target: { value: 'admin' } });

  const passwordInput = screen.getByPlaceholderText(/Password/i);
  fireEvent.change(passwordInput, { target: { value: 'password' } });

  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton);

  const welcomeMessage = screen.getByText(/Welcome, admin!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
```

- **render(<Login />)**: Die `Login`-Komponente wird wieder gerendert.
- **`fireEvent.change()`**: Wir simulieren die Eingabe der korrekten Anmeldeinformationen „admin“ und „password“.
- **`fireEvent.click()`**: Simuliert den Klick auf den "Login"-Button.
- **`expect(welcomeMessage).toBeInTheDocument()`**: Überprüft, ob die Begrüßung „Welcome, admin!“ im DOM angezeigt wird.

### 5. Aufgabe für den Schüler

- **Aufgabe 1:** Implementiere die oben beschriebene Login-Komponente.
- **Aufgabe 2:** Schreibe Tests für die folgenden Szenarien:
  - Teste, dass die Fehlermeldung „Invalid credentials“ erscheint, wenn ungültige Anmeldeinformationen eingegeben werden.
  - Teste, dass die Begrüßung „Welcome, admin!“ angezeigt wird, wenn die richtigen Anmeldeinformationen („admin“ und „password“) eingegeben werden.

### Ziel der Aufgabe

Durch diese Aufgabe lernen die Schüler, wie sie grundlegende Benutzerinteraktionen wie Formulareingaben und Ereignisbehandlungen testen können. Sie üben das Testen von Validierungslogik und Zustandsänderungen in React-Komponenten.
