import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Coin´s Shop</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/nosotros">
            Nosotros
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/monedas">
            Monedas
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
