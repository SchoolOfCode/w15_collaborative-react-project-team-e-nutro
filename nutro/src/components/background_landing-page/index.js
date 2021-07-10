import React from "react";
import { useState, useEffect } from "react";

import "./styles.css";
import "./green-ellipse.png";
import "./red-ellipse.png";
import "./yellow-ellipse.png";

import Button from "../button";

function BackgroundLandingPage() {
  return (
    <div className="body">
      <div className="green-ellipse"></div>
      <div className="yellow-ellipse"></div>
      <div className="red-ellipse"></div>
      <h1 className="title">Nutro</h1>
      <h3 className="sub-text">
        Help the world we live in by helping yourself first.
      </h3>
    </div>
  );
}

export default BackgroundLandingPage;
