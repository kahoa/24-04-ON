import express from "express"
import { readTodos, writeTodos } from "./appIO.js"


const app = express()
const port = 3000

// Serve statische dateien im Ordner public
app.use(express.static("public"))

// Interpretiere application/json bodies richtig:
app.use(express.json())


// Todos mittels readTodos() vom filesystem auslesen:
app.get("/todos", (req, res) => {
    const todos = readTodos()
    res.json(todos)
})

//Todos schreiben:
app.post("/todos", (req, res) => {
    //erst body und alte todoList auslesen:
    const text = req.body.todoText
    const todoList = readTodos()
    //Todolist erweitern, zurückschreiben und als response senden:
    todoList.push(text)
    writeTodos(todoList)
    res.json(todoList)
})

// Todos löschen:
app.delete("/todos", (req, res) => {
    writeTodos([])
    res.json([])
})


app.listen(port, () => {
    console.log("Server listening on port", port)
})