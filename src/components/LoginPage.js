// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authService';

function LoginPage() {
  const handleLogin = () => {
    // Lógica de inicio de sesión utilizando authService
    authService.login();
  };

  return (
    <div>
      <h1> Página de Inicio de Sesión </h1>
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <br />
      <Link to="/">Volver INICIO</Link>
    </div>
  );
}

export default LoginPage; 