import React, { useContext } from "react";
import { Column } from "../../../styles/sharedStyles";
import { DistanceTitle, DistanceValue } from "./style";
import { destinationContext } from "../../../contexts/destinationContext";
import { destinationInfo } from "../../../hooks/destinationInfo";

const Distance = ({value}) => {
  return (<DistanceValue>{value} KM </DistanceValue>);
};

const DistanceInfo = ({ type }) => {
  const { destination } = useContext(destinationContext);

  return (
    <Column width={"50%"} style={{ marginTop: "2rem", alignItems: "flex-start", gap: "10px" }}>
      <DistanceTitle>
        {type === "distance" ? "avg. distance" : "est. travel time"}
      </DistanceTitle>
      <DistanceValue>
        {type === "distance" ? (
          <Distance value={destinationInfo[destination].distance} />
        ) : (
          destinationInfo[destination].travel_time
        )}
      </DistanceValue>
    </Column>
  );
};

export default DistanceInfo;
