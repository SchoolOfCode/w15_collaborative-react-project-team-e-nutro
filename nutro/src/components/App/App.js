import React from "react";
import "./App.css";
import { useState } from "react";

// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";

import Signup from "../background_signup";
import Completed from "../background_completed_signup";
import Home from "../home";
import { render } from "react-dom";

// plan for button on landoing page
// step one button save and take you to the next page

function App() {
  const [buttonData, setButtonData] = useState("");
  useEffect(() => {
    switch (buttonData) {
      case "signup":
        Signup;
        break;
      case "Completed":
        Completed;
        break;
      case "Home":
        Home;
        break;
    }
    // what if we use turnary instead switchCase
  }, [buttonData]);

  function handleClick(props) {
    setButtonData(props);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nutro</h1>
        <button onClick={handleClick}>Continue</button>
      </header>
    </div>
  );
}

export default App;

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
