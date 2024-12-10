// src/pages/Login/Login.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Asegúrate de que la ruta sea correcta

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(username, password);
    if (user) {
      navigate('/superadmin'); // Redirige al dashboard de Super Admin
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#A020F0', // Fondo morado
};

const formContainerStyle = {
  backgroundColor: 'white', // Fondo blanco para el formulario
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para dar profundidad
  width: '100%',
  maxWidth: '400px', // Ancho máximo del formulario
};

const titleStyle = {
  color: '#A020F0', // Color del título
  textAlign: 'center',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #A020F0', // Borde morado
  outline: 'none',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#A020F0', // Fondo morado
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default Login;