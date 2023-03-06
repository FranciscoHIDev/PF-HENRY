import React from "react";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
