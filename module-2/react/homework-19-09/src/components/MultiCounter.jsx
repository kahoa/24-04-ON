import React, { useState } from "react"

function Counter({startvalue}){
    const [counter, setCounter] = useState(startvalue)
    

    return(
        <>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(startvalue)}>reset</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        </>
    )

}

function MultiCounter() {

    const startValues = [0, 10, 20, 30, 40, 50, 60]
    // Rendere alle Listenelemente als Counter-Komponenten. Benutze hierfür map oder forEach
    // Map und filter sind die wichtigsten Funktionen im Umgang mit Listen von Daten:

    // Map wendet eine Funktion auf jedes Element der Liste an
    
    // Filter wendet eine Filterfunktion auf jedes Element der Liste an und behält genau diejenigen unverändert, 
    // bei denen die Filterfunktion das Ergebnis "true" hat

    return(
        <>
            {startValues.map((value) => (
                <Counter startvalue={value}/>
            ))}
        </>
    )
}

export default MultiCounter