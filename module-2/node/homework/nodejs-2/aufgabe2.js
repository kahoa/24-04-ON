import fs from "fs"

const content = "Diese zeile entstand um " + new Date() + "\n"

// Asynchrone Variante:

fs.appendFile("note.txt", content, () => {
    console.log("neue Zeile geschrieben: ")
    console.log(content)
})


// Synchrone Variante
/*
try {
    fs.appendFileSync("note.txt", content, "utf-8")
    console.log("neue Zeile geschrieben: ")
    console.log(content)
} catch(err) {
    console.log("Es gab einen Fehler beim appenden")
}
    */