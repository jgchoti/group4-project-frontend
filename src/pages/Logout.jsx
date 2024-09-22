import React, { useState, useEffect } from "react";
import { NavLink,Route,Router, Routes} from "react-router-dom";
import Api from "../Api";
import Login from "./Login";
import "../components/Logout.css";
import HomePage from "./HomePage";


const Logout = ({ token }) => {
  const [logoutSuccess, setLogoutSuccess] = useState(false);

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
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {logoutSuccess ? (
        <div>        <div>

            <h3>Logout Successfully! </h3>        </div>

          <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        </div>
      ) : (
        <div className="btn1">

        <p1>Are you sure your want to logout ?</p1>
        
        <div className="btn">

        <button1 onClick={handleLogout}>Logout</button1></div></div>
      )}
    </div>
  );
};

export default Logout;