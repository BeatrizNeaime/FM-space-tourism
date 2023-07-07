import { styled } from "styled-components";
import { fonts } from "../../../styles/constants";

const Circle = styled.div`
  height: 207px;
  width: 207px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 6px 25px rgba(255, 255, 255, 0.103);
  }
`;

const CircleText = styled.span`
  font-family: ${fonts.bellefair};
  font-weight: 400;
  font-size: 30px;
  color: black;
  text-decoration: none !important ;
`;

export { Circle, CircleText };
