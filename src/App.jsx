import './App.css'
import Seguridad from './pages/Seguridad'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UnidadAdmin from './pages/UnidadAdmin'
import GrupoContable from './pages/Grupo-Contable'
import Sidebar from './components/Sidebar'
import Login from './pages/login'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/grupo-contable" element={<GrupoContable />} />
            <Route path="/login" element={<Login />} />
            <Route path="/UnidadAdmin" element={<UnidadAdmin />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </>

  )
}
export default App
