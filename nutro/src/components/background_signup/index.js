import React from "react";
import Button from "../button";
import { Link } from "react-router-dom";
import "./style.css";

function Signup() {
  return (
    <div>
      <h1>Nutro</h1>
      <Link to="/background_completed_signup">
        <Button label="Submit preferences" />
      </Link>
      <h3>Let's get started on your journey!</h3>

      {/* <Link to="/background_completed_signup">Submit preferences</Link> */}
    </div>
  );
}

export default Signup;
