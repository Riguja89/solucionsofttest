import React from "react";

const rollList = [
  "PRODUCT MANAGER",
  "UX UI DESIGNER ",
  "FRONT-END ENGINEER",
  "DEVELOPER ENGINEER",
  "DATA SCIENCE"
];

const TeamList = () => {
  return (
    <div className="team-list_container">
      <div className="team-list_image image1">
        <img src="team/woman.png" alt="" />
      </div>
      <div className="roll-list">
      <ul>
        {rollList.map((r,i)=>(
            <li key={i}>{r}</li>
        ))}
        </ul>
        <p>Especialistas</p>
      </div>
      <div className="team-list_image image2">
      <img src="team/man.png" alt="" />
      </div>
    </div>
  );
};

export default TeamList;
