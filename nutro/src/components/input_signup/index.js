import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

function Input() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [diet, setDiet] = useState("Vegetarian");
  const [goals, setGoals] = useState("");
  const [allergies, setAllergies] = useState("");

  function handleDietChange(e) {
    setDiet(e.target.value);
  }

  function handleGoalsChange(e) {
    setGoals(e.target.value);
  }

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
    ),
    ((<label for="diet">Select dietary requirements:</label>),
    (
      <select
        name="diet"
        id="diet"
        defaultValue={diet}
        onChange={handleDietChange}
      >
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Pescetarian">Pescetarian</option>
        <option value="Gluten Free">Gluten Free</option>
      </select>
    )),
    ((<label for="goals">Select your goal:</label>),
    (
      <select
        name="goal"
        id="goal"
        defaultValue={goals}
        onChange={handleGoalsChange}
      >
        <option value="Lose weight">Lose weight</option>
        <option value="Help the environment">Help the environment</option>
        <option value="Become helthier and feel better">
          Become healthier and feel better
        </option>
        <option value="Lower carbon footprint">Lower carbon footprint</option>
        <option value="Shop ethically/sustainably">
          Shop ethically/sustainably
        </option>
      </select>
    ))
  );
}

export default Input;
