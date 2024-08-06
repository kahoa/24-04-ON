/*
Aufgabe 1: "Das verrückte Schokoladenrezept"
Erstelle eine Express-Anwendung, die einen Endpunkt /schokolade bereitstellt. Wenn jemand diesen Endpunkt aufruft, soll die Antwort eine zufällige Schokoladenrezeptidee sein, die aus einer Liste von verrückten Rezepten ausgewählt wird. Zum Beispiel:

"Schokoladenkekse mit Erdnussbutter und Zuckerguss"
"Schokoladenpudding mit einem Geheimnis"
"Schokoladenfondue mit Zuckerwatte"

*/

// 1. Erstelle Express server mit .listen()
// 2. Erstelle ein endpoint /schokolade
// 3. Erstelle eine Liste mit Schokoladenrezeptideen
// 4. Beim Aufruf von /schokolade sende eine zufällige Idee aus der Liste s. Punkt 3 (alternativ könnt ihr einfach das erste Element aus dem Array zurückgeben, falls man random nicht machen kann/weiss)

// Bonus 💰💰:
// mit einem get request an /schokolade/1 oder /schokolade/2 oder schokolade/3 sollte man ein Item aus dem Schokoladenrezeptideen array

const express = require("express");
const app = express();
const port = 3000;
const schokolade = [
  {
    name: "Schokoladenkekse",
    rezept:
      "Zutaten: Mehl, Zucker, Kakaopulver, Butter, Eier. Zubereitung: Alles vermengen und backen.",
  },
  {
    name: "Schokoladenkuchen",
    rezept:
      "Zutaten: Mehl, Zucker, Kakaopulver, Butter, Eier, Backpulver. Zubereitung: Alle Zutaten mischen und backen.",
  },
  {
    name: "Schokoladenfondue",
    rezept:
      "Zutaten: Schokolade, Sahne. Zubereitung: Schokolade schmelzen, Sahne hinzufügen und gut vermengen.",
  },
  {
    name: "Schokoladenmousse",
    rezept:
      "Zutaten: Schokolade, Sahne, Eier. Zubereitung: Schokolade schmelzen, mit geschlagener Sahne und Eiern vermengen.",
  },
];
app.get("/schokolade", (req, res) => {
  const randomIndex = Math.floor(Math.random() * schokolade.length);
  res.send(schokolade[randomIndex]);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});


