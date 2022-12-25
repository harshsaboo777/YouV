import React from "react";
import "../ComponentsStyles/MoreInfo.css";
import { QuestionCard } from "./QuestionCard";

export const MoreInfo = () => {
  return (
    <div className="MoreInfoBody">
      <div>
        <div className="FontT2">MORE INFO</div>
        <div className="FontT1">Common questions</div>
      </div>

      <div className="MoreInfoQuestions">
        <div>
          <QuestionCard
            qs="How can I know my level of knowledge?"
            as="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
          <QuestionCard
            qs="Can I do it individually or only in a group?"
            as="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
          <QuestionCard
            qs="What is the maximum group size?"
            as="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
        </div>
        <div>
          <QuestionCard
            qs="Do I need to buy materials for lessons?"
            as="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
          <QuestionCard
            qs="Are you adjusting to the student's schedule?"
            as="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
          <QuestionCard
            qs="How the first lesson with teacher will be?"
            as="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
        </div>
      </div>
    </div>
  );
};
