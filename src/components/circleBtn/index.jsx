import React from "react";
import { Circle, CircleText } from "./style";
import { Link } from "react-router-dom";

const CircleBtn = () => {
  return (
    <Link to="/destination" style={{ textDecoration: "none" }}>
      <Circle>
        <CircleText>EXPLORE</CircleText>
      </Circle>
    </Link>
  );
};

export default CircleBtn;
