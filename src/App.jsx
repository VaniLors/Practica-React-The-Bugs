import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GrupoContable from './pages/Grupo-Contable'
import Sidebar from './components/Sidebar'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<GrupoContable />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
