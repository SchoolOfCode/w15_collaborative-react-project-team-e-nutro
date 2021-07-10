import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Signup() {
  return (
    <div>
      <h1> welcome to sign up</h1>
      <Link to="/background_completed_signup">Submit preferences</Link>
    </div>
  );
}

export default Signup;
