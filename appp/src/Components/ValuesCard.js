import React from "react";
import "../ComponentsStyles/ValuesCard.css";

export const ValuesCard = (props) => {
  return (
    <div className="ValuesCardBody">
      <div>
        <img src={props.url} alt="" />
      </div>
      <div className="ValuesCardFont1">{props.heading}</div>
      <div className="ValuesCardFont2">{props.matter}</div>
    </div>
  );
};
