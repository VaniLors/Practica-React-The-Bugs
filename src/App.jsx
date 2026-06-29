import { useState } from 'react'
import './App.css'

import UnidadAdmin from './pages/UnidadAdmin'
import GrupoContable from './pages/Grupo-Contable'
import '../src/styles/Grupo-Contable.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UnidadAdmin />
        <GrupoContable />
    </>
  )
}

export default App
