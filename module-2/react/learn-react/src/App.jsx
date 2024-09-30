import TodoList from "./components/TodoList"
import Profile from "./components/Props"
import PackingList from "./components/ConditionalRendering"
import List from "./components/RenderingLists"
import {useState} from "react"

function App() {

  //Bei vielen Statevariablen: 
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(2)
  const [state3, setState3] = useState("")
  const [state4, setState4] = useState([])
  const [state5, setState5] = useState(false)

  // Lieber state object anlegen:
  const [stateObject, setStateObject] = useState({
    state1: 0,
    state2: 2,
    state3: "",
    state4: [],
    state5: false
  })

  // Änderung des state objects kurz und prägnant mit "spread syntax":
  // setStateObject({...stateObject, state3: "Verändert"})

  // Spread syntax spart volles ausschreiben von:
  const lang = {
    state1: stateObject.state1, 
    state2: stateObject.state2,
    state3: "Verändert",
    state4: stateObject.state4,
    state5: stateObject.state5
  }

  return (
    <>
      <List/>
    </>
  )
}

export default App
