import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
      setLoginSuccess(true);
    }
  }, []);

  if (loginSuccess && user) {
    return (
      <div>
        <h1>Welcome! {user.username}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
