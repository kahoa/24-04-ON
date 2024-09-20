const todos = ["eat", "sleep", "code"]

// mit destructuring können wir einzelne werte rausziehen und den variables hinzufügen die wir definiert haben
const [first, second, third] = todos

/*
const first = todos[0]
const second = todos[1]
const third = todos[2]
*/

//console.log(first, second, third)

//const names = ["Max", "Manuel", "Anna", "Walter", "Peter"]

const [firstName, secondName, ...rest] = ["Max", "Manuel", "Anna", "walter"]

//console.log(firstName, secondName, rest)

//const [count, setCount] = useState(0) // [value, function]
//const [count, setCount] = [value, function]
/*
const state = useState(10)
const count = state[0]
const setCount = state[1]
*/

function useState(initialValue) {
    let value = initialValue
    return [value, function (newValue) {
        value = newValue
    }]
}

const [count, setCount] = useState(0)


// spreading / spread operator

const numbers = [1, 2, 3, 4, 5]

const newNumbers = [...numbers, 6, 7]

const classNames = ["Marcus", "Marius", "Kaho"]

const newClassNames = [...classNames, "Christian", "Timo", "Dimitri"]
//classNames.push("Christian", "Timo", "Dimitri")


console.log(classNames)

const user = {
    username: "tarasowski",
    age: 40,
    isAdmin: true
}
// destructuring auf object
const { username, age, isAdmin } = user
console.log(username, age, isAdmin)

// Verwende Destructuring, um die ersten drei Früchte (Apfel, Banane, Orange) in separate Variablen fruit1, fruit2 und fruit3 zu extrahieren.
// Extrahiere den Rest der Früchte in ein weiteres Array namens restFruits
const fruits = ["apple", "banana", "orange", "kiwi", "strawberry"]

const [fruit1, fruit2, fruit3, ...restFruits] = fruits

console.log(fruit1, fruit2, fruit3, restFruits)

//Verwende Destructuring, um die Variablen math, science und english aus dem scores-Array zu extrahieren.
//Da das Array nur zwei Werte enthält, stelle sicher, dass die Variable english den Standardwert 75 erhält, falls kein dritter Wert im Array vorhanden ist.
const scores = [85, 90]
const [math, science, english = 75] = scores

console.log(math, science, english)
