import { useState } from 'react'
import './App.css'
import Joke from './view/components/joke/Joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Joke />
      
    </>
  )
}

export default App
