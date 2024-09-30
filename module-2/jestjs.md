Natürlich! Hier ist eine einfache Anleitung, wie du in einer **Vite React App** einen **Counter** erstellen und diesen mithilfe von **Jest** testen kannst. Wir gehen Schritt für Schritt vor:

### 1. Erstellen einer neuen Vite React App

Führe im Terminal folgenden Befehl aus, um eine neue Vite-React-App zu erstellen:

```bash
npm create vite@latest my-react-counter-app -- --template react
```

Wechsle dann in das neu erstellte Verzeichnis:

```bash
cd my-react-counter-app
```

Installiere die notwendigen Abhängigkeiten:

```bash
npm install
```

### 2. Installieren von Jest und React Testing Library

Da Vite kein integriertes Jest-Setup hat, müssen wir Jest und die React Testing Library installieren. Führe dazu die folgenden Befehle aus:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest
```

Außerdem müssen wir Babel konfigurieren, da Jest Babel benötigt, um den Code zu kompilieren.

### 3. Babel konfigurieren

Erstelle eine Datei namens `babel.config.js` im Hauptverzeichnis deiner App und füge diesen Inhalt hinzu:

```javascript
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
```

### 4. Jest konfigurieren

Erstelle eine Datei namens `jest.config.js` im Hauptverzeichnis deiner App:

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
```

### 5. Erstellen des Counter-Komponenten

Erstelle nun die `Counter.jsx`-Komponente im Verzeichnis `src/components/Counter.jsx`:

```jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

### 6. Einbinden der Komponente in `App.jsx`

In der `src/App.jsx` binde die Counter-Komponente ein:

```jsx
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```

### 7. Schreiben eines Tests für den Counter

Erstelle eine Testdatei im Verzeichnis `src/components/Counter.test.jsx` und füge diesen Inhalt hinzu:

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('should render initial count of 0', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('should increment the counter on "Increment" button click', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Increment/i);
    fireEvent.click(buttonElement);
    const counterElement = screen.getByText(/Counter: 1/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('should decrement the counter on "Decrement" button click', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Decrement/i);
    fireEvent.click(buttonElement);
    const counterElement = screen.getByText(/Counter: -1/i);
    expect(counterElement).toBeInTheDocument();
  });
});
```

### 8. Testen der Anwendung

In deiner `package.json` kannst du ein Jest-Test-Skript hinzufügen:

```json
"scripts": {
  "test": "jest"
}
```

Nun kannst du die Tests mit folgendem Befehl ausführen:

```bash
npm run test
```

### Zusammenfassung

- Wir haben eine einfache Vite-React-App mit einer Counter-Komponente erstellt.
- Wir haben Jest und React Testing Library installiert und konfiguriert.
- Wir haben Tests geschrieben, die die Funktionalität der Counter-Komponente (Initialwert, Inkrement und Dekrement) überprüfen.

Das ist eine einfache, aber effektive Einführung in das Testen von React-Komponenten mit Jest.
