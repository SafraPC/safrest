import Routes from "./routes/routes";
import { GlobalStyles } from "./styles/global";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import { ToggleProvider } from "./contexts/useToggleContext";
import { MyThemeProvider } from "./contexts/useTheme";
function App() {
  return (
    <>
      <ToggleProvider>
        <MyThemeProvider>
          <ToastContainer/>
          <GlobalStyles />
          <Routes />
        </MyThemeProvider>
      </ToggleProvider>
    </>
  );
}

export default App;
