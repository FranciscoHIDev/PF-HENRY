import React from "react";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <SearchBar />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
