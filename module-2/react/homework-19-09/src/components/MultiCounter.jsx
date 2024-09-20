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

    return(
        <>
            <Counter startvalue={0}/>
            <Counter startvalue={10}/>
            <Counter startvalue={20}/>
        </>
    )
}

export default MultiCounter