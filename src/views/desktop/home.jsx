import bg from "../../assets/img/desktop/00-bg.png";
import HomeButton from "../../components/homeBtn";
import { colors } from "../../styles/constants";
import DesktopLayout from "../../styles/desktop.layout";
import { Column, Row } from "../../styles/sharedStyles";
import { H1, H5, Txt } from "../../styles/typohraphy";
 
const DesktopHome = () => { 
  return (
    <DesktopLayout bg={bg}>
      <Row style={{ alignItems: "flex-end" }}>
        <Column
          width={"60%"}
          style={{ justifyContent: "flex-start" }}
          gap={"24px"}
        >
          <H5 text={"uppercase"} color={colors.blue}>
            so, you want to travel to
          </H5>
          <H1 text={"uppercase"}>space</H1>
          <Row width={"60%"}>
            <Txt color={colors.blue} >
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </Txt>
          </Row>
        </Column>
        <Column width={"40%"}>
          <HomeButton>explore</HomeButton>
        </Column>
      </Row>
    </DesktopLayout>
  );
};

export default DesktopHome;
