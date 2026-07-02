import React, { useState } from "react";
import '../styles/seguridad.css'

function Seguridad() {
  const usuariosIniciales = [
    {
      usuario: "admin",
      password: "12345",
      nombre: "administrador",
      descripcion: "",
      tipo: "Administrador",
    },
    {
      usuario: "operador",
      password: "54321",
      nombre: "Usuario Operador",
      descripcion: "",
      tipo: "Operador",
    },
  ];

  const [usuarios, setUsuarios] = useState(usuariosIniciales);
  const [indice, setIndice] = useState(0);
  const [editando, setEditando] = useState(false);

  const [formulario, setFormulario] = useState(usuarios[0]);

  const cambiarCampo = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const primero = () => {
    setIndice(0);
    setFormulario(usuarios[0]);
  };

  const anterior = () => {
    if (indice > 0) {
      setIndice(indice - 1);
      setFormulario(usuarios[indice - 1]);
    }
  };

  const siguiente = () => {
    if (indice < usuarios.length - 1) {
      setIndice(indice + 1);
      setFormulario(usuarios[indice + 1]);
    }
  };

  const ultimo = () => {
    const ult = usuarios.length - 1;
    setIndice(ult);
    setFormulario(usuarios[ult]);
  };

  const nuevo = () => {
    setFormulario({
      usuario: "",
      password: "",
      nombre: "",
      descripcion: "",
      tipo: "Operador",
    });
    setEditando(true);
  };

  const editar = () => {
    setEditando(true);
  };

  const guardar = () => {
    const copia = [...usuarios];

    if (indice < copia.length) {
      copia[indice] = formulario;
    } else {
      copia.push(formulario);
    }

    setUsuarios(copia);
    setEditando(false);
  };

  const deshacer = () => {
    setFormulario(usuarios[indice]);
    setEditando(false);
  };

  const salir = () => {
    alert("Saliendo del sistema...");
  };

  return (
    <div className="contenedor">
      <header className="header-seguridad"><b>SEGURIDAD</b></header>
      <div className="titulo">SEGURIDAD</div>

      <div className="panel">
        <div className="fila-superior">
          <div>
            <label>USUARIO:</label>
            <input

            />
          </div>

          <div>
            <label>CONTRASEÑA ASIGNADA:</label>
            <input

            />
          </div>
        </div>

        <div className="campo">
          <label>NOMBRE COMPLETO:</label>
          <input

          />
        </div>

        <div className="campo">
          <label>DESCRIPCIÓN:</label>
          <textarea
            name="descripcion"
            value={formulario.descripcion}
            onChange={cambiarCampo}
            disabled={!editando}
          />
        </div>

        <div className="campo-radio">
          <label className="usuario">TIPO DE USUARIO:</label>

          <div className="selectt">
            <input
              type="radio"
              value="Operador"
              checked={formulario.tipo === "Operador"}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  tipo: e.target.value,
                })
              }
              disabled={!editando}
            />
            Operador
          </div>

          <div className="selectt-2">
            <input
              type="radio"
              value="Administrador"
              checked={formulario.tipo === "Administrador"}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  tipo: e.target.value,
                })
              }
              disabled={!editando}
            />
            Administrador
          </div>
        </div>
      </div>

      <div className="botonera">
        <button onClick={primero}>Primero</button>
        <button onClick={anterior}>Anterior</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={ultimo}>Último</button>
        <button onClick={nuevo}>Nuevo</button>
        <button onClick={editar}>Editar</button>
        <button onClick={guardar}>Guardar</button>
        <button onClick={deshacer}>Deshacer</button>
        <button onClick={salir}>Salir</button>
      </div>
    </div>
  );
}

export default Seguridad;

