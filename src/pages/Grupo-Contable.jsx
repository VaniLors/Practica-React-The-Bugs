import react, { useState } from 'react';
import '../styles/Grupo-Contable.css';
import React from 'react';

const datosGrupos = {
    "EDIFICACIONES": {
    grupo: 1,
    vidaUtil: 40,
    auxiliares: ["Juan Contreras", "María López", "Carlos Pérez", "Ana Gómez", "Luis Torres", "Sofía Ruiz", "Pedro Díaz", "Elena Vargas"]
},
    "MUEBLES Y ENCERES DE OFICINA": {
    grupo: 2,
    vidaUtil: 10,
    auxiliares: ["Roberto Silva", "Carmen Morales", "Jorge Herrera", "Patricia Núñez", "Miguel Ángel", "Lucía Ramos", "Fernando Castillo", "Isabel Mendoza"]
},
    "MAQUINARIA EN GENERAL": {
    grupo: 3,
    vidaUtil: 20,
    auxiliares: ["Andrés Flores", "Valeria Cruz", "Diego Reyes", "Gabriela Ortiz", "Sebastián Mora", "Natalia Vega", "Alejandro Ríos", "Daniela Soto"]
},
    "EQUIPO MEDICO Y DE LABORATORIO": {
    grupo: 4,
    vidaUtil: 5,
    auxiliares: ["Camila Jiménez", "Ricardo Alvarado", "Paola Guzmán", "Esteban Romero", "Verónica Pinto", "Mauricio Salinas", "Gloria Espinoza", "Hernán Bravo"]
},
    "EQUIPO DE COMUNICACIONES": {
    grupo: 5,
    vidaUtil: 5,
    auxiliares: ["Francisca Navarro", "Cristóbal Medina", "Javiera Rojas", "Ignacio Fuentes", "Catalina Araya", "Matías Carrasco", "Bárbara Muñoz", "Rodrigo Campos"]
},
    "EQUIPO EDUCACIONAL Y RECREATIVO": {
    grupo: 6,
    vidaUtil: 5,
    auxiliares: ["Vladimir Gutierrez", "Gustavo Quispe", "Hugo Basilio", "Raymod Aguirre", "Alexander Gutierrez", "Juan Contreras", "Cristian Rojas"],
    observacion: "No servimos como Equipo"}
};


function GrupoContable(){

    const [seleccion, setSeleccion] = useState ("EDIFICACIONES")

    const actual = datosGrupos[seleccion];


    return (
        <>
        <div className='ventana'>
            <header className='header-grupo-contable'>
                Grupos Contables
            </header>
            <main className='main'>
                    <div className='parrafo'>
                    {seleccion === "EDIFICACIONES" && <span>2026 Edificaciones</span>}
                    {seleccion === "MUEBLES Y ENCERES DE OFICINA" && <span> 2026 Muebles</span>}
                    {seleccion === "MAQUINARIA EN GENERAL" && <span>2026 Maquinaria</span>}
                    {seleccion === "EQUIPO MEDICO Y DE LABORATORIO" && <span>2026 Equipo Medico</span>}
                    {seleccion === "EQUIPO DE COMUNICACIONES" && <span> 2026 Equipo de Comunicaciones</span>}
                    {seleccion === "EQUIPO EDUCACIONAL Y RECREATIVO" && <span>2026 The Bugs</span>}
                </div>
                <div className='text'>
                    GRUPO CONTABLE
                </div>




            </main>
            <section>
                <div className="contenedor-formulario">
    <div className="grupo-izquierda">
        <div className="fila-gap">
            <h4>Grupo</h4>
            <input value={actual.grupo} className='input-grupo-contable' readOnly />

        </div>
        <div className="fila">
            <h4>Vida Util</h4>
            <input value={0} className='input-grupo-contable'/>
        </div>
    </div>

    <div className="grupo-derecha">
        <div className="fila-gap-2">
            <h4>nombre</h4>
                <select className='select-grupo-contable' value={seleccion} onChange={(e) => setSeleccion(e.target.value)}>
                <option>EDIFICACIONES</option>
                <option>MUEBLES Y ENCERES DE OFICINA</option>
                <option>MAQUINARIA EN GENERAL</option>
                <option>EQUIPO MEDICO Y DE LABORATORIO</option>
                <option>EQUIPO DE COMUNICACIONES</option>
                <option>EQUIPO EDUCACIONAL Y RECREATIVO</option>
            </select>
        </div>
        <div className="fila">
            <h4>Observaciones</h4>
            <textarea className='text-area-GC' value={actual.observacion || ''} readOnly />
        </div>
    </div>
</div>
<div className='table'>
    <table border={1}>
        <thead>
            <tr>
                <th>CODIGO</th>
                <th>NOMBRE AUXILIAR</th>
            </tr>
        </thead> 
        
        <tbody> 
            {actual.auxiliares.map((nombre, index) => (
                <tr key={index}>
                    <td className={index === 0 ? 'table-1' : ''}>{index + 1}</td>
                    <td className={index === 0 ? 'table-2' : ''}>{nombre}</td>
                </tr>
            ))} 
        </tbody>
    </table>
</div>


                
            </section>
            <div className='buttons'>
                    <button className='btn-blue'>Nuevo</button>
                    <button className='btn-blue'>Modificar</button>
                    <button className='btn-plomo-GC'>Guardar</button>
                    <button className='btn-blue'>Eliminar</button>
                    <button className='btn-plomo-GC'>Deshacer</button>
                    <button className='btn-blue'>Salir</button>
                </div>

        </div>
        </>
    )

}

export default GrupoContable;
