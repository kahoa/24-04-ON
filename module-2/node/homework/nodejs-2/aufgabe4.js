import fs from "fs"

async function remove(){
    try {
        await fs.promises.unlink("obsolete.txt")
        console.log("Datei wurde gelöscht!")
    }catch(err) {
        console.error("Datei konnte nicht gelöscht werden", err)
    }
}

remove()