import React from "react";
import "../ComponentsStyles/CharCard.css";

export const CharCard = (props) => {
  return (
    <div className="MainCard">
      <div className="imgDiv">
        <img src={props.imgurl} alt="" />
      </div>

      <div className="FontC1">{props.name}</div>
      <div className="Flex">
        <img src={props.flagurl} alt="" />
        <div className="FontC2">{props.subject} teacher</div>
      </div>
    </div>
  );
};
