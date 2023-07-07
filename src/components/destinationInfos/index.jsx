import React, {useContext} from "react";
import { Column, Row } from "../../styles/sharedStyles";
import List from "./list";
import { destinationContext } from "../../contexts/destinationContext";
import { DestinationTitle } from "./title/style";
import AboutDestination from "./about";

const dest = ["moon", "mars", "europa", "titan"];

const DestinationInfos = () => {
  const { destination } = useContext(destinationContext);

  return (
    <Column width={"70%"}>
      <Row style={{marginBottom: "1rem"}} >
        {dest.map((d) => {
          return <List name={d} />;
        })}
      </Row>
      <Column>
        <DestinationTitle>{destination}</DestinationTitle>
        <AboutDestination/>
      </Column>
    </Column>
  );
};

export default DestinationInfos;
