import HomeText from "../components/homeText";
import CircleBtn from "../components/circleBtn";
import { Column, Container, ImageContainer } from "../styles/sharedStyles";

const HomeView = () => {
  return (
    <Container>
      <ImageContainer img={require("../assets/img/home-bg.png")}>
        {/* LEFT SIDE */}
        <Column width={"60%"} style={{ maxWidth: "60%" }}>
          <HomeText />
        </Column>
        {/* RIGHT SIDE*/}
        <Column width={"40%"}>
          <CircleBtn />
        </Column>
      </ImageContainer>
    </Container>
  );
};

export default HomeView;
