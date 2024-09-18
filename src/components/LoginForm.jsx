import React, { useState } from "react";
import InputField from "./InputField";
import '../components/styles/Login.css'; // Asegurarse de cargar el CSS adecuado

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData.email, formData.password); // Llama al handler de Login con los datos
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputField
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        label="Email:"
        required={true}
      />
      <InputField
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        label="Password:"
        required={true}
      />
      <button type="submit" className="submit-btn">Login</button>
    </form>
  );
};

export default LoginForm;
