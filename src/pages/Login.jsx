import React, { useState, useEffect, useContext } from "react";
import LoginForm from "../components/LoginForm"; // Importar componente LoginForm
import { AuthContext } from "../context/AuthContext"; // Importar contexto de autenticación
import { useNavigate } from 'react-router-dom';
import '../components/styles/Login.css'; // Asegurarse de cargar el CSS adecuado

const Login = () => {
  const { login, error } = useContext(AuthContext); // Obtener la función login del contexto
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccess) {
      alert('Welcome! Login successful.'); // Mostrar mensaje pop-up de éxito
      navigate('/'); // Redirigir al home
    }
  }, [loginSuccess, navigate]);

  const handleLogin = async (email, password) => {
    try {
      await login(email, password); // Intentar iniciar sesión
      setLoginSuccess(true); // Si el login es exitoso
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.'); // Mostrar mensaje de error
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {error && <p className="error">{error}</p>} {/* Mostrar errores del contexto */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
