import "./App.css";
import { useState } from "react";
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Signup from "../background_signup";
// import Completed from "../background_completed_signup";
// import Home from "../home";

// plan for button on landoing page
// step one button save and take you to the next page

function App() {
  const [, setButtonData] = useState("");
  function handleClick(text) {
    // <Router>
    //   <Switch>
    //     <Route exact path="/signup">
    //       <Signup />
    //     </Route>
    //     <Route path="/completed">
    //       <Completed />
    //     </Route>
    //     <Route path="/home">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>;

    setButtonData(text);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
        <button onClick={handleClick}>Continue</button>
      </header>
    </div>
  );
}

export default App;
