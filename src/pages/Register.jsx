import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api"; // Importar la API para comunicarse con el backend
import '../components/styles/Register.css'; // Asegurarse de cargar el CSS adecuado

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Verificar si el correo o el username ya existen
  const checkExistingUser = async () => {
    try {
      const response = await Api("users/check-existing", "POST", {
        email: formData.email,
        username: formData.username
      });

      if (response.message === "User already exists") {
        setErrorMessage("Email or Username is already taken");
        return false;
      }
      return true;
    } catch (error) {
      setErrorMessage("Error checking user existence.");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!formData.acceptTerms) {
      setErrorMessage("You must accept the terms and conditions");
      return;
    }

    // Verificar si el correo o el username ya existen antes de continuar
    const userExists = await checkExistingUser();
    if (!userExists) {
      return; // Si ya existe, detener el proceso de registro
    }

    try {
      const response = await Api("users/register", "POST", {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });

      if (response.success) {
        alert("Registration successful!");
        navigate("/login"); // Redirigir al login después de un registro exitoso
      }
    } catch (error) {
      setErrorMessage("Registration failed. User may already exist.");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">New User Register</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
        />

        <div className="terms">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            required
          />
          <label>I accept the terms and conditions</label>
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
