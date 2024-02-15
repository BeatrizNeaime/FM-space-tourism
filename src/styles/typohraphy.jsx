import styled from "styled-components";
import { fonts } from "./constants";

const H1 = styled.h1`
  font-family: ${fonts.ballefair};
  font-size: 155px;
  text-transform: ${(props) => props.text || "none"};
  color: ${(props) => props.color || "white"};
  font-weight: 400;
  letter-spacing: 5px;
`;

const H2 = styled.h2`
  font-family: ${fonts.ballefair};
  font-size: 100px;
  text-transform: ${(props) => props.text || "none"};
  color: ${(props) => props.color || "white"};
`;

const H3 = styled.h3`
  font-family: ${fonts.ballefair};
  font-size: 56px;
  text-transform: ${(props) => props.text || "none"};
  color: ${(props) => props.color || "white"};
`;

const H4 = styled.h4`
  font-family: ${fonts.ballefair};
  font-size: 32px;
  text-transform: ${(props) => props.text || "none"};
  color: ${(props) => props.color || "white"};
`;

const H5 = styled.h5`
  font-family: ${fonts.barlow};
  font-size: 28px;
  letter-spacing: 3px;
  text-transform: ${(props) => props.text || "none"};
  color: ${(props) => props.color || "white"};
`;

const Sub1 = styled.p`
  font-family: ${fonts.ballefair};
  font-size: 28px;
  text-transform: ${(props) => props.text || "none"};
  color: ${(props) => props.color || "white"};
`;

const Sub2 = styled.p`
  font-family: ${fonts.barlow};
  font-size: 14px;
  letter-spacing: 2.35px;
  text-transform: ${(props) => props.text || "none"};
  color: ${(props) => props.color || "white"};
`;

const Txt = styled.p`
  font-family: ${fonts.barlow};
  font-size: 18px;
  letter-spacing: 2.7px;
  text-transform: ${(props) => props.text || "none"};
  color: ${(props) => props.color || "white"};
  text-align: justify;
`;

export { H1, H2, H3, H4, H5, Sub1, Sub2, Txt};
