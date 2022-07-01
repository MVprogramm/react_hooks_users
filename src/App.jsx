import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Users from "./Users.jsx";

const App = () => (
  <div className="page">
    <BrowserRouter>
      <Route path="/">
        <Users />
      </Route>
    </BrowserRouter>
  </div>
);

export default App;
