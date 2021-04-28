import Routes from "./routes/routes";
import { GlobalStyles } from "./styles/global";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {ThemeProvider} from "styled-components";
import light from "./styles/themes/light";
function App() {
  return (
    <>
    <ThemeProvider theme={light}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>

  </>
  );
}

export default App;
