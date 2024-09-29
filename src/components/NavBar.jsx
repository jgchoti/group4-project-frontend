import React, { useEffect, useState } from "react";
import "./NavBar.css";
import booklogo from "../assets/booklogo.png";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const baseStyle = {
  color: "#FFFCFC",
  backgroundColor: "#050505",
  borderRadius: "0.375rem",
  padding: "0.75rem 1rem",
  textAlign: "center",
  transition: "background-color 0.3s",
  textDecoration: "none",
};
const activeStyle = {
  backgroundColor: " #5466DD",
  color: "#F0E5E5",
};
const navLinkStyle = ({ isActive }) => ({
  ...baseStyle,

  ...(isActive ? activeStyle : {}),
});

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkToken = () => {
    const isTokenSet = !!localStorage.getItem("token");
    if (isTokenSet !== isLoggedIn) setIsLoggedIn(isTokenSet);
  };

  useEffect(() => {
    window.addEventListener("storage", checkToken);
    return () => {
      window.removeEventListener("storage", checkToken);
    };
  });

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo-container">
            <NavLink className="logo-link" to="/">
              <img className="logo-img" src={booklogo} alt="BookMate" />
            </NavLink>
            <SearchBar />
            <div className="nav-links">
              <div className="links">
                <NavLink to="/" style={navLinkStyle}>
                  Home
                </NavLink>
                <NavLink to="/books" style={navLinkStyle}>
                  Books
                </NavLink>
                <NavLink to="/about" style={navLinkStyle}>
                  About Us
                </NavLink>
                {/* Ernesto: Correct syntax and ensure conditionals are properly formatted */}
                {isLoggedIn ? (
                  <>
                    <NavLink to="/add-book" style={navLinkStyle}>
                      Add Book
                    </NavLink>
                    <NavLink to="/logout" style={navLinkStyle}>
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <NavLink to="/login" style={navLinkStyle}>
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
