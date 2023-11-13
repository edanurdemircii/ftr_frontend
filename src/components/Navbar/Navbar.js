import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <Link to="/" className="app_header">
        Fizik Tedavi Uygulaması
      </Link>
      <ul className="nav_list">
        <li className="item">
          <Link to="/doktorgirisi">Doktor Girişi</Link>
        </li>
        <li className="item">
          <Link to="/hastagirisi">Hasta Girişi</Link>
        </li>
        <li className="item">
          <Link to="/hakkında">Hakkında</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;