import { useState } from 'react'
import './App.css'
import AdminRecursos from './pages/Admin-Recursos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminRecursos />
    </>
  )
}

export default App
