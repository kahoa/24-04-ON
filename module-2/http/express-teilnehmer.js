// import express from "express"
const express = require("express")
const app = express()

app.use(express.json())

function handleRootGet(req, res) {
    return res.send("It works! 👋")
}

app.get("/", handleRootGet)


let kursTeilnehmer = [
    "Marius",
    "Ilona",
    "Timo",
    "Katharina"
]

function handleGetKursTeilnehmer(req, res) {
    return res.json({ kursTeilnehmer })
}

app.get("/kursteilnehmer", handleGetKursTeilnehmer)

function handlePostKursteilnehmer(req, res) {
    const body = req.body
    const name = body.name
    kursTeilnehmer.push(name)
    return res.send("Success 🎉")

}

app.post("/kursteilnehmer", handlePostKursteilnehmer)

function handleListen() {
    console.log("Server läuft")
}

app.listen(3000, handleListen)

/*
Zusammenfassung:

1. wir haben eine einfache express-app erstellt
2. haben eine ec2 maschine erstellt
2.1 mit userdata script 
#!/bin/bash
apt-get update
apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt-get install -y nodejs
3. danach haben wir uns auf die maschine eingeloggt
4. wir haben auf der maschine ein verzeichnis server erstellt
5. danach haben wir index.js auf die maschine kopiert mit scp in den server ordner
scp -i ~/.ssh/universal.pem ./index.js ubuntu@ec2-52-91-10-225.compute-1.amazonaws.com:/home/ubuntu/server
6. wir haben die app gestartet mit nohup befehl
nohup node index.js > output.log 2>&1 &
7. danach haben wir einen weiteren endpoint erstellt
8. wir haben eine get methode erstellt, die alle teilnehmer zurückgibt
9. wir haben eine post methode erstellt, die einen neuen teilnehmer hinzufügt
10. wir haben die index.js von local auf die ec2 maschine kopiert, mit scp siehe punkt 5
11. zuerst mussten wir rausfinden wie die <pid> der app ist, mit ps aux | grep 'node index.js'
12. wir mussten die app neu starten, mit kill -9 <pid> and nohup node index.js > output.log 2>&1 &
13. wir haben die app auf port 3000 gestartet 
14. that's it 🎉
*/
