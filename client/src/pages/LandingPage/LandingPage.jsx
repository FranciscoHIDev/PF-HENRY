import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function LandingPage() {
  return (
    <>
      {/* <NavBar /> */}
      <Link to="home">
        <button>Start</button>
      </Link>
    </>
  );
}

export default LandingPage;
