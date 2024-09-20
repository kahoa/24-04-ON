import React, {useState} from "react"

function SynchronousInputs(){

    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText(event.target.value)
    }
    
    return(
        <div>
            <input type="text" value={text} onChange={handleChange}/>
            <input type="text" value={text} onChange={handleChange}/>
        </div>
    )
}

export default SynchronousInputs