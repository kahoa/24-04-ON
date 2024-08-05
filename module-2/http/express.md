### 1. **Was ist Express?**
Express ist ein minimalistisches Web-Framework für Node.js, das es einfach macht, Webanwendungen und APIs zu erstellen. Es bietet eine flexible und leistungsfähige Möglichkeit, HTTP-Anfragen zu verarbeiten.

### 2. **API-Server**
Ein API-Server ist für die Verarbeitung von Anfragen, die Daten im JSON-Format erwarten und zurückliefern. Express ermöglicht es dir, Routen zu definieren, die Anfragen an bestimmte Endpunkte (URLs) verarbeiten. Diese Endpunkte können dann JSON-Daten zurückgeben.

**Beispiel:**

```javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  // Beispielhafte Daten
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  res.json(users); // Sendet JSON-Daten zurück
});

app.listen(3000, () => console.log('API Server läuft auf Port 3000'));
```

In diesem Beispiel gibt der Server eine Liste von Benutzern im JSON-Format zurück, wenn auf `/api/users` zugegriffen wird.

### 3. **Webserver**
Ein Webserver liefert statische Dateien wie HTML, CSS und JavaScript. Express kann auch so konfiguriert werden, dass es diese Dateien bereitstellt. Außerdem kann es HTML-Seiten dynamisch rendern, oft mithilfe von Templating-Engines wie EJS, Pug oder Handlebars.

**Beispiel:**

```javascript
const path = require('path');
const express = require('express');
const app = express();

// Statische Dateien (z.B. HTML, CSS, JS) bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Sendet die HTML-Datei zurück
});

app.listen(3000, () => console.log('Webserver läuft auf Port 3000'));
```

In diesem Beispiel liefert der Server die statische HTML-Datei `index.html` aus dem Verzeichnis `public` zurück und stellt alle Dateien aus diesem Verzeichnis bereit (z.B. CSS- und JavaScript-Dateien).

### 4. **Kombination von API- und Webserver**
Express kann gleichzeitig als API-Server und als Webserver arbeiten. Das bedeutet, dass derselbe Server sowohl API-Anfragen bearbeiten als auch HTML-Seiten und andere statische Dateien ausliefern kann. Hier ein Beispiel:

```javascript
const path = require('path');
const express = require('express');
const app = express();

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

// API-Endpunkt
app.get('/api/users', (req, res) => {
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  res.json(users);
});

// HTML-Seite bereitstellen
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server läuft auf Port 3000'));
```

Hier wird die HTML-Datei für die Root-Route (`/`) zurückgegeben, und gleichzeitig verarbeitet der Server API-Anfragen unter `/api/users`.

### Zusammenfassung
Ein Express-Server kann beide Rollen übernehmen: Er kann als API-Server JSON-Daten bereitstellen und gleichzeitig als Webserver HTML-Dateien und andere statische Ressourcen ausliefern. Dies macht ihn zu einem vielseitigen Werkzeug für die Entwicklung von Webanwendungen.
