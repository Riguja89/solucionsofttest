import React from "react";
import TeamDescription from "./TeamDescription";
import TeamList from "./TeamList";
import Copos from "../../global/Copos";
const OurTeam = () => {
  const clase = "copo copo-small";
  return (
    <div className="our-team_container" id="our-team">
      <Copos clase={clase}>
        <TeamDescription />
        <TeamList />
      </Copos>
    </div>
  );
};

export default OurTeam;
