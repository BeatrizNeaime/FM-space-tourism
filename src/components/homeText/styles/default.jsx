import { styled } from "styled-components";
import { colors, fonts } from "../../../styles/constants";

const BiggerText = styled.span`
    font-size: 130px;
    font-family: ${fonts.bellefair};
    color: white;
    text-transform: uppercase;

`
const MediumText = styled.span`
    color: ${colors.light_blue};
    font-family: ${fonts.barlow};
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.4rem;
`

const SmallerText = styled.span`
    color: ${colors.light_blue};
    font-family: ${fonts.barlow};
    font-size: 16px;
    font-weight: 300;
    text-align: justify;
    word-wrap: break-word;
    width: 100%;
    white-space: normal;
`

export {BiggerText, MediumText, SmallerText}