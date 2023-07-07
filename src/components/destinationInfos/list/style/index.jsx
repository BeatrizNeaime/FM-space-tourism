import styled from "styled-components";
import { colors, fonts } from "../../../../styles/constants";

const ListItem = styled.span`
  color: ${(props) => (props.active ? "#fff" : colors.light_blue)};
  border-bottom: ${(props) => (props.active ? "3px solid white" : "none")};
  text-transform: uppercase;
  font-family: ${fonts.barlow};
  letter-spacing: 2px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid rgba(255, 255, 255, 0.8);
  }
`;

export {ListItem}
