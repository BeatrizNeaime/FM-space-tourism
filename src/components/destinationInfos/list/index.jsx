import React from "react";
import { ListItem } from "./style";
import { useContext } from "react";
import { destinationContext } from "../../../contexts/destinationContext";

const List = ({ name }) => {
  const { destination, setDestination } = useContext(destinationContext);

  return (
    <ListItem
      active={name === destination}
      onClick={() => {
        setDestination(name);
      }}
    >
      {name}
    </ListItem>
  );
};

export default List;
