import React from "react";
import "./NavBar.css"; // Ensure this file is loaded correctly
import booklogo from "../assets/booklogo.png";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  // Base style for navigation buttons
  const baseStyle = {
    color: "#fffcfc",
    backgroundColor: "#050505",
    borderRadius: "0.375rem",
    padding: "0.75rem 1rem",
    textAlign: "center",
    transition: "background-color 0.3s",
    textDecoration: "none",
  };

  // when style is active
  const activeStyle = {
    backgroundColor: " #5466dd",
    color: "#f0e5e5",
  };

  // Making active dynamic
  const navLinkStyle = ({ isActive }) => ({
    ...baseStyle,
    ...(isActive ? activeStyle : {}),
  });

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo-container">
            <NavLink className="logo-link" to="/">
              <img className="logo-img" src={booklogo} alt="BookMate" />
              <span className="logo-text">BookMate</span>
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
                <NavLink to="/add-book" style={navLinkStyle}>
                  Add Book
                </NavLink>
                <NavLink to="/about" style={navLinkStyle}>
                  About us
                </NavLink>
                <NavLink to="/login" style={navLinkStyle}>
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
