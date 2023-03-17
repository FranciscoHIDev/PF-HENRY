import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="flex mt-40 mb-40  flex-col items-center">
        <p className="text-7xl mb-6 text-[#0d6efd]">404 ERROR</p>
        <p className="text-4xl mb-6">OPPS! PAGE NOT FOUND</p>
        <Link to="/home">
          <button>BACK HOME</button>
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default NotFound;
