import React from "react";
import { DestImage } from "./style";

const DestinationImage = ({ img }) => {
  return (
    <DestImage src={require(`../../assets/img/destinations/${img}.png`)} />
  );
};

export default DestinationImage;
