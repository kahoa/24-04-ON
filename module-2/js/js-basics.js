// primitive data types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null <--- können wir rauslassen
// 6. Symbol <--- können wir rauslassen
// 7. BigInt <--- können wir rauslassen

// complex data types
// 8. Object
// 9. Array
// 10. Function
// 11. Date <--- können wir rauslassen
// 12. RegExp <--- können wir rauslassen
// 13. Error <--- können wir rauslassen
// 14. Map <--- können wir rauslassen
// 15. Set <--- können wir rauslassen
// 16. WeakMap <-- können wir rauslassen


// wofür brauchen wir primitive data types?
// - um Daten zu speichern
// - um Daten zu vergleichen
// - um Daten zu manipulieren

"Dimi" // << das hier ist ein string 
let firstName = "Dimi"
let lastName = "Tarasowski"
// in der app habe ich ein button, der auf click reagiert
// sobald es geklickt wird, soll der name von Dimi auf "DIMI" geändert werden
console.log(firstName.toUpperCase()) // << unser compuer wird erstmal firstName aus der variable holen und dann die methode toUpperCase() aufrufen
console.log("Dimi".toUpperCase()) // << hier wird der string direkt genutzt
console.log("Dimi" + "Tarasowski") // << hier wird die länge des strings ermittelt
console.log(firstName + lastName) // << hier wird zuerst die variable firstName und lastName geholt und dann concateniert

let age = 40 // << das wird in der variable age gespeichert, im speicher wird ein platz für die zahl 40 reserviert
age = 30 // << hier wird der wert in der variable age überschrieben
age = 20 // << hier wird der wert in der variable age überschrieben

userName = "Dimi" // << hier wird eine neue variable erstellt

console.log(userName)

// object

let username = "dimi"
let password = "1234"
let email = "dimitri@tarasowski.de"
let city = "Stuttgart"

let username2 = "ilona"
let password2 = "1234"
// ...

let username3 = "Alexander"
let password3 = "1234"
// ...
// ...
// ...
let username1000 = "Max"
let password100 = "1234"

let user = {
    username: "dimi",
    password: "1234",
    email: "dimitri@tarasowski.de",
    city: "Stuttgart"
} // ein user besteht aus mehreren daten, das ist ein object

console.log(user.username) // hier wird der username aus dem object geholt
console.log(user.password) // hier wird das password aus dem object geholt

let user2 = {
    username: "ilona",
    password: "4321",
    email: "ilona@techstarteer.de",
    city: "Berlin"
    //...
}

console.log(user2.username) // hier wird der username aus dem object geholt
console.log(user2.password === "4321") // hier wird das password aus dem object geholt

// ...
// ...

let user100 = {
    ///...
}

let users = [] // << damit haven wir ein container für alle user mit dem typ array

users.push(/* ---> alles was hier reinkomt wird in das array gepusht */ {
    username: "dimi",
    password: "1234",
    email: "dimitri@tarasowski.de",
    city: "Stuttgart"
}) // << hier wird der user in das array gepusht

users.push({
    username: "ilona",
    password: "4321",
    email: "ilona@techstarter.de",
    city: "Berlin"
})

console.log(users[0]) // << hier wird der username des ersten users aus dem array geholt


// damit wird eine funktion erstellt oder deklariert
function hello(wert) {
    return wert
}

// das ist ein function call
// das ist ein funktionsaufruf
let thisIstheValueFromTheFunction = hello("Ich heisse Dimi")

console.log(thisIstheValueFromTheFunction)

// x is the parameter
// function definition / declaration
function id(x) {
    return x
}

// 10 is the argument
// function call
id(10)
id(10)
id(10)
id(10)
id(10)
id(10)
id(10)
id(10)

function greet(firstName, lastName) {
    return "Hallo" + " " + firstName + " " + lastName
}

let greeting = greet("Dimi", "Tarasowski")
let greet2 = greet("Ilona", "Görgens")
let greet3 = greet("Alexander", "Kutzer")


console.log("before the function")

function test() {
    console.log("inside the function")
}

console.log("after the function")

test()
test()
test()
test()
test()
test()
test()


console.log(greeting)
console.log(greet2)
console.log(greet3)
