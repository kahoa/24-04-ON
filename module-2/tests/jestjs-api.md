### Aufgabe: API-Aufruf in React testen

#### 1. React-Komponente erstellen
Erstelle eine React-Komponente `UserList`, die eine Liste von Benutzern von einer fiktiven API abruft und anzeigt. Verwende `useEffect` und `useState`, um den API-Aufruf durchzuführen.

Hier ist ein Beispielcode für die Komponente:

```jsx
// UserList.js
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
```

Diese Komponente ruft die Benutzerliste von der API `https://jsonplaceholder.typicode.com/users` ab, zeigt sie an und behandelt Lade- und Fehlerzustände.

#### 2. Jest-Tests für die API schreiben
Nun schreiben wir Unit-Tests mit Jest und React Testing Library. Hierbei mocken wir den API-Aufruf, damit wir keinen echten Netzwerkanruf machen müssen.

Installiere zunächst die benötigten Pakete, falls sie noch nicht installiert sind:

```bash
npm install @testing-library/react @testing-library/jest-dom jest-fetch-mock
```

Erstelle nun die Testdatei `UserList.test.js` und füge den folgenden Testcode hinzu:

```jsx
// UserList.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserList from './UserList';

// Mock the fetch function globally
beforeEach(() => {
  jest.resetAllMocks();
});

describe('UserList Component', () => {
  test('displays loading initially', () => {
    render(<UserList />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test('displays user data after fetch', async () => {
    // Mock successful API response
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      })
    );

    render(<UserList />);

    // Wait for users to be displayed
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  test('displays error message on fetch failure', async () => {
    // Mock failed API response
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    render(<UserList />);

    // Wait for error message to be displayed
    await waitFor(() => {
      expect(screen.getByText(/Error/i)).toBeInTheDocument();
    });
  });
});
```

#### 3. Erklärung des Testcodes

- **Initialer Ladezustand testen**: Der erste Test überprüft, ob der Ladezustand (`Loading...`) angezeigt wird, wenn die Komponente zum ersten Mal gerendert wird.
  
- **Erfolgreicher API-Aufruf**: Der zweite Test mockt eine erfolgreiche API-Antwort und überprüft, ob die Benutzernamen nach dem erfolgreichen Abrufen der Daten angezeigt werden.
  
- **Fehlgeschlagener API-Aufruf**: Der dritte Test simuliert ein Fehlerereignis während des API-Aufrufs und überprüft, ob die Fehlermeldung angezeigt wird.

#### 4. Tests ausführen

Führe die Tests mit folgendem Befehl aus:

```bash
npm test
```

Das sollte alle Tests erfolgreich ausführen.

### Zusammenfassung
In dieser Aufgabe haben wir eine einfache React-Komponente erstellt, die Daten von einer API abruft, und haben Unit-Tests mit Jest und React Testing Library geschrieben, um verschiedene Szenarien (Laden, Erfolg, Fehler) zu testen.
