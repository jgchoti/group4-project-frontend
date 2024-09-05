import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import InputField from "./InputField";
import Api from "../Api";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setLoading(true);
    setError("");
    try {
      const data = await Api("users/login", "POST", formData);
      localStorage.setItem("token", data.token);
      console.log("Login successful:", data);
      setLoginSuccess(true);
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (loginSuccess) {
    return (
      <div>
        <p>Login successful!</p>
        <NavLink to="/">Return to Home</NavLink>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputField
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <InputField
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
