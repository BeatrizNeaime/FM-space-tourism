import React from "react";
import {
  Column,
  Container,
  ContentContainer,
  ImageContainer,
  Row,
} from "../../styles/sharedStyles";
import Navbar from "../../components/navbar/index";
import PageStep from "../../components/pageStep";
import CrewInfo from "../../components/crew/crewInfo";

const CrewView = () => {
  return (
    <Container>
      <ImageContainer img={require("../../assets/img/02-bg.png")}>
        <Navbar active={"Crew"} />

        <ContentContainer>
          <Row height={"100%"} >
            <Column
              width={"50%"}
              height={"90%"}
            >
              <Column width={"auto"} height={"80%"} >
                <PageStep num={"2"} text={"meet your crew"} />
                <CrewInfo/>
              </Column>
            </Column>
            <Column width={"50%"}>
            </Column>
          </Row>
        </ContentContainer>
      </ImageContainer>
    </Container>
  );
};

export default CrewView;
