import fs from "fs"

// Eine Datei kann entweder synchron oder mit einer von 2 asynchronen optionen eingelesen werden:

//Synchron:
/**
try{
    const data = fs.readFileSync('beispiel.txt', 'utf-8')
    console.log(data)
} catch (error){
    console.log("ERROR!!!")
}
*/

// Asynchron mit Callback:

fs.readFile('beispiel.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("There was an error")
        return
    }
    console.log(data)
})




/*
// Asynchron mit Promise (async / await)
// Um das zu nutzen: 
// import { promises as fs } from 'fs'
async function readFile(){
    try {
        const data = await fs.readFile('beispiel.txt', 'utf-8')
        console.log(data)
    } catch (err){
        console.log(err)
    }
}

readFile()
*/