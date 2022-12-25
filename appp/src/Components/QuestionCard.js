import React from "react";
import "../ComponentsStyles/QuestionCard.css";

export const QuestionCard = (props) => {
  const [IsClicked, toggle] = React.useState(true);

  function handleclick() {
    toggle(!IsClicked);
  }

  return (
    <div>
      {IsClicked && (
        <div className="QuestionCardBody">
          <div className="QuestionFrame FontQC-1">{props.qs}</div>
          <img
            className="SignImg"
            onClick={() => {
              handleclick();
            }}
            src="Plus.png"
            alt=""
          />
        </div>
      )}
      {!IsClicked && (
        <div className="AnswerCard">
          <div className="QnA">
            <div className="FontQCO-1">{props.qs}</div>
            <div className="FontQCO-2">{props.as}</div>
          </div>

          <div>
            <img
              className="SignImg"
              onClick={() => {
                handleclick();
              }}
              src="Minus.png"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};
