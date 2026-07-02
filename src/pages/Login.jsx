
import { useState } from "react";
import '../styles/login.css';

 function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!usuario || !password) {
      alert("Ingrese usuario y contraseña");
      return;
    }

    alert(`Bienvenido ${usuario}`);
  };

  return (
    <div className="vsiaf-container-Login">
      <div className="top-bar">
        Ingrese su Identificacion
      </div>

      <div className="header-login">
        <div className="logo-area">
          <h1>V.S.I.A.F</h1>
          <span>Sistema de Activos Fijos</span>
        </div>
      </div>

      <div className="content">
        <div className="login-box">
          <h2>Login</h2>

          <div className="form-row">
            <label>Nombre del Usuario:</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="bottom-row">
            <span className="nota">
              NOTA: Es sensible al contexto
            </span>

            <button onClick={handleLogin}className="btn-login">
              Aceptar
            </button>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>vSIAF versión 2.0</p>
        <p>Copyright © 1999-2012 DGSGIF</p>
        <p>Todos los derechos reservados</p>
      </div>
    </div>
  );
}

export default Login;