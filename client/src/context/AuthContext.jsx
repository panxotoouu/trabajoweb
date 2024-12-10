
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(null);

  const login = (username, password) => {
    // Verificar las credenciales directamente
    if (username === 'superadmin' && password === '12345') {
      setUser ('superadmin');
      localStorage.setItem('user', 'superadmin');
      return 'superadmin'; // Retorna el usuario autenticado
    }
    return null; // Retorna null si las credenciales son incorrectas
  };

  const logout = () => {
    setUser (null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};