import styled from "styled-components";
import { filters, fonts } from "../../../styles/constants";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 8vh;
  right: 0;
  left: 0;
  top: 40px;
  position: absolute;
  background-color: transparent;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  width: 55%;
  height: 100%;
  background: ${filters.glass.bg};
  backdrop-filter: ${filters.glass.effect};
  padding-right: 20px;

  .wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LinkContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  width: max-content;
  background-color: transparent;
`;

const LinkMarker = styled.div`
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  background-color: white;
  transition: transform 250ms ease-in-out;
  bottom: -150%;
`;

const LinkLabel = styled.a`
  color: white;
  font-family: ${fonts.barlow};
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  align-items: center;
  justify-content: center;
  letter-spacing: 2.7px;
  position: relative;

  &::after {
    position: absolute;
    bottom: -150%;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: rgba(255, 255, 255, 0.5);
    height: 3px;
    transition: all 0.5s;
    } 
`;

const Logo = styled.img`
  position: absolute;
  left: 55px;
  height: 48px;
  width: 48px;
`;

const NavMark = styled.div`
  position: absolute;
  height: 1px;
  width: 475px;
  background-color: white;
  transition: transform 250ms ease-in-out;
  left: 170px;
  z-index: 999;
  opacity: 0.2515;
`;

export { NavContainer, Navigation, LinkContainer, LinkMarker, LinkLabel, Logo, NavMark };
