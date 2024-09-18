import React, { useState } from "react";
import '../components/styles/Register.css'; // Asegurarse de cargar el CSS adecuado

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para registrar usuario (conectar con tu backend)
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">New User Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
