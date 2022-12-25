import React from "react";
import { ValuesCard } from "./ValuesCard";
import "../ComponentsStyles/Values.css";

export const Values = () => {
  return (
    <div className="ValuesBody">
      <div className="ValuesHead">
        <div className="ValuesFont1">WHY CHOOSE US</div>
        <div className="ValuesFont2">Our Values</div>
      </div>

      <div className="ValuesCards">
        <ValuesCard
          url="Icon2.png"
          heading="Speaking clubs"
          matter="In our school you will practice your speaking skills and just get a lot of positive emotions!"
        />
        <ValuesCard
          url="Icon1.png"
          heading="Quality control"
          matter="A huge work has been done with the teachers and their work has been monitored thoroughly. "
        />
        <ValuesCard
          url="Icon3.png"
          heading="Progress analysis"
          matter="The CEF of Reference has been used at our school. It allows to control our students’ success in studying."
        />
      </div>
    </div>
  );
};
