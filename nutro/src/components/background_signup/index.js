import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Signup() {
  return (
    <div>
      <h1>Nutro</h1>
      <h3>Let's get started on your journey!</h3>

      <Link to="/background_completed_signup">Submit preferences</Link>
    </div>
  );
}

export default Signup;
