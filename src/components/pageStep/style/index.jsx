import styled from "styled-components";
import { fonts } from "../../../styles/constants";

const TitleNumber = styled.span`
  color: #fff;
  font-family: ${fonts.barlow};
  font-weight: 700;
  opacity: 0.25;
  letter-spacing: 4px;
`;

const TitleText = styled.span`
  font-family: ${fonts.barlow};
  color: #fff;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export { TitleNumber, TitleText };
