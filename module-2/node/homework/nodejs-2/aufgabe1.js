import fs from "fs"

try{
    //console.log(process.argv)
    const path = process.argv[2]
    const data = fs.readFileSync(path, "utf-8")
    console.log(data)
} catch(err){
    console.log("There was an error reading the file")
}