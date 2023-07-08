import Rotas from "./hooks/Router";
import Home from "./pages/home";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { destinationContext } from "./contexts/destinationContext";
import { crewContext } from "./contexts/crewContext";

function App() {

  const [destination, setDestination] = useState("moon");
  const [crew, setCrew] = useState(1)

  return (
    <div className="App">
      <Router>
        <destinationContext.Provider value={{ destination, setDestination }}>
          <crewContext.Provider value={{ crew, setCrew }}>
            <Rotas />
          </crewContext.Provider>
        </destinationContext.Provider>
      </Router>
    </div>
  );
}

export default App;
