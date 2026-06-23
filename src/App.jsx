import { useState } from 'react'
import './App.css'
import UnidadAdmin from './pages/UnidadAdmin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UnidadAdmin />
    </>
  )
}

export default App
