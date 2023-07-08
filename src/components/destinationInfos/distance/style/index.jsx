import { styled } from "styled-components";
import { colors, fonts } from "../../../../styles/constants";

const DistanceTitle = styled.span`
    color: ${colors.light_blue};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: ${fonts.barlow};
    font-weight: 400;
    font-size: 14px;
`

const DistanceValue = styled.span`
    color: white;
    font-family: ${fonts.bellefair};
    text-transform: uppercase;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 25px;
`

export {DistanceTitle, DistanceValue}