import React from "react";

const ListItem = (props) => (
  <div>
    {" "}
    {props.item.title}
    <br></br>
    <img
      src={props.item.img}
      alt={props.item.title}
      width={200}
      height={200}
    />{" "}
  </div>
);

export default ListItem;
