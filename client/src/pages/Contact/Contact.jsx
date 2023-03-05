import React from "react";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

function Contact() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="  p-20 mt-10">
        <h1>Contact us</h1>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
