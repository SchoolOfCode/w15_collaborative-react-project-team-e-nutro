import "./App.css";
import {useState} from "react";
// import ReactDOM from "react-dom";


// plan for button on landoing page
// step one button save and take you to the next page 

function App() {
  const [, setButtonData]= useState("");
  function handleClick(text){
    // <BrowserRouter>
    //    <Switch>
    //     <Route exact path="/" components={background_signup} />
    //   </Switch>
    //   </BrowserRouter>

    setButtonData(text);
  
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>hello world</h1>
      <button onClick= {handleClick}>Continue</button>
      </header>
    </div>
  );
}

export default App;
