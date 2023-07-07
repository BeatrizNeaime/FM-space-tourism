import React from "react";
import HomeViewDesktop from "../views/desktop/HomeView";
import useMediaQuery from '../hooks/useMediaQuery'

const Home = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
    return desktop ? <HomeViewDesktop /> : ""
};

export default Home;
