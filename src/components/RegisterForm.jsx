import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Api from "../Api";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setLoading(true);
    setError("");
    if (formData.password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const data = await Api("users/register", "POST", formData);
      console.log("Registration successful:", data);
      setRegisterSuccess(true);
    } catch (error) {
      console.log(error);
      setError(
        error.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (registerSuccess) {
      navigate("/login");
    }
  }, [registerSuccess, navigate]);

  return (
    <div className="login-form-container">
      <div className="label">New User Register</div>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error">{error}</p>}
        <InputField
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          label="Username:"
          required={true}
        />
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
          type="tel"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          placeholder="Phone Number"
          label="Phone Number:"
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
        <p className="password-text">
          Password must be at least 6 characters long, must contain letters in
          mixed case and must contain numbers.
        </p>
        <InputField
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
          label="Confirm Password:"
          required={true}
        />
        <div className="center">
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

export default RegisterForm;
