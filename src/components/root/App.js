import React from 'react';

import MainTable from "../Events/MainTable"
import Navbar from "../Navi/Navbar";
import EventsDetail from "../Events/EventsDetail";

// React-router-dom
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

        <Switch >
          <Route exact path="/">
            <Navbar />
            <MainTable />
          </Route>

          <Route expact path="/eventDetails">
            <Navbar />
            <EventsDetail />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
