import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AuthToggle = ({ style }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(Boolean(token));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {isLoggedIn ? (
        <NavLink onClick={handleLogout} style={style}>
          Logout
        </NavLink>
      ) : (
        <NavLink to="/login" style={style}>
          Login
        </NavLink>
      )}
    </>
  );
};

export default AuthToggle;
