import { styled } from "styled-components";
import { fonts } from "../../../../styles/constants";

const LinkNavbar = styled.span`
  color: white;
  font-family: ${fonts.barlow};
  letter-spacing: 2px;
  opacity: 1;
`;

const LinkDiv = styled.div`
  width: auto;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: ${(props) =>
    props.active === true ? "3px solid rgba(255,255,255,0.8)" : "none"};

  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }
`;

export { LinkDiv, LinkNavbar };
