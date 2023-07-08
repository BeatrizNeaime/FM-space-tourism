import React, { useContext } from "react";
import { SmallerText } from "../../homeText/styles/default";
import { destinationContext } from "../../../contexts/destinationContext";
import { destinationInfo } from "../../../hooks/destinationInfo";
import { Column, Row } from "../../../styles/sharedStyles";
import ImageDivider from "../../imageDivider";
import DistanceInfo from "../distance";

const AboutDestination = () => {
  const { destination } = useContext(destinationContext);

  return (
    <Column>
      <SmallerText>{destinationInfo[destination].info}</SmallerText>
      <ImageDivider />
      <Row>
        <DistanceInfo type={"distance"} />
        <DistanceInfo />
      </Row>
    </Column>
  );
};

export default AboutDestination;
