import { useSelector } from "react-redux";
import { useState } from "react";
import { List } from "../../styles";

const TreasureList = (props) => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const items = props.items;

  let arrayOfItems = items
    .filter((items) => items.name.toLowerCase().includes(query.toLowerCase()))
    .map((items) => <h3>{items.name}</h3>);

  return (
    <div>
      <List>{arrayOfItems}</List>
    </div>
  );
};

export default TreasureList;
