// Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import GrupoContable from "../pages/Grupo-Contable";

function Sidebar() {
    return (
        <div className="sidebar">
            <h3 className="sidebar-titulo">MENÚ</h3>
            <nav className="sidebar-nav">
                <NavLink to="/" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>
                    Grupo Contable
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>
                    Login
                </NavLink>

                <NavLink to="/Grupo-Contable" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>nombre del boton pa la pagina</NavLink>

                {/* Aquí agregas los links de tus compañeros */}
                {/* <NavLink to="/activos" className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Activos</NavLink> */}
                
            </nav>
        </div>
    );
}

export default Sidebar;