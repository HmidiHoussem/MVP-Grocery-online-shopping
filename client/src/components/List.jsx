import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div>
    <hr />
    we have {props.items.length} items for now.
    {props.items.map((item, index) => (
      <div key={index}>
        <ListItem item={item} />
      </div>
    ))}
  </div>
);

export default List;
