import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from "../button";
import Signup from "../background_signup";
import Completed from "../background_completed_signup";
import Home from "../home";
import BackgroundLandingPage from "../background_landing-page";

// plan for button on landing page
// step one button save and take you to the next page
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/background_completed_signup" component={Completed} />
          <Route path="/background_signup" exact component={Signup} />
          <BackgroundLandingPage />
          <header className="App-header">
            {/* <h1>Nutro</h1> */}

            <Route path="/" exact />
            <Link to="/background_signup">
              <Button label="Continue" />
            </Link>
          </header>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
