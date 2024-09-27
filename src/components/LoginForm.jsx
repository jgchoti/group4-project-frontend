import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Api from "../Api";
import "./LoginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoginSuccess(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    try {
      const data = await Api("users/login", "POST", formData);
      localStorage.setItem("token", data.token); // Save token in local storage
      localStorage.setItem("user", JSON.stringify(data.user)); // Save user data in local storage
      window.dispatchEvent(new Event("storage"));

      setLoginSuccess(true);
      navigate("/");
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form-container">
      <div className="label">Login</div>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error">{error}</p>}
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
        <div className="center">
          <button type="submit">Login</button>
        </div>
      </form>
      <p>
        Do not have an account? <NavLink to="/register">Register</NavLink>
      </p>
    </div>
  );
};

export default LoginForm;
