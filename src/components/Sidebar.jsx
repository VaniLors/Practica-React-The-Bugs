
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import GrupoContable from "../pages/Grupo-Contable";
import UnidadAdmin from "../pages/UnidadAdmin";
import Login from "../pages/Login";
import Seguridad from "../pages/Seguridad";
import Home from "./Home";


function Sidebar() {
    return (
        <div className="sidebar">
            <h3 className="sidebar-titulo">MENÚ PRINCIPAL</h3>
            <nav className="sidebar-nav">

                <button className="btn-sidebar">
                    <NavLink to="/grupo-contable" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Grupo Contable</NavLink>
                </button>

                <button className="btn-sidebar">
                    <NavLink to="/login" className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Login</NavLink>
                </button>

                <button className="btn-sidebar">
                    <NavLink to="/UnidadAdmin" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Unidad Administrativa</NavLink>
                </button>


                <button className="btn-sidebar">
                    <NavLink to="/ActivosFijos" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Activos Fijos</NavLink>
                </button>


                <button className="btn-sidebar">
                    <NavLink to="/Seguridad" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Seguridad</NavLink>
                </button>

                {/* Aquí agregas los links de tus compañeros */}
                {/* <NavLink to="/activos" className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Activos</NavLink> */}
                
            </nav>
        </div>
    );
}

export default Sidebar;