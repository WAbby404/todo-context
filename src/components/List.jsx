import React, { useContext } from "react";
import Item from "./Item";
import { ListItemsContext } from "../App";

function List(props) {
  const listItems = useContext(ListItemsContext);

  return (
    <div>
      {listItems.listItems.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
    </div>
  );
}

export default List;
