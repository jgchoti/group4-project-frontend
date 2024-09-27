import React, { useState, useEffect } from "react";
import { NavLink, Route, Router, Routes, useNavigate } from "react-router-dom";
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

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.dispatchEvent(new Event("storage"));
      setLogoutSuccess(true);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {logoutSuccess ? (
        <div>
          <div>
            <h3>Logout Successfully! </h3>{" "}
          </div>
        </div>
      ) : (
        <div className="btn1">
          <p className="p1">Are you sure your want to logout ?</p>

          <div className="btn">
            <button className="button1" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
