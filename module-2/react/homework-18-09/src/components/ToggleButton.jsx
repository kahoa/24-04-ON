import React, {useState} from "react"

function ToggleButton(){
    const [state, setState] = useState(false)

    // ! steht für "not":
    // !false => true
    // !true => false
    return (
        <button onClick={() => setState(!state)}>
            {state ? "Ein" : "Aus"}
        </button>
    )
}

export default ToggleButton