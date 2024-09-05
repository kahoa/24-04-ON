import fs from "fs"

const content = 'Dies ist ein Beispieltext.';

try {
    fs.writeFileSync('beispiel.txt', content, 'utf8');
    console.log('Datei wurde erfolgreich geschrieben!');
} catch (err) {
    console.error('Es gab einen Fehler beim Schreiben in die Datei!', err);
}