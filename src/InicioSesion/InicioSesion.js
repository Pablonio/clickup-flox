// Login.jsx
import React, { useState } from 'react';
import styles from './styles/InicioSesion.module.css';
import { verificarUsuario } from '../utils/auth';
import { miembros } from '../utils/miembros';

const Login = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ nombre: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuarioAutenticado = verificarUsuario(credentials.nombre, credentials.password);

        if (usuarioAutenticado) {
            onLogin(usuarioAutenticado);
            setError('');
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Acceso al Proyecto IA</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Usuario:</label>
                        <input
                            type="text"
                            value={credentials.nombre}
                            onChange={(e) => setCredentials({ ...credentials, nombre: e.target.value })}
                            placeholder="Ingrese su usuario"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            placeholder="Ingrese su contraseña"
                            required
                        />
                    </div>
                    {error && <div className={styles.error}>{error}</div>}
                    <button type="submit">Iniciar Sesión</button>
                </form>
                <div className={styles.helpText}>
                    <p>Usuarios disponibles:</p>
                    <ul>
                        {miembros.map((miembro, index) => (
                            <li key={index}>{miembro}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;
