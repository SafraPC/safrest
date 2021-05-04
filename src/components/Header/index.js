import React, { useContext } from "react";
import { Link } from "react-router-dom";
import i18n from "../../services/i18next";
import { MyNav, MyNavBar, MyNavDropdown } from "./styles";
import Switch from "react-switch";
import { ToggleContext } from "../../contexts/useToggleContext";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import {MdWbSunny} from 'react-icons/md'
import {FaMoon} from 'react-icons/fa'


const MY_TRANSLATE = "i18nextLng";

const Header = () => {

	const {toggle,setToggle} = useContext(ToggleContext);
	const changeTheme = ()=>{
		if(toggle.title === "light"){
			setToggle(dark)
		}else{
			setToggle(light)
		}
	}
  const handleTranslate = (lang) => {
    localStorage.setItem(MY_TRANSLATE, lang);
    window.location = window.location.href
  };

  return (
    <MyNavBar collapseOnSelect expand="lg" className="headerStyles">
      <MyNavBar.Brand className="headerTitle">
        <Link to="/">
          <label>SafresTs</label>
        </Link>
      </MyNavBar.Brand>
      <MyNavBar.Toggle aria-controls="responsive-navbar-nav" />
      <MyNavBar.Collapse id="responsive-navbar-nav">
        <MyNav className="mr-auto">
          <Link to="/who_we_are">
            <div className="headerLinks">
              <span className="texts">{i18n.t("header.who_we_are.text")}</span>
            </div>
          </Link>
          <Link to="/work_with_us">
            <div className="headerLinks">
              <span className="texts">
                {i18n.t("header.work_with_us.text")}
              </span>
            </div>
          </Link>
        </MyNav>

        <MyNav>
          <div className="switchLinks">
            <Switch
              onChange={changeTheme}
              checked={toggle.title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={40}
              handleDiameter={20}
              offColor="#ccc"
              onColor="#8ba6f7"
            />
            <div>
            {toggle.title !== 'dark'?
            <MdWbSunny size={25} fill={'yellow'}/>:
            <FaMoon size={25} fill={'silver'}/>}
            </div>
          </div>

          <MyNavDropdown
            alignRight
            className="headerSuperLink texts"
            title={i18n.t("header.languages.text")}
            id="collasible-nav-dropdown"
          >
            <div
              className="dropdown-item text-center"
              onClick={() => handleTranslate("pt")}
            >
              Português
            </div>
            <div
              className="dropdown-item text-center"
              onClick={() => handleTranslate("en")}
            >
              Inglês
            </div>
          </MyNavDropdown>
          <Link to="/login">
            <div className="headerLinks">
              <span className="texts">{i18n.t("header.login.text")}</span>
            </div>
          </Link>
          <Link to="/register">
            <div className="headerLinks">
              <span className="texts">{i18n.t("header.register.text")}</span>
            </div>
          </Link>
        </MyNav>
      </MyNavBar.Collapse>
    </MyNavBar>
  );
};

export { Header };
