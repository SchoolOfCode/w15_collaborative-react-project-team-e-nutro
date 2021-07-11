import React from "react";
import Button from "../button";
import { Link } from "react-router-dom";
import "./style.css";
import Input from "../input_signup";

function Signup() {
  return (
    <div>
      <h1 className="title">Nutro</h1>
      <h3 className="sub-text">Let's get started on your journey!</h3>
      <Link to="/background_completed_signup">
        <Button label="Submit preferences" />
      </Link>
      <Input />
    </div>
  );
}

export default Signup;
