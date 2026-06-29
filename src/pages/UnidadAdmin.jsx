import React, { useState } from 'react';
import '../styles/UnidadAdmin.css';

export default function UnidadAdmin() {
  const [vista, setVista] = useState('tabla'); 
  const [mostrarModal, setMostrarModal] = useState(false);
  const [formData, setFormData] = useState({
    unidad: '025',
    ciudad: 'LA PAZ',
    descripcion: 'GACETA OFICIAL DE BOLIVIA'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGrabar = () => {
    setMostrarModal(true);
  };

  const handleAceptarModal = () => {
    setMostrarModal(false);
    setVista('tabla');
  };

  return (
    <div className="vsiaf-container">
      {vista === 'tabla' && (
        <div className="window-panel main-window">
          <div className="window-header">SISTEMA DE ACTIVOS FIJOS</div>
          <div className="window-subheader">Unidad Administrativa</div>
          
          <div className="title-banner">
            ADMINISTRACION UNIDAD ADMINISTRATIVA
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>UNIDAD</th>
                  <th style={{ width: '55%' }}>DESCRIPCION</th>
                  <th style={{ width: '20%' }}>CIUDAD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="selected-row">
                  <td>{formData.unidad}</td>
                  <td>{formData.descripcion}</td>
                  <td>{formData.ciudad}</td>
                </tr>
                {[...Array(7)].map((_, i) => (
                  <tr key={i}>
                    <td>&nbsp;</td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="actions-footer">
            <div className="button-group">
              <button className="vsiaf-btn" onClick={() => setVista('formulario')}>Nuevo</button>
              <button className="vsiaf-btn">Editar</button>
              <button className="vsiaf-btn">Eliminar</button>
              <button className="vsiaf-btn btn-highlight">Seleccionar</button>
              <button className="vsiaf-btn">Salir</button>
            </div>
          </div>
        </div>
      )}

      {vista === 'formulario' && (
        <div className="window-panel form-window">
          <div className="window-subheader">Unidad Administrativa</div>
          
          <div className="title-banner">
            UNIDAD ADMINISTRATIVA
          </div>

          <div className="form-content-box">
            <div className="form-group">
              <label>Unidad Administrativa:</label>
              <input 
                type="text" 
                name="unidad" 
                value={formData.unidad} 
                onChange={handleChange}
                className="input-field short-input"
              />
            </div>

            <div className="form-group">
              <label>Ciudad:</label>
              <input 
                type="text" 
                name="ciudad" 
                value={formData.ciudad} 
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="form-group align-top">
              <label>Descripción:</label>
              <textarea 
                name="descripcion" 
                value={formData.descripcion} 
                onChange={handleChange}
                className="input-field textarea-field"
                rows="3"
              />
            </div>
            
            <div className="form-actions">
              <button className="vsiaf-btn" onClick={handleGrabar}>Grabar</button>
              <button className="vsiaf-btn" onClick={() => setVista('tabla')}>Salir</button>
            </div>
          </div>
        </div>
      )}

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <span>VSIAF</span>
              <button className="modal-close-btn" onClick={() => setMostrarModal(false)}>X</button>
            </div>
            <div className="modal-body">
              <div className="modal-info-icon">i</div>
              <p className="modal-text">Los datos fueron ingresados correctamente</p>
            </div>
            <div className="modal-footer">
              <button className="vsiaf-btn modal-accept-btn" onClick={handleAceptarModal}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}