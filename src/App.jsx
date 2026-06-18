import { useState } from 'react'
import './App.css'
import Seguridad from './pages/Seguridad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Seguridad />
    </>
  );
}

export default App
