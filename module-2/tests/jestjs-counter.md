### 1. Erstellen einer neuen Vite React App

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
    // Funktion: render kommt von der React Testing Library und wird verwendet, um eine React-Komponente in einer simulierten DOM-Umgebung (die vom Browser unabhängig ist) zu rendern.
    // Bedeutung: In diesem Fall wird die Counter-Komponente in der Testumgebung "gerendert". Dies bedeutet, dass die Komponente mit allen UI-Elementen (wie Buttons und Texten) auf dem virtuellen DOM dargestellt wird.
    render(<Counter />);

    // Funktion: Hier wird die Methode getByText der screen-API verwendet. screen ist eine globale API, die von der React Testing Library bereitgestellt wird und uns Zugriff auf den "gerenderten" virtuellen DOM gewährt.
    // Bedeutung: Wir suchen nach einem Text, der das Wort „Decrement“ enthält. Der reguläre Ausdruck /Decrement/i steht für eine Suche, die nicht auf Groß- oder Kleinschreibung achtet (deshalb das i am Ende des Ausdrucks). Das bedeutet, dass sowohl "Decrement" als auch "decrement" gefunden werden.
    const buttonElement = screen.getByText(/Decrement/i);

    // Funktion: fireEvent ist ein Utility von React Testing Library, das es uns ermöglicht, Ereignisse zu simulieren (wie Klicks, Tastendrücke usw.).
    // Bedeutung: Hier simulieren wir einen Klick auf das vorher gefundene Button-Element (buttonElement), das den Text „Decrement“ trägt.
    fireEvent.click(buttonElement);

    //Funktion: Wieder wird die Methode getByText verwendet, um nach einem Text auf dem Bildschirm zu suchen. In diesem Fall suchen wir nach dem Text „Counter: -1“, der dem Zähler entspricht, nachdem der Button „Decrement“ angeklickt wurde.
    // Bedeutung: Nachdem der Button gedrückt wurde und der Zähler um 1 reduziert wurde, sollte der neue Text auf dem Bildschirm „Counter: -1“ lauten. Dieser Text wird gesucht und das entsprechende Element (das den Text enthält) wird in der Variablen counterElement gespeichert.
    const counterElement = screen.getByText(/Counter: -1/i);

    // Funktion: Dies ist ein Assertion-Statement (Aussage) von Jest in Kombination mit der Jest-DOM Erweiterung.
    // Bedeutung: Wir stellen sicher, dass das Element, das den Text „Counter: -1“ enthält, tatsächlich im Dokument (dem simulierten DOM) vorhanden ist.
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
