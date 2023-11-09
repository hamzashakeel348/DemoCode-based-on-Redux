import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <h2 className="rainbow-text">TeamSnap Mega Tournament!</h2>
      </Link>
      <ul className="navbarOptions">
        <li>
          <Link to="/teams">View Teams</Link>
        </li>
        <li>
          <Link to="/register">
            <button className="registerTeamButton">Register a new Team</button>
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;
