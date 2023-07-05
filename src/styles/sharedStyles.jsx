import styled from "styled-components";
import { colors } from "./constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.dark_blue};
  color: white;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-evenly"};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

const ImageContainer = styled(Container)`
  flex-direction: row;
  background-image: url(${(props) => props.img});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
  transform: ${(props) => props.transform};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export { Container, Row, ImageContainer, Column };
