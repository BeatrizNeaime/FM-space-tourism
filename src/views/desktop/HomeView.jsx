import CircleBtn from "../../components/circleBtn";
import HomeText from "../../components/homeText";
import Navbar from "../../components/navbar";
import {
  Column,
  Container,
  ImageContainer,
  Row,
  ContentContainer,
} from "../../styles/sharedStyles";

const HomeViewDesktop = () => {
  return (
    <Container>
      <ImageContainer img={require("../../assets/img/00-bg.png")}>
        <Navbar active={"Home"} />
        <ContentContainer width={"100%"}>
          {/* LEFT SIDE */}
          <Row>
            <Column width={"60%"} style={{ maxWidth: "60%" }}>
              <HomeText />
            </Column>
            {/* RIGHT SIDE*/}
            <Column width={"40%"}>
              <CircleBtn />
            </Column>
          </Row>
        </ContentContainer>
      </ImageContainer>
    </Container>
  );
};

export default HomeViewDesktop;
