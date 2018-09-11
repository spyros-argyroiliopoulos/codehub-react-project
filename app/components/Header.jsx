import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar is-white">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item brand-text">Dashboard</Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/programs" className="navbar-item">Programs</Link>
            <Link to="/students" className="navbar-item">Students</Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
