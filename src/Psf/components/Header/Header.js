import React from 'react';
import styles from '../../styles/Header.module.css';

const Header = ({ user, onLogout }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Proyecto Desarrollo de Herramientas IA</h1>
      <div className={styles.userInfo}>
        <span>Usuario: {user.nombre}</span>
        <button onClick={onLogout} className={styles.logoutButton}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Header;
