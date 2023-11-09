import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Register from "./pages/Register";
import Teams from "./pages/Teams";

const Routes: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/teams">
              <Teams />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Teams />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
