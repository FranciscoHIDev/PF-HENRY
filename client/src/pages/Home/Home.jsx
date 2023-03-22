import React, { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions/actions";
//import { MPButton } from "../../components/MPButton/MPButton";

function Home() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllUsers())
  },[])

  const id="6400ba3a6d535131765b3c1a"

  return (
    <React.Fragment> 
      {/* <div className="absolute mt-0 "> <MPButton  id={id}  disable></MPButton></div> */}
      <NavBar />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
