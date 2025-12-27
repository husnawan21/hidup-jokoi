import { useState } from 'react'
import './App.css'
import HidupJokowi from './hidupJokowi';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HidupJokowi />
    </>
  )
}

export default App
