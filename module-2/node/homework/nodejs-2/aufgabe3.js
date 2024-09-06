import {promises as fs} from "fs"

const from = "./oldfile.txt"
const to = "./archive/newfile.txt"

async function rename(){
    try {
        await fs.rename(from, to)
        console.log("Datei wurde verschoben")
    } catch (err) {
        console.error("Es ist ein Fehler aufgetreten", err)
    }
}

rename()