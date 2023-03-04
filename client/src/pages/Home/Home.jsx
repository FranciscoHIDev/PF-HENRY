import React from "react";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Filters from "../../components/FiltersAndSorts/Filters";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Filters/>
      <SearchBar />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
