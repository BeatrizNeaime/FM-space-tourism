import React from "react";
import { BiggerText, MediumText, SmallerText } from "./styles/default";
import { Column, Row } from "../../styles/sharedStyles";

const HomeText = () => {
  return (
    <Column>
      <MediumText>so, you want to travel to</MediumText>
      <BiggerText>space</BiggerText>
      <Row width={"45%"} style={{marginTop: "1rem"}} >
        <SmallerText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </SmallerText>
      </Row>
    </Column>
  );
};

export default HomeText;
