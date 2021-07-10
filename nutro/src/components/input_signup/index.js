import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

function Input() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [diet, setDiet] = useState("");
  const [goals, setGoals] = useState("");
  const [allergies, setAllergies] = useState("");

  return (
    (
      <input
        label="First Name"
        type="text"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
    ),
    (
      <input
        label="Last Name"
        type="text"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></input>
    ),
    (
      <input
        label="Email"
        type="email"
        variant="filled"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
    ),
    (
      <input
        label="First Name"
        type="text"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
    )
  );
}

export default Input;
