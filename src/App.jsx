import { useState } from 'react'
import './App.css'
import GrupoContable from './pages/Grupo-Contable'
import '../src/styles/Grupo-Contable.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <GrupoContable />
    </>
  )
}

export default App
