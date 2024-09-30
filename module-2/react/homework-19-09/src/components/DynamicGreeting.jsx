import React, { useState } from "react"

function DynamicGreeting(){
    const [name, setName] = useState("")
    const [color, setColor] = useState("#242424")

    const possibleColors = ['violetblue', 'green', 'lightblue', '#FFFF00', 'orange', 'purple', "#242424"]

    const changeColor = () => {
        let chosenColor = possibleColors[Math.floor(Math.random() * possibleColors.length)]
        setColor(chosenColor)
    }

    const resetButton = () => {
        setName("")
    }

    return(
        <div style={{
                backgroundColor: color,
                borderRadius: '5px'
            }}>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <h2>Hallo, {name}!</h2>
            <button onClick={resetButton}>Reset name</button>
            <button onClick={changeColor}>Farbe ändern</button>
        </div>
    )
}

export default DynamicGreeting