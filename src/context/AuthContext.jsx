import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el contexto de autenticación
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar el usuario autenticado
  const [loading, setLoading] = useState(true); // Estado para manejar la carga inicial
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para iniciar sesión
  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      setUser(response.data.user); // Guardar los datos del usuario en el estado
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Guardar usuario en localStorage
      setError(null);
    } catch (err) {
      setError('Invalid email or password'); // Manejar error de autenticación
    }
  };

  // Función para registrar usuario
  const register = async (username, email, password) => {
    try {
      const response = await axios.post('/api/register', { username, email, password });
      setUser(response.data.user); // Guardar los datos del usuario en el estado
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Guardar usuario en localStorage
      setError(null);
    } catch (err) {
      setError('Failed to register'); // Manejar error de registro
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Comprobar si hay un usuario autenticado en localStorage cuando la aplicación se monta
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Establecer el usuario desde localStorage
    }
    setLoading(false); // Desactivar la carga inicial
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error, loading }}>
      {!loading && children} {/* Evitar que se rendericen los hijos mientras se carga */}
    </AuthContext.Provider>
  );
};
