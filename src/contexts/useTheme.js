import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { ToggleContext } from "./useToggleContext";

const MyThemeProvider = ({ children }) => {
  const { toggle } = useContext(ToggleContext);
  const [theme, setTheme] = useState({});

  useEffect(()=>{
    setTheme(toggle.title === "light" ? light : dark);
  },[toggle])
 

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { MyThemeProvider };
