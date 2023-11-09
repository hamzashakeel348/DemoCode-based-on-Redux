import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeams } from "../redux/actions/teamActions";

import TeamCard from "../components/team/TeamCard";
import Loader from "../components/shared/Loader";

interface team {
  name: string;
  captain: {
    first_name: string;
    last_name: string;
  };
}

interface teamProps {
  teams: [];
  loading: boolean;
  fetchTeams: () => void;
}

const Teams: React.FC<teamProps> = ({ fetchTeams, teams, loading }) => {
  useEffect(() => {
    fetchTeams();
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  const renderTeam = () => {
    if (teams.length) {
      return teams.map((team: team, key: number) => (
        <TeamCard
          key={key}
          teamName={team.name}
          captain={`${team.captain.first_name} ${team.captain.last_name}`}
        />
      ));
    } else {
      return (
        <section className="teamRegistration">
          <p className="emptyTeamsListMessage">No teams registered so far!</p>
        </section>
      );
    }
  };

  return (
    <div className="teamPage">
      <p className="registerTeamHeading">Teams List!</p>
      {loading ? (
        <Loader />
      ) : (
        <div className="teamListView">{renderTeam()}</div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  fetchTeams,
};

const mapStateToProps = (state: any) => ({
  teams: state.team.teams,
  loading: state.team.loading,
  error: state.team.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
