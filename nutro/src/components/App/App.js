import React from "react";
import "./App.css";
import { useState } from "react";

import Button from "../button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Signup from "../background_signup";
import Completed from "../background_completed_signup";
import Home from "../home";

// plan for button on landoing page
// step one button save and take you to the next page
function App() {
  // const [buttonData, setButtonData] = useState("");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/background_completed_signup" component={Completed} />
          <Route path="/background_signup" exact component={Signup} />
          <header className="App-header">
            <h1>Nutro</h1>
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
// useEffect(() => {
//   switch (buttonData) {
//     case "signup":
//       Signup;
//       break;
//     case "Completed":
//       Completed;
//       break;
//     case "Home":
//       Home;
//       break;
//   }
//   // what if we use turnary instead switchCase
// } [buttonData]);

//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <Signup />
//           <Route path="/background_signup"></Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
// );
