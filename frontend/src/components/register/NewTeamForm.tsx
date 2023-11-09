import React, { useState } from "react";
import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { addTeam } from "../../redux/actions/teamActions";
import InputWithIcon from "../shared/InputWithIcon";

interface NewTeamFormProps {
  addTeam: ({}) => void;
}

const NewTeamForm: React.FC<NewTeamFormProps> = ({ addTeam }) => {
  const history = useHistory();

  const [team, setTeam] = useState<{ name: string }>({
    name: "",
  });

  const [captain, setCaptain] = useState<{
    first_name: string;
    last_name: string;
  }>({
    first_name: "",
    last_name: "",
  });

  const submitButtonValidation =
    team.name == "" || captain.first_name == "" || captain.last_name == "";

  const handleSubmit = () => {
    addTeam({
      team: { ...team },
      captain: { ...captain },
    });
    history?.push("/teams");
  };

  return (
    <div className="card">
      <p className="registerTeamHeading">Register your team here!</p>

      <InputWithIcon
        className="TeamName"
        icon={faUserGroup}
        placeholder="Team Name"
        type="text"
        name="userName"
        onChange={(e) => setTeam({ name: e.target.value })}
        value={team.name}
      />

      <section className="captainDetailsForm">
        <p className="registerTeamHeading">Enter team Captain details!</p>

        <InputWithIcon
          className="CaptainFirstName"
          icon={faUser}
          placeholder=" First Name"
          type="text"
          name="CaptainFirstName"
          onChange={(e) =>
            setCaptain({ ...captain, first_name: e.target.value })
          }
          value={captain.first_name}
        />

        <InputWithIcon
          className="CaptainLastName"
          icon={faUser}
          placeholder=" Last Name"
          type="text"
          name="CaptainLastName"
          onChange={(e) =>
            setCaptain({ ...captain, last_name: e.target.value })
          }
          value={captain.last_name}
        />
      </section>

      <input
        type="submit"
        className="registerButton"
        disabled={submitButtonValidation}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  addTeam,
};
export default connect(null, mapDispatchToProps)(NewTeamForm);
