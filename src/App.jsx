import { useState } from 'react'
import './App.css'
import { FaPlus, FaEdit, FaCopy, FaSearch, FaTrash } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UnidadAdmin from './pages/UnidadAdmin'
import Seguridad from './pages/Seguridad';
import GrupoContable from './pages/Grupo-Contable'
import Login from './pages/Login'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './components/Home'
import ActivosFijos from './pages/ActivosFijos'

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
            <Route path="/ActivosFijos" element={<ActivosFijos />} />
            <Route path="/Seguridad" element={<Seguridad />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </>

  )
}
export default App;
