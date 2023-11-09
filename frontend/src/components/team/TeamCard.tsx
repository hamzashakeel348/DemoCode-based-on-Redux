import React from "react";

interface TeamCardProps {
  teamName: String;
  captain: String;
}

const TeamCard: React.FC<TeamCardProps> = ({ teamName, captain }) => {
  return (
    <div className="teamCard">
      <section className="teamCard_label">
        <h4>Team Name</h4>
        <p>{teamName}</p>
      </section>

      <section className="teamCard_label">
        <h4>Captain</h4>
        <p>{captain}</p>
      </section>
    </div>
  );
};

export default TeamCard;
