import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Home</h3>
      <Link to="/signup">Go to preferences</Link>
    </div>
  );
}
export default Home;
