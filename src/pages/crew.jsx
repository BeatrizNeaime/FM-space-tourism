import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import CrewView from "../views/desktop/CrewView";

const Crew = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return desktop ? <CrewView/> : "";
};

export default Crew;
