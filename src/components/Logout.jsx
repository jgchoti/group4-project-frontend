import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Api from "../Api";

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
        <div>
          <p>You have successfully logged out.</p>
          <NavLink to="/">return to home</NavLink>
        </div>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Logout;
