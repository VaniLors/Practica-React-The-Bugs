import { useState } from "react";
import '../styles/oficina.css';

const initialRows = [
    { cod: 1, responsable: "DRA. GLADYS QUIROGA", cargo: "DIRECTORA", ci: "", expedido: "", estado: "ACTIVO" },
    { cod: 2, responsable: "DR. WALTER AGREDA COCA", cargo: "DIRECTOR GENERAL EJECUTIVO", ci: "", expedido: "", estado: "ACTIVO" },
];

function Oficina() {
    const [oficina] = useState("1");
    const [oficinaNombre] = useState("100 DIRECCION INLASA");
    const [estadoOficina] = useState("ACTIVO");
    const [observacion, setObservacion] = useState("");
    const [rows, setRows] = useState(initialRows);
    const [selectedRow, setSelectedRow] = useState(null);
    const [editingRow, setEditingRow] = useState(null);
    const [mode, setMode] = useState(null); // 'new' | 'edit' | null
    const [statusMsg, setStatusMsg] = useState("");

    const emptyRow = { cod: "", responsable: "", cargo: "", ci: "", expedido: "", estado: "ACTIVO" };

    const handleNuevo = () => {
        setEditingRow({ ...emptyRow, cod: rows.length + 1 });
        setMode("new");
        setSelectedRow(null);
        setStatusMsg("");
    };

    const handleModificar = () => {
        if (selectedRow === null) {
            setStatusMsg("Seleccione una fila para modificar.");
            return;
        }
        setEditingRow({ ...rows[selectedRow] });
        setMode("edit");
        setStatusMsg("");
    };

    const handleActivar = () => {
        if (selectedRow === null) {
            setStatusMsg("Seleccione una fila para activar.");
            return;
        }
        const updated = rows.map((r, i) =>
            i === selectedRow ? { ...r, estado: "ACTIVO" } : r
        );
        setRows(updated);
        setStatusMsg("Registro activado.");
    };

    const handleInactivar = () => {
        if (selectedRow === null) {
            setStatusMsg("Seleccione una fila para inactivar.");
            return;
        }
        const updated = rows.map((r, i) =>
            i === selectedRow ? { ...r, estado: "INACTIVO" } : r
        );
        setRows(updated);
        setStatusMsg("Registro inactivado.");
    };

    const handleGuardar = () => {
        if (!editingRow) {
            setStatusMsg("No hay cambios para guardar.");
            return;
        }
        if (mode === "new") {
            setRows([...rows, editingRow]);
        } else if (mode === "edit") {
            const updated = rows.map((r, i) => (i === selectedRow ? editingRow : r));
            setRows(updated);
        }
        setEditingRow(null);
        setMode(null);
        setStatusMsg("Guardado correctamente.");
    };

    const handleDeshacer = () => {
        setEditingRow(null);
        setMode(null);
        setStatusMsg("Cambios descartados.");
    };

    const handleSalir = () => {
        setStatusMsg("Sesión cerrada.");
    };

    const handleBottomActivar = () => handleActivar();
    const handleBottomInactivar = () => handleInactivar();

    return (
        <div className="oficina-wrapper">
            {/* Header */}
            <div className="header-bar">
                <div className="header-left">
                    <div className="unidad-label">UNIDAD: 0252</div>
                    <div className="nivel-label">Nivel Central</div>
                </div>
                <div className="header-title">OFICINA</div>
            </div>

            <div className="main-body">
                {/* Left content */}
                <div className="content-area">
                    {/* Oficina row */}
                    <div className="field-row">
                        <label className="field-label">Oficina</label>
                        <div className="oficina-input-group">
                            <input className="input-small" value={oficina} readOnly />
                            <select className="input-select">
                                <option>{oficinaNombre}</option>
                            </select>
                            <span className="estado-badge">{estadoOficina}</span>
                        </div>
                    </div>

                    {/* Observación row */}
                    <div className="field-row observacion-row">
                        <label className="field-label">Observación</label>
                        <textarea
                            className="observacion-textarea"
                            value={observacion}
                            onChange={(e) => setObservacion(e.target.value)}
                        />
                    </div>

                    {/* Table */}
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th className="col-cod">Cod.</th>
                                <th className="col-responsable">Responsable</th>
                                <th className="col-cargo">Cargo</th>
                                <th className="col-ci">CI</th>
                                <th className="col-expedido">Expedido</th>
                                <th className="col-estado">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr
                                    key={i}
                                    className={selectedRow === i ? "row-selected" : i % 2 === 0 ? "row-even" : "row-odd"}
                                    onClick={() => {
                                        if (mode) return;
                                        setSelectedRow(i);
                                    }}
                                >
                                    <td className="col-cod">{row.cod}</td>
                                    <td>{mode && selectedRow === i && editingRow ? (
                                        <input className="cell-input" value={editingRow.responsable}
                                            onChange={e => setEditingRow({ ...editingRow, responsable: e.target.value })} />
                                    ) : row.responsable}</td>
                                    <td>{mode && selectedRow === i && editingRow ? (
                                        <input className="cell-input" value={editingRow.cargo}
                                            onChange={e => setEditingRow({ ...editingRow, cargo: e.target.value })} />
                                    ) : row.cargo}</td>
                                    <td>{row.ci}</td>
                                    <td>{row.expedido}</td>
                                    <td>{row.estado}</td>
                                </tr>
                            ))}
                            {mode === "new" && editingRow && (
                                <tr className="row-editing">
                                    <td className="col-cod">{editingRow.cod}</td>
                                    <td><input className="cell-input" value={editingRow.responsable}
                                        onChange={e => setEditingRow({ ...editingRow, responsable: e.target.value })} /></td>
                                    <td><input className="cell-input" value={editingRow.cargo}
                                        onChange={e => setEditingRow({ ...editingRow, cargo: e.target.value })} /></td>
                                    <td><input className="cell-input" value={editingRow.ci}
                                        onChange={e => setEditingRow({ ...editingRow, ci: e.target.value })} /></td>
                                    <td><input className="cell-input" value={editingRow.expedido}
                                        onChange={e => setEditingRow({ ...editingRow, expedido: e.target.value })} /></td>
                                    <td>{editingRow.estado}</td>
                                </tr>
                            )}
                            {/* Empty filler rows */}
                            {Array.from({ length: Math.max(0, 7 - rows.length - (mode === "new" ? 1 : 0)) }).map((_, i) => (
                                <tr key={`empty-${i}`} className={i % 2 === 0 ? "row-even" : "row-odd"}>
                                    <td>&nbsp;</td><td></td><td></td><td></td><td></td><td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Right button panel */}
                <div className="right-buttons">
                    <button className="btn-action" onClick={handleNuevo}>Nuevo</button>
                    <button className="btn-action" onClick={handleModificar}>Modificar</button>
                    <button className="btn-action btn-disabled" onClick={handleActivar}>Activar</button>
                    <button className="btn-action btn-danger" onClick={handleInactivar}>Inactivar</button>
                </div>
            </div>

            {/* Status message */}
            {statusMsg && <div className="status-msg">{statusMsg}</div>}

            {/* Bottom buttons */}
            <div className="bottom-bar">
                <button className="btn-bottom" onClick={handleBottomActivar}>Activar</button>
                <button className="btn-bottom" onClick={handleBottomInactivar}>Inactivar</button>
                <button className="btn-bottom" onClick={handleNuevo}>Nuevo</button>
                <button className="btn-bottom" onClick={handleModificar}>Modific.</button>
                <button className="btn-bottom btn-save" onClick={handleGuardar}>Guardar</button>
                <button className="btn-bottom" onClick={handleDeshacer}>Deshacer</button>
                <button className="btn-bottom btn-exit" onClick={handleSalir}>Salir</button>
            </div>
        </div>
    );
}

export default Oficina;