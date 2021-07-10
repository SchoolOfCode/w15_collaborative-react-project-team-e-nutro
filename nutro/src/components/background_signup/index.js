import React from "react";
import Button from "../button";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div>
      <h1> welcome to sign up</h1>
      <Link to="/background_completed_signup">
        <Button label="Submit preferences" />
      </Link>
    </div>
  );
}
export default Signup;
