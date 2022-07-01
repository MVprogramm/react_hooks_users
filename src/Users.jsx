import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import User from "./User.jsx";

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="/facebook">Facebook</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <span>Select a user please</span>
        </Route>
        <Route path="/:USER_ID">
          <User />
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
