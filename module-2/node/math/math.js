function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

const pi = 3.1415

// Wir können auch einen default export benutzen
// Hier ist es gang und gebe alle Exports in einem Objekt zusammenzufassen:
var math = {
    add, 
    subtract,
    pi
}

export default math