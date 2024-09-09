import fs from "fs"

const filepath = "todos.json"

export function writeTodos(todoList){
    fs.writeFileSync(filepath, JSON.stringify(todoList))
}

export function readTodos(){
    if (!fs.existsSync(filepath)){
        fs.writeFileSync(filepath, JSON.stringify([]))
    }
    const data = fs.readFileSync(filepath)
    return JSON.parse(data)
}