import styled from 'styled-components'
import { colors, fonts } from '../../../../styles/constants'

const CrewPatent = styled.span`
    font-family: ${fonts.bellefair};
    color: white;
    font-weight: 400;
    text-transform: uppercase;
    opacity: 0.5;
    font-size: 22px;
    margin-bottom: 1rem;
`

const CrewName = styled.span`
    font-family: ${fonts.bellefair};
    color: white;
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 1rem;
`

const CrewInfor = styled.span`
    color: ${colors.light_blue};
    font-family: ${fonts.barlow};
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 1rem;
    max-width: 50%;
`

export {CrewPatent, CrewName, CrewInfor}