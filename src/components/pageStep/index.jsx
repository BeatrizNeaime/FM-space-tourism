import React from "react";
import { Row } from "../../styles/sharedStyles";
import { TitleNumber, TitleText } from "./style";

const PageStep = ({ num, text }) => {
  return (
    <Row width={"100%"} style={{ gap: "10px", justifyContent: "flex-start"}} >
      <TitleNumber>{num}</TitleNumber>
      <TitleText>{text}</TitleText>
    </Row>
  );
};

export default PageStep;
