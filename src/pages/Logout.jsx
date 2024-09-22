import React, { useState, useEffect } from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Api from "../Api";
import Login from "./Login";
import "../components/Logout.css";
import HomePage from "./HomePage";

const Logout = ({ token }) => {
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLogoutSuccess(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await Api("users/logout", "POST", null, token);
      console.log("Logout successful:", response);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setLogoutSuccess(true);
      setTimeout(() => {
        navigate("/"); // Redirect to home after logout
      }, 2000);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {logoutSuccess ? (
        <div>
          <h3>Logout Successfully! </h3>{" "}
          <p>You will be redirected shortly...</p>
        </div>
      ) : (
        <div className="btn1">
          <p1>Are you sure your want to logout ?</p1>

          <div className="btn">
            <button1 onClick={handleLogout}>Logout</button1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
