import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Destinations from "../pages/destinations";
import Crew from "../pages/crew";

const Rotas = () => {
  return (
    <Routes>
      {/* Aqui vão as rotas da aplicação */}
      <Route path={"/"} element={<Home />} />
      <Route path={"/destination"} element={<Destinations />} />
      <Route path={"/crew"} element={<Crew />} />
    </Routes>
  )
}

export default Rotas