import { useState } from 'react'
import ToggleButton from './components/ToggleButton'
import Counter from './components/Counter'
import SynchronousInputs from './components/SynchronousInputs'

function App() {

  return (
    <div>
      <h1>Aufgabe 1</h1>
      <ToggleButton/>
      <h1>Aufgabe 2</h1>
      <Counter/>
      <h1>Aufgabe 3</h1>
      <SynchronousInputs/>
    </div>
  )
}

export default App
