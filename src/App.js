import Routes from "./routes/routes";
import { GlobalStyles } from "./styles/global";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import React from "react";
import {  ToggleProvider } from "./contexts/useToggleContext";
import { MyThemeProvider } from "./contexts/useTheme";
function App() {
  return (
    <>
      <ToggleProvider>
        <MyThemeProvider>
          <GlobalStyles />
          <Routes />
        </MyThemeProvider>
      </ToggleProvider>
    </>
  );
}

export default App;
