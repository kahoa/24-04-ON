const express = require("express")
const app = express()
const fs = require("fs")

function loggingMiddleware(request, response, next) {
    const method = request.method
    const url = request.url
    const userAgent = request.headers['user-agent']
    const timestamp = new Date()
    const logEntry = method + " " + url + " " + userAgent + " " + timestamp + "\n"
    fs.appendFileSync("./log.txt", logEntry)
    console.log("saved to my log file")
    next()
}
app.use(loggingMiddleware)

function handleGet(request, response) {
    // es muss etwas als Antwort geben, sonst timeout von 2m
    return response.send("Das war Marcus!")
}

/*
// das ist eine anonyme funktion ohne namen
(request, response) => {
    return response.send("Das war Marcus!")
}
 */

function handleHealth(request, response) {
    return response.send("Is healthy")
}

app.get("/", handleGet)
app.get("/health", handleHealth)

/*
app.get("/", (request, response) => {
    response.send("Das war Marcus!")
})
    */

function handlerListen() {
    console.log("Server is listening on port 3000")
}

// als erstes argument geben wir den port ein, auf dem der server laufen soll
// als zweitens argument geben wir eine funktion ein, die ausgeführt wird, wenn der server gestartet wird
app.listen(3000, handlerListen)


//app.get()
