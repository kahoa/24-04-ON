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
