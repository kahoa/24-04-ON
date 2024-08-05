// ordner erstellen
// npm init -y
// npm install express
// node --watch index.js 
// und dann die logik im handleLogin schreiben

// das gleich wie import statement in Python
const express = require("express")

const app = express()

const path = require("path")

// 👇 das ist ein middleware um json requests auszulesen
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//app.use(express.static(path.join(__dirname, 'public')));


function getEndpoint(request, response) {
    // 👇 damit schicken wir die HTML seite die sich in public befindet
    //return response.sendFile(path.join(__dirname, 'public', 'index.html'))

    // 👇 damit schicken wir eine einfache JSON response
    return response.json({message: "Hello World"})

    // 👇 damit schicken wir eine einfache Text response
    //return response.send("Hello World")
    /*
    return {
        statusCode: 200,
        header: {},
        body: JSON.stringify({message: "Hello World"})
    }
        */
}

app.get("/", getEndpoint)

function postEndpoint(request, response) {
    const url = request.url
    const method = request.method
    const headers = request.headers
    const body = request.body

    console.log("das ist mein body, also meine eigentliche nachricht", body)
    console.log("hey server, sobald ich einen POST request bekomme, sollest du diese nachricht in der datenbank speichern")

    // so muss ein request signiniert werden, da müssen diese 4 parameter drin sein
    // im protocol
    console.log({
        url: url,
        method: method,
        headers: headers,
        body: body
    })
    return response.json({ message: "Success! You made a POST request" })
}

app.post("/", postEndpoint)

// 👇 das wird als callback bezeichnet
function handleLogin(request, response) {
    // hier die logik für den login aufbauen
    // man soll sich nur dann einloggen können, wenn man folgendes eingibt:
    // username: gast
    // password: gast
}

app.post("/login", handleLogin)


function hello() {
    console.log("Server is running on http://localhost:3000")
}

app.listen(3000, hello)
