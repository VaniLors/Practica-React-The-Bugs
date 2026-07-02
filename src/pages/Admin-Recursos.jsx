import '../styles/Admin-Recursos.css'

export default function AdministracionRecursos() {
    return (
        <div className="admin-container">
            <div className='header-1'><b>ADMINISTRACION DE RECURSOS</b></div>
            <div className="admin-header">
                ADMINISTRACIÓN DE RECURSOS
            </div>

            <div className="admin-content">

                <div className="left-panel">
                    <div className="group-box">
                        <h3>CIERRE DE GESTIÓN</h3>

                        <button className="menu-btn">
                            Cerrar Gestión
                        </button>

                        <button className="menu-btn">
                            Cambiar Gestión
                        </button>
                    </div>

                    <div className="group-box">
                        <button className="menu-btn">
                            Importar / Exportar
                        </button>

                        <button className="menu-btn active">
                            Índices UFV
                        </button>

                        <button className="menu-btn">
                            Seguridad
                        </button>

                        <button className="menu-btn">
                            Re-indexar
                        </button>

                        <button className="menu-btn">
                            Migrador
                        </button>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="right-panel">
                    <input
                        className="gestion-input"
                        type="text"
                        value="2013"

                    />

                    <select className="gestion-select" size="4">
                        <option>2012</option>
                        <option></option>
                    </select>

                    <div className="image-box">
                        💻
                    </div>

                    <button className="salir-btn">
                        Salir
                    </button>
                </div>
            </div>
        </div>
    );
}