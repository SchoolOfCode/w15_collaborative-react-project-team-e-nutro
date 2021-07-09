import React from "react";
import { Link } from "react-router-dom";

function Signup(props) {
  return (
    <div>
      <h3>{props.Signup}</h3>
      <Link to="/completed">Submit preferences</Link>
    </div>
  );
}
export default Signup;
