import React, { useContext } from 'react';
import './NavBar.css'; // Asegurarse de cargar el CSS adecuado
import booklogo from '../assets/booklogo.png';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Importar contexto de autenticación

const NavBar = () => {
  const { user, logout } = useContext(AuthContext); // Obtener el estado de usuario y logout del contexto

  // Estilo base para los enlaces de navegación
  const baseStyle = {
    color: '#fffcfc',
    backgroundColor: '#050505',
    borderRadius: '0.375rem',
    padding: '0.75rem 1rem',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    textDecoration: 'none',
  };

  // Estilo para el enlace activo
  const activeStyle = {
    backgroundColor: '#5466dd',
    color: '#f0e5e5',
  };

  // Aplicar estilos dinámicos a los enlaces de navegación
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
            <div className="nav-links">
              <div className="links">
                <NavLink to="/" style={navLinkStyle}>Home</NavLink>
                <NavLink to="/about" style={navLinkStyle}>About Us</NavLink>
                <NavLink to="/books" style={navLinkStyle}>Books</NavLink>
               
                {/* Mostrar solo si el usuario está autenticado */}
                {user && (
                  <>
                   
                   <NavLink to="/add-book" style={navLinkStyle}>Add Book</NavLink>
                    <button onClick={logout} className="nav-link">Logout</button>
                  </>
                )}

                {/* Mostrar solo si el usuario NO está autenticado */}
                {!user && <NavLink to="/login" style={navLinkStyle}>Login</NavLink>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
