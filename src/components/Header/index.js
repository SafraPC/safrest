import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';
import i18n from '../../services/i18next';
const MY_TRANSLATE = "i18nextLng";
const Header = () => {
  
  const handleTranslate = (lang)=>{
    localStorage.setItem(MY_TRANSLATE,lang) 
    window.location = window.location;
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
              <span className="texts">{i18n.t('header.who_we_are.text')}</span>
            </div>
          </Link>   
            <Link to="/work_with_us">
            <div className="headerLinks">
              <span className="texts">{i18n.t('header.work_with_us.text')}</span>
            </div>
          </Link>
          
        </Nav>
        
        <Nav>
        <NavDropdown alignRight className="headerSuperLink texts" title={i18n.t('header.languages.text')} id="collasible-nav-dropdown">
            <div  className="dropdown-item text-center" onClick={()=>handleTranslate('pt')}>Português</div> 
            <div  className="dropdown-item text-center" onClick={()=>handleTranslate('en')}>Inglês</div> 
          </NavDropdown>
        <Link to="/login">
            <div className="headerLinks">
            <span className="texts">{i18n.t('header.login.text')}</span>

            </div>
          </Link>   
            <Link to="/register">
            <div className="headerLinks">
            <span className="texts">{i18n.t('header.register.text')}</span>

            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export {Header};
