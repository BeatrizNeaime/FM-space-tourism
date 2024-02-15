import styled from "styled-components"
import { fonts } from "../../styles/constants"

const Homebtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  height: 275px;
  width: 275px;
  cursor: pointer;
  color: black; 
  text-transform: uppercase;
  font-family: ${fonts.ballefair};
  letter-spacing: 2;
  transition: all 0.2s ease-in-out;
  font-size: 32px;

  &:hover{
    box-shadow: 0 0 0 90px rgba(255, 255, 255, 0.3);
  }

` 

const HomeButton = () => {
  return (
    <Homebtn>explore</Homebtn>
  )
}

export default HomeButton