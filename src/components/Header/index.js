import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t, i18n } = useTranslation();
  const handleTranslate = (lang)=>{
    i18n.changeLanguage(lang);
  }

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
              <span className="texts">{t('Who_we_are.1')}</span>
            </div>
          </Link>   
            <Link to="/work_with_us">
            <div className="headerLinks">
              <span className="texts">Trabalhe Conosco</span>
            </div>
          </Link>
          
        </Nav>
        
        <Nav>
        <NavDropdown alignRight className="headerSuperLink texts" title="Languages" id="collasible-nav-dropdown">
            <div  className="dropdown-item text-center" onClick={()=>handleTranslate('pt')}>Português</div>
            <div  className="dropdown-item text-center" onClick={()=>handleTranslate('en')}>Inglês</div>
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

export {Header};
