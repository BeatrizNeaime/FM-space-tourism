import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Rotas } from "./router/routes";
import Navbar from "./components/navbar";

function App() {

  return (
    <Router>
      <Navbar/>
      <Rotas/>
      <GlobalStyle />
    </Router>
  );
}

export default App;
