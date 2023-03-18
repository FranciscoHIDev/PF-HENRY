import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/actions";

const Favorites = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  console.log(allUsers)

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div className="flex mt-40 mb-40 justify-center">
        <h1 className="">Mis favoritos</h1>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Favorites;
