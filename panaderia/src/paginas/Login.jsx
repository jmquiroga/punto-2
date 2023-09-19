import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../estilos/login.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data ={
        usuario: usuario,
        password: password,
    }



    await axios
        .post('http://89.116.25.43:3500/api/login', data)
        .then((response) => {  
            console.log(response);
            localStorage.setItem('token', response.data.jwt);
            localStorage.setItem("user", response.data.user);
            localStorage.setItem("username", response.data.user.usuario)
            navigate("/dashboard")
            })

        .catch((err) => {
            setError(err);
        });

  }

    return (
        <div className="main">
            <div className="fondo">
                <div className="cosas">
                    <div className="nombre">
                        <p>Bienvenidos a PADEQUI</p>
                    </div>
                    <div className="nombre">
                        <label htmlFor="">Usuario:</label>
                        <input
                            type="text"
                            id="user"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div className="contra">
                        <label htmlFor="">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="recu">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Recuérdame</label>
                        <a id="nn">Olvidé mi contraseña</a>
                    </div>
                    <div className="botonn">
                        <button onClick={handleSubmit}>Iniciar sesión</button>
                        {error && <p>{error}</p>} {}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
