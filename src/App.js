import Rotas from "./hooks/Router";
import Home from "./pages/home";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { destinationContext } from "./contexts/destinationContext";

function App() {

  const [destination, setDestination] = useState("moon");

  return (
    <div className="App">
      <Router>
        <destinationContext.Provider value={{ destination, setDestination }}>
          <Rotas />
        </destinationContext.Provider>
      </Router>
    </div>
  );
}

export default App;
