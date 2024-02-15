import styled from "styled-components";
import { colors } from "./constants";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || "space-evenly"};
  align-items: center;
  width: ${(props) => props.width || "100%"};
  gap: ${(props) => props.gap || "1rem"};
`;

const Column = styled(Row)`
  flex-direction: column;
`;

const PageContainer = styled(Column)`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  border-color: ${colors.ocean};
`;

const ImageContainer = styled(PageContainer)`
  flex-direction: row;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export { Row, Column, PageContainer, ImageContainer };
