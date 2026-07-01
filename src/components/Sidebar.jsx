
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import GrupoContable from "../pages/Grupo-Contable";
import UnidadAdmin from "../pages/UnidadAdmin";


function Sidebar() {
    return (
        <div className="sidebar">
            <h3 className="sidebar-titulo">MENÚ PRINCIPAL</h3>
            <nav className="sidebar-nav">

                <button className="btn-sidebar">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Grupo Contable</NavLink>
                </button>

                <button className="btn-sidebar">
                    <NavLink to="/login" className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Login</NavLink>
                </button>

                <button className="btn-sidebar">
                    <NavLink to="/UnidadAdmin" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Seguridad</NavLink>
                </button>

                {/* Aquí agregas los links de tus compañeros */}
                {/* <NavLink to="/activos" className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Activos</NavLink> */}
                
            </nav>
        </div>
    );
}

export default Sidebar;