import React from "react";

const List = (props) => {
  return (
    <div>
      <h3> Friends </h3>
      <ul>
        {props.names.map((friend) => {
          return <li> {friend} </li>;
        })}
      </ul>
    </div>
  );
};

export default List;
