import '../styles/Header.css'
import React from 'react'

function Header (){
    return (
        <>
        <div className='header-component'>
            <img src="../public/bandera-bolivia.svg" className='img-bandera-bolivia' alt="" />
            <div className='text-header-component'>
                <h1><b>VS.I.A.F</b></h1>
                <p>Sistema de Activos Fijos</p>
            </div>
            <span className='span-header'>Usuario: <b>admin</b></span>
        </div>
        </>
    )
}

export default Header   