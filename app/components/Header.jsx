import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar is-white">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item brand-text">Dashboard</Link>
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/programs" className="navbar-item">Programs</Link>
              <Link to="/students" className="navbar-item">Students</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Header.propTypes = {
//   location: PropTypes.object.isRequired,
//   classes: PropTypes.object.isRequired,
//   anchorEl: PropTypes.object,
//   handleIconClick: PropTypes.func.isRequired,
//   handleCloseMenu: PropTypes.func.isRequired,
//   handleGoToURLAndCloseMenu: PropTypes.func.isRequired
// };

export default Header;

