import { useState } from 'react'
import Oficina from './pages/Oficina'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Oficina />
    </>
  )
}

export default App
