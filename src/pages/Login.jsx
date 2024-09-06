import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoginSuccess(Boolean(token));
  }, []);

  if (loginSuccess) {
    return (
      <div>
        <h1>Welcome!</h1>
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
