import React from "react";
import DestinationViewDesktop from "../views/desktop/DestinationView";
import useMediaQuery from '../hooks/useMediaQuery'

const Destination = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  return desktop ? <DestinationViewDesktop /> : "";
};

export default Destination;
