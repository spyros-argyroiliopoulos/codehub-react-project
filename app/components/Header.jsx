import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Navbar, Nav, NavItem } from "react-bootstrap";

const Header = () => (
  <Navbar>
    <Row>
      <Col xs={12}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="navbar-item brand-text">Code.Hub Dashboard</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem
            componentClass={Link}
            to="/courses"
            href="/courses"
            active={location.pathname === "/courses"}
          >
            Courses
          </NavItem>
        </Nav>
      </Col>
    </Row>
  </Navbar>
);

export default Header;
