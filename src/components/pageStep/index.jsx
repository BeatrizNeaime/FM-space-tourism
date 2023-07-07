import React from "react";
import { Row } from "../../styles/sharedStyles";
import { TitleNumber, TitleText } from "./style";

const PageStep = ({ num, text }) => {
  return (
    <Row  width={"auto"} style={{ gap: "10px", margin: "0 2rem"}}>
      <TitleNumber>{num}</TitleNumber>
      <TitleText>{text}</TitleText>
    </Row>
  );
};

export default PageStep;
