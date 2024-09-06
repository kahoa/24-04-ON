import express from "express"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"

const app = express()
const port = 3000

var data = ["Lukas", "Marcus", "Marius", "Ares"]


// ------------- Swagger einrichten ----------------
// Swagger definition der optionen:
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Express Einführung',
        version: '1.0.0',
        description: 'A simple Express API documentation',
      },
    },
    apis: ['./routes/*.js'], // Path to the API docs
  };

  const openapiSpecification = swaggerJSDoc(swaggerOptions);

  // UI visualisierung: 
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification))
// --------------------------------------------------

// Middleware wird bei jedem Request ausgelöst
app.use(express.text())

app.use((req, res, next) => {
    console.log(` ${req.method} Request ist eingegangen: `, new Date())
    next()
})

// Wir können verschiedene Methoden bearbeiten:

app.get("/", (req, res) => {
    res.send("Herzlich Willkommen!\n")
})

app.post("/", (req, res) => {
    data.push(req.body)
    res.send("Post request \n")
})

app.put("/", (req, res) => {
    res.send("Das ist eine put request\n")
})

app.delete("/", (req, res) => {
    data = []
    res.send("Das war ein delete\n")
})

// Wir können verschiedene Routen benutzen:
app.get("/users", (req, res) => {
    var htmlresponse = ""
    for (const user of data) {
        htmlresponse += `<h2>${user}</h2>`
    }
    res.send(htmlresponse)
})

// Routen können parameter beinhalten:
app.get("/users/:idx", (req, res) => {
    var idx = parseInt(req.params.idx)
    var user = data[idx]

    if (user == undefined){
        res.send(`<h1>User nicht gefunden</h1>`)
    } else {
        res.send(`<h1>${user}</h1>`)
    }
})

app.listen(port, () => {
    console.log("Server is listening on port", port)
})