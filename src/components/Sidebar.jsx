
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
                    <NavLink to="/grupo-contable" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Grupos y Auxiliares</NavLink>
                </button>

                <button className="btn-sidebar">
                    <NavLink to="/login" className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Iniciar Sesion</NavLink>
                </button>

                <button className="btn-sidebar">
                    <NavLink to="/AdminRecursos" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Administradores</NavLink>
                </button>


                <button className="btn-sidebar">
                    <NavLink to="/ActivosFijos" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Activos Fijos</NavLink>
                </button>


                <button className="btn-sidebar">
                    <NavLink to="/Seguridad" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Generar Reportes</NavLink>
                </button>


                <button className="btn-sidebar">
                    <NavLink to="/UnidadAdmin" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Administrar Unidad</NavLink>
                </button>

                <button className="btn-sidebar">
                    <NavLink to="/Oficina" end className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Oficinas y Responsables</NavLink>
                </button>


                {/* Aquí agregas los links de tus compañeros */}
                {/* <NavLink to="/activos" className={({ isActive }) => isActive ? "sidebar-link activo" : "sidebar-link"}>Activos</NavLink> */}
                
            </nav>
        </div>
    );
}

export default Sidebar;