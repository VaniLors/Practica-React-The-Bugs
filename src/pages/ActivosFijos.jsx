import React, { useState } from "react";
import '../styles/ActivosFijos.css'
import { FaPlus, FaEdit, FaCopy, FaSearch, FaTrash } from "react-icons/fa";
import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai"
import { AiOutlineSwap } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineBorder } from "react-icons/ai"



function ActivosFijos() {
    const [form, setForm] = useState({
    codigo: "CODIGO UNO",
    codigoAd: "",
    incorporacionDia: "10",
    incorporacionMes: "10",
    incorporacionAnio: "2013",
    indiceUfv: "1.87054",

    descripcion: "SOFA COLOR AZUL CON CUERO NEGRO",
    grupo: "muebles",
    auxiliar: "sofa",
    oficina: "secretaria",
    responsable: "sandra",
    cargo: "SECRETARIA",
    estadoActivo: "bueno",
    observaciones: "",
    rube: "",
    orgFinanciador: "111",
    nroConvenio: "",

    depreciar: true,
    actualizar: true,

    costoInicial: "5,500.00",
    depAcuInicial: "0.00",
    factorActual: "1.000000",
    valorActual: "5,500.00",

    vidaAnios: "5.00",
    vidaDias: "1",
    porcDeprecia: "20.00",
    depGestion: "3.01",
    depAcumulada: "3.01",
    valorNeto: "5,496.99",

    calcDia: "10",
    calcMes: "10",
    calcAnio: "2013",
    calcUfv: "1.87054",
});
const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({...prev,
    [name]: type === "checkbox" ? checked : value,
    }));
};
return (
    <>
    <div className="ventana-activos-fijos">
        <header>
            <div className="header-negro">
                <h3>Administracion de Activos Fijos</h3>
                </div>
        </header>

        <div className="secciones">
            <div>
                <div className="text-header-span">
                    <div className="spaicing-tex-span">
                        <span>Unidad 025 </span>
                        <p>GACETA OFICIAL DE BOLIVIA</p>
                        </div>
                        <h3 className="title">ACTIVOS FIJOS</h3>
                </div>

            <div className="activo-container">
                <div className="activo-row activo-top">
                    <div className="field inline">
                        <label>CODIGO:</label>
                        <input className="input-Activos-Fijo"
                        type="text"
                        name="codigo"
                        value={form.codigo}
                        onChange={handleChange}
                        />
                </div>

                <div className="field inline">
                    <label>INCORPORACION:</label>
                    <input
                    type="text"
                    className="short"
                    name="incorporacionDia"
                    value={form.incorporacionDia}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    className="short"
                    name="incorporacionMes"
                    value={form.incorporacionMes}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    className="short"
                    name="incorporacionAnio"
                    value={form.incorporacionAnio}
                    onChange={handleChange}
                    />
                </div>

                <div className="field inline">
                    <label>INDICE UFV:</label>
                    <input
                    type="text"
                    className="short"
                    name="indiceUfv"
                    value={form.indiceUfv}
                    onChange={handleChange}
                    />
                    </div>
                </div>

                <div className="activo-row">
                    <div className="field inline">
                        <label>CODIGO ADI:</label>
                        <input className="input-Codigo-adi"
                        type="text"
                        name="codigoAd"
                        value={form.codigoAd}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <hr className="divider" />
                
                <div className="activo-main">
                    <div className="field-row">
                        <label>DESCRIPCION:</label>
                        <input
                        type="text"
                        name="descripcion"
                        className="full"
                        value={form.descripcion}
                        onChange={handleChange}
                        />
                    </div>
                    
                    <div className="field-row">
                        <label>GRUPO:</label>
                        <select className="select-grupo-ac" name="grupo" value={form.grupo} onChange={handleChange}>
                            <option value="">-- Seleccione --</option>
                            <option value="muebles">MUEBLES Y ENSERES DE OFICINA</option>
                        </select>
                        
                        <label className="checkbox-label">
                            <input
                            type="checkbox"
                            name="depreciar"
                            checked={form.depreciar}
                            onChange={handleChange}
                            />
                    DEPRECIAR
                    
                    </label>
                    
                    <label className="checkbox-label">
                    <input
                    type="checkbox"
                    name="actualizar"
                    checked={form.actualizar}
                    onChange={handleChange}
                    />
                    ACTUALIZAR
                    </label>
                </div>

                <div className="field-row">
                  <label>AUXILIAR:</label>
                  <select className="select-auxiliar-ac" name="auxiliar" value={form.auxiliar} onChange={handleChange}>
                    <option value="">-- Seleccione --</option>
                    <option value="sofa">SOFA</option>
                  </select>
                </div>

                <div className="field-row">
                  <label>OFICINA:</label>
                  <select className="select-oficina-ac" name="oficina" value={form.oficina} onChange={handleChange}>
                    <option value="">-- Seleccione --</option>
                    <option value="secretaria">SECRETARIA</option>
                  </select>
                </div>

                <div className="field-row">
                  <label>RESPONSABLE:</label>
                  <select className="select-responsable-ac"
                    name="responsable"
                    value={form.responsable}
                    onChange={handleChange}
                  >
                    <option value="">-- Seleccione --</option>
                    <option value="sandra">SANDRA RIOS PAREDES</option>
                  </select>
                </div>

                <div className="field-row">
                  <label>CARGO:</label>
                  <input
                    type="text"
                    name="cargo"
                    className="full"
                    value={form.cargo}
                    onChange={handleChange}
                  />
                </div>

                <div className="field-row">
                  <label>ESTADO ACTIVO:</label>
                  <select className="select-estado-activo-ac"
                    name="estadoActivo"
                    value={form.estadoActivo}
                    onChange={handleChange}
                  >
                    <option value="">-- Seleccione --</option>
                    <option value="bueno">Bueno</option>
                  </select>

                  <label className="right-label">RUBE:</label>
                  <input
                    type="text"
                    name="rube"
                    className="small"
                    value={form.rube}
                    onChange={handleChange}
                  />
                </div>

                <div className="field-row observaciones-row">
                  <label>OBSERVACIONES:</label>
                  <textarea className="textarea-AF"
                  />

                  <div className="stacked-fields">
                    <div className="field inline">
                      <label>ORG.FINANCIADOR:</label>
                      <select className="select-Activos-Fijo"
                        name="orgFinanciador"
                        value={form.orgFinanciador}
                        onChange={handleChange}
                      >
                        <option value="">-- Seleccione --</option>
                        <option value="111">111</option>
                      </select>
                    </div>
                    <div className="field inline">
                      <label>NRO CONVENIO:</label>
                      <input className="input-Activos-Fijo"
                        type="text"
                        name="nroConvenio"
                        value={form.nroConvenio}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="divider" />

              {/* Bloque de costos */}
              <div className="activo-costos">
                <div className="field inline">
                  <label>COSTO INICIAL</label>
                  <input
                    type="text"
                    name="costoInicial"
                    value={form.costoInicial}
                    onChange={handleChange}
                  />
                </div>

                <div className="field inline">
                  <label>DEP ACU INICIAL</label>
                  <input
                    type="text"
                    name="depAcuInicial"
                    value={form.depAcuInicial}
                    onChange={handleChange}
                  />
                </div>

                <div className="field inline">
                  <label>FACTOR ACTUAL</label>
                  <input
                    type="text"
                    name="factorActual"
                    value={form.factorActual}
                    onChange={handleChange}
                  />
                </div>

                <div className="field inline">
                  <label>VALOR ACTUAL:</label>
                  <input
                    type="text"
                    name="valorActual"
                    value={form.valorActual}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="divider" />

              {/* Bloque de depreciacion / calculo */}
              <div className="activo-row activo-bottom">
                <div className="field inline">
                  <label>VIDA</label>
                  <input
                    type="text"
                    className="short"
                    name="vidaAnios"
                    value={form.vidaAnios}
                    onChange={handleChange}
                  />
                  <span>Años</span>
                  <input
                    type="text"
                    className="short"
                    name="vidaDias"
                    value={form.vidaDias}
                    onChange={handleChange}
                  />
                  <span>dias</span>
                </div>

                <div className="field inline">
                  <label>% DEPRECIA.</label>
                  <input
                    type="text"
                    className="short"
                    name="porcDeprecia"
                    value={form.porcDeprecia}
                    onChange={handleChange}
                  />
                </div>

                <div className="field inline">
                  <label>DEP.GESTION</label>
                  <input
                    type="text"
                    className="short"
                    name="depGestion"
                    value={form.depGestion}
                    onChange={handleChange}
                  />
                </div>

                <div className="field inline right-block">
                  <label>DEP.ACUMULADA:</label>
                  <input
                    type="text"
                    name="depAcumulada"
                    value={form.depAcumulada}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="activo-row">
                <div className="field inline calculados">
                  <label>CALCULADOS A:</label>
                  <span>DIA</span>
                  <input
                    type="text"
                    className="short"
                    name="calcDia"
                    value={form.calcDia}
                    onChange={handleChange}
                  />
                  <span>MES</span>
                  <input
                    type="text"
                    className="short"
                    name="calcMes"
                    value={form.calcMes}
                    onChange={handleChange}
                  />
                  <select name="calcMesNombre">
                    <option>OCTUBRE</option>
                  </select>
                  <span>AÑO</span>
                  <input
                    type="text"
                    className="short"
                    name="calcAnio"
                    value={form.calcAnio}
                    onChange={handleChange}
                  />
                  <span>UFV:</span>
                  <input
                    type="text"
                    className="short"
                    name="calcUfv"
                    value={form.calcUfv}
                    onChange={handleChange}
                  />
                  <button type="button" className="btn-hoy">
                    Hoy
                  </button>
                </div>

                <div className="field inline right-block">
                  <label>VALOR NETO:</label>
                  <input
                    type="text"
                    name="valorNeto"
                    value={form.valorNeto}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="divider" />

              <div className="activo-footer">
                <button type="button"className="btn-ac-fi">Primero</button>
                <button type="button" className="btn-ac-fi">Anterior</button>
                <button type="button" className="btn-ac-fi">Siguiente</button>
                <button type="button" className="btn-ac-fi">Ultimo</button>
                <button type="button" className="btn-aprobar">
                  Aprobar
                </button>
              </div>
            </div>
          </div>
          <div className="section-buttons">
            <button className="sidebar-button">
                <AiOutlineFile className="icon" />
                <span>Nuevo</span>
            </button>
            <button className="sidebar-button">
                <AiFillEdit className="icon" />
                <span>Modificar</span>
            </button>
            <button className="sidebar-button">
                <AiOutlineFolder className="icon" />
                <span>Duplicar</span>
            </button>
            <button className="sidebar-button">
                <AiOutlineSwap className="icon" />
                <span>Tranferir</span>
            </button>
            <button className="sidebar-button">
                <AiOutlineFileSearch className="icon" />
                <span>Buscar</span>
            </button>
            <button className="sidebar-button">
                <AiOutlineClose className="icon" />
                <span>Eliminar</span>
            </button>
            <button className="sidebar-button">
                <AiOutlineBorder className="icon" />
                <span>Cancel</span>
            </button>
            <button className="btn-salir">
                <CiLogin className="icon" />
                <span>Salir</span>
            </button>
            </div>
        </div>
      </div>
    </>
  );
}
export default ActivosFijos;