import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HidupJokowi from './hidupJokowi';
import MediaPlayer from './mediaPlayer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MediaPlayer />
    </>
  )
}

export default App
