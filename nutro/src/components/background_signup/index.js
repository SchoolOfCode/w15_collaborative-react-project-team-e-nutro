import React from "react";
import Button from "../button";
import { Link } from "react-router-dom";
import "./style.css";
import Input from "../input_signup";

function Signup() {
  return (
    <div>
      <h1 class="title">Nutro</h1>
      <h3 class="sub-text">Let's get started on your journey!</h3>

      <Input />

      <Link to="/background_completed_signup">
        <Button label="Submit preferences" />
      </Link>
    </div>
  );
}

export default Signup;
