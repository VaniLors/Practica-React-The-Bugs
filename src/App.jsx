import { useState } from 'react'
import './App.css'
import { FaPlus, FaEdit, FaCopy, FaSearch, FaTrash } from "react-icons/fa";
import Oficina from './pages/Oficina'
import AdminRecursos from './pages/Admin-Recursos'
import Seguridad from './pages/Seguridad'
import UnidadAdmin from './pages/UnidadAdmin'
import GrupoContable from './pages/Grupo-Contable'
import Login from './pages/Login'
import ActivosFijos from './pages/ActivosFijos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
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
            <Route path="/ActivosFijos" element={<ActivosFijos />} />
            <Route path="/Seguridad" element={<Seguridad />} />
            <Route path="/AdminRecursos" element={<AdminRecursos/>}/>
            <Route path="/Oficina" element={<Oficina />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </>

  )
}
export default App;
