import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="headerStyles">
      <Navbar.Brand className="headerTitle ">
      <Link to="/">
            <label>SafresTs</label>
          </Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to="/who_we_are">
            <div className="headerLinks">
              <span className="texts">Quem Somos</span>
            </div>
          </Link>   
            <Link to="/work_with_us">
            <div className="headerLinks">
              <span className="texts">Trabalhe Conosco</span>
            </div>
          </Link>
          
        </Nav>
        
        <Nav>
        <NavDropdown alignRight className="headerLinks texts" title="Languages" id="collasible-nav-dropdown">
            <div  className="dropdown-item">Português</div>
            <div  className="dropdown-item">Inglês</div>
          </NavDropdown>
        <Link to="/login">
            <div className="headerLinks">
              <span className="texts">Login</span>
            </div>
          </Link>   
            <Link to="/register">
            <div className="headerLinks">
              <span className="texts">Cadastro</span>
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
