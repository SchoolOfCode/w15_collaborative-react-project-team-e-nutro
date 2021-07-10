import React from "react";
import { Link } from "react-router-dom";

function Completed() {
  return (
    <div>
      <h3>Signup complete!</h3>
      <Link to="/home">Go to the Home page</Link>
    </div>
  );
}
export default Completed;
