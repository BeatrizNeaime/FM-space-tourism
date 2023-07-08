import React, { useContext } from "react";
import {
  Column,
  Container,
  ContentContainer,
  ImageContainer,
  Row,
} from "../../styles/sharedStyles";
import Navbar from "../../components/navbar/index";
import PageStep from "../../components/pageStep";
import DestinationInfos from "../../components/destinationInfos";
import DestinationImage from "../../components/destinationImage";
import { destinationContext } from "../../contexts/destinationContext";

const DestinationViewDesktop = () => {
  const { destination } = useContext(destinationContext);

  return (
    <Container>
      <ImageContainer img={require("../../assets/img/01-bg.png")}>
        <Navbar active={"Destination"} />
        <ContentContainer width={"100%"} style={{ alignItems: "flex-start" }}>
          <Row>
            <Column width={"60%"} style={{ gap: "3rem" }}>
              <PageStep num={"01"} text={"pick your destination"} />
              <DestinationImage img={destination} />
            </Column>
            <Column width={"40%"}>
              <DestinationInfos />
            </Column>
          </Row>
        </ContentContainer>
      </ImageContainer>
    </Container>
  );
};

export default DestinationViewDesktop;
