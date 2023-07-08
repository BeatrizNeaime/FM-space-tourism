import React, {useContext} from 'react'
import { Column } from '../../../styles/sharedStyles'
import { CrewName, CrewPatent, CrewInfor } from './style'
import { crewContext } from '../../../contexts/crewContext'
import { crewInfo } from '../../../hooks/crewInfo'

const CrewInfo = () => {

    const {crew} = useContext(crewContext);

  return (
    <Column style={{alignItems: "flex-start"}} width={"auto"} >
        <CrewPatent>
            {crewInfo[crew].patent}
        </CrewPatent>
        <CrewName>
            {crewInfo[crew].name}
        </CrewName>
        <CrewInfor>
          aaaaaa
        </CrewInfor>
    </Column>
  )
}

export default CrewInfo